/*
=====================================================
NEXORA DIGITAL
PRODUCTIVITY.JS

This file controls the Productivity page.

The HTML provides the page structure.
This JavaScript provides the actual learning content.
=====================================================
*/


const productivityGuide = [

    {
        title: "Understanding Productivity",

        content: `
            <p>
                Digital productivity is the practice of using
                technology, organization methods and effective
                working habits to complete important tasks
                efficiently.
            </p>

            <p>
                Good productivity is not simply about doing
                more work. It is about using your time,
                attention and digital tools wisely.
            </p>
        `
    },


    {
        title: "Planning Your Work",

        content: `
            <p>
                Planning helps you understand what needs to be
                completed before you begin working.
            </p>

            <ul>

                <li>
                    <strong>Identify your tasks:</strong>
                    Write down the work that needs to be done.
                </li>

                <li>
                    <strong>Set priorities:</strong>
                    Decide which tasks are most important.
                </li>

                <li>
                    <strong>Set realistic goals:</strong>
                    Break large activities into smaller steps.
                </li>

                <li>
                    <strong>Review your progress:</strong>
                    Check what has been completed and what
                    still requires attention.
                </li>

            </ul>
        `
    },


    {
        title: "Time Management",

        content: `
            <p>
                Time management involves organizing your
                available time so that important activities
                receive enough attention.
            </p>

            <ul>

                <li>
                    Create a daily or weekly schedule.
                </li>

                <li>
                    Allocate time for important tasks.
                </li>

                <li>
                    Avoid unnecessary interruptions.
                </li>

                <li>
                    Give yourself reasonable deadlines.
                </li>

                <li>
                    Take appropriate breaks when working
                    for extended periods.
                </li>

            </ul>
        `
    },


    {
        title: "Organizing Digital Files",

        content: `
            <p>
                Good file organization makes information easier
                to locate and reduces unnecessary time spent
                searching for documents.
            </p>

            <ul>

                <li>
                    Use clear folder names.
                </li>

                <li>
                    Give files meaningful names.
                </li>

                <li>
                    Keep related documents together.
                </li>

                <li>
                    Remove unnecessary duplicate files.
                </li>

                <li>
                    Keep important information backed up
                    appropriately.
                </li>

            </ul>
        `
    },


    {
        title: "Using Digital Tools Effectively",

        content: `
            <p>
                Digital tools can simplify many tasks when they
                are selected and used appropriately.
            </p>

            <p>
                Examples include word processors,
                spreadsheets, presentation software,
                calendars, task-management applications,
                cloud storage and communication platforms.
            </p>

            <p>
                The most useful tool depends on the task.
                Choosing an appropriate tool can make work
                easier and more organized.
            </p>
        `
    },


    {
        title: "Managing Digital Distractions",

        content: `
            <p>
                Digital devices can also create distractions.
                Notifications, unnecessary browsing and
                unrelated messages can interrupt focused work.
            </p>

            <ul>

                <li>
                    Turn off unnecessary notifications.
                </li>

                <li>
                    Focus on one important task at a time.
                </li>

                <li>
                    Keep unrelated applications closed when
                    they are not needed.
                </li>

                <li>
                    Set specific periods for checking messages
                    and other online activities.
                </li>

            </ul>
        `
    },


    {
        title: "Building Better Work Habits",

        content: `
            <p>
                Productivity improves when effective habits are
                practised consistently.
            </p>

            <p>
                Start with simple habits such as planning your
                tasks, organizing your files, protecting your
                focus and reviewing your progress regularly.
            </p>

            <p>
                Over time, these habits can make digital work
                more organized, predictable and efficient.
            </p>
        `
    }

];



/*
=====================================================
DISPLAY THE PRODUCTIVITY GUIDE
=====================================================
*/

function loadProductivityGuide() {

    const container =
        document.getElementById(
            "productivityContent"
        );


    if (!container) {

        console.error(
            "Productivity content container was not found."
        );

        return;
    }


    container.innerHTML = "";


    productivityGuide.forEach(
        function (section) {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "content-card";


            const heading =
                document.createElement(
                    "h2"
                );


            heading.textContent =
                section.title;


            const content =
                document.createElement(
                    "div"
                );


            content.innerHTML =
                section.content;


            card.appendChild(
                heading
            );


            card.appendChild(
                content
            );


            container.appendChild(
                card
            );

        }
    );

}



/*
=====================================================
START THE PAGE
=====================================================
*/

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadProductivityGuide();

    }
);
