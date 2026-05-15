<div align="center">
	<img src="ChatGPT Image Nov 1, 2025, 05_39_05 PM.png" alt="Tech with Mujahid Logo" width="80" style="border-radius:50%;box-shadow:0 2px 8px #0f8f7f33;object-fit:cover;" />
  
	<h1>CBT App for HTML, CSS, JavaScript</h1>
	<strong>by Tech with Mujahid</strong><br>
	<span>Empowering you with web development skills & building modern websites for clients.</span><br>
	<span>Contact: <a href="mailto:abdullateefmujahid@gmail.com">abdullateefmujahid@gmail.com</a> | 07048402405</span>
</div>

A browser-based CBT practice app for HTML, CSS, and JavaScript.

**Logo:** The ChatGPT logo is used as the official logo for Tech with Mujahid throughout the app.

## What Students Can Do

- Enter a required name before starting.
- Choose HTML, CSS, or JavaScript.
- Choose a topic based on the W3Schools tutorial paths.
- Choose a level: Beginner, Easy, Medium, Hard, Advanced, or Expert.
- See the minimum and maximum question count available for the selected topic.
- Take a shuffled quiz so each attempt has a fresh question order.
- Use automatic timing based on this rule: 60 questions = 50 minutes.
- Review score, selected answers, correct answers, and explanations.
- Clear their visible history without deleting the admin record.

## What Admin Can Do

- Open `admin.html` and log in with `mujahid2026`.
- Add questions by language, topic, level, options, correct answer, and explanation.
- Search the question bank by language, topic, level, or question text.
- Import and export questions as JSON.
- Export protected admin result history.
- View student attempts even after a student clears their own history page.

## Question Bank

- Built-in questions are generated across the W3Schools-style topic lists for HTML, CSS, and JavaScript.
- Each built-in level has the same amount of questions for a language.
- Each topic receives many questions at every level.
- Browser-saved admin questions are preserved when the built-in question bank updates.

## Files

- `index.html` - student quiz page
- `topics.html` - topic coverage page
- `history.html` - student-visible history
- `admin.html` - admin tools and protected history
- `styles.css` - visual design
- `script.js` - question bank, quiz logic, timing, scoring, and storage

## Storage

- `cbtQuestions` stores question data.
- `cbtResults` stores the student-visible history.
- `cbtAdminResults` stores the protected admin history.

The app runs as static files in a normal browser.
