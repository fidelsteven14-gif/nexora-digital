/*
=========================================================
NEXORA DIGITAL
TECHNOLOGY GUIDES JAVASCRIPT
=========================================================
*/


const technologyGuide = {

    title: "Technology Guides",

    sections: [

        {
            title: "Understanding Technology",

            content: `
                <p>
                    Technology is the practical application of
                    knowledge, tools, systems and processes to
                    solve problems, perform tasks and improve
                    the way people work, communicate and learn.
                </p>

                <p>
                    Modern technology includes computers,
                    smartphones, software, networks, websites,
                    cloud services, artificial intelligence and
                    many other digital systems.
                </p>
            `
        },


        {
            title: "Computers",

            content: `
                <p>
                    Computers are electronic devices that
                    receive data, process information, store
                    information and produce results.
                </p>

                <h3>Important Computer Components</h3>

                <ul>

                    <li>
                        <strong>Processor (CPU):</strong>
                        Performs instructions and calculations.
                    </li>

                    <li>
                        <strong>Memory (RAM):</strong>
                        Temporarily holds information that
                        programs are actively using.
                    </li>

                    <li>
                        <strong>Storage:</strong>
                        Stores files, programs and other
                        information for longer periods.
                    </li>

                    <li>
                        <strong>Input Devices:</strong>
                        Devices such as keyboards and mice
                        allow users to provide information.
                    </li>

                    <li>
                        <strong>Output Devices:</strong>
                        Devices such as monitors and speakers
                        present information to the user.
                    </li>

                </ul>
            `
        },


        {
            title: "The Internet",

            content: `
                <p>
                    The internet is a global network of
                    interconnected computer networks that
                    allows devices and systems to communicate
                    and exchange information.
                </p>

                <h3>Common Internet Technologies</h3>

                <ul>

                    <li>
                        <strong>Websites:</strong>
                        Online pages accessed through web browsers.
                    </li>

                    <li>
                        <strong>Web Browsers:</strong>
                        Applications used to access and display
                        websites.
                    </li>

                    <li>
                        <strong>Search Engines:</strong>
                        Services that help users find information
                        on the web.
                    </li>

                    <li>
                        <strong>Email:</strong>
                        A system for sending and receiving
                        electronic messages.
                    </li>

                </ul>
            `
        },


        {
            title: "Web Technology",

            content: `
                <p>
                    Websites are commonly built using several
                    technologies that work together.
                </p>

                <h3>HTML</h3>

                <p>
                    HTML provides the structure and content
                    of a webpage.
                </p>

                <h3>CSS</h3>

                <p>
                    CSS controls the visual appearance,
                    layout, spacing, colours and responsive
                    design of a webpage.
                </p>

                <h3>JavaScript</h3>

                <p>
                    JavaScript adds behaviour and
                    interactivity to webpages. It can respond
                    to user actions, change webpage content,
                    communicate with services and control
                    application logic.
                </p>
            `
        },


        {
            title: "Artificial Intelligence",

            content: `
                <p>
                    Artificial intelligence, commonly called
                    AI, refers to computer systems designed
                    to perform tasks that normally require
                    aspects of human intelligence.
                </p>

                <p>
                    Modern AI systems can be used for tasks
                    such as generating text, analysing
                    information, recognizing patterns,
                    processing images and assisting with
                    software development.
                </p>
            `
        },


        {
            title: "Why Technology Knowledge Matters",

            content: `
                <p>
                    Understanding technology can help people
                    make better use of digital tools and
                    services.
                </p>

                <p>
                    Technology knowledge can also support
                    learning, communication, productivity,
                    creativity and problem-solving in modern
                    digital environments.
                </p>
            `
        }

    ]

};



/*
=========================================================
BUILD THE TECHNOLOGY GUIDES PAGE
=========================================================
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


    let html = "";


    technologyGuide.sections.forEach(
        function (section) {

            html += `

                <article class="guide-card">

                    <h2>
                        ${section.title}
                    </h2>

                    ${section.content}

                </article>

            `;

        }
    );


    container.innerHTML = html;

}



/*
=========================================================
START THE PAGE
=========================================================
*/


document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTechnologyGuide();

    }
);
