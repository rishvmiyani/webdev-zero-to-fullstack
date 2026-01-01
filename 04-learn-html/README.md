# 📘 HTML Fundamentals — Complete Overview (`04-learn-html`)

This module covers **HTML from absolute basics to real-world page structure**.  
All concepts are demonstrated using **clean examples** inside individual `.html` files.

> 🎯 Goal: After completing this module, you should understand **how a web page is structured, written, and made accessible** using pure HTML.

---

## 📁 Folder Structure

04-learn-html/
├── index.html
├── headings.html
├── tables.html
├── forms.html
├── semantics.html
├── media.html
├── quiz.html
└── README.md

php-template
Copy code

Each file focuses on a **specific HTML concept** for clarity and revision.

---

## 🌐 What is HTML?

**HTML (HyperText Markup Language)** is the **standard language used to create web pages**.

- Defines **structure**, not design
- Works with CSS (styling) and JavaScript (logic)
- Browser reads HTML line-by-line and renders content

---

## 🧱 HTML Boilerplate (Basic Structure)

Every HTML page starts with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  Content goes here
</body>
</html>
Key Tags Explained
<!DOCTYPE html> → Tells browser HTML5 is used

<html> → Root element

<head> → Metadata (not visible on page)

<title> → Browser tab title

<body> → Visible content

📚 References: MDN, GeeksForGeeks

📝 Text Content & Typography
Headings
html
Copy code
<h1> to <h6>
Used for page hierarchy

h1 = most important

Paragraph
html
Copy code
<p>This is a paragraph</p>
Emphasis & Formatting
html
Copy code
<strong>Important</strong>
<b>Bold</b>
<em>Emphasis</em>
<i>Italic</i>
✔️ strong & em are semantic
❌ b & i are visual only

✍️ Lorem Ipsum (Dummy Text)
html
Copy code
Lorem ipsum dolor sit amet...
Used for layout testing and content placeholders.

📦 Containers & Layout Basics
Div (Block Element)
html
Copy code
<div>Content</div>
Used for grouping elements

Takes full width (block)

Inline Elements
html
Copy code
<span>, <img>, <a>
Do not break line

Used inside text

📋 Lists (Ordered & Unordered)
Unordered List
html
Copy code
<ul>
  <li>Item</li>
</ul>
Ordered List
html
Copy code
<ol>
  <li>Step</li>
</ol>
💡 Shortcut in VS Code:

css
Copy code
ul>li*5
🖼️ Images & Media
Image Tag
html
Copy code
<img src="image.jpg" alt="description" title="hover text">
alt → accessibility & SEO

Inline by default

Video
html
Copy code
<video src="video.mp4" width="300" controls></video>
📊 Tables
html
Copy code
<table>
  <tr>
    <th>Name</th>
    <td>Rishv</td>
  </tr>
</table>
Tags:

<table> → table container

<tr> → row

<th> → heading cell

<td> → data cell

🧾 Forms & Inputs
html
Copy code
<form>
  <input type="text" placeholder="Name">
  <input type="email">
  <button>Submit</button>
</form>
Common Attributes
placeholder

required

name

value

title

🔄 Progress & Search Tags
Progress
html
Copy code
<progress value="70" max="100"></progress>
Search
html
Copy code
<input type="search">
🧠 Semantic HTML (Structure)
Semantic tags improve readability, SEO, and accessibility.

html
Copy code
<header>Top section</header>
<nav>Navigation</nav>
<main>Main content</main>
<aside>Sidebar</aside>
<footer>Footer</footer>
✔️ Preferred over <div> everywhere

🖼️ Figure & Caption
html
Copy code
<figure>
  <img src="img.jpg">
  <figcaption>Description</figcaption>
</figure>
♿ Accessibility (ARIA Basics)
Used for screen readers:

html
Copy code
<nav aria-label="Main navigation"></nav>
Improves usability for visually impaired users.

📱 Responsive Web Basics (HTML Role)
HTML supports responsiveness by:

Using semantic structure

Avoiding fixed widths

Supporting responsive media

Actual responsiveness is handled by CSS, but HTML must be written correctly.

🧪 Quiz File
quiz.html contains:

Concept check questions

Practical revision

Self-assessment after completing HTML

📌 Key Takeaways
HTML defines structure, not style

Semantic HTML is industry standard

Accessibility matters

Clean structure = easier CSS & JS later

🔗 References
📘 MDN Web Docs

📗 GeeksForGeeks

📙 W3Schools

✅ Module Status
✔️ Completed core HTML
➡️ Ready for CSS & layout systems

⭐ If this module helped you, consider giving the repository a star.

