const express = require("express");
const path = require("path");
const OpenAI = require("openai").default;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname)));

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

const SYSTEM_PROMPT = `You are a helpful AI study assistant for "Tech with Mujahid Academy", a web development learning platform that teaches HTML, CSS, and JavaScript.

Your role is to:
- Help students understand HTML, CSS, and JavaScript concepts clearly
- Guide students on what topics to study next based on their level
- Explain quiz answers and why certain answers are correct or incorrect
- Provide learning tips and study strategies
- Suggest practice exercises and resources
- Encourage and motivate students
- Answer questions about web development in simple, beginner-friendly language
- Give step-by-step explanations with code examples when helpful

The platform covers:
- HTML: tags, attributes, forms, tables, semantic elements, links, images, etc.
- CSS: selectors, box model, flexbox, grid, animations, responsive design, etc.
- JavaScript: variables, functions, arrays, objects, DOM manipulation, events, etc.

Keep your responses clear, encouraging, and student-friendly. Use simple language and practical examples. When providing code examples, format them with backticks.`;

app.post("/api/assistant", async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required" });
  }

  const messages = [{ role: "system", content: SYSTEM_PROMPT }];

  if (Array.isArray(history)) {
    for (const msg of history) {
      if (msg.role && msg.content) {
        messages.push({ role: msg.role, content: msg.content });
      }
    }
  }

  messages.push({ role: "user", content: message });

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-5-mini",
      messages,
      stream: true,
      max_completion_tokens: 8192,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content || "";
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (error) {
    console.error("OpenAI error:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to get response from AI" });
    } else {
      res.write(`data: ${JSON.stringify({ error: "AI response failed" })}\n\n`);
      res.end();
    }
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
