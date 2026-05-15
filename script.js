const ADMIN_PASSWORD = "mujahid2026";
const STORAGE_QUESTIONS_KEY = "cbtQuestions";
const STORAGE_RESULTS_KEY = "cbtResults";
const STORAGE_ADMIN_RESULTS_KEY = "cbtAdminResults";
const MIN_QUESTION_COUNT = 10;
const MAX_QUESTION_COUNT = 100;
const SECONDS_PER_QUESTION = 50;
const DIFFICULTY_LEVELS = [
  "Beginner",
  "Easy",
  "Medium",
  "Hard",
  "Advanced",
  "Expert",
];
const SUBJECT_TOPICS = {
  HTML: [
    "Introduction",
    "Editors",
    "Basic",
    "Elements",
    "Attributes",
    "Headings",
    "Paragraphs",
    "Styles",
    "Formatting",
    "Quotations",
    "Comments",
    "Colors",
    "CSS",
    "Links",
    "Images",
    "Favicon",
    "Page Title",
    "Tables",
    "Lists",
    "Block and Inline",
    "Div",
    "Classes",
    "Id",
    "Buttons",
    "Iframes",
    "JavaScript",
    "File Paths",
    "Head",
    "Layout",
    "Responsive",
    "Computer Code",
    "Semantics",
    "Style Guide",
    "Entities",
    "Symbols",
    "Emojis",
    "Charsets",
    "URL Encode",
    "Forms",
    "Form Attributes",
    "Form Elements",
    "Input Types",
    "Input Attributes",
    "Input Form Attributes",
    "Canvas",
    "SVG",
    "Media",
    "Video",
    "Audio",
    "Plug-ins",
    "YouTube",
  ],
  CSS: [
    "Introduction",
    "Syntax",
    "Selectors",
    "How To",
    "Comments",
    "Colors",
    "Backgrounds",
    "Borders",
    "Margins",
    "Padding",
    "Height and Width",
    "Box Model",
    "Outline",
    "Text",
    "Fonts",
    "Icons",
    "Links",
    "Lists",
    "Tables",
    "Display",
    "Max Width",
    "Position",
    "Z-index",
    "Overflow",
    "Float",
    "Inline-block",
    "Align",
    "Combinators",
    "Pseudo-classes",
    "Pseudo-elements",
    "Opacity",
    "Navigation Bar",
    "Dropdowns",
    "Image Gallery",
    "Image Sprites",
    "Attribute Selectors",
    "Forms",
    "Counters",
    "Website Layout",
    "Units",
    "Specificity",
    "Important",
    "Math Functions",
    "Rounded Corners",
    "Border Images",
    "Multiple Backgrounds",
    "Color Keywords",
    "Gradients",
    "Shadows",
    "Text Effects",
    "Web Fonts",
    "2D Transforms",
    "3D Transforms",
    "Transitions",
    "Animations",
    "Tooltips",
    "Style Images",
    "Object-fit",
    "Object-position",
    "Masking",
    "Buttons",
    "Pagination",
    "Multiple Columns",
    "User Interface",
    "Variables",
    "Box Sizing",
    "Media Queries",
    "Flexbox",
    "Grid",
  ],
  JavaScript: [
    "Introduction",
    "Where To",
    "Output",
    "Statements",
    "Syntax",
    "Comments",
    "Variables",
    "Let",
    "Const",
    "Operators",
    "Arithmetic",
    "Assignment",
    "Data Types",
    "Functions",
    "Objects",
    "Object Properties",
    "Object Methods",
    "Object Display",
    "Object Constructors",
    "Events",
    "Strings",
    "String Methods",
    "String Search",
    "String Templates",
    "Numbers",
    "BigInt",
    "Number Methods",
    "Number Properties",
    "Arrays",
    "Array Methods",
    "Array Search",
    "Array Sort",
    "Array Iteration",
    "Dates",
    "Date Formats",
    "Date Get Methods",
    "Date Set Methods",
    "Math",
    "Random",
    "Booleans",
    "Comparisons",
    "If Else",
    "Switch",
    "Loop For",
    "Loop For In",
    "Loop For Of",
    "Loop While",
    "Break",
    "Iterables",
    "Sets",
    "Maps",
    "Typeof",
    "Type Conversion",
    "Destructuring",
    "Bitwise",
    "RegExp",
    "Precedence",
    "Errors",
    "Scope",
    "Hoisting",
    "Strict Mode",
    "This Keyword",
    "Arrow Function",
    "Classes",
    "Modules",
    "JSON",
    "Debugging",
    "Style Guide",
    "Best Practices",
    "Mistakes",
    "Performance",
    "Reserved Words",
    "HTML DOM",
    "DOM Methods",
    "DOM Document",
    "DOM Elements",
    "DOM HTML",
    "DOM Forms",
    "DOM CSS",
    "DOM Animations",
    "DOM Events",
    "DOM Event Listener",
    "DOM Navigation",
    "DOM Nodes",
    "DOM Collections",
    "DOM Node Lists",
    "Window",
    "Screen",
    "Location",
    "History",
    "Navigator",
    "Popup Alert",
    "Timing",
    "Cookies",
    "Web Storage",
    "AJAX",
    "Fetch API",
    "Promises",
    "Async Await",
  ],
};
const DISPLAY_LANGUAGES = [
  ["english", "English"],
  ["hausa", "Hausa"],
  ["yoruba", "Yoruba"],
  ["igbo", "Igbo"],
  ["french", "French"],
  ["arabic", "Arabic"],
];
let timerInterval = null;
let remainingSeconds = 0;

const defaultQuestions = [
  {
    id: "html-1",
    subject: "HTML",
    difficulty: "Easy",
    text: "What does HTML stand for?",
    options: {
      A: "HyperText Markup Language",
      B: "Home Tool Markup Language",
      C: "Hyperlinks and Text Markup Language",
      D: "HyperText Machine Language",
    },
    answer: "A",
    explanation: "HTML stands for HyperText Markup Language.",
  },
  {
    id: "html-2",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which tag is used for an unordered list?",
    options: {
      A: "<ol>",
      B: "<ul>",
      C: "<li>",
      D: "<list>",
    },
    answer: "B",
    explanation: "The <ul> tag defines an unordered list.",
  },
  {
    id: "html-3",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which attribute sets the destination of a link?",
    options: {
      A: "src",
      B: "href",
      C: "link",
      D: "target",
    },
    answer: "B",
    explanation: "The href attribute specifies the URL for an anchor tag.",
  },
  {
    id: "html-4",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which tag is used to display a picture on a web page?",
    options: {
      A: "<img>",
      B: "<picture>",
      C: "<image>",
      D: "<src>",
    },
    answer: "A",
    explanation: "The <img> tag embeds an image in HTML.",
  },
  {
    id: "css-1",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property changes the background color?",
    options: {
      A: "color",
      B: "background-color",
      C: "font-size",
      D: "border-style",
    },
    answer: "B",
    explanation: "background-color sets the background color of an element.",
  },
  {
    id: "css-2",
    subject: "CSS",
    difficulty: "Easy",
    text: "How do you apply a class selector in CSS?",
    options: {
      A: ".classname",
      B: "#classname",
      C: "*classname",
      D: "classname",
    },
    answer: "A",
    explanation: "Use a dot before the class name to target it in CSS.",
  },
  {
    id: "css-3",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which value makes an element use flexbox layout?",
    options: {
      A: "display: grid;",
      B: "display: block;",
      C: "display: flex;",
      D: "display: inline;",
    },
    answer: "C",
    explanation: "display: flex enables the flexbox layout model.",
  },
  {
    id: "css-4",
    subject: "CSS",
    difficulty: "Hard",
    text: "How do you select the direct child of an element in CSS?",
    options: {
      A: "element child",
      B: "element > child",
      C: "element + child",
      D: "element ~ child",
    },
    answer: "B",
    explanation: "The > combinator selects direct child elements.",
  },
  {
    id: "js-1",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which statement is used to declare a variable in JavaScript?",
    options: {
      A: "variable x = 1;",
      B: "var x = 1;",
      C: "v x = 1;",
      D: "let x == 1;",
    },
    answer: "B",
    explanation: "var is one way to declare a variable in JavaScript.",
  },
  {
    id: "js-2",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "What is the correct syntax to write a function in JavaScript?",
    options: {
      A: "function myFunction() {}",
      B: "def myFunction() {}",
      C: "function:myFunction() {}",
      D: "fun myFunction() {}",
    },
    answer: "A",
    explanation: "JavaScript functions are written using the function keyword.",
  },
  {
    id: "js-3",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which method adds a new item to the end of an array?",
    options: {
      A: "push()",
      B: "pop()",
      C: "shift()",
      D: "slice()",
    },
    answer: "A",
    explanation: "push() adds one or more elements to the end of an array.",
  },
  {
    id: "js-4",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "What is the correct way to compare values and types in JavaScript?",
    options: {
      A: "==",
      B: "=",
      C: "===",
      D: "!==",
    },
    answer: "C",
    explanation: "=== compares both value and type.",
  },
  {
    id: "html-5",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which tag is used to link an external CSS file?",
    options: {
      A: "<link>",
      B: "<style>",
      C: "<css>",
      D: "<script>",
    },
    answer: "A",
    explanation: "<link> is used to connect external CSS to HTML.",
  },
  {
    id: "html-6",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which tag creates a table row?",
    options: {
      A: "<td>",
      B: "<tr>",
      C: "<table>",
      D: "<th>",
    },
    answer: "B",
    explanation: "<tr> defines a row in a table.",
  },
  {
    id: "html-7",
    subject: "HTML",
    difficulty: "Medium",
    text: "What attribute gives an element a unique identifier?",
    options: {
      A: "class",
      B: "id",
      C: "name",
      D: "type",
    },
    answer: "B",
    explanation: "The id attribute assigns a unique identifier to an element.",
  },
  {
    id: "html-8",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which element belongs inside the head section?",
    options: {
      A: "<body>",
      B: "<header>",
      C: "<meta>",
      D: "<footer>",
    },
    answer: "C",
    explanation: "<meta> tags provide metadata in the document head.",
  },
  {
    id: "html-9",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which element is used for a form input label?",
    options: {
      A: "<input>",
      B: "<label>",
      C: "<form>",
      D: "<span>",
    },
    answer: "B",
    explanation: "<label> describes a form control and improves accessibility.",
  },
  {
    id: "css-5",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property changes the text color?",
    options: {
      A: "background-color",
      B: "color",
      C: "font-size",
      D: "text-style",
    },
    answer: "B",
    explanation: "The color property sets the color of text.",
  },
  {
    id: "css-6",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which unit is relative to the font size of the element?",
    options: {
      A: "px",
      B: "%",
      C: "em",
      D: "deg",
    },
    answer: "C",
    explanation: "em is relative to the current font size.",
  },
  {
    id: "css-7",
    subject: "CSS",
    difficulty: "Medium",
    text: "How do you center a block-level element horizontally?",
    options: {
      A: "align: center;",
      B: "margin: 0 auto;",
      C: "text-align: center;",
      D: "display: center;",
    },
    answer: "B",
    explanation: "margin: 0 auto; centers a block with fixed width.",
  },
  {
    id: "css-8",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which pseudo-class targets a hovered link?",
    options: {
      A: ":active",
      B: ":visited",
      C: ":hover",
      D: ":focus",
    },
    answer: "C",
    explanation: ":hover styles an element while the cursor is over it.",
  },
  {
    id: "css-9",
    subject: "CSS",
    difficulty: "Hard",
    text: "How do you create a two-column grid container?",
    options: {
      A: "display: flex;",
      B: "display: grid; grid-template-columns: 1fr 1fr;",
      C: "float: left;",
      D: "position: grid;",
    },
    answer: "B",
    explanation: "Grid with two equal columns uses grid-template-columns.",
  },
  {
    id: "css-10",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property hides an element but preserves layout space?",
    options: {
      A: "display: none;",
      B: "visibility: hidden;",
      C: "opacity: 0;",
      D: "position: absolute;",
    },
    answer: "B",
    explanation: "visibility: hidden hides content while keeping its space.",
  },
  {
    id: "js-5",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which keyword declares a constant in JavaScript?",
    options: {
      A: "const",
      B: "let",
      C: "var",
      D: "static",
    },
    answer: "A",
    explanation:
      "const declares a constant variable that cannot be reassigned.",
  },
  {
    id: "js-6",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which loop repeats until a condition becomes false?",
    options: {
      A: "for",
      B: "while",
      C: "switch",
      D: "if",
    },
    answer: "B",
    explanation: "while continues looping while its condition remains true.",
  },
  {
    id: "js-7",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "How do you select an element by its ID?",
    options: {
      A: "document.querySelector('.id')",
      B: "document.getElementById('id')",
      C: "document.getElementsByClassName('id')",
      D: "document.select('#id')",
    },
    answer: "B",
    explanation: "getElementById returns the element with the given id.",
  },
  {
    id: "js-8",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which method adds an event listener to an element?",
    options: {
      A: "attachEvent()",
      B: "on()",
      C: "addEventListener()",
      D: "listen()",
    },
    answer: "C",
    explanation:
      "addEventListener attaches event handlers in modern JavaScript.",
  },
  {
    id: "js-9",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "What does JSON.parse() do?",
    options: {
      A: "Converts a string to JSON format",
      B: "Converts a JSON string into an object",
      C: "Formats JSON code for display",
      D: "Sends JSON to a server",
    },
    answer: "B",
    explanation: "JSON.parse converts JSON text into a JavaScript object.",
  },
  {
    id: "js-10",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which property stores data in the browser across refreshes?",
    options: {
      A: "sessionStorage",
      B: "cookieStorage",
      C: "localStorage",
      D: "cacheStorage",
    },
    answer: "C",
    explanation: "localStorage retains data even after the browser is closed.",
  },
];

const additionalQuestions = [
  {
    id: "html-10",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which HTML tag creates the largest heading?",
    options: {
      A: "<heading>",
      B: "<h1>",
      C: "<h6>",
      D: "<head>",
    },
    answer: "B",
    explanation: "<h1> is the highest-level heading in HTML.",
  },
  {
    id: "html-11",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which tag is used to create a paragraph?",
    options: {
      A: "<p>",
      B: "<para>",
      C: "<text>",
      D: "<section>",
    },
    answer: "A",
    explanation: "The <p> element represents a paragraph.",
  },
  {
    id: "html-12",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which tag creates a clickable hyperlink?",
    options: {
      A: "<link>",
      B: "<a>",
      C: "<href>",
      D: "<nav>",
    },
    answer: "B",
    explanation: "The <a> element creates a hyperlink.",
  },
  {
    id: "html-13",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which attribute provides alternative text for an image?",
    options: {
      A: "title",
      B: "alt",
      C: "src",
      D: "href",
    },
    answer: "B",
    explanation: "The alt attribute describes an image when it cannot be seen.",
  },
  {
    id: "html-14",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which element contains the visible page content?",
    options: {
      A: "<body>",
      B: "<head>",
      C: "<meta>",
      D: "<title>",
    },
    answer: "A",
    explanation: "The <body> element holds visible document content.",
  },
  {
    id: "html-15",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which element sets the title shown on the browser tab?",
    options: {
      A: "<caption>",
      B: "<title>",
      C: "<header>",
      D: "<h1>",
    },
    answer: "B",
    explanation: "The <title> element defines the browser tab title.",
  },
  {
    id: "html-16",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which tag inserts a line break?",
    options: {
      A: "<lb>",
      B: "<break>",
      C: "<br>",
      D: "<hr>",
    },
    answer: "C",
    explanation: "<br> creates a line break.",
  },
  {
    id: "html-17",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which tag is used for a numbered list?",
    options: {
      A: "<ol>",
      B: "<ul>",
      C: "<li>",
      D: "<dl>",
    },
    answer: "A",
    explanation: "<ol> creates an ordered, numbered list.",
  },
  {
    id: "html-18",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which element represents one item in a list?",
    options: {
      A: "<item>",
      B: "<li>",
      C: "<list>",
      D: "<ul>",
    },
    answer: "B",
    explanation: "<li> defines a list item.",
  },
  {
    id: "html-19",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which attribute specifies the file path of an image?",
    options: {
      A: "href",
      B: "src",
      C: "alt",
      D: "target",
    },
    answer: "B",
    explanation: "The src attribute points to an image source.",
  },
  {
    id: "html-20",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which tag draws a horizontal rule?",
    options: {
      A: "<line>",
      B: "<br>",
      C: "<hr>",
      D: "<rule>",
    },
    answer: "C",
    explanation: "<hr> represents a thematic break, often shown as a horizontal line.",
  },
  {
    id: "html-21",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which attribute opens a link in a new tab when set to _blank?",
    options: {
      A: "target",
      B: "rel",
      C: "href",
      D: "open",
    },
    answer: "A",
    explanation: "target=\"_blank\" opens the link in a new browsing context.",
  },
  {
    id: "html-22",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which element is commonly used for bold importance?",
    options: {
      A: "<b>",
      B: "<strong>",
      C: "<mark>",
      D: "<small>",
    },
    answer: "B",
    explanation: "<strong> marks text as important.",
  },
  {
    id: "html-23",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which element emphasizes text semantically?",
    options: {
      A: "<em>",
      B: "<i>",
      C: "<u>",
      D: "<span>",
    },
    answer: "A",
    explanation: "<em> gives text semantic emphasis.",
  },
  {
    id: "html-24",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which input type is used for passwords?",
    options: {
      A: "text",
      B: "hidden",
      C: "password",
      D: "secure",
    },
    answer: "C",
    explanation: "type=\"password\" masks the entered characters.",
  },
  {
    id: "html-25",
    subject: "HTML",
    difficulty: "Easy",
    text: "Which input type creates a checkbox?",
    options: {
      A: "radio",
      B: "check",
      C: "checkbox",
      D: "select",
    },
    answer: "C",
    explanation: "type=\"checkbox\" creates a checkbox control.",
  },
  {
    id: "html-26",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which element groups navigation links?",
    options: {
      A: "<nav>",
      B: "<menuitem>",
      C: "<links>",
      D: "<aside>",
    },
    answer: "A",
    explanation: "<nav> represents a section of navigation links.",
  },
  {
    id: "html-27",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which semantic element represents independent, self-contained content?",
    options: {
      A: "<section>",
      B: "<article>",
      C: "<aside>",
      D: "<main>",
    },
    answer: "B",
    explanation: "<article> is for content that can stand on its own.",
  },
  {
    id: "html-28",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which element represents the dominant content of a document?",
    options: {
      A: "<main>",
      B: "<body>",
      C: "<section>",
      D: "<div>",
    },
    answer: "A",
    explanation: "<main> contains the primary page content.",
  },
  {
    id: "html-29",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which tag adds a caption to a table?",
    options: {
      A: "<caption>",
      B: "<summary>",
      C: "<legend>",
      D: "<label>",
    },
    answer: "A",
    explanation: "<caption> provides a table caption.",
  },
  {
    id: "html-30",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which tag defines a table header cell?",
    options: {
      A: "<td>",
      B: "<tr>",
      C: "<th>",
      D: "<thead>",
    },
    answer: "C",
    explanation: "<th> defines a header cell in a table.",
  },
  {
    id: "html-31",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which element groups related form controls?",
    options: {
      A: "<fieldset>",
      B: "<formgroup>",
      C: "<section>",
      D: "<label>",
    },
    answer: "A",
    explanation: "<fieldset> groups related controls in a form.",
  },
  {
    id: "html-32",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which element gives a caption to a fieldset?",
    options: {
      A: "<caption>",
      B: "<legend>",
      C: "<label>",
      D: "<summary>",
    },
    answer: "B",
    explanation: "<legend> captions the contents of a <fieldset>.",
  },
  {
    id: "html-33",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which form attribute specifies where submitted data is sent?",
    options: {
      A: "method",
      B: "action",
      C: "target",
      D: "name",
    },
    answer: "B",
    explanation: "The action attribute contains the submission URL.",
  },
  {
    id: "html-34",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which form attribute chooses GET or POST?",
    options: {
      A: "method",
      B: "action",
      C: "type",
      D: "enctype",
    },
    answer: "A",
    explanation: "The method attribute controls the HTTP method.",
  },
  {
    id: "html-35",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which attribute makes an input mandatory before submit?",
    options: {
      A: "needed",
      B: "required",
      C: "validate",
      D: "must",
    },
    answer: "B",
    explanation: "required prevents form submission until the field is filled.",
  },
  {
    id: "html-36",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which attribute shows hint text inside a form field?",
    options: {
      A: "placeholder",
      B: "title",
      C: "label",
      D: "hint",
    },
    answer: "A",
    explanation: "placeholder displays a short hint inside an input.",
  },
  {
    id: "html-37",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which input type validates an email address?",
    options: {
      A: "mail",
      B: "email",
      C: "text-email",
      D: "address",
    },
    answer: "B",
    explanation: "type=\"email\" applies email-specific validation.",
  },
  {
    id: "html-38",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which tag creates a dropdown list?",
    options: {
      A: "<dropdown>",
      B: "<option>",
      C: "<select>",
      D: "<list>",
    },
    answer: "C",
    explanation: "<select> creates a dropdown list.",
  },
  {
    id: "html-39",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which tag defines an item inside a select dropdown?",
    options: {
      A: "<item>",
      B: "<option>",
      C: "<choice>",
      D: "<li>",
    },
    answer: "B",
    explanation: "<option> defines one selectable option.",
  },
  {
    id: "html-40",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which tag allows users to enter multiple lines of text?",
    options: {
      A: "<input type=\"text\">",
      B: "<textbox>",
      C: "<textarea>",
      D: "<multiline>",
    },
    answer: "C",
    explanation: "<textarea> creates a multi-line text input.",
  },
  {
    id: "html-41",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which element embeds video content?",
    options: {
      A: "<media>",
      B: "<video>",
      C: "<movie>",
      D: "<source>",
    },
    answer: "B",
    explanation: "<video> embeds video in a page.",
  },
  {
    id: "html-42",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which element embeds audio content?",
    options: {
      A: "<sound>",
      B: "<audio>",
      C: "<music>",
      D: "<source>",
    },
    answer: "B",
    explanation: "<audio> embeds sound content.",
  },
  {
    id: "html-43",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which tag provides multiple media files for video or audio?",
    options: {
      A: "<source>",
      B: "<track>",
      C: "<media>",
      D: "<file>",
    },
    answer: "A",
    explanation: "<source> supplies alternative media resources.",
  },
  {
    id: "html-44",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which attribute adds playback controls to audio or video?",
    options: {
      A: "play",
      B: "buttons",
      C: "controls",
      D: "toolbar",
    },
    answer: "C",
    explanation: "The controls attribute shows built-in media controls.",
  },
  {
    id: "html-45",
    subject: "HTML",
    difficulty: "Medium",
    text: "Which tag is used for machine-readable date or time?",
    options: {
      A: "<date>",
      B: "<time>",
      C: "<calendar>",
      D: "<meta>",
    },
    answer: "B",
    explanation: "<time> represents a date, time, or duration.",
  },
  {
    id: "html-46",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute improves iframe security by restricting capabilities?",
    options: {
      A: "secure",
      B: "sandbox",
      C: "policy",
      D: "allow",
    },
    answer: "B",
    explanation: "sandbox applies extra restrictions to iframe content.",
  },
  {
    id: "html-47",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute helps prevent security risks when using target=\"_blank\"?",
    options: {
      A: "rel=\"noopener\"",
      B: "type=\"safe\"",
      C: "target=\"secure\"",
      D: "referrer=\"none\"",
    },
    answer: "A",
    explanation: "rel=\"noopener\" prevents the new page from controlling the opener.",
  },
  {
    id: "html-48",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which element displays a disclosure widget users can expand?",
    options: {
      A: "<dialog>",
      B: "<details>",
      C: "<summary>",
      D: "<aside>",
    },
    answer: "B",
    explanation: "<details> creates expandable disclosure content.",
  },
  {
    id: "html-49",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which element provides the visible label for a details widget?",
    options: {
      A: "<summary>",
      B: "<legend>",
      C: "<caption>",
      D: "<label>",
    },
    answer: "A",
    explanation: "<summary> is the visible heading for <details>.",
  },
  {
    id: "html-50",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which element represents a modal or non-modal dialog box?",
    options: {
      A: "<modal>",
      B: "<popup>",
      C: "<dialog>",
      D: "<window>",
    },
    answer: "C",
    explanation: "<dialog> represents an interactive dialog box.",
  },
  {
    id: "html-51",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute provides a machine-readable value for a data element?",
    options: {
      A: "data",
      B: "value",
      C: "content",
      D: "item",
    },
    answer: "B",
    explanation: "The value attribute on <data> gives a machine-readable value.",
  },
  {
    id: "html-52",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which meta tag setting helps pages scale correctly on mobile devices?",
    options: {
      A: "viewport",
      B: "charset",
      C: "description",
      D: "robots",
    },
    answer: "A",
    explanation: "The viewport meta tag controls mobile layout scaling.",
  },
  {
    id: "html-53",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute identifies the character encoding when used on meta?",
    options: {
      A: "encoding",
      B: "charset",
      C: "lang",
      D: "type",
    },
    answer: "B",
    explanation: "<meta charset=\"UTF-8\"> declares character encoding.",
  },
  {
    id: "html-54",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which global attribute stores custom data for scripts?",
    options: {
      A: "custom-*",
      B: "data-*",
      C: "script-*",
      D: "value-*",
    },
    answer: "B",
    explanation: "data-* attributes store custom data on elements.",
  },
  {
    id: "html-55",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute sets the document language on the html element?",
    options: {
      A: "locale",
      B: "language",
      C: "lang",
      D: "dir",
    },
    answer: "C",
    explanation: "The lang attribute declares the document language.",
  },
  {
    id: "html-56",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute controls text direction such as ltr or rtl?",
    options: {
      A: "dir",
      B: "lang",
      C: "direction",
      D: "textdir",
    },
    answer: "A",
    explanation: "dir sets text direction.",
  },
  {
    id: "html-57",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute references an external JavaScript file?",
    options: {
      A: "href",
      B: "src",
      C: "link",
      D: "file",
    },
    answer: "B",
    explanation: "The script src attribute points to an external JavaScript file.",
  },
  {
    id: "html-58",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which script attribute delays execution until after parsing?",
    options: {
      A: "async",
      B: "defer",
      C: "wait",
      D: "ready",
    },
    answer: "B",
    explanation: "defer downloads the script and executes it after parsing.",
  },
  {
    id: "html-59",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute can associate a label with an input id?",
    options: {
      A: "for",
      B: "name",
      C: "target",
      D: "idref",
    },
    answer: "A",
    explanation: "A label's for attribute matches a control's id.",
  },
  {
    id: "html-60",
    subject: "HTML",
    difficulty: "Hard",
    text: "Which attribute gives a form control its submitted field name?",
    options: {
      A: "id",
      B: "name",
      C: "value",
      D: "label",
    },
    answer: "B",
    explanation: "The name attribute is used as the submitted field name.",
  },
  {
    id: "css-11",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property changes font size?",
    options: {
      A: "text-size",
      B: "font-size",
      C: "size",
      D: "font-style",
    },
    answer: "B",
    explanation: "font-size controls the size of text.",
  },
  {
    id: "css-12",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property makes text bold?",
    options: {
      A: "font-weight",
      B: "font-style",
      C: "text-bold",
      D: "weight",
    },
    answer: "A",
    explanation: "font-weight controls text thickness.",
  },
  {
    id: "css-13",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property aligns inline text to the center?",
    options: {
      A: "align-items",
      B: "text-align",
      C: "justify-content",
      D: "center",
    },
    answer: "B",
    explanation: "text-align controls horizontal alignment of inline content.",
  },
  {
    id: "css-14",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which selector targets all paragraph elements?",
    options: {
      A: ".p",
      B: "#p",
      C: "p",
      D: "*p",
    },
    answer: "C",
    explanation: "A type selector uses the element name.",
  },
  {
    id: "css-15",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which selector targets an element with id=\"main\"?",
    options: {
      A: ".main",
      B: "#main",
      C: "main",
      D: "*main",
    },
    answer: "B",
    explanation: "The # symbol selects by id.",
  },
  {
    id: "css-16",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property adds space inside an element border?",
    options: {
      A: "margin",
      B: "padding",
      C: "gap",
      D: "border-spacing",
    },
    answer: "B",
    explanation: "padding is the inner space between content and border.",
  },
  {
    id: "css-17",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property adds space outside an element border?",
    options: {
      A: "margin",
      B: "padding",
      C: "gap",
      D: "outline",
    },
    answer: "A",
    explanation: "margin is space outside the border.",
  },
  {
    id: "css-18",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property rounds element corners?",
    options: {
      A: "corner-radius",
      B: "border-radius",
      C: "radius",
      D: "border-round",
    },
    answer: "B",
    explanation: "border-radius controls rounded corners.",
  },
  {
    id: "css-19",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which value hides an element completely and removes its space?",
    options: {
      A: "visibility: hidden;",
      B: "display: none;",
      C: "opacity: 0;",
      D: "hidden: true;",
    },
    answer: "B",
    explanation: "display: none removes the element from layout.",
  },
  {
    id: "css-20",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property sets the font family?",
    options: {
      A: "font-family",
      B: "font-name",
      C: "typeface",
      D: "font",
    },
    answer: "A",
    explanation: "font-family defines the typeface list.",
  },
  {
    id: "css-21",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which unit represents one percent of the viewport width?",
    options: {
      A: "vw",
      B: "vh",
      C: "em",
      D: "rem",
    },
    answer: "A",
    explanation: "1vw equals one percent of the viewport width.",
  },
  {
    id: "css-22",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which unit is relative to the root element font size?",
    options: {
      A: "em",
      B: "rem",
      C: "%",
      D: "px",
    },
    answer: "B",
    explanation: "rem is based on the root element font size.",
  },
  {
    id: "css-23",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property controls the space between flex or grid items?",
    options: {
      A: "margin",
      B: "spacing",
      C: "gap",
      D: "padding",
    },
    answer: "C",
    explanation: "gap controls spacing between rows and columns.",
  },
  {
    id: "css-24",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property adds a shadow around a box?",
    options: {
      A: "text-shadow",
      B: "box-shadow",
      C: "shadow",
      D: "filter",
    },
    answer: "B",
    explanation: "box-shadow creates shadows around elements.",
  },
  {
    id: "css-25",
    subject: "CSS",
    difficulty: "Easy",
    text: "Which property controls text decoration like underline?",
    options: {
      A: "text-decoration",
      B: "font-decoration",
      C: "line-style",
      D: "text-line",
    },
    answer: "A",
    explanation: "text-decoration controls underline, overline, and line-through.",
  },
  {
    id: "css-26",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which property changes the stacking order of positioned elements?",
    options: {
      A: "stack",
      B: "z-index",
      C: "order",
      D: "layer",
    },
    answer: "B",
    explanation: "z-index controls stacking order.",
  },
  {
    id: "css-27",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which position value keeps an element fixed relative to the viewport?",
    options: {
      A: "absolute",
      B: "relative",
      C: "fixed",
      D: "sticky",
    },
    answer: "C",
    explanation: "position: fixed anchors an element to the viewport.",
  },
  {
    id: "css-28",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which position value acts relative until a scroll threshold is reached?",
    options: {
      A: "sticky",
      B: "fixed",
      C: "absolute",
      D: "static",
    },
    answer: "A",
    explanation: "position: sticky switches behavior based on scroll position.",
  },
  {
    id: "css-29",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which flexbox property aligns items on the cross axis?",
    options: {
      A: "justify-content",
      B: "align-items",
      C: "flex-direction",
      D: "gap",
    },
    answer: "B",
    explanation: "align-items controls cross-axis alignment.",
  },
  {
    id: "css-30",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which flexbox property aligns items on the main axis?",
    options: {
      A: "justify-content",
      B: "align-items",
      C: "place-items",
      D: "align-content",
    },
    answer: "A",
    explanation: "justify-content aligns flex items along the main axis.",
  },
  {
    id: "css-31",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which property changes a flex container's main axis direction?",
    options: {
      A: "flex-wrap",
      B: "flex-direction",
      C: "direction",
      D: "align-direction",
    },
    answer: "B",
    explanation: "flex-direction sets row, column, and reverse directions.",
  },
  {
    id: "css-32",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which property allows flex items to move onto multiple lines?",
    options: {
      A: "flex-flow",
      B: "flex-wrap",
      C: "line-wrap",
      D: "wrap-items",
    },
    answer: "B",
    explanation: "flex-wrap controls whether items wrap.",
  },
  {
    id: "css-33",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which CSS grid property defines columns?",
    options: {
      A: "grid-columns",
      B: "grid-template-columns",
      C: "columns-template",
      D: "template-columns",
    },
    answer: "B",
    explanation: "grid-template-columns defines grid column tracks.",
  },
  {
    id: "css-34",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which CSS grid property defines rows?",
    options: {
      A: "grid-template-rows",
      B: "grid-rows",
      C: "rows-template",
      D: "template-rows",
    },
    answer: "A",
    explanation: "grid-template-rows defines grid row tracks.",
  },
  {
    id: "css-35",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which function repeats grid track definitions?",
    options: {
      A: "loop()",
      B: "repeat()",
      C: "cycle()",
      D: "grid-repeat()",
    },
    answer: "B",
    explanation: "repeat() avoids repeating the same grid track values.",
  },
  {
    id: "css-36",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which CSS function chooses a value between a minimum and maximum?",
    options: {
      A: "range()",
      B: "between()",
      C: "clamp()",
      D: "limit()",
    },
    answer: "C",
    explanation: "clamp(min, preferred, max) limits a responsive value.",
  },
  {
    id: "css-37",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which rule applies CSS only under certain conditions like screen width?",
    options: {
      A: "@condition",
      B: "@media",
      C: "@responsive",
      D: "@screen",
    },
    answer: "B",
    explanation: "@media defines conditional styles for media features.",
  },
  {
    id: "css-38",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which pseudo-class selects an input when it has focus?",
    options: {
      A: ":active",
      B: ":focus",
      C: ":checked",
      D: ":target",
    },
    answer: "B",
    explanation: ":focus matches the element receiving keyboard or pointer focus.",
  },
  {
    id: "css-39",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which pseudo-class selects checked checkboxes or radio buttons?",
    options: {
      A: ":selected",
      B: ":enabled",
      C: ":checked",
      D: ":valid",
    },
    answer: "C",
    explanation: ":checked matches checked form controls.",
  },
  {
    id: "css-40",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which pseudo-element styles the first line of text?",
    options: {
      A: "::first-line",
      B: "::line",
      C: ":first",
      D: "::first-text",
    },
    answer: "A",
    explanation: "::first-line targets the first formatted line.",
  },
  {
    id: "css-41",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which pseudo-element inserts generated content before an element?",
    options: {
      A: "::before",
      B: "::after",
      C: "::start",
      D: "::content",
    },
    answer: "A",
    explanation: "::before creates a generated first child.",
  },
  {
    id: "css-42",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which property is required for ::before content to appear?",
    options: {
      A: "display",
      B: "content",
      C: "position",
      D: "visibility",
    },
    answer: "B",
    explanation: "Generated content needs the content property.",
  },
  {
    id: "css-43",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which property controls transition duration?",
    options: {
      A: "transition-time",
      B: "transition-duration",
      C: "animation-duration",
      D: "duration",
    },
    answer: "B",
    explanation: "transition-duration sets how long a transition takes.",
  },
  {
    id: "css-44",
    subject: "CSS",
    difficulty: "Medium",
    text: "Which property changes the mouse cursor?",
    options: {
      A: "pointer",
      B: "mouse",
      C: "cursor",
      D: "hover",
    },
    answer: "C",
    explanation: "cursor controls the pointer appearance.",
  },
  {
    id: "css-45",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which selector targets only direct children?",
    options: {
      A: "parent child",
      B: "parent > child",
      C: "parent + child",
      D: "parent ~ child",
    },
    answer: "B",
    explanation: "The child combinator > selects direct children.",
  },
  {
    id: "css-46",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which selector targets the next sibling immediately after an element?",
    options: {
      A: "+",
      B: "~",
      C: ">",
      D: "||",
    },
    answer: "A",
    explanation: "The + combinator selects the adjacent next sibling.",
  },
  {
    id: "css-47",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which selector targets following siblings that match?",
    options: {
      A: "+",
      B: "~",
      C: ">",
      D: "*",
    },
    answer: "B",
    explanation: "The ~ combinator selects general following siblings.",
  },
  {
    id: "css-48",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which selector targets elements with a required attribute?",
    options: {
      A: "[required]",
      B: ".required",
      C: "#required",
      D: ":required-only",
    },
    answer: "A",
    explanation: "[required] is an attribute selector.",
  },
  {
    id: "css-49",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property defines CSS custom properties?",
    options: {
      A: "$main-color",
      B: "--main-color",
      C: "@main-color",
      D: "var-main-color",
    },
    answer: "B",
    explanation: "CSS custom properties begin with two hyphens.",
  },
  {
    id: "css-50",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which function reads a CSS custom property?",
    options: {
      A: "custom()",
      B: "property()",
      C: "var()",
      D: "cssvar()",
    },
    answer: "C",
    explanation: "var(--name) reads a custom property value.",
  },
  {
    id: "css-51",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which at-rule defines keyframes for CSS animation?",
    options: {
      A: "@animate",
      B: "@keyframes",
      C: "@frames",
      D: "@motion",
    },
    answer: "B",
    explanation: "@keyframes defines animation steps.",
  },
  {
    id: "css-52",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property names the animation to run?",
    options: {
      A: "animation-name",
      B: "keyframe-name",
      C: "animation-id",
      D: "motion-name",
    },
    answer: "A",
    explanation: "animation-name references a @keyframes rule.",
  },
  {
    id: "css-53",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property controls how an element is transformed?",
    options: {
      A: "move",
      B: "transform",
      C: "transition",
      D: "translate",
    },
    answer: "B",
    explanation: "transform applies translate, rotate, scale, and more.",
  },
  {
    id: "css-54",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which function rotates an element?",
    options: {
      A: "spin()",
      B: "turn()",
      C: "rotate()",
      D: "angle()",
    },
    answer: "C",
    explanation: "rotate() is a transform function.",
  },
  {
    id: "css-55",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property sets how background images repeat?",
    options: {
      A: "background-repeat",
      B: "background-size",
      C: "background-mode",
      D: "image-repeat",
    },
    answer: "A",
    explanation: "background-repeat controls image tiling.",
  },
  {
    id: "css-56",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property scales a background image to cover its container?",
    options: {
      A: "background-fit: cover;",
      B: "background-size: cover;",
      C: "image-size: cover;",
      D: "object-fit: cover;",
    },
    answer: "B",
    explanation: "background-size: cover scales the background to cover the area.",
  },
  {
    id: "css-57",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property controls how overflowing content is handled?",
    options: {
      A: "clip",
      B: "overflow",
      C: "contain",
      D: "scroll",
    },
    answer: "B",
    explanation: "overflow controls clipping and scroll behavior.",
  },
  {
    id: "css-58",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property changes the transparency of an element?",
    options: {
      A: "visibility",
      B: "opacity",
      C: "alpha",
      D: "transparent",
    },
    answer: "B",
    explanation: "opacity controls an element's transparency.",
  },
  {
    id: "css-59",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which layout property sets the order of flex or grid items?",
    options: {
      A: "rank",
      B: "order",
      C: "z-index",
      D: "position",
    },
    answer: "B",
    explanation: "order changes item placement in flex and grid layouts.",
  },
  {
    id: "css-60",
    subject: "CSS",
    difficulty: "Hard",
    text: "Which property includes padding and border inside the declared width?",
    options: {
      A: "box-sizing: border-box;",
      B: "box-model: border;",
      C: "width-mode: border;",
      D: "sizing: border-box;",
    },
    answer: "A",
    explanation: "border-box includes padding and border in width and height.",
  },
  {
    id: "js-11",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which keyword declares a block-scoped variable?",
    options: {
      A: "var",
      B: "let",
      C: "define",
      D: "set",
    },
    answer: "B",
    explanation: "let declares a block-scoped variable.",
  },
  {
    id: "js-12",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which value represents no value intentionally?",
    options: {
      A: "undefined",
      B: "null",
      C: "false",
      D: "NaN",
    },
    answer: "B",
    explanation: "null is commonly used to represent an intentional empty value.",
  },
  {
    id: "js-13",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which operator adds numbers or joins strings?",
    options: {
      A: "+",
      B: "&",
      C: ".",
      D: "add",
    },
    answer: "A",
    explanation: "+ performs addition and string concatenation.",
  },
  {
    id: "js-14",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which method removes the last item from an array?",
    options: {
      A: "shift()",
      B: "pop()",
      C: "remove()",
      D: "slice()",
    },
    answer: "B",
    explanation: "pop() removes and returns the last array item.",
  },
  {
    id: "js-15",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which method removes the first item from an array?",
    options: {
      A: "shift()",
      B: "pop()",
      C: "unshift()",
      D: "splice()",
    },
    answer: "A",
    explanation: "shift() removes and returns the first array item.",
  },
  {
    id: "js-16",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which method adds an item to the beginning of an array?",
    options: {
      A: "push()",
      B: "unshift()",
      C: "prepend()",
      D: "first()",
    },
    answer: "B",
    explanation: "unshift() adds items to the start of an array.",
  },
  {
    id: "js-17",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which statement runs code when a condition is true?",
    options: {
      A: "if",
      B: "for",
      C: "return",
      D: "try",
    },
    answer: "A",
    explanation: "if executes a block when its condition is true.",
  },
  {
    id: "js-18",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which loop is often used when the number of repetitions is known?",
    options: {
      A: "while",
      B: "for",
      C: "switch",
      D: "catch",
    },
    answer: "B",
    explanation: "for loops are commonly used with a known counter.",
  },
  {
    id: "js-19",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which statement exits a function and gives back a value?",
    options: {
      A: "break",
      B: "return",
      C: "exit",
      D: "yield",
    },
    answer: "B",
    explanation: "return exits a function and can provide a value.",
  },
  {
    id: "js-20",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which built-in object logs messages to developer tools?",
    options: {
      A: "window",
      B: "console",
      C: "document",
      D: "debug",
    },
    answer: "B",
    explanation: "console.log() writes messages to the console.",
  },
  {
    id: "js-21",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which method converts a value to a string?",
    options: {
      A: "String()",
      B: "Number()",
      C: "Boolean()",
      D: "Object()",
    },
    answer: "A",
    explanation: "String(value) converts a value to text.",
  },
  {
    id: "js-22",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which method converts a value to a number?",
    options: {
      A: "Text()",
      B: "Number()",
      C: "Boolean()",
      D: "Array()",
    },
    answer: "B",
    explanation: "Number(value) converts a value to a number.",
  },
  {
    id: "js-23",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which value is returned by typeof \"hello\"?",
    options: {
      A: "text",
      B: "string",
      C: "word",
      D: "object",
    },
    answer: "B",
    explanation: "typeof returns \"string\" for string values.",
  },
  {
    id: "js-24",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which symbol starts a single-line comment?",
    options: {
      A: "//",
      B: "/*",
      C: "#",
      D: "<!--",
    },
    answer: "A",
    explanation: "// starts a single-line JavaScript comment.",
  },
  {
    id: "js-25",
    subject: "JavaScript",
    difficulty: "Easy",
    text: "Which collection type stores values by numeric index?",
    options: {
      A: "Object",
      B: "Array",
      C: "Map",
      D: "Set",
    },
    answer: "B",
    explanation: "Arrays store ordered values by index.",
  },
  {
    id: "js-26",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which method runs a function for each item in an array?",
    options: {
      A: "forEach()",
      B: "map()",
      C: "filter()",
      D: "reduce()",
    },
    answer: "A",
    explanation: "forEach() executes a callback for each array item.",
  },
  {
    id: "js-27",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which array method creates a new array by transforming each item?",
    options: {
      A: "forEach()",
      B: "map()",
      C: "filter()",
      D: "find()",
    },
    answer: "B",
    explanation: "map() returns a new array of transformed values.",
  },
  {
    id: "js-28",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which array method keeps only items that pass a test?",
    options: {
      A: "map()",
      B: "filter()",
      C: "reduce()",
      D: "join()",
    },
    answer: "B",
    explanation: "filter() returns a new array with matching items.",
  },
  {
    id: "js-29",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which array method finds the first item that passes a test?",
    options: {
      A: "find()",
      B: "filter()",
      C: "some()",
      D: "every()",
    },
    answer: "A",
    explanation: "find() returns the first matching item.",
  },
  {
    id: "js-30",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which array method combines items into a single value?",
    options: {
      A: "map()",
      B: "reduce()",
      C: "filter()",
      D: "sort()",
    },
    answer: "B",
    explanation: "reduce() accumulates array items into one result.",
  },
  {
    id: "js-31",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which method joins array items into a string?",
    options: {
      A: "join()",
      B: "concat()",
      C: "split()",
      D: "slice()",
    },
    answer: "A",
    explanation: "join() combines array items into a string.",
  },
  {
    id: "js-32",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which string method splits a string into an array?",
    options: {
      A: "join()",
      B: "split()",
      C: "slice()",
      D: "trim()",
    },
    answer: "B",
    explanation: "split() divides a string into an array.",
  },
  {
    id: "js-33",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which string method removes whitespace from both ends?",
    options: {
      A: "trim()",
      B: "clean()",
      C: "strip()",
      D: "slice()",
    },
    answer: "A",
    explanation: "trim() removes whitespace from both ends of a string.",
  },
  {
    id: "js-34",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which method checks whether a string contains text?",
    options: {
      A: "has()",
      B: "includes()",
      C: "contains()",
      D: "find()",
    },
    answer: "B",
    explanation: "includes() checks whether a string contains a substring.",
  },
  {
    id: "js-35",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which syntax creates an object literal?",
    options: {
      A: "[]",
      B: "{}",
      C: "()",
      D: "<>",
    },
    answer: "B",
    explanation: "{} creates an object literal.",
  },
  {
    id: "js-36",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which syntax accesses an object property named score?",
    options: {
      A: "object-score",
      B: "object.score",
      C: "object->score",
      D: "object::score",
    },
    answer: "B",
    explanation: "Dot notation accesses object properties.",
  },
  {
    id: "js-37",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which method selects the first matching CSS selector?",
    options: {
      A: "document.querySelector()",
      B: "document.getElementById()",
      C: "document.find()",
      D: "document.match()",
    },
    answer: "A",
    explanation: "querySelector() returns the first matching element.",
  },
  {
    id: "js-38",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which property changes an element's text without parsing HTML?",
    options: {
      A: "innerHTML",
      B: "textContent",
      C: "outerHTML",
      D: "style",
    },
    answer: "B",
    explanation: "textContent sets plain text content safely.",
  },
  {
    id: "js-39",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which property changes an element's inline CSS styles?",
    options: {
      A: "classList",
      B: "style",
      C: "dataset",
      D: "attributes",
    },
    answer: "B",
    explanation: "The style property edits inline CSS.",
  },
  {
    id: "js-40",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which property manages classes on an element?",
    options: {
      A: "classList",
      B: "classes",
      C: "style",
      D: "dataset",
    },
    answer: "A",
    explanation: "classList adds, removes, and toggles classes.",
  },
  {
    id: "js-41",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which method prevents a form's default submit action?",
    options: {
      A: "event.stop()",
      B: "event.preventDefault()",
      C: "event.cancel()",
      D: "return.stop()",
    },
    answer: "B",
    explanation: "preventDefault() stops the default browser action.",
  },
  {
    id: "js-42",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which timer runs a function once after a delay?",
    options: {
      A: "setInterval()",
      B: "setTimeout()",
      C: "requestTimer()",
      D: "delayLoop()",
    },
    answer: "B",
    explanation: "setTimeout() schedules one delayed callback.",
  },
  {
    id: "js-43",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which timer repeats a function until stopped?",
    options: {
      A: "setInterval()",
      B: "setTimeout()",
      C: "repeatTimeout()",
      D: "loopTimer()",
    },
    answer: "A",
    explanation: "setInterval() repeats a callback.",
  },
  {
    id: "js-44",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which function stops an interval created by setInterval?",
    options: {
      A: "stopInterval()",
      B: "clearInterval()",
      C: "cancelInterval()",
      D: "clearTimeout()",
    },
    answer: "B",
    explanation: "clearInterval() stops a repeating timer.",
  },
  {
    id: "js-45",
    subject: "JavaScript",
    difficulty: "Medium",
    text: "Which method converts an object to a JSON string?",
    options: {
      A: "JSON.parse()",
      B: "JSON.stringify()",
      C: "Object.json()",
      D: "String.json()",
    },
    answer: "B",
    explanation: "JSON.stringify() converts values to JSON text.",
  },
  {
    id: "js-46",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which keyword waits for a promise inside an async function?",
    options: {
      A: "wait",
      B: "await",
      C: "pause",
      D: "then",
    },
    answer: "B",
    explanation: "await pauses async function execution until a promise settles.",
  },
  {
    id: "js-47",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which method handles a fulfilled promise?",
    options: {
      A: "then()",
      B: "catch()",
      C: "finally()",
      D: "done()",
    },
    answer: "A",
    explanation: "then() registers a callback for fulfilled promises.",
  },
  {
    id: "js-48",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which method handles a rejected promise?",
    options: {
      A: "then()",
      B: "catch()",
      C: "finally()",
      D: "error()",
    },
    answer: "B",
    explanation: "catch() handles promise rejections.",
  },
  {
    id: "js-49",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which block runs whether a promise is fulfilled or rejected?",
    options: {
      A: "then()",
      B: "catch()",
      C: "finally()",
      D: "always()",
    },
    answer: "C",
    explanation: "finally() runs after a promise settles.",
  },
  {
    id: "js-50",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which statement handles exceptions?",
    options: {
      A: "try...catch",
      B: "if...else",
      C: "switch",
      D: "for...of",
    },
    answer: "A",
    explanation: "try...catch handles thrown errors.",
  },
  {
    id: "js-51",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which statement creates a custom error?",
    options: {
      A: "throw new Error()",
      B: "return Error()",
      C: "catch Error()",
      D: "raise Error()",
    },
    answer: "A",
    explanation: "throw new Error() raises a custom exception.",
  },
  {
    id: "js-52",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which loop iterates over values in an iterable?",
    options: {
      A: "for...in",
      B: "for...of",
      C: "for...each",
      D: "while...of",
    },
    answer: "B",
    explanation: "for...of loops over iterable values.",
  },
  {
    id: "js-53",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which loop iterates over enumerable object keys?",
    options: {
      A: "for...in",
      B: "for...of",
      C: "forEach",
      D: "map",
    },
    answer: "A",
    explanation: "for...in loops over enumerable property keys.",
  },
  {
    id: "js-54",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which object stores unique values?",
    options: {
      A: "Array",
      B: "Set",
      C: "Map",
      D: "Object",
    },
    answer: "B",
    explanation: "Set stores unique values.",
  },
  {
    id: "js-55",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which object stores key-value pairs and allows object keys?",
    options: {
      A: "Map",
      B: "Set",
      C: "Array",
      D: "String",
    },
    answer: "A",
    explanation: "Map stores key-value pairs and supports object keys.",
  },
  {
    id: "js-56",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which syntax copies array items into another array literal?",
    options: {
      A: "...array",
      B: "*array",
      C: "&array",
      D: "#array",
    },
    answer: "A",
    explanation: "The spread syntax ...array expands array items.",
  },
  {
    id: "js-57",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which syntax extracts object properties into variables?",
    options: {
      A: "destructuring",
      B: "spreading",
      C: "mapping",
      D: "parsing",
    },
    answer: "A",
    explanation: "Destructuring extracts values from arrays or objects.",
  },
  {
    id: "js-58",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which operator returns the right value only when the left value is null or undefined?",
    options: {
      A: "||",
      B: "??",
      C: "&&",
      D: "?:",
    },
    answer: "B",
    explanation: "The nullish coalescing operator ?? checks null or undefined.",
  },
  {
    id: "js-59",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which operator safely reads nested properties that may not exist?",
    options: {
      A: "?.",
      B: "??",
      C: "::",
      D: "=>",
    },
    answer: "A",
    explanation: "Optional chaining ?. avoids errors on nullish values.",
  },
  {
    id: "js-60",
    subject: "JavaScript",
    difficulty: "Hard",
    text: "Which browser API makes HTTP requests and returns a promise?",
    options: {
      A: "fetch()",
      B: "request()",
      C: "ajax()",
      D: "http()",
    },
    answer: "A",
    explanation: "fetch() requests resources and returns a promise.",
  },
];

defaultQuestions.push(...additionalQuestions);

const TOPIC_FACTS = {
  HTML: {
    "Document structure": [
      ["doctype declaration", "<!doctype html>", ["<html>", "<head>", "<meta>"], "The doctype tells the browser to use standards mode."],
      ["root document element", "<html>", ["<body>", "<main>", "<head>"], "The <html> element wraps the whole document."],
      ["visible content container", "<body>", ["<head>", "<title>", "<meta>"], "The <body> element contains the page content users see."],
    ],
    "Text and links": [
      ["main heading element", "<h1>", ["<head>", "<title>", "<heading>"], "<h1> is the top-level page heading."],
      ["paragraph element", "<p>", ["<text>", "<para>", "<span>"], "<p> represents a paragraph."],
      ["hyperlink element", "<a>", ["<link>", "<href>", "<nav>"], "<a> creates a clickable hyperlink."],
    ],
    "Lists and tables": [
      ["ordered list element", "<ol>", ["<ul>", "<li>", "<list>"], "<ol> creates a numbered list."],
      ["table row element", "<tr>", ["<td>", "<th>", "<row>"], "<tr> defines a table row."],
      ["table header cell", "<th>", ["<td>", "<thead>", "<caption>"], "<th> marks a table header cell."],
    ],
    "Forms and inputs": [
      ["form submission URL attribute", "action", ["method", "target", "name"], "The action attribute tells the browser where to submit form data."],
      ["required input attribute", "required", ["needed", "validate", "must"], "required makes a form field mandatory."],
      ["multi-line text field", "<textarea>", ["<input>", "<textbox>", "<select>"], "<textarea> accepts multiple lines of text."],
    ],
    "Semantic HTML": [
      ["main navigation element", "<nav>", ["<menu>", "<links>", "<aside>"], "<nav> groups important navigation links."],
      ["independent content element", "<article>", ["<section>", "<main>", "<div>"], "<article> is self-contained content."],
      ["primary page content element", "<main>", ["<section>", "<body>", "<article>"], "<main> contains the dominant page content."],
    ],
    "Media elements": [
      ["image source attribute", "src", ["href", "alt", "target"], "src points to the image file."],
      ["video element", "<video>", ["<movie>", "<media>", "<source>"], "<video> embeds video content."],
      ["audio element", "<audio>", ["<sound>", "<music>", "<source>"], "<audio> embeds sound content."],
    ],
    Accessibility: [
      ["image description attribute", "alt", ["title", "src", "name"], "alt provides replacement text for images."],
      ["label-control connection attribute", "for", ["name", "target", "rel"], "A label's for attribute matches an input id."],
      ["document language attribute", "lang", ["locale", "dir", "language"], "lang declares the language of a document or element."],
    ],
    "Metadata and scripts": [
      ["character encoding meta attribute", "charset", ["encoding", "lang", "type"], "charset declares the document character encoding."],
      ["mobile layout meta name", "viewport", ["mobile", "screen", "device"], "The viewport meta tag helps pages scale on mobile."],
      ["deferred script attribute", "defer", ["async", "wait", "ready"], "defer runs a script after the document has been parsed."],
    ],
  },
  CSS: {
    Selectors: [
      ["class selector prefix", ".", ["#", "*", "@"], "A dot selects elements by class."],
      ["id selector prefix", "#", [".", "*", ":"], "A hash selects an element by id."],
      ["attribute selector example", "[required]", [".required", "#required", ":required-only"], "[required] targets elements with that attribute."],
    ],
    "Box model": [
      ["inner space property", "padding", ["margin", "gap", "outline"], "padding adds space inside the border."],
      ["outer space property", "margin", ["padding", "border", "gap"], "margin adds space outside the border."],
      ["border-inclusive sizing", "box-sizing: border-box;", ["display: border-box;", "size: border-box;", "width-mode: border;"], "border-box includes padding and border in width and height."],
    ],
    "Typography and colors": [
      ["text color property", "color", ["background-color", "font-color", "text-style"], "color sets the foreground text color."],
      ["font size property", "font-size", ["text-size", "font-style", "size"], "font-size controls text size."],
      ["font family property", "font-family", ["typeface", "font-name", "font-style"], "font-family chooses the typeface."],
    ],
    Flexbox: [
      ["flex layout declaration", "display: flex;", ["display: block;", "display: grid;", "flex: display;"], "display: flex enables flexbox."],
      ["main-axis alignment property", "justify-content", ["align-items", "gap", "place-items"], "justify-content aligns items on the main axis."],
      ["cross-axis alignment property", "align-items", ["justify-content", "flex-wrap", "order"], "align-items aligns items on the cross axis."],
    ],
    Grid: [
      ["grid layout declaration", "display: grid;", ["display: flex;", "grid: display;", "display: table;"], "display: grid enables CSS Grid."],
      ["grid column track property", "grid-template-columns", ["grid-columns", "template-columns", "columns-template"], "grid-template-columns defines columns."],
      ["repeat track function", "repeat()", ["loop()", "cycle()", "again()"], "repeat() repeats grid track definitions."],
    ],
    "Responsive design": [
      ["conditional CSS at-rule", "@media", ["@screen", "@responsive", "@condition"], "@media applies styles under specific media conditions."],
      ["viewport width unit", "vw", ["vh", "rem", "em"], "vw is based on viewport width."],
      ["bounded responsive value function", "clamp()", ["limit()", "range()", "between()"], "clamp() keeps a value between a minimum and maximum."],
    ],
    "Transitions and animations": [
      ["transition time property", "transition-duration", ["duration", "transition-time", "animation-name"], "transition-duration sets how long a transition takes."],
      ["animation definition at-rule", "@keyframes", ["@frames", "@animate", "@motion"], "@keyframes defines animation steps."],
      ["transform rotation function", "rotate()", ["spin()", "turn()", "angle()"], "rotate() rotates an element."],
    ],
    "Advanced styling": [
      ["custom property syntax", "--main-color", ["$main-color", "@main-color", "var-main-color"], "CSS custom properties start with two hyphens."],
      ["custom property reader", "var()", ["custom()", "property()", "cssvar()"], "var() reads a CSS custom property."],
      ["overflow control property", "overflow", ["clip", "contain", "scroll-mode"], "overflow controls clipping and scrollbars."],
    ],
  },
  JavaScript: {
    "Variables and types": [
      ["block-scoped variable keyword", "let", ["var", "define", "set"], "let declares a block-scoped variable."],
      ["constant declaration keyword", "const", ["let", "var", "static"], "const declares a variable that cannot be reassigned."],
      ["string type result", "typeof \"hello\" returns \"string\"", ["typeof \"hello\" returns \"text\"", "typeof \"hello\" returns \"word\"", "typeof \"hello\" returns \"object\""], "typeof returns string for text values."],
    ],
    "Functions and scope": [
      ["function declaration keyword", "function", ["def", "fun", "method"], "function declares a reusable block of code."],
      ["function exit keyword", "return", ["break", "exit", "yield"], "return exits a function and can provide a value."],
      ["arrow function token", "=>", ["->", "::", "=>="], "=> creates an arrow function."],
    ],
    "Control flow": [
      ["conditional statement", "if", ["for", "return", "try"], "if runs code when a condition is true."],
      ["multi-branch statement", "switch", ["select", "caseof", "branch"], "switch chooses between cases."],
      ["known-count loop", "for", ["if", "switch", "try"], "for loops are often used with counters."],
    ],
    "Arrays and objects": [
      ["add to array end", "push()", ["pop()", "shift()", "slice()"], "push() appends items to an array."],
      ["transform array method", "map()", ["forEach()", "filter()", "find()"], "map() creates a transformed array."],
      ["object literal syntax", "{}", ["[]", "()", "<>"], "{} creates an object literal."],
    ],
    "DOM and events": [
      ["select first matching element", "document.querySelector()", ["document.find()", "document.match()", "document.getClass()"], "querySelector() finds the first matching selector."],
      ["plain text property", "textContent", ["innerHTML", "outerHTML", "style"], "textContent sets text without parsing HTML."],
      ["event listener method", "addEventListener()", ["on()", "attach()", "listen()"], "addEventListener() attaches event handlers."],
    ],
    "Browser storage": [
      ["persistent browser storage", "localStorage", ["sessionStorage", "cookieStorage", "memoryStorage"], "localStorage persists after the browser closes."],
      ["temporary tab storage", "sessionStorage", ["localStorage", "cacheStorage", "cookieStorage"], "sessionStorage lasts for the page session."],
      ["JSON object parser", "JSON.parse()", ["JSON.stringify()", "Object.parse()", "String.json()"], "JSON.parse() converts JSON text into a value."],
    ],
    "Async JavaScript": [
      ["promise wait keyword", "await", ["wait", "pause", "then"], "await pauses inside an async function until a promise settles."],
      ["fulfilled promise handler", "then()", ["catch()", "finally()", "done()"], "then() handles fulfilled promises."],
      ["HTTP request API", "fetch()", ["request()", "ajax()", "http()"], "fetch() makes HTTP requests and returns a promise."],
    ],
    "Error handling": [
      ["exception handling statement", "try...catch", ["if...else", "switch", "for...of"], "try...catch handles thrown errors."],
      ["create a custom error", "throw new Error()", ["return Error()", "catch Error()", "raise Error()"], "throw new Error() raises an exception."],
      ["promise rejection handler", "catch()", ["then()", "finally()", "error()"], "catch() handles promise rejections."],
    ],
  },
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function buildOptions(correct, distractors, rotation) {
  const choices = [correct, ...distractors].slice(0, 4);
  while (choices.length < 4) choices.push(`Related option ${choices.length}`);
  for (let index = 0; index < rotation % 4; index += 1) {
    choices.push(choices.shift());
  }
  const keys = ["A", "B", "C", "D"];
  const options = {};
  let answer = "A";
  keys.forEach((key, index) => {
    options[key] = choices[index];
    if (choices[index] === correct) answer = key;
  });
  return { options, answer };
}

function getGenericFacts(subject, topic) {
  if (subject === "HTML") {
    return [
      [
        `the ${topic} topic`,
        `${topic} is part of building web page structure and content.`,
        [
          `${topic} is only used for database design.`,
          `${topic} is a CSS-only animation tool.`,
          `${topic} is not related to web pages.`,
        ],
        `${topic} is one of the HTML areas covered in the W3Schools HTML tutorial.`,
      ],
      [
        `a good reason to study ${topic}`,
        `It helps create clearer and more useful web pages.`,
        [
          "It removes the need for browsers.",
          "It replaces all JavaScript code.",
          "It prevents HTML from using elements.",
        ],
        `Understanding ${topic} improves HTML page quality.`,
      ],
      [
        `the role of ${topic} in HTML`,
        `It supports page content, structure, or browser behavior.`,
        [
          "It controls server hardware only.",
          "It is only a spreadsheet formula.",
          "It is unrelated to browser documents.",
        ],
        `${topic} belongs to the HTML learning path and supports real web pages.`,
      ],
    ];
  }
  if (subject === "CSS") {
    return [
      [
        `the ${topic} topic`,
        `${topic} helps control the presentation of web pages.`,
        [
          `${topic} creates database tables.`,
          `${topic} is an HTML-only document tag.`,
          `${topic} disables styling in browsers.`,
        ],
        `${topic} is part of styling pages with CSS.`,
      ],
      [
        `a good reason to study ${topic}`,
        `It helps improve layout, appearance, or visual behavior.`,
        [
          "It replaces all HTML content.",
          "It starts a web server automatically.",
          "It stores quiz results permanently by itself.",
        ],
        `CSS ${topic} knowledge helps make pages easier to read and use.`,
      ],
      [
        `the role of ${topic} in CSS`,
        `It changes how elements look or respond on the page.`,
        [
          "It is only used to write SQL queries.",
          "It is unrelated to design.",
          "It prevents selectors from working.",
        ],
        `${topic} is one of the CSS areas listed in the W3Schools CSS tutorial.`,
      ],
    ];
  }
  return [
    [
      `the ${topic} topic`,
      `${topic} helps add behavior or logic to web pages.`,
      [
        `${topic} is only an HTML table tag.`,
        `${topic} is a CSS color name only.`,
        `${topic} prevents scripts from running.`,
      ],
      `${topic} is part of the W3Schools JavaScript learning path.`,
    ],
    [
      `a good reason to study ${topic}`,
      `It helps build interactive browser features.`,
      [
        "It removes the need for programming logic.",
        "It only changes image file names.",
        "It is unrelated to user interaction.",
      ],
      `JavaScript ${topic} knowledge helps students write better scripts.`,
    ],
    [
      `the role of ${topic} in JavaScript`,
      `It supports data handling, page interaction, or program flow.`,
      [
        "It is only used for printed paper layout.",
        "It cannot be used in browsers.",
        "It is a replacement for HTML documents.",
      ],
      `${topic} belongs to practical JavaScript development.`,
    ],
  ];
}

function getTopicFacts(subject, topic) {
  return TOPIC_FACTS[subject]?.[topic] || getGenericFacts(subject, topic);
}

function generateTopicQuestions() {
  const questions = [];
  const templates = [
    (difficulty, subject, topic, concept) =>
      `${difficulty} ${subject}: In ${topic}, which option best matches ${concept}?`,
    (difficulty, subject, topic, concept) =>
      `${difficulty} ${subject}: What should a student remember about ${concept} in ${topic}?`,
    (difficulty, subject, topic, concept) =>
      `${difficulty} ${subject}: Choose the correct statement for ${concept}.`,
    (difficulty, subject, topic, concept) =>
      `${difficulty} ${subject}: During a ${topic} task, which answer is correct for ${concept}?`,
    (difficulty, subject, topic, concept) =>
      `${difficulty} ${subject}: Which choice is most useful when learning ${concept}?`,
  ];
  Object.entries(SUBJECT_TOPICS).forEach(([subject, topics]) => {
    DIFFICULTY_LEVELS.forEach((difficulty) => {
      topics.forEach((topic) => {
        const facts = getTopicFacts(subject, topic);
        for (let index = 0; index < 25; index += 1) {
          const [concept, correct, distractors, explanation] =
            facts[index % facts.length];
          const { options, answer } = buildOptions(correct, distractors, index);
          questions.push({
            id: `${slugify(subject)}-${slugify(difficulty)}-${slugify(topic)}-${index + 1}`,
            subject,
            topic,
            difficulty,
            text: templates[index % templates.length](
              difficulty,
              subject,
              topic,
              concept,
            ),
            options,
            answer,
            explanation,
          });
        }
      });
    });
  });
  return questions;
}

function inferTopic(question) {
  if (question.topic) return question.topic;
  const text = `${question.text || ""} ${question.explanation || ""}`.toLowerCase();
  if (question.subject === "HTML") {
    if (text.includes("form") || text.includes("input") || text.includes("label")) return "Forms and inputs";
    if (text.includes("table") || text.includes("list") || text.includes("<li>")) return "Lists and tables";
    if (text.includes("image") || text.includes("audio") || text.includes("video")) return "Media elements";
    if (text.includes("meta") || text.includes("script") || text.includes("head")) return "Metadata and scripts";
    if (text.includes("semantic") || text.includes("article") || text.includes("main")) return "Semantic HTML";
    return "Text and links";
  }
  if (question.subject === "CSS") {
    if (text.includes("flex")) return "Flexbox";
    if (text.includes("grid")) return "Grid";
    if (text.includes("selector") || text.includes("class") || text.includes("pseudo")) return "Selectors";
    if (text.includes("margin") || text.includes("padding") || text.includes("border")) return "Box model";
    if (text.includes("animation") || text.includes("transition")) return "Transitions and animations";
    if (text.includes("responsive") || text.includes("viewport")) return "Responsive design";
    return "Typography and colors";
  }
  if (text.includes("array") || text.includes("object")) return "Arrays and objects";
  if (text.includes("dom") || text.includes("event") || text.includes("element")) return "DOM and events";
  if (text.includes("storage") || text.includes("json")) return "Browser storage";
  if (text.includes("promise") || text.includes("async") || text.includes("await")) return "Async JavaScript";
  if (text.includes("function")) return "Functions and scope";
  if (text.includes("loop") || text.includes("condition")) return "Control flow";
  return "Variables and types";
}

function normalizeQuestion(question) {
  return {
    ...question,
    topic: inferTopic(question),
    difficulty: question.difficulty || "Easy",
  };
}

function isLegacyBuiltInQuestion(question) {
  const match = String(question.id || "").match(/^(html|css|js)-(\d+)$/);
  return Boolean(match && Number(match[2]) <= 60);
}

const builtInQuestions = generateTopicQuestions().map(normalizeQuestion);
const builtInQuestionIds = new Set(builtInQuestions.map((question) => question.id));

const elements = {
  subjectSelect: document.getElementById("subjectSelect"),
  topicSelect: document.getElementById("topicSelect"),
  difficultySelect: document.getElementById("difficultySelect"),
  languageSelect: document.getElementById("languageSelect"),
  questionAvailability: document.getElementById("questionAvailability"),
  numberOfQuestions: document.getElementById("numberOfQuestions"),
  userName: document.getElementById("userName"),
  startQuizBtn: document.getElementById("startQuizBtn"),
  viewSamplesBtn: document.getElementById("viewSamplesBtn"),
  themeToggle: document.getElementById("themeToggle"),
  timerText: document.getElementById("timerText"),
  historyList: document.getElementById("historyList"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  quizPanel: document.getElementById("quizPanel"),
  quizTitle: document.getElementById("quizTitle"),
  quizInfo: document.getElementById("quizInfo"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  questionContainer: document.getElementById("questionContainer"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  submitBtn: document.getElementById("submitBtn"),
  resultPanel: document.getElementById("resultPanel"),
  scoreText: document.getElementById("scoreText"),
  reviewList: document.getElementById("reviewList"),
  restartBtn: document.getElementById("restartBtn"),
  loginPanel: document.getElementById("loginPanel"),
  adminPassword: document.getElementById("adminPassword"),
  adminLoginBtn: document.getElementById("adminLoginBtn"),
  dashboard: document.getElementById("dashboard"),
  questionCount: document.getElementById("questionCount"),
  resultCount: document.getElementById("resultCount"),
  adminQuestionSearch: document.getElementById("adminQuestionSearch"),
  exportQuestionsBtn: document.getElementById("exportQuestionsBtn"),
  exportResultsBtn: document.getElementById("exportResultsBtn"),
  importQuestionsInput: document.getElementById("importQuestionsInput"),
  newSubject: document.getElementById("newSubject"),
  newTopic: document.getElementById("newTopic"),
  newDifficulty: document.getElementById("newDifficulty"),
  newQuestionText: document.getElementById("newQuestionText"),
  newOptionA: document.getElementById("newOptionA"),
  newOptionB: document.getElementById("newOptionB"),
  newOptionC: document.getElementById("newOptionC"),
  newOptionD: document.getElementById("newOptionD"),
  newCorrect: document.getElementById("newCorrect"),
  newExplanation: document.getElementById("newExplanation"),
  addQuestionBtn: document.getElementById("addQuestionBtn"),
  questionList: document.getElementById("questionList"),
  resultList: document.getElementById("resultList"),
};

let state = {
  questions: [],
  currentSubject: "HTML",
  currentQuestionIndex: 0,
  answers: {},
  currentQuestions: [],
};

function loadQuestions() {
  const saved = localStorage.getItem(STORAGE_QUESTIONS_KEY);
  const savedQuestions = saved
    ? JSON.parse(saved).map(normalizeQuestion).filter((question) => !isLegacyBuiltInQuestion(question))
    : [];
  const merged = new Map();
  builtInQuestions.forEach((question) => merged.set(question.id, question));
  savedQuestions.forEach((question) => merged.set(question.id, question));
  state.questions = [...merged.values()];
}

function saveQuestions() {
  const customQuestions = state.questions.filter(
    (question) =>
      !builtInQuestionIds.has(question.id) && !isLegacyBuiltInQuestion(question),
  );
  localStorage.setItem(STORAGE_QUESTIONS_KEY, JSON.stringify(customQuestions));
}

function loadResults() {
  const saved = localStorage.getItem(STORAGE_RESULTS_KEY);
  return saved ? JSON.parse(saved) : [];
}

function loadAdminResults() {
  const adminSaved = localStorage.getItem(STORAGE_ADMIN_RESULTS_KEY);
  const adminResults = adminSaved ? JSON.parse(adminSaved) : [];
  const visibleResults = loadResults();
  const merged = new Map();
  adminResults.forEach((result) => merged.set(result.id || `${result.date}-${result.name}`, result));
  visibleResults.forEach((result) => merged.set(result.id || `${result.date}-${result.name}`, result));
  return [...merged.values()];
}

function saveResult(result) {
  const resultWithId = {
    ...result,
    id: result.id || `attempt-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  };
  const results = loadResults();
  results.unshift(resultWithId);
  localStorage.setItem(STORAGE_RESULTS_KEY, JSON.stringify(results));
  const adminResults = loadAdminResults();
  adminResults.unshift(resultWithId);
  const uniqueAdminResults = [...new Map(adminResults.map((item) => [item.id, item])).values()];
  localStorage.setItem(
    STORAGE_ADMIN_RESULTS_KEY,
    JSON.stringify(uniqueAdminResults),
  );
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  return `${minutes}:${remaining.toString().padStart(2, "0")}`;
}

function calculateQuizDuration(questionCount) {
  const safeCount = Math.max(
    1,
    questionCount,
  );
  return safeCount * SECONDS_PER_QUESTION;
}

function startTimer(durationSeconds = calculateQuizDuration(MIN_QUESTION_COUNT)) {
  stopTimer();
  remainingSeconds = durationSeconds;
  if (elements.timerText) {
    elements.timerText.textContent = `Time left: ${formatTime(remainingSeconds)}`;
  }
  timerInterval = setInterval(() => {
    remainingSeconds -= 1;
    if (elements.timerText) {
      elements.timerText.textContent = `Time left: ${formatTime(remainingSeconds)}`;
    }
    if (remainingSeconds <= 0) {
      stopTimer();
      alert("Time is up! Your answers will be submitted now.");
      submitQuiz(true);
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function shuffleArray(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getQuestionsForSubjectAndDifficulty(subject, difficulty, topic = "all") {
  return state.questions.filter((question) => {
    const matchesSubject = question.subject === subject;
    const matchesDifficulty =
      difficulty === "all" || question.difficulty === difficulty;
    const matchesTopic = topic === "all" || question.topic === topic;
    return matchesSubject && matchesDifficulty && matchesTopic;
  });
}

function escapeHTML(value) {
  const span = document.createElement("span");
  span.textContent = value ?? "";
  return span.innerHTML;
}

function getAnswerLabel(question, answerKey) {
  if (!question || answerKey === "No answer") return "No answer";
  const answerText = question.options?.[answerKey] || "";
  return answerText ? `${answerKey}. ${answerText}` : answerKey;
}

function renderProgressBar() {
  if (!elements.progressFill || !elements.progressText) return;
  const total = state.currentQuestions.length;
  if (!total) {
    elements.progressFill.style.width = "0";
    elements.progressText.textContent = "";
    return;
  }
  const current = state.currentQuestionIndex + 1;
  const percent = Math.round((current / total) * 100);
  elements.progressFill.style.width = `${percent}%`;
  elements.progressText.textContent = `Question ${current} of ${total} — ${percent}% complete`;
}

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (elements.themeToggle) elements.themeToggle.textContent = "Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    if (elements.themeToggle) elements.themeToggle.textContent = "Dark Mode";
  }
  localStorage.setItem("cbtTheme", theme);
}

function loadTheme() {
  const theme = localStorage.getItem("cbtTheme") || "light";
  setTheme(theme);
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importQuestionsFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) {
        throw new Error("JSON must be an array of questions.");
      }
      const valid = imported.filter(
        (question) =>
          question.id &&
          question.subject &&
          question.text &&
          question.options &&
          question.answer,
      ).map(normalizeQuestion);
      if (!valid.length) {
        throw new Error("No valid questions found in the file.");
      }
      state.questions = state.questions.concat(valid);
      saveQuestions();
      populateSubjects();
      renderAdminDashboard();
      alert(`Imported ${valid.length} questions.`);
    } catch (error) {
      alert(`Import failed: ${error.message}`);
    }
  };
  reader.readAsText(file);
}

function populateSubjects() {
  if (!elements.subjectSelect) return;
  const subjects = [
    ...new Set(state.questions.map((question) => question.subject)),
  ];
  elements.subjectSelect.innerHTML = subjects
    .map(
      (subject) =>
        `<option value="${escapeHTML(subject)}">${escapeHTML(subject)}</option>`,
    )
    .join("");
}

function populateDifficultySelect(selectElement, includeAll = true) {
  if (!selectElement) return;
  const options = includeAll ? ["all", ...DIFFICULTY_LEVELS] : DIFFICULTY_LEVELS;
  selectElement.innerHTML = options
    .map((level) => {
      const label = level === "all" ? "All levels" : level;
      return `<option value="${escapeHTML(level)}">${escapeHTML(label)}</option>`;
    })
    .join("");
}

function getTopicsForSubject(subject) {
  const builtInTopics = SUBJECT_TOPICS[subject] || [];
  const savedTopics = state.questions
    .filter((question) => question.subject === subject)
    .map((question) => question.topic)
    .filter(Boolean);
  return [...new Set([...builtInTopics, ...savedTopics])];
}

function populateTopicSelect(subject = elements.subjectSelect?.value) {
  if (!elements.topicSelect) return;
  const topics = getTopicsForSubject(subject);
  elements.topicSelect.innerHTML = [
    `<option value="all">All topics</option>`,
    ...topics.map(
      (topic) => `<option value="${escapeHTML(topic)}">${escapeHTML(topic)}</option>`,
    ),
  ].join("");
}

function populateAdminTopicSelect(subject = elements.newSubject?.value) {
  if (!elements.newTopic) return;
  const topics = getTopicsForSubject(subject);
  elements.newTopic.innerHTML = topics
    .map((topic) => `<option value="${escapeHTML(topic)}">${escapeHTML(topic)}</option>`)
    .join("");
}

function populateDisplayLanguages() {
  if (!elements.languageSelect) return;
  elements.languageSelect.innerHTML = DISPLAY_LANGUAGES.map(
    ([value, label]) =>
      `<option value="${escapeHTML(value)}">${escapeHTML(label)}</option>`,
  ).join("");
}

function getAvailableQuestionsForCurrentSelection() {
  const subject = elements.subjectSelect?.value || state.currentSubject;
  const difficulty = elements.difficultySelect?.value || "all";
  const topic = elements.topicSelect?.value || "all";
  return getQuestionsForSubjectAndDifficulty(subject, difficulty, topic);
}

function updateQuestionAvailability() {
  if (!elements.numberOfQuestions || !elements.questionAvailability) return;
  const availableCount = getAvailableQuestionsForCurrentSelection().length;
  const maxAllowed = Math.min(MAX_QUESTION_COUNT, availableCount);
  const minAllowed =
    availableCount === 0 ? 0 : Math.min(MIN_QUESTION_COUNT, availableCount);
  elements.numberOfQuestions.min = String(minAllowed || 1);
  elements.numberOfQuestions.max = String(maxAllowed || 1);
  if (availableCount > 0) {
    const currentValue = Number(elements.numberOfQuestions.value) || minAllowed;
    elements.numberOfQuestions.value = String(
      Math.max(minAllowed, Math.min(maxAllowed, currentValue)),
    );
    elements.questionAvailability.textContent =
      `Available now: ${availableCount} questions. Choose ${minAllowed} to ${maxAllowed}. ` +
      `Time is automatic: 60 questions = 50 minutes.`;
  } else {
    elements.numberOfQuestions.value = "1";
    elements.questionAvailability.textContent =
      "No questions are available for this selection yet.";
  }
}

function getQuestionsForSubject(subject) {
  return state.questions.filter((question) => question.subject === subject);
}

function showQuizPanel() {
  elements.quizPanel.classList.remove("hidden");
  document.getElementById("intro").classList.add("hidden");
  elements.resultPanel.classList.add("hidden");
}

function showResultPanel() {
  elements.quizPanel.classList.add("hidden");
  elements.resultPanel.classList.remove("hidden");
}

function createOptionButton(optionKey, optionText) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "option-button";
  const label = document.createElement("strong");
  label.textContent = `${optionKey}.`;
  button.appendChild(label);
  button.append(` ${optionText}`);
  button.addEventListener("click", () => chooseAnswer(optionKey));
  return button;
}

function renderQuestion() {
  const questions = state.currentQuestions;
  const question = questions[state.currentQuestionIndex];
  elements.questionContainer.innerHTML = "";

  if (!question) {
    elements.questionContainer.innerHTML =
      "<p>No questions are available for this topic.</p>";
    return;
  }

  const questionBlock = document.createElement("div");
  questionBlock.className = "review-card";
  questionBlock.innerHTML = `
    <h3>Question ${state.currentQuestionIndex + 1} of ${questions.length}</h3>
    <p>${escapeHTML(question.text)}</p>
    <p><em>${escapeHTML(question.topic || "General")} | ${escapeHTML(question.difficulty || "All")}</em></p>
  `;

  elements.questionContainer.appendChild(questionBlock);

  const selected = state.answers[question.id];
  Object.entries(question.options).forEach(([optionKey, optionText]) => {
    const optionButton = createOptionButton(optionKey, optionText);
    if (selected === optionKey) {
      optionButton.classList.add("selected");
    }
    elements.questionContainer.appendChild(optionButton);
  });

  elements.quizTitle.textContent = `${question.subject} Practice Quiz`;
  elements.quizInfo.textContent = `${question.topic || "All topics"} | ${question.difficulty || "All levels"}`;
  renderProgressBar();
  elements.prevBtn.disabled = state.currentQuestionIndex === 0;
  elements.nextBtn.disabled =
    state.currentQuestionIndex === questions.length - 1;
}

function chooseAnswer(optionKey) {
  const question = state.currentQuestions[state.currentQuestionIndex];
  if (!question) return;
  state.answers[question.id] = optionKey;
  renderQuestion();
}

function nextQuestion() {
  if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
    state.currentQuestionIndex += 1;
    renderQuestion();
  }
}

function previousQuestion() {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex -= 1;
    renderQuestion();
  }
}

function submitQuiz(autoSubmit = false) {
  autoSubmit = autoSubmit === true;
  const questions = state.currentQuestions;
  if (!questions.length) {
    alert("Please start a quiz before submitting.");
    return;
  }
  const answerCount = Object.keys(state.answers).length;

  if (!autoSubmit && remainingSeconds > 0) {
    const confirmed = confirm(
      "The timer is still running. Are you sure you want to submit now?",
    );
    if (!confirmed) {
      return;
    }
  }

  if (!autoSubmit && answerCount === 0) {
    alert("Please answer at least one question before submitting.");
    return;
  }

  stopTimer();

  const correctCount = questions.reduce((count, question) => {
    return count + (state.answers[question.id] === question.answer ? 1 : 0);
  }, 0);

  const score = Math.round((correctCount / questions.length) * 100);
  elements.scoreText.textContent = `Hello ${elements.userName.value || "Student"}, you scored ${correctCount} out of ${questions.length} (${score}%).`;

  elements.reviewList.innerHTML = questions
    .map((question) => {
      const selected = state.answers[question.id] || "No answer";
      const correct = question.answer;
      const isCorrect = selected === correct;
      const selectedLabel = getAnswerLabel(question, selected);
      const correctLabel = getAnswerLabel(question, correct);
      return `
        <section class="review-card">
          <h3>${escapeHTML(question.text)}</h3>
          <p><strong>Your answer:</strong> ${escapeHTML(selectedLabel)}</p>
          <p><strong>Correct answer:</strong> ${escapeHTML(correctLabel)}</p>
          <p>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</p>
          <p><strong>Explanation:</strong> ${escapeHTML(question.explanation || "No explanation provided.")}</p>
        </section>
      `;
    })
    .join("");

  saveResult({
    name: elements.userName.value || "Anonymous",
    subject: state.currentSubject,
    topic: elements.topicSelect?.value || "all",
    difficulty: elements.difficultySelect?.value || "all",
    language: elements.languageSelect.value,
    date: new Date().toLocaleString(),
    score,
    correctCount,
    total: questions.length,
  });

  showResultPanel();
}

function restartQuiz() {
  document.getElementById("intro").classList.remove("hidden");
  elements.quizPanel.classList.add("hidden");
  elements.resultPanel.classList.add("hidden");
  state.answers = {};
  state.currentQuestionIndex = 0;
  stopTimer();
  if (elements.timerText) {
    elements.timerText.textContent = "";
  }
}

function showSampleQuestions() {
  alert(
    "Choose a language, topic, level, and question count. The app shows the available range before you start.",
  );
}

function setupApp() {
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
      setTheme(isDark ? "light" : "dark");
    });
  }

  const adminPasswordInput = document.getElementById("adminPassword");
  const adminLoginButton = document.getElementById("adminLoginBtn");

  if (adminPasswordInput) {
    adminPasswordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        attemptAdminLogin();
      }
    });
  }

  if (adminLoginButton) {
    adminLoginButton.type = "button";
    adminLoginButton.addEventListener("click", attemptAdminLogin);
  }

  if (elements.subjectSelect) {
    populateSubjects();
    populateDisplayLanguages();
    populateDifficultySelect(elements.difficultySelect, true);
    elements.subjectSelect.value = state.currentSubject;
    populateTopicSelect(state.currentSubject);
    elements.difficultySelect.value = "all";
    updateQuestionAvailability();
    elements.subjectSelect.addEventListener("change", () => {
      state.currentSubject = elements.subjectSelect.value;
      populateTopicSelect(elements.subjectSelect.value);
      updateQuestionAvailability();
    });
    elements.topicSelect?.addEventListener("change", updateQuestionAvailability);
    elements.difficultySelect?.addEventListener(
      "change",
      updateQuestionAvailability,
    );
    elements.startQuizBtn.addEventListener("click", () => {
      const studentName = elements.userName.value.trim();
      if (!studentName) {
        alert("Please enter your name before starting the quiz.");
        elements.userName.focus();
        return;
      }
      const selectedDifficulty = elements.difficultySelect?.value || "all";
      const selectedTopic = elements.topicSelect?.value || "all";
      const requestedCount = Number(elements.numberOfQuestions?.value) || 20;
      state.currentSubject = elements.subjectSelect.value;
      const availableQuestions = getQuestionsForSubjectAndDifficulty(
        state.currentSubject,
        selectedDifficulty,
        selectedTopic,
      );
      const maxAllowed = Math.min(MAX_QUESTION_COUNT, availableQuestions.length);
      const minAllowed =
        availableQuestions.length === 0
          ? 0
          : Math.min(MIN_QUESTION_COUNT, availableQuestions.length);
      const count = Math.max(
        minAllowed,
        Math.min(maxAllowed, requestedCount),
      );
      if (!availableQuestions.length) {
        alert(
          "No questions found for that subject, topic, and level. Ask admin to add more questions.",
        );
        return;
      }
      const actualCount = Math.min(count, availableQuestions.length);
      if (actualCount < count) {
        alert(
          `Only ${actualCount} questions are available for the selected topic and difficulty. The quiz will use those questions.`,
        );
      }
      state.currentQuestions = shuffleArray(availableQuestions).slice(
        0,
        actualCount,
      );
      state.currentQuestionIndex = 0;
      state.answers = {};
      showQuizPanel();
      renderQuestion();
      startTimer(calculateQuizDuration(state.currentQuestions.length));
    });
    elements.viewSamplesBtn.addEventListener("click", showSampleQuestions);
    elements.prevBtn.addEventListener("click", previousQuestion);
    elements.nextBtn.addEventListener("click", nextQuestion);
    elements.submitBtn.addEventListener("click", () => submitQuiz(false));
    elements.restartBtn.addEventListener("click", restartQuiz);
  }

  if (elements.addQuestionBtn) {
    populateDifficultySelect(elements.newDifficulty, false);
    populateAdminTopicSelect();
    elements.newSubject?.addEventListener("change", () => {
      populateAdminTopicSelect(elements.newSubject.value);
    });
    elements.addQuestionBtn.addEventListener("click", addNewQuestion);
  }
  if (elements.adminQuestionSearch) {
    elements.adminQuestionSearch.addEventListener("input", () => {
      adminCurrentPage = 0;
      renderAdminQuestions();
    });
  }
  if (elements.exportQuestionsBtn) {
    elements.exportQuestionsBtn.addEventListener("click", () => {
      downloadJSON(state.questions, "cbt-questions.json");
    });
  }
  if (elements.exportResultsBtn) {
    elements.exportResultsBtn.addEventListener("click", () => {
      downloadJSON(loadAdminResults(), "cbt-admin-results.json");
    });
  }
  if (elements.importQuestionsInput) {
    elements.importQuestionsInput.addEventListener("change", (event) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        importQuestionsFile(file);
      }
    });
  }

  if (elements.historyList) {
    renderHistory();
  }
}

function attemptAdminLogin() {
  const passwordInput = document.getElementById("adminPassword");
  const loginPanel = document.getElementById("loginPanel");
  const dashboardPanel = document.getElementById("dashboard");
  const value = passwordInput?.value.trim() || "";

  if (value === ADMIN_PASSWORD) {
    loginPanel?.classList.add("hidden");
    dashboardPanel?.classList.remove("hidden");
    renderAdminDashboard();
  } else {
    alert("Incorrect admin password. Use mujahid2026.");
  }
}

function renderAdminDashboard() {
  elements.questionCount.textContent = `${state.questions.length} questions`;
  const results = loadAdminResults();
  elements.resultCount.textContent = `${results.length} attempts`;
  renderAdminQuestions();
  renderAdminResults(results);
}

const ADMIN_PAGE_SIZE = 20;
let adminCurrentPage = 0;

function renderAdminQuestions() {
  if (!elements.questionList) return;
  const searchValue =
    elements.adminQuestionSearch?.value.trim().toLowerCase() || "";
  const filtered = state.questions.filter((question) => {
    if (!searchValue) return true;
    const content =
      `${question.subject} ${question.topic} ${question.difficulty} ${question.text} ${Object.values(question.options).join(" ")}`.toLowerCase();
    return content.includes(searchValue);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / ADMIN_PAGE_SIZE));
  if (adminCurrentPage >= totalPages) adminCurrentPage = totalPages - 1;

  const start = adminCurrentPage * ADMIN_PAGE_SIZE;
  const pageItems = filtered.slice(start, start + ADMIN_PAGE_SIZE);

  const cardsHTML = pageItems
    .map((question, index) => {
      const globalIndex = start + index;
      return `
        <section class="review-card">
          <p><strong>${globalIndex + 1}. [${escapeHTML(question.subject)} | ${escapeHTML(question.topic)} | ${escapeHTML(question.difficulty)}]</strong> ${escapeHTML(question.text)}</p>
          <p>A: ${escapeHTML(question.options.A)}</p>
          <p>B: ${escapeHTML(question.options.B)}</p>
          <p>C: ${escapeHTML(question.options.C)}</p>
          <p>D: ${escapeHTML(question.options.D)}</p>
          <p><strong>Answer:</strong> ${escapeHTML(getAnswerLabel(question, question.answer))}</p>
          <button class="delete-button" data-id="${escapeHTML(question.id)}">Delete</button>
        </section>
      `;
    })
    .join("");

  const paginationHTML = totalPages > 1 ? `
    <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-top:16px;flex-wrap:wrap;">
      <button id="adminPrevPage" class="secondary" style="padding:8px 18px;" ${adminCurrentPage === 0 ? "disabled" : ""}>← Prev</button>
      <span style="font-size:0.9rem;color:var(--text-muted)">Page ${adminCurrentPage + 1} of ${totalPages}  (${filtered.length} total)</span>
      <button id="adminNextPage" class="secondary" style="padding:8px 18px;" ${adminCurrentPage >= totalPages - 1 ? "disabled" : ""}>Next →</button>
    </div>
  ` : `<p style="font-size:0.85rem;color:var(--text-muted);margin-top:10px;">${filtered.length} question${filtered.length !== 1 ? "s" : ""}</p>`;

  elements.questionList.innerHTML = cardsHTML + paginationHTML;

  elements.questionList.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      state.questions = state.questions.filter(
        (question) => question.id !== id,
      );
      saveQuestions();
      populateSubjects();
      renderAdminDashboard();
    });
  });

  const prevBtn = document.getElementById("adminPrevPage");
  const nextBtn = document.getElementById("adminNextPage");
  if (prevBtn) prevBtn.addEventListener("click", () => {
    adminCurrentPage--;
    renderAdminQuestions();
    elements.questionList.scrollIntoView({ behavior: "smooth" });
  });
  if (nextBtn) nextBtn.addEventListener("click", () => {
    adminCurrentPage++;
    renderAdminQuestions();
    elements.questionList.scrollIntoView({ behavior: "smooth" });
  });
}

function renderHistory() {
  const results = loadResults();
  if (!elements.historyList) return;
  if (!results.length) {
    elements.historyList.innerHTML = "<p>No quiz history available yet.</p>";
    return;
  }

  elements.historyList.innerHTML = results
    .map((result, index) => {
      return `
        <section class="review-card">
          <p><strong>${index + 1}. ${result.name}</strong></p>
          <p>${result.subject} | ${result.topic || "All topics"} | ${result.difficulty || "All"} | ${result.language}</p>
          <p>${result.correctCount}/${result.total} correct</p>
          <p>Score: ${result.score}%</p>
          <p>${result.date}</p>
        </section>
      `;
    })
    .join("");
}

if (elements.clearHistoryBtn) {
  elements.clearHistoryBtn.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_RESULTS_KEY);
    renderHistory();
  });
}

function renderAdminResults(results) {
  if (!elements.resultList) return;
  if (!results.length) {
    elements.resultList.innerHTML = "<p>No quiz attempts saved yet.</p>";
    return;
  }
  elements.resultList.innerHTML = results
    .map((result) => {
      return `
        <section class="review-card">
          <p><strong>${result.name}</strong> | ${result.subject} | ${result.topic || "All topics"} | ${result.difficulty || "All"} | ${result.language}</p>
          <p>${result.correctCount}/${result.total} correct</p>
          <p>Score: ${result.score}%</p>
          <p>${result.date}</p>
        </section>
      `;
    })
    .join("");
}

function addNewQuestion() {
  const subject = elements.newSubject.value;
  const topic = elements.newTopic?.value || getTopicsForSubject(subject)[0] || "General";
  const text = elements.newQuestionText.value.trim();
  const optionA = elements.newOptionA.value.trim();
  const optionB = elements.newOptionB.value.trim();
  const optionC = elements.newOptionC.value.trim();
  const optionD = elements.newOptionD.value.trim();
  const answer = elements.newCorrect.value;

  if (!text || !optionA || !optionB || !optionC || !optionD) {
    alert("Please fill in the question and all answer options.");
    return;
  }

  const id = `${subject.toLowerCase()}-${Date.now()}`;
  state.questions.push({
    id,
    subject,
    topic,
    difficulty: elements.newDifficulty?.value || "Easy",
    text,
    options: { A: optionA, B: optionB, C: optionC, D: optionD },
    answer,
    explanation: elements.newExplanation.value.trim(),
  });
  saveQuestions();
  populateSubjects();
  populateTopicSelect(state.currentSubject);
  populateAdminTopicSelect(subject);
  renderAdminDashboard();

  elements.newQuestionText.value = "";
  elements.newOptionA.value = "";
  elements.newOptionB.value = "";
  elements.newOptionC.value = "";
  elements.newOptionD.value = "";
  elements.newDifficulty.value = "Beginner";
  elements.newExplanation.value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  loadQuestions();
  populateSubjects();
  loadTheme();
  setupApp();
});
