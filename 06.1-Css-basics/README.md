# 🎨 CSS Basics — Styling the Web (`06.1-Css-basics`)

This module introduces **CSS (Cascading Style Sheets)** — the language responsible for **visual design, layout, and responsiveness** of web pages.

> 🎯 Goal: Understand **how CSS works, where it can be written, and how to apply it to real projects**, including a styled login page.

---

## 📁 Folder Structure

06.1-Css-basics/
├── 01_basics/
│ ├── index.html
│ └── styles.css
├── 02_login_project/
│ └── login.html
└── README.md

yaml
Copy code

Each folder focuses on **concept → practice → real usage**.

---

## 🌐 What is CSS?

**CSS (Cascading Style Sheets)** is used to:
- Control layout and appearance of HTML
- Separate **content (HTML)** from **design (CSS)**
- Build responsive and user-friendly interfaces

CSS works by selecting HTML elements and applying styles to them.

---

## 🧠 Current State of CSS (Modern Usage)

Modern CSS is:
- Component-based
- Responsive by default
- Browser-optimized
- Used with frameworks (Tailwind, Bootstrap) and libraries (React)

Core concepts remain essential before moving to frameworks.

---

## 🧩 Where Can CSS Be Written? (3 Ways)

### 1️⃣ Inline CSS
Written directly inside HTML elements.

```html
<h1 style="color: red;">Hello</h1>
❌ Not scalable

❌ Hard to maintain

2️⃣ Internal CSS
Written inside <style> tag in HTML.

html
Copy code
<style>
  h1 { color: blue; }
</style>
✔️ Good for small pages

❌ Not reusable

3️⃣ External CSS (Recommended)
Written in a separate .css file.

html
Copy code
<link rel="stylesheet" href="styles.css">
✔️ Clean

✔️ Reusable

✔️ Industry standard

📘 01_basics — CSS Fundamentals
Files:

index.html

styles.css

Concepts Covered
CSS syntax:

css
Copy code
selector {
  property: value;
}
Selectors:

Element (p, h1)

Class (.box)

ID (#title)

Colors, background, borders

Fonts & text styling

Box model (margin, padding, border)

Width, height, alignment

Basic layout understanding

This folder builds strong CSS foundation.

🔐 02_login_project — Login Page Project
File:

login.html

Project Features
Email input

Password input

Login button

Clean and simple UI

CSS styling for:

Layout

Inputs

Buttons

Spacing

Colors

Skills Applied
Real-world form styling

Input focus & hover effects

Centering elements

Visual hierarchy

Basic responsive behavior

This project demonstrates practical CSS usage.

🎯 Learning Outcomes
After completing this module, you can:

Understand how CSS works internally

Write CSS in all 3 ways

Create clean and maintainable styles

Style real-world components like forms

Build the base for responsive design

🚀 What Comes Next?
Advanced CSS (Flexbox & Grid)

Responsive layouts

Animations & transitions

CSS frameworks (Tailwind / Bootstrap)

📌 Module Status
✔️ CSS Basics Completed
➡️ Ready for Advanced Layout Systems

⭐ If this module helped you, consider starring the repository.