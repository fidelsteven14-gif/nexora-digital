/*
========================================================
NEXORA DIGITAL
TECHNOLOGY-GUIDES.JS

JAVASCRIPT TECHNOLOGY GUIDE

This file provides the learning content for:

technology-guides.html

There are no quizzes in this file.
It contains learning notes and practical examples only.
========================================================
*/


const technologyGuide = [

    /* ====================================================
       LESSON 01
    ==================================================== */

    {
        number: "01",
        title: "What Is JavaScript?",

        content: `

            <p>
                JavaScript is a programming language commonly
                used to make web pages interactive and dynamic.
                It can respond to user actions, update page
                content, communicate with servers and control
                many features of a web application.
            </p>

            <p>
                In a browser, JavaScript can work with the
                webpage through the Document Object Model (DOM).
                This allows JavaScript to access and modify
                elements on a webpage.
            </p>

            <h3>What Can JavaScript Do?</h3>

            <ul>

                <li>
                    Respond to button clicks.
                </li>

                <li>
                    Validate information entered into forms.
                </li>

                <li>
                    Change webpage content.
                </li>

                <li>
                    Modify HTML elements and their properties.
                </li>

                <li>
                    Change styles and classes.
                </li>

                <li>
                    Fetch information from servers and APIs.
                </li>

                <li>
                    Create interactive web applications.
                </li>

            </ul>

        `
    },


    /* ====================================================
       LESSON 02
    ==================================================== */

    {
        number: "02",
        title: "JavaScript, HTML and CSS",

        content: `

            <p>
                Modern websites commonly use HTML, CSS and
                JavaScript together.
            </p>

            <h3>HTML</h3>

            <p>
                HTML provides the structure and content of a
                webpage.
            </p>

            <h3>CSS</h3>

            <p>
                CSS controls presentation, layout, colors,
                spacing, typography and visual appearance.
            </p>

            <h3>JavaScript</h3>

            <p>
                JavaScript provides programming logic and
                interaction.
            </p>

            <p>
                For example, HTML can create a button, CSS can
                make the button attractive, and JavaScript can
                determine what happens when the user clicks it.
            </p>

        `
    },


    /* ====================================================
       LESSON 03
    ==================================================== */

    {
        number: "03",
        title: "Adding JavaScript to a Webpage",

        content: `

            <p>
                JavaScript can be written directly inside an
                HTML document or stored in a separate JavaScript
                file.
            </p>

            <p>
                External JavaScript files are useful for keeping
                HTML and programming logic organized.
            </p>

            <h3>External JavaScript</h3>

            <pre><code>
&lt;script src="app.js"&gt;&lt;/script&gt;
            </code></pre>

            <p>
                The browser loads the JavaScript file and executes
                the code it contains.
            </p>

            <p>
                This is the approach being used by NEXORA DIGITAL.
                For example, this page uses
                <strong>technology-guides.js</strong> to provide
                its learning content.
            </p>

        `
    },


    /* ====================================================
       LESSON 04
    ==================================================== */

    {
        number: "04",
        title: "Variables",

        content: `

            <p>
                Variables allow a program to store information
                that can be used later.
            </p>

            <p>
                Modern JavaScript commonly uses
                <strong>let</strong> and
                <strong>const</strong> for variable declarations.
            </p>

            <h3>Using let</h3>

            <pre><code>
let userName = "Steven";

userName = "Alex";
            </code></pre>

            <p>
                A variable declared with
                <strong>let</strong> can be reassigned.
            </p>

            <h3>Using const</h3>

            <pre><code>
const websiteName = "NEXORA DIGITAL";
            </code></pre>

            <p>
                A variable declared with
                <strong>const</strong> cannot be reassigned.
            </p>

            <p>
                JavaScript also has the older
                <strong>var</strong> declaration, but modern
                code generally prefers
                <strong>let</strong> and
                <strong>const</strong>.
            </p>

        `
    },


    /* ====================================================
       LESSON 05
    ==================================================== */

    {
        number: "05",
        title: "Data Types",

        content: `

            <p>
                JavaScript programs work with different types
                of values.
            </p>

            <h3>Common Primitive Types</h3>

            <ul>

                <li>
                    <strong>String</strong> — text.
                </li>

                <li>
                    <strong>Number</strong> — numeric values.
                </li>

                <li>
                    <strong>BigInt</strong> — very large integers.
                </li>

                <li>
                    <strong>Boolean</strong> — true or false.
                </li>

                <li>
                    <strong>Undefined</strong> — a value that
                    has not been assigned.
                </li>

                <li>
                    <strong>Null</strong> — an intentional
                    absence of a value.
                </li>

                <li>
                    <strong>Symbol</strong> — a unique identifier.
                </li>

            </ul>

            <h3>Example</h3>

            <pre><code>
const name = "NEXORA";

const visitors = 100;

const websiteOnline = true;
            </code></pre>

            <p>
                JavaScript also has objects, including arrays,
                functions and many built-in objects.
            </p>

        `
    },


    /* ====================================================
       LESSON 06
    ==================================================== */

    {
        number: "06",
        title: "Operators",

        content: `

            <p>
                Operators allow JavaScript to perform
                calculations, comparisons and assignments.
            </p>

            <h3>Arithmetic Operators</h3>

            <pre><code>
const total = 10 + 5;

const difference = 10 - 5;

const product = 10 * 5;

const division = 10 / 5;
            </code></pre>

            <h3>Comparison Operators</h3>

            <pre><code>
5 === 5;

10 > 5;

3 < 8;
            </code></pre>

            <h3>Logical Operators</h3>

            <pre><code>
conditionA && conditionB;

conditionA || conditionB;

!condition;
            </code></pre>

            <p>
                Understanding operators is important because
                they form part of conditions and program logic.
            </p>

        `
    },


    /* ====================================================
       LESSON 07
    ==================================================== */

    {
        number: "07",
        title: "Conditional Statements",

        content: `

            <p>
                Conditional statements allow a program to make
                decisions based on conditions.
            </p>

            <h3>if Statement</h3>

            <pre><code>
const age = 20;

if (age >= 18) {
    console.log("Adult");
}
            </code></pre>

            <h3>if...else</h3>

            <pre><code>
if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");

}
            </code></pre>

            <p>
                Conditions are useful when different actions
                need to occur depending on the information
                available to the program.
            </p>

        `
    },


    /* ====================================================
       LESSON 08
    ==================================================== */

    {
        number: "08",
        title: "Loops",

        content: `

            <p>
                Loops allow JavaScript to repeat instructions.
            </p>

            <h3>for Loop</h3>

            <pre><code>
for (
    let number = 1;
    number <= 5;
    number++
) {

    console.log(number);

}
            </code></pre>

            <h3>while Loop</h3>

            <pre><code>
let number = 1;

while (number <= 5) {

    console.log(number);

    number++;

}
            </code></pre>

            <p>
                Loops are especially useful when working with
                collections of data such as arrays.
            </p>

        `
    },


    /* ====================================================
       LESSON 09
    ==================================================== */

    {
        number: "09",
        title: "Functions",

        content: `

            <p>
                A function is a reusable block of code designed
                to perform a particular task.
            </p>

            <h3>Function Example</h3>

            <pre><code>
function greetUser(name) {

    return "Hello " + name;

}

const message =
    greetUser("Steven");
            </code></pre>

            <p>
                Functions can accept parameters and can return
                values.
            </p>

            <h3>Arrow Functions</h3>

            <pre><code>
const add = (first, second) => {

    return first + second;

};
            </code></pre>

            <p>
                Functions are one of the fundamental building
                blocks of JavaScript programs.
            </p>

        `
    },


    /* ====================================================
       LESSON 10
    ==================================================== */

    {
        number: "10",
        title: "Arrays",

        content: `

            <p>
                Arrays are used to store collections of values.
            </p>

            <pre><code>
const languages = [
    "JavaScript",
    "HTML",
    "CSS"
];
            </code></pre>

            <p>
                Individual elements can be accessed using
                their indexes.
            </p>

            <pre><code>
console.log(
    languages[0]
);
            </code></pre>

            <p>
                JavaScript arrays provide methods for working
                with collections of data.
            </p>

            <pre><code>
languages.forEach(
    function (language) {

        console.log(language);

    }
);
            </code></pre>

        `
    },


    /* ====================================================
       LESSON 11
    ==================================================== */

    {
        number: "11",
        title: "Objects",

        content: `

            <p>
                Objects store related information using
                properties and values.
            </p>

            <pre><code>
const user = {

    name: "Steven",

    role: "Developer",

    active: true

};
            </code></pre>

            <p>
                Object properties can be accessed using dot
                notation or bracket notation.
            </p>

            <pre><code>
console.log(user.name);

console.log(user["role"]);
            </code></pre>

            <p>
                Objects are widely used in JavaScript applications
                to represent structured information.
            </p>

        `
    },


    /* ====================================================
       LESSON 12
    ==================================================== */

    {
        number: "12",
        title: "The Document Object Model (DOM)",

        content: `

            <p>
                The Document Object Model, commonly called the
                DOM, represents a webpage as a structure of
                objects that JavaScript can access and manipulate.
            </p>

            <p>
                This is what allows JavaScript in a browser to
                interact with HTML elements.
            </p>

            <h3>Selecting an Element</h3>

            <pre><code>
const heading =
    document.querySelector("h1");
            </code></pre>

            <h3>Changing Content</h3>

            <pre><code>
heading.textContent =
    "Welcome to NEXORA DIGITAL";
            </code></pre>

            <p>
                DOM scripting is one of the most important parts
                of browser-based JavaScript development.
            </p>

        `
    },


    /* ====================================================
       LESSON 13
    ==================================================== */

    {
        number: "13",
        title: "JavaScript Events",

        content: `

            <p>
                Events allow JavaScript to respond to actions
                and occurrences in a webpage.
            </p>

            <p>
                Examples include clicks, keyboard input,
                form submission and page loading.
            </p>

            <h3>Click Event</h3>

            <pre><code>
const button =
    document.querySelector("#myButton");

button.addEventListener(
    "click",
    function () {

        console.log(
            "Button clicked"
        );

    }
);
            </code></pre>

            <p>
                Event listeners allow webpages to become
                interactive.
            </p>

        `
    },


    /* ====================================================
       LESSON 14
    ==================================================== */

    {
        number: "14",
        title: "Forms and User Input",

        content: `

            <p>
                JavaScript can read information entered into
                HTML forms and respond to form submissions.
            </p>

            <pre><code>
const form =
    document.querySelector("#contactForm");

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        console.log(
            "Form submitted"
        );

    }
);
            </code></pre>

            <p>
                Form handling is commonly used for validation,
                interactive interfaces and sending information
                to a server.
            </p>

        `
    },


    /* ====================================================
       LESSON 15
    ==================================================== */

    {
        number: "15",
        title: "Asynchronous JavaScript",

        content: `

            <p>
                Some operations take time to complete, such as
                requesting information from a server.
            </p>

            <p>
                JavaScript provides asynchronous programming
                mechanisms that allow other work to continue
                while an asynchronous operation is waiting.
            </p>

            <h3>Promise</h3>

            <p>
                A Promise represents the eventual completion
                or failure of an asynchronous operation.
            </p>

            <h3>async and await</h3>

            <pre><code>
async function loadData() {

    const response =
        await fetch("/data.json");

    const data =
        await response.json();

    console.log(data);

}
            </code></pre>

        `
    },


    /* ====================================================
       LESSON 16
    ==================================================== */

    {
        number: "16",
        title: "Fetch and APIs",

        content: `

            <p>
                The Fetch API allows browser JavaScript to make
                network requests and work with responses.
            </p>

            <pre><code>
fetch("/data.json")
    .then(function (response) {

        return response.json();

    })
    .then(function (data) {

        console.log(data);

    })
    .catch(function (error) {

        console.error(error);

    });
            </code></pre>

            <p>
                APIs allow applications to communicate with
                other software systems and retrieve or send
                information.
            </p>

        `
    },


    /* ====================================================
       LESSON 17
    ==================================================== */

    {
        number: "17",
        title: "JSON",

        content: `

            <p>
                JSON stands for JavaScript Object Notation.
                It is a text-based format commonly used for
                exchanging structured data.
            </p>

            <h3>Example JSON</h3>

            <pre><code>
{
    "name": "NEXORA DIGITAL",
    "active": true
}
            </code></pre>

            <p>
                JavaScript can convert JSON text into JavaScript
                values and can also convert JavaScript values
                into JSON.
            </p>

            <pre><code>
const jsonText =
    JSON.stringify({
        name: "NEXORA DIGITAL"
    });

const object =
    JSON.parse(jsonText);
            </code></pre>

        `
    },


    /* ====================================================
       LESSON 18
    ==================================================== */

    {
        number: "18",
        title: "JavaScript Modules",

        content: `

            <p>
                Modules allow JavaScript programs to be divided
                into separate files.
            </p>

            <p>
                This becomes particularly useful as a project
                grows and the amount of JavaScript increases.
            </p>

            <h3>Export</h3>

            <pre><code>
export function greet() {

    return "Hello";

}
            </code></pre>

            <h3>Import</h3>

            <pre><code>
import {
    greet
} from "./greetings.js";
            </code></pre>

            <p>
                Modern browsers support JavaScript modules
                natively.
            </p>

        `
    },


    /* ====================================================
       LESSON 19
    ==================================================== */

    {
        number: "19",
        title: "Classes",

        content: `

            <p>
                JavaScript supports classes as a way to define
                objects and organize related data and behavior.
            </p>

            <pre><code>
class User {

    constructor(name) {

        this.name = name;

    }


    greet() {

        return "Hello " + this.name;

    }

}
            </code></pre>

            <p>
                Classes can be useful when building larger
                applications that require organized object
                structures.
            </p>

        `
    },


    /* ====================================================
       LESSON 20
    ==================================================== */

    {
        number: "20",
        title: "Debugging JavaScript",

        content: `

            <p>
                Debugging is the process of finding and fixing
                problems in a program.
            </p>

            <h3>Console Output</h3>

            <pre><code>
console.log(
    "Testing JavaScript"
);
            </code></pre>

            <p>
                The browser's developer tools can provide useful
                information about errors, network requests,
                elements and JavaScript execution.
            </p>

            <h3>Common Problems</h3>

            <ul>

                <li>
                    Misspelled variable names.
                </li>

                <li>
                    Incorrect selectors.
                </li>

                <li>
                    Missing brackets or parentheses.
                </li>

                <li>
                    Incorrect function calls.
                </li>

                <li>
                    Problems with asynchronous operations.
                </li>

            </ul>

        `
    },


    /* ====================================================
       LESSON 21
    ==================================================== */

    {
        number: "21",
        title: "Building Practical JavaScript Projects",

        content: `

            <p>
                The best way to strengthen JavaScript knowledge
                is to use the language to build practical
                projects.
            </p>

            <h3>Beginner Projects</h3>

            <ul>

                <li>
                    Digital calculator.
                </li>

                <li>
                    To-do list.
                </li>

                <li>
                    Digital clock.
                </li>

                <li>
                    Simple quiz application.
                </li>

                <li>
                    Interactive navigation menu.
                </li>

            </ul>

            <h3>Intermediate Projects</h3>

            <ul>

                <li>
                    Weather application using an API.
                </li>

                <li>
                    Expense tracker.
                </li>

                <li>
                    Notes application.
                </li>

                <li>
                    Search application.
                </li>

                <li>
                    Dynamic dashboard.
                </li>

            </ul>

            <p>
                Projects help connect individual JavaScript
                concepts into complete applications.
            </p>

        `
    }

];



/*
========================================================
DISPLAY TECHNOLOGY GUIDE
========================================================
*/

function loadTechnologyGuide() {

    const container =
        document.getElementById(
            "technologyGuideContent"
        );


    if (!container) {

        console.error(
            "Technology guide content container was not found."
        );

        return;

    }


    container.innerHTML = "";


    technologyGuide.forEach(
        function (lesson) {

            const article =
                document.createElement(
                    "article"
                );


            article.className =
                "content-card";


            const number =
                document.createElement(
                    "div"
                );


            number.className =
                "lesson-number";


            number.textContent =
                "LESSON " + lesson.number;


            const title =
                document.createElement(
                    "h2"
                );


            title.textContent =
                lesson.title;


            const content =
                document.createElement(
                    "div"
                );


            content.className =
                "lesson-content";


            content.innerHTML =
                lesson.content;


            article.appendChild(
                number
            );


            article.appendChild(
                title
            );


            article.appendChild(
                content
            );


            container.appendChild(
                article
            );

        }
    );

}



/*
========================================================
START GUIDE
========================================================
*/

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTechnologyGuide();

    }
);
