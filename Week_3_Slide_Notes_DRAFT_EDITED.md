# Data Visualization, Fall 2026, Week 3: Slide Notes (DRAFT)

<!--
EDITING GUIDE
- Edit any note text freely. Plain text is fine; **bold** and *italic* will carry over into the handout.
- Keep each "## Slide N" heading line so notes stay matched to the right slide.
  (You can change the title after the dash.)
- To leave a slide with no note, delete the text under its heading but keep the heading.
- Lines starting with "> Check:" flag spots where the slide simplifies or has a small
  inaccuracy. Keep, rewrite, or delete them as you see fit.
- This comment block won't appear in the handout.
-->

## Slide 1 — Title: Data Visualization, Week 3

## Slide 2 — Agenda

## Slide 3 — Section: Found Visualizations

## Slide 4 — Section: Introduction to Code

## Slide 5 — Our Workspace

## Slide 6 — Languages and Key Definitions

The web uses three languages with different jobs. 
**HTML** is a *markup* language: it labels content (this is a heading, this is a paragraph). 
**CSS** is a *stylesheet* language: it controls appearance. 
**JavaScript** is a *programming* language: it involves logic, meaning it can make decisions, repeat actions, and calculate. 

## Slide 7 — How Many Programming Languages Are There?
The Online Historical Encyclopaedia of Programming Languages (HOPL) records nearly 9,000 languages. Roughly 700 are notable enough to be documented, about 50 are in regular real-world use, and 10–20 account for most code written today. You don't need to learn "all of programming," just a small, well-chosen set. Lets take a closer look at these top 10 next.

## Slide 8 — Language Popularity: Stack Overflow Survey
here are 2 surveys on the world of programming languages that can help us frame how we see coding lanuages and make use of them. the first is the Stack Overflow questionair shown here. the second is a company that crawls websites and applications to see what languages are currently being used

Results from the 2025 Stack Overflow Developer Survey. Note that JavaScript and HTML/CSS, the languages of this course, are at the top for all coders and for profresional developers. However python is the top language for learning to code.

## Slide 9 — Language Popularity: TIOBE Index

A second popularity measure, the TIOBE Index, which ranks languages by signals such as the number of skilled engineers, courses, and vendors, gathered from search engines and major websites. Python leads by a wide margin. As the quoted text stresses, TIOBE measures *popularity*, not which language is best or which has the most code written in it. 
Comparing slides 8 and 9 is itself a lesson in data literacy: different methodologies produce different rankings. 

## Slide 10 — High-Level and Low-Level Languages

The same "Hello, World!" program written in languages ordered from most human-readable (top) to most machine-like (bottom). High-level languages like Python and JavaScript are abstract and readable by you and me as we would read a sentence, far from the hardware. Moving down, C and C++ give more control over memory, Assembly names individual processor instructions, and machine code is raw numbers the CPU executes directly. Each line also notes what the language is typically used for. Higher-level languages trade some speed and control for ease of writing.

## Slide 11 — Logic vs. Syntax

The key idea: **programming languages share logic, not syntax.** *Logic* is the underlying set of principles for accomplishing a task (conditions, repetition, storing values). *Syntax* is the specific grammar and punctuation of a given language. Once you understand the logic in one language, learning another is mostly learning new syntax, which is why the concepts later in this deck transfer well beyond JavaScript. understanding logic also sets you up for success 

## Slide 12 — Code Basics: The Most Important Component

A quoted passage arguing that good code is written for people first. It cites the classic MIT textbook *Structure and Interpretation of Computer Programs*: programs should be written for people to read, and only incidentally for machines to execute. Clean code is organized, concise, and obvious even without heavy documentation. The red addendum is a modern twist: AI coding tools now read your comments too, so clear comments help both human and machine collaborators understand your intent.

## Slide 13 — Three Parts: HTML, CSS, and JavaScript (Theater Analogy)

A theater analogy - credited to Agnes Chang of The New York Times who used to teach visaulization for bioinformatics here at columbia. You can think of these when you decide on where you should assign colors for example, vs. assign programatic data driven colors. 

## Slide 14 — Code Basics: Who Reads Our Code?

Your code has several audiences: the machine that runs it, you as you write it, and your future self (plus anyone who inherits your work). Because of that, four habits pay off: stay organized, structure code clearly, give variables and functions meaningful names, and comment generously.

## Slide 15 — Code Basics: Commenting Your Code

Each language marks comments differently. **HTML:** `<!-- comment -->`. **CSS:** `/* comment */`. **JavaScript:** `// comment` for a single line (JavaScript also accepts `/* */` for multi-line comments). Comments are ignored when the code runs. Most editors display them in gray, as in the example. "Commenting out" a line is also a handy debugging trick: it disables code temporarily without deleting it.

## Slide 16 — HTML Basics: The DOM

The **Document Object Model (DOM)** is the hierarchical, tree-like structure of an HTML page. HTML uses paired tags: an opening tag like `<h1>` and a closing tag like `</h1>` with a slash. Tags MUST nest inside one another: `<html>` contains `<body>`, which contains headings and paragraphs. In-class activity: open any web page in Chrome and look at its structure.

## Slide 17 — Your Browser Is a Powerful Tool

Your browser's developer tools (right-click, then "Inspect") show the live HTML, CSS, and JavaScript behind any page. 
In addition to being a tool for debugging your own work, it is also a great resource to look at websites others have built, Inspect Element (inspectelement.org), is a practical guide to data investigations. It shows how browser tools can be used to find undocumented data sources, automate browsing, and build your own datasets, a valuable skill for data visualization and journalism.

## Slide 18 — HTML Basics: Page Skeleton

The minimal structure every HTML page shares. `<!DOCTYPE html>` declares the document type. `<html lang="en">` opens the page and declares English. The `<head>` holds information *about* the page that isn't displayed on it, such as the character encoding (`utf-8`) and the title shown in the browser tab. The `<body>` holds everything visible. The color-coded diagram shows how each opening tag has a matching closing tag at the same indentation level.

## Slide 19 — HTML Basics: Formatting Tags

Tags can change how text appears. `<strong>` makes text bold (and signals importance), and `<i>` makes it italic. Both sit inside the `<body>`, and each wraps only the text it affects.

## Slide 20 — HTML Basics: Nesting Tags

Tags can be layered to combine effects: here, text wrapped in both `<strong>` and `<i>` is bold *and* italic. The rule is that tags close in reverse order of opening. If `<strong>` opens first, then `<i>`, the `</i>` must close before `</strong>`.

## Slide 21 — HTML Basics: Spaces and Line Breaks

Pressing the spacebar or Enter in your HTML file doesn't create visible spacing on the page, since HTML collapses extra whitespace. To control spacing you need specific code: `&nbsp;` for a non-breaking (fixed) space, `<br>` for a line break, and `<p></p>` paragraph tags, which automatically add a break before and after. Because whitespace doesn't matter to the computer, you're free to indent your code for readability.

## Slide 22 — CSS Basics: Anatomy of a Rule

A CSS rule has a **selector** (which elements to style), then curly braces containing one or more declarations. Each declaration is a **property** (the category of style), a colon, a **value**, and a semicolon. Here, `p` selects all paragraphs, and `background-color: #aaaaaa;` gives them a gray background. `#aaaaaa` is a hex color code.

## Slide 23 — CSS Basics: Formatting Doesn't Matter (but Readability Does)

All four versions of the rule do exactly the same thing, because CSS ignores whitespace and line breaks. The question is which is easiest for a *person* to read. The convention is one declaration per line, indented, with the closing brace on its own line, which ties back to writing code for human readers.

## Slide 24 — CSS Basics: Rules Apply to Every Matching Tag

CSS defines the style of content inside tags, and a rule applies to *every* instance of that tag on the page. The three-column layout shows the HTML, the CSS, and the result in the browser: the paragraph appears red in a serif font.

## Slide 25 — CSS Basics: One Rule, Many Elements
 You write the style once and it applies everywhere, which keeps design consistent and code short. The next slides show how to style specific elements differently.

## Slide 26 — Naming Conventions

Rules for naming things (variables, functions, classes, IDs): names can't start with a number, can't contain spaces, can't include special characters, and can't be reserved keywords (like `var` or `function`). Names are also case-sensitive, so `myData` and `mydata` are different. Two common styles for multi-word names: `camelCase` and `under_score` (snake_case). Pick one and use it consistently.

> Check: Strictly, `_` and `$` are allowed in JavaScript names, and hyphens are common in CSS class names (e.g. `main-title`). "No special characters" is a safe beginner rule.

## Slide 27 — Selectors: Classes and IDs

To target specific elements rather than every tag of one type, give them a **class** or an **id**. A class can be applied to many elements. An id should be unique, used on only one element. In CSS, classes are selected with a dot (`.A`) and ids with a hash (`#A`). Here, the element with id A gets 24px text, and elements with class A turn red.

## Slide 28 — Selectors: Predict the Result

In class exercise. Three divs: one with id A, one with class A, and one with both classes A and B. The body sets default text to 12px black. Work it out: the id-A div is 24px (from `#A`) and black (it has no class). The class-A div is red and 12px. The div with classes A and B gets red from `.A` and then green from `.B`. Because `.B` appears later in the stylesheet, green wins.

## Slide 29 — Selectors: The Result

The answer to slide 28, shown in the code editor and browser: large black "Text with id of A," small red "Text with class of A," and small green "Text with class A and class B." Also note the `<head>` loading two external files: a `<script>` tag for the D3 library and a `<link>` tag for the stylesheet.

## Slide 30 — Selectors: Order Matters

Same HTML, two stylesheets. On the left `.B` comes after `.A`, so the A-and-B div is green. On the right `.B` has been moved *before* `.A`, so `.A` wins and the div turns red. This is the "cascade" in Cascading Style Sheets: when two equally specific rules conflict, the one written later wins.

## Slide 31 — HTML/CSS References

Two go-to references for looking up tags, properties, and syntax: **MDN Web Docs** (developer.mozilla.org), the most thorough and authoritative, and **W3Schools** (w3schools.com), which is beginner-friendly with quick try-it examples. Nobody memorizes all of HTML and CSS; looking things up is a normal part of coding.

## Slide 32 — Order of Execution

HTML is drawn in the order it's written, top to bottom, and CSS rules are applied top to bottom (which is why later rules win, as on slide 30). JavaScript is different: it doesn't simply run line by line from the top. Functions can be defined in one place and called elsewhere, and code can wait for events like clicks or for data to finish loading.

## Slide 33 — JavaScript Basics: Components of Code

A roadmap for the JavaScript section, which divides code into two categories. **Things:** primitives (single values like numbers and text) and structures (collections of values). **Instructions we give things:** conditional statements and operators.

## Slide 34 — JavaScript Basics: Variables

A variable is a named container for a value. JavaScript has three keywords for creating one: `var` (the original, general-purpose keyword), `let` (a variable whose value can change), and `const` (a constant that can't be reassigned). 
Modern JavaScript style prefers `let` and `const` over `var`, since `var` has looser scoping rules that can cause bugs. You'll still see `var` in older examples, including many D3 tutorials.

exmaple here - Writing `a = a + 1` updates `a` to 3. but is a was declared as a const, this would cause an error.


## Slide 35 — JavaScript Basics: Primitives

Primitives are the simplest data types, the individual values code works with. Listed: integers (whole numbers), floats (decimals), booleans (`true` or `false`), strings (text in quotes, including `"20"`), and characters (a single letter or symbol).


## Slide 36 — JavaScript Basics: Mixing Types

The type of a value changes what operations do. `1.0 + 1` is numeric addition, giving 2. `"1" + "1"` joins two strings, giving `"11"`, not 2. The question: what is `"1" + 1`? Think about it before the next slide.

## Slide 37 — JavaScript Basics: Try It in the Console

Answers from the browser console. `"1" + 1` and `1 + "1"` both give `"11"`: when `+` sees a string, it converts the number to text and joins them. `1 + 1.0` gives 2. To do real math with a string, convert it first: `parseFloat("1")` turns it into the number 1. Other operators such as `*` convert strings to numbers automatically (`"1" * 1` is 1), and so does `Math.round("1")`. This matters because data loaded from files often arrives as strings. In-class activity: open the console (right-click, Inspect, Console tab) and try these.

## Slide 38 — JavaScript Basics: Data Structures

Two ways to organize sets of values: **arrays**, which are ordered lists written with square brackets `[ ]`, and **objects**, which are dictionaries of labeled values written with curly braces `{ }`. Almost all data you visualize will arrive in one of these forms, or a combination.

## Slide 39 — Arrays: Syntax

Array syntax: square brackets, with values separated by commas, e.g. `[value, value, value]`.

## Slide 40 — Arrays: Examples

Arrays can hold integers, strings, a mix of types, repeated identical values, or even other arrays (a "list of lists"). Note that `[1, 2, 3, 4]` and `["1", "2", "3", "4"]` look alike but contain different types, numbers versus strings.

## Slide 41 — Arrays: Properties

Arrays are linear. Every item has an **index**, its position, and indexing starts at 0, not 1, so the first item is at index 0. Because items are ordered, arrays can be sorted, and every array has a **length** (the number of items).

## Slide 42 — Objects: Syntax

Object syntax: curly braces containing key–value pairs, each written `key: value` and separated by commas, e.g. `{key: value, key: value}`. The key is a label you use to look up its value.

## Slide 43 — Objects: Examples

Keys can be words, numbers written as strings, or codes like geographic IDs (`geoid`). Values can be any type. The crucial rule: **keys must be unique** within an object. The last example is wrong because it uses `"geoid3"` twice, so you couldn't tell which value you'd get. More importantly - JavaScript doesn't throw an error here. It silently keeps the last value (90), which makes duplicate keys an easy bug to miss.

## Slide 44 — Objects: Properties
ojbects are also calle didctionaries in python, because theya re in fact dictionary lookups.
Unlike arrays, objects are not linear. There is no index and no "first" item, so an object can't be sorted directly (though you can pull its keys or values into an array and sort that). Objects don't have a length either, but you can count their keys or values. JSON (JavaScript Object Notation), one of the most common data formats on the web, is based on this object syntax.

## Slide 45 — Arrays vs. Objects: Practice

Given `k = [5, 2, 6]` and `j = {"A":1, "B":2, "C":4}`. Array items are reached by position: `k[0]` is 5. Object items are reached by key: `j["A"]` is 1. Answers: `k[1]` is 2. The value 6 is found with `k[2]`. The index of 2 in `k` is 1. The "index of the value 2" in `j` is a trick question, since objects have no index; you find it by its key, `j["B"]`.

## Slide 46 — Combining Arrays and Objects

Structures can be nested to represent more complex data: an array of arrays, an array of objects, an object containing objects, or an object containing arrays. The array of objects is especially important; it's the usual shape of tabular data in JavaScript, with one object per row.

## Slide 47 — The Same Data in Three Formats

One small dataset (foods and deliciousness ratings) in three forms: an Excel spreadsheet, a CSV file (plain text, with commas between values and one row per line), and JSON. When JavaScript loads the CSV, it becomes an array of objects: each row is an object, and the column headers become the keys.

## Slide 48 — JavaScript Basics: Components (Recap)

Returns to the roadmap from slide 33. "Things" (primitives and structures) are done; next come the instructions we give them: operators and conditional statements.

## Slide 49 — JavaScript Basics: Operators

**Math operators:** `+`, `-`, `*`, `/`, and `%`. The `+` operator also joins strings (`"This" + "class"` gives `"Thisclass"`), which is handy for building HTML text. `%` returns the remainder of a division: `7 % 2` is 1. **Comparison operators:** `>`, `<`, `>=`, `<=`, plus two kinds of equality. `==` compares values loosely after converting types (`1 == "1"` is true), while `===` also requires the same type (`1 === "1"` is false). Prefer `===` to avoid surprises. **Logical operators:** `&&` (and), `||` (or), `!` (not), for combining conditions such as "divisible by 3 AND 5."

> Check: The slide labels `%` as "mode"; the standard name is "modulo" (or "remainder").

## Slide 50 — JavaScript Basics: Logic

Three structures that control how code flows, each shown in plain English beside its code. **if/else:** test a condition and do one thing if it's true, another if not (e.g., print "ok" if `x % 5 == 0`, meaning x is divisible by 5). **for loop:** repeat with a counter, giving a start (`i = 0`), a limit (`i < 100`), and a change each round (`i++`, add 1). **while loop:** repeat as long as a condition stays true, updating the counter yourself inside the loop. Both loop examples print 0 through 99.

> Check: JavaScript keywords are lowercase (`if`, `else`, `for`, `while`, `var`). Capitalized versions as written on the slide would cause errors if typed in exactly.

## Slide 51 — JavaScript Basics: Functions

A function is a reusable, named block of code. It takes an input, performs operations, and uses `return` to send back an output. `addThree(input)` returns `input + 3`, so `addThree(3)` gives 6 and `addThree(22)` gives 25. Write the logic once, then call it with different inputs.

## Slide 52 — Demo 1: Logic Exercise

Group exercise: find all numbers from 1 to 100 divisible by 3, by 5, or by both (a version of the classic "FizzBuzz" problem). Start in **pseudocode**, plain-language steps written before any real code. Step 1 is given: loop through the numbers 1 to 100. Think about the next steps: for each number, how do you test divisibility? (Hint: `%` from slide 49.) Which check should come first, and how do you combine conditions with `&&` or `||`?

## Slide 53 — Assignments

## Slide 54 — Where to Find Visualizations

Five places where strong data visualization work comes from, previewed in the following slides: journalism (long and short forms), creative agencies and advertising, individual authors and creators, awards and conferences, and academic research. Useful sources for your found-visualization assignments.

## Slide 55 — Journalism

Newsrooms are leading producers of data visualization: The New York Times, The Washington Post, The Guardian, the LA Times (video), ProPublica, and The Economist. Examples shown include interactive graphics like "You Draw It," where readers sketch their guess before seeing the real data, a parole-risk simulation, election seat charts, and a climate piece on hotter summers.

## Slide 56 — The New York Times: Year in Visual Stories

The New York Times' annual "Year in Visual Stories and Graphics" roundups (2020 and 2023 shown). These are an excellent way to browse a whole year of high-quality news graphics in one place, and a good starting point for finding examples to analyze.

## Slide 57 — Research

Research labs and groups working in visualization: the Center for Spatial Research, Uber, Google Creative Lab, MIT Senseable City Lab, the UW Interactive Data Lab, the Visual Computing Group, and the Civic Data Design Lab. Examples include a live wind map of the U.S. and an atlas of lighting.

## Slide 58 — Agencies

Design studios known for data visualization: Pentagram, Fathom, Periscopic, and Stamen. Examples include The Refugee Project, a visualization of changes across editions of Darwin's *On the Origin of Species*, and Periscopic's U.S. gun deaths piece, which shows the "stolen years" of lives cut short.

## Slide 59 — People

Individual designers and creators worth following, with links to their sites: Richard The, Nicky Case (playable "explorable explanations"), Nadieh Bremer (Visual Cinnamon), Giorgia Lupi, Radical Cartography (Bill Rankin), Fell in Love with Data, Moritz Stefaner (Truth & Beauty), and Nathan Yau (FlowingData).

## Slide 60 — Events

Conferences and awards in the field: the Society for News Design (SND), IEEE VIS (the leading academic visualization conference), and the Information is Beautiful Awards. OpenVis Conf and the Eyeo Festival are no longer running, but their recorded talks are still well worth watching.
