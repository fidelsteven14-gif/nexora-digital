/*
=====================================================
NEXORA DIGITAL

DIGITAL SKILLS JAVASCRIPT

This JavaScript file controls the content
displayed on digital-skills.html.
=====================================================
*/


const digitalSkillsContent = `

    <h2>
        Building Digital Skills
    </h2>


    <p>
        Digital skills are practical abilities that
        help people use computers, mobile devices,
        software and online services effectively.
    </p>


    <h3>
        Computer Skills
    </h3>


    <p>
        Computer skills are the basic abilities needed
        to operate and manage a computer effectively.
    </p>


    <ul>

        <li>
            <strong>Using the keyboard:</strong>
            Learn how to type, edit text and use
            common keyboard shortcuts.
        </li>

        <li>
            <strong>Using the mouse:</strong>
            Learn how to click, double-click,
            right-click, drag and select items.
        </li>

        <li>
            <strong>Managing files:</strong>
            Learn how to create, rename, copy,
            move and delete files.
        </li>

        <li>
            <strong>Managing folders:</strong>
            Organize related files into folders
            so that information can be found easily.
        </li>

    </ul>


    <h3>
        Office Applications
    </h3>


    <p>
        Office applications are commonly used for
        creating documents, working with data and
        preparing presentations.
    </p>


    <ul>

        <li>
            <strong>Word processing:</strong>
            Create, edit and format documents.
        </li>

        <li>
            <strong>Spreadsheets:</strong>
            Organize information, perform calculations
            and work with tables and data.
        </li>

        <li>
            <strong>Presentations:</strong>
            Create slides for presenting information
            to an audience.
        </li>

    </ul>


    <h3>
        Internet Skills
    </h3>


    <p>
        Internet skills help users find information,
        communicate online and use web-based services
        effectively.
    </p>


    <ul>

        <li>
            <strong>Web browsers:</strong>
            Understand how to open websites,
            navigate pages and use browser features.
        </li>

        <li>
            <strong>Searching:</strong>
            Use appropriate keywords to find useful
            information online.
        </li>

        <li>
            <strong>Online services:</strong>
            Learn how websites and web applications
            can be used for everyday tasks.
        </li>

    </ul>


    <h3>
        Digital Communication
    </h3>


    <p>
        Digital communication involves exchanging
        information through electronic devices and
        online platforms.
    </p>


    <ul>

        <li>
            <strong>Email:</strong>
            Learn how to send, receive and organize
            electronic messages.
        </li>

        <li>
            <strong>Online communication:</strong>
            Communicate clearly and professionally
            through digital platforms.
        </li>

        <li>
            <strong>File sharing:</strong>
            Understand how digital documents and
            other files can be shared electronically.
        </li>

    </ul>


    <h3>
        Digital Safety
    </h3>


    <p>
        Digital safety involves protecting devices,
        accounts and personal information while using
        digital technology.
    </p>


    <ul>

        <li>
            <strong>Strong passwords:</strong>
            Use strong and unique passwords for
            important accounts.
        </li>

        <li>
            <strong>Account security:</strong>
            Protect account credentials and avoid
            sharing passwords unnecessarily.
        </li>

        <li>
            <strong>Safe browsing:</strong>
            Be careful when opening unfamiliar links
            or downloading unknown files.
        </li>

        <li>
            <strong>Privacy:</strong>
            Think carefully about what personal
            information is shared online.
        </li>

    </ul>


    <h3>
        Developing Digital Confidence
    </h3>


    <p>
        Digital skills improve through regular
        practice. Start with simple activities,
        practise consistently and gradually move
        toward more advanced tasks.
    </p>


    <p>
        The goal is not simply to know how to use
        technology, but to use digital tools confidently,
        responsibly and effectively.
    </p>

`;



/*
=====================================================
DISPLAY THE CONTENT
=====================================================
*/

const contentArea =
    document.getElementById(
        "digitalSkillsContent"
    );


if (contentArea) {

    contentArea.innerHTML =
        digitalSkillsContent;

}
