/* =========================================================
   NEXORA DIGITAL
   TECHNOLOGY GUIDES COURSE SYSTEM
   ========================================================= */

const courses = [
  {
    id: "ai-ml",
    number: "01",
    title: "Artificial Intelligence & Machine Learning",
    description: "Learn the foundations of artificial intelligence, machine learning, data preparation, models, evaluation and responsible AI.",
    modules: [
      {
        title: "Introduction to Artificial Intelligence",
        lessons: [
          {
            title: "What Is Artificial Intelligence?",
            content: `
              <h3>What Is Artificial Intelligence?</h3>

              <p>
                Artificial Intelligence (AI) is the field of computing concerned
                with creating systems that can perform tasks that normally require
                human intelligence.
              </p>

              <p>
                These tasks may include understanding language, recognizing
                images, identifying patterns, making predictions, solving
                problems and supporting decisions.
              </p>

              <h4>Major Areas of AI</h4>

              <ul>
                <li>Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Robotics</li>
                <li>Expert Systems</li>
                <li>Generative AI</li>
              </ul>

              <h4>Artificial Intelligence and Machine Learning</h4>

              <p>
                AI is the broader field. Machine Learning (ML) is one approach
                used to build AI systems. Instead of explicitly programming
                every rule, a machine-learning system can learn patterns from
                data.
              </p>

              <h4>Examples of AI</h4>

              <p>
                AI is used in recommendation systems, search engines,
                translation systems, fraud detection, voice assistants,
                medical research, autonomous systems and many other areas.
              </p>

              <h4>Responsible AI</h4>

              <p>
                AI systems should be developed responsibly. Important concerns
                include privacy, security, fairness, transparency, accuracy and
                human oversight.
              </p>
            `
          },

          {
            title: "Machine Learning Fundamentals",
            content: `
              <h3>Machine Learning Fundamentals</h3>

              <p>
                Machine Learning is a method of building computer systems that
                learn useful patterns from data.
              </p>

              <h4>Main Types of Machine Learning</h4>

              <h5>1. Supervised Learning</h5>
              <p>
                The model learns from examples where the desired answer is
                already known. Classification and regression are common
                supervised-learning tasks.
              </p>

              <h5>2. Unsupervised Learning</h5>
              <p>
                The model works with data that does not contain predefined
                answers. Clustering is a common example.
              </p>

              <h5>3. Reinforcement Learning</h5>
              <p>
                An agent learns by interacting with an environment and
                receiving rewards or penalties.
              </p>

              <h4>The Machine Learning Process</h4>

              <ol>
                <li>Define the problem.</li>
                <li>Collect data.</li>
                <li>Clean and prepare the data.</li>
                <li>Select useful features.</li>
                <li>Choose a model.</li>
                <li>Train the model.</li>
                <li>Evaluate the model.</li>
                <li>Improve and deploy the model.</li>
              </ol>
            `
          }
        ]
      },

      {
        title: "Data and Machine Learning",
        lessons: [
          {
            title: "Understanding Data",
            content: `
              <h3>Understanding Data</h3>

              <p>
                Data is the foundation of machine learning. The quality of the
                data directly affects the quality of the resulting model.
              </p>

              <h4>Common Data Types</h4>

              <ul>
                <li>Numerical data</li>
                <li>Categorical data</li>
                <li>Text data</li>
                <li>Image data</li>
                <li>Audio data</li>
                <li>Time-series data</li>
              </ul>

              <h4>Data Preparation</h4>

              <p>
                Before training a model, data may need to be cleaned.
                Missing values, duplicate records, inconsistent formats and
                incorrect values should be identified and handled.
              </p>

              <p>
                Data preparation is often one of the most important parts of
                a machine-learning project because a model cannot compensate
                for fundamentally poor data.
              </p>
            `
          },

          {
            title: "Training and Evaluating Models",
            content: `
              <h3>Training and Evaluating Models</h3>

              <p>
                Training means allowing a machine-learning algorithm to learn
                patterns from training data.
              </p>

              <h4>Training, Validation and Testing</h4>

              <p>
                A dataset can be divided into training, validation and testing
                portions. The training set is used to learn patterns. Validation
                data can help with model selection and tuning. Test data provides
                an independent evaluation.
              </p>

              <h4>Overfitting</h4>

              <p>
                Overfitting occurs when a model learns the training data too
                closely and performs poorly on new data.
              </p>

              <h4>Underfitting</h4>

              <p>
                Underfitting occurs when a model is too simple to capture
                important patterns in the data.
              </p>

              <h4>Model Evaluation</h4>

              <p>
                Different tasks require different evaluation measures.
                Classification can use measures such as accuracy, precision,
                recall and F1 score, while regression can use measures such as
                mean absolute error and mean squared error.
              </p>
            `
          }
        ]
      }
    ]
  },

  {
    id: "web-development",
    number: "02",
    title: "Full-Stack Web Development",
    description: "Learn how websites and web applications are designed, developed, tested and deployed.",
    modules: [
      {
        title: "Web Development Foundations",
        lessons: [
          {
            title: "How the Web Works",
            content: `
              <h3>How the Web Works</h3>

              <p>
                The World Wide Web is a system through which computers
                communicate using internet protocols. A web browser requests
                resources from a server and displays the returned content.
              </p>

              <h4>Frontend</h4>
              <p>
                Frontend development focuses on what users see and interact
                with. HTML provides structure, CSS controls presentation and
                JavaScript provides behavior and interactivity.
              </p>

              <h4>Backend</h4>
              <p>
                Backend development handles server-side logic, authentication,
                data processing, APIs and communication with databases.
              </p>

              <h4>Database</h4>
              <p>
                A database stores and organizes application information.
                Relational databases use tables while many NoSQL systems use
                other data models.
              </p>
            `
          },

          {
            title: "HTML, CSS and JavaScript",
            content: `
              <h3>HTML, CSS and JavaScript</h3>

              <p>
                HTML defines the structure of a webpage. CSS controls its
                appearance and layout. JavaScript adds dynamic behavior.
              </p>

              <h4>HTML</h4>
              <p>
                HTML uses elements such as headings, paragraphs, links, images,
                forms, lists and sections to structure information.
              </p>

              <h4>CSS</h4>
              <p>
                CSS can control colors, spacing, typography, positioning,
                responsive layouts, animations and other visual properties.
              </p>

              <h4>JavaScript</h4>
              <p>
                JavaScript allows developers to respond to user actions,
                manipulate webpage content, communicate with servers and
                build complex application interfaces.
              </p>
            `
          }
        ]
      },

      {
        title: "Backend Development",
        lessons: [
          {
            title: "Servers and APIs",
            content: `
              <h3>Servers and APIs</h3>

              <p>
                A server is a computer system or software process that provides
                services to clients. Web applications commonly communicate
                through HTTP-based requests and responses.
              </p>

              <p>
                An API provides a defined way for software components to
                communicate. A REST-style API commonly uses HTTP methods such
                as GET, POST, PUT or PATCH, and DELETE.
              </p>

              <h4>Typical Application Flow</h4>

              <ol>
                <li>The user performs an action.</li>
                <li>The browser creates a request.</li>
                <li>The server receives the request.</li>
                <li>Backend logic processes the request.</li>
                <li>The application may communicate with a database.</li>
                <li>The server returns a response.</li>
                <li>The browser updates the interface.</li>
              </ol>
            `
          }
        ]
      }
    ]
  },

  {
    id: "cybersecurity",
    number: "03",
    title: "Cybersecurity & Ethical Hacking",
    description: "Learn cybersecurity principles, security controls, threat awareness, defensive practices and ethical testing.",
    modules: [
      {
        title: "Cybersecurity Foundations",
        lessons: [
          {
            title: "Introduction to Cybersecurity",
            content: `
              <h3>Introduction to Cybersecurity</h3>

              <p>
                Cybersecurity is the practice of protecting computers,
                networks, applications, systems and information from
                unauthorized access, disruption, modification or destruction.
              </p>

              <h4>The CIA Triad</h4>

              <ul>
                <li><strong>Confidentiality:</strong> information is accessible only to authorized people.</li>
                <li><strong>Integrity:</strong> information remains accurate and trustworthy.</li>
                <li><strong>Availability:</strong> systems and information remain accessible when needed.</li>
              </ul>

              <h4>Common Threats</h4>

              <ul>
                <li>Phishing</li>
                <li>Malware</li>
                <li>Password attacks</li>
                <li>Social engineering</li>
                <li>Data breaches</li>
                <li>Denial-of-service attacks</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "cloud-devops",
    number: "04",
    title: "Cloud Computing & DevOps",
    description: "Learn cloud concepts, infrastructure, deployment automation and DevOps practices.",
    modules: [
      {
        title: "Cloud Computing Foundations",
        lessons: [
          {
            title: "What Is Cloud Computing?",
            content: `
              <h3>What Is Cloud Computing?</h3>

              <p>
                Cloud computing provides computing resources such as servers,
                storage, databases and applications through network-based
                services.
              </p>

              <h4>Major Cloud Service Models</h4>

              <ul>
                <li><strong>IaaS:</strong> Infrastructure as a Service</li>
                <li><strong>PaaS:</strong> Platform as a Service</li>
                <li><strong>SaaS:</strong> Software as a Service</li>
              </ul>

              <p>
                Cloud systems can provide scalability, flexibility and
                centralized management, but they also require careful attention
                to security, cost management and reliability.
              </p>
            `
          }
        ]
      }
    ]
  },

  {
    id: "data-science",
    number: "05",
    title: "Data Science & Big Data Analytics",
    description: "Learn data analysis, statistics, visualization, data pipelines and large-scale analytics.",
    modules: [
      {
        title: "Data Science Foundations",
        lessons: [
          {
            title: "Introduction to Data Science",
            content: `
              <h3>Introduction to Data Science</h3>

              <p>
                Data science combines programming, statistics, analytical
                thinking and domain knowledge to extract useful insights from
                data.
              </p>

              <h4>Typical Data Science Workflow</h4>

              <ol>
                <li>Define the question.</li>
                <li>Collect relevant data.</li>
                <li>Clean the data.</li>
                <li>Explore the data.</li>
                <li>Analyze or model the data.</li>
                <li>Communicate findings.</li>
                <li>Deploy or apply the results.</li>
              </ol>
            `
          }
        ]
      }
    ]
  },

  {
    id: "mobile-development",
    number: "06",
    title: "Mobile App Development",
    description: "Learn the principles of designing, developing, testing and releasing mobile applications.",
    modules: [
      {
        title: "Mobile Development Foundations",
        lessons: [
          {
            title: "Introduction to Mobile Applications",
            content: `
              <h3>Introduction to Mobile Applications</h3>

              <p>
                Mobile applications are software programs designed to operate
                on smartphones and tablets.
              </p>

              <p>
                Mobile development requires attention to screen sizes,
                touch interaction, performance, battery consumption,
                connectivity and platform-specific requirements.
              </p>

              <h4>Common Development Approaches</h4>

              <ul>
                <li>Native development</li>
                <li>Cross-platform development</li>
                <li>Progressive web applications</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "ui-ux",
    number: "07",
    title: "UI/UX Product Design",
    description: "Learn user interface design, user experience research, wireframing, prototyping and usability.",
    modules: [
      {
        title: "UI/UX Foundations",
        lessons: [
          {
            title: "Understanding UI and UX",
            content: `
              <h3>Understanding UI and UX</h3>

              <p>
                User Interface (UI) focuses on the visual and interactive
                elements of a digital product. User Experience (UX) focuses on
                the overall experience a person has while using the product.
              </p>

              <h4>Important UX Principles</h4>

              <ul>
                <li>Clarity</li>
                <li>Consistency</li>
                <li>Accessibility</li>
                <li>Feedback</li>
                <li>Simple navigation</li>
                <li>Usability</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "blockchain-web3",
    number: "08",
    title: "Blockchain & Web3 Development",
    description: "Learn blockchain concepts, decentralized applications, smart contracts and Web3 fundamentals.",
    modules: [
      {
        title: "Blockchain Foundations",
        lessons: [
          {
            title: "What Is Blockchain?",
            content: `
              <h3>What Is Blockchain?</h3>

              <p>
                A blockchain is a distributed data structure in which records
                are grouped into blocks and linked using cryptographic
                techniques.
              </p>

              <p>
                Blockchains can provide a shared record across participating
                systems without relying on a single centralized database.
              </p>

              <h4>Important Concepts</h4>

              <ul>
                <li>Blocks</li>
                <li>Transactions</li>
                <li>Cryptographic hashes</li>
                <li>Consensus mechanisms</li>
                <li>Wallets</li>
                <li>Smart contracts</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "business-intelligence",
    number: "09",
    title: "Business Intelligence & Data Visualization",
    description: "Learn how organizations transform data into dashboards, reports and useful business insights.",
    modules: [
      {
        title: "Business Intelligence Foundations",
        lessons: [
          {
            title: "Introduction to Business Intelligence",
            content: `
              <h3>Introduction to Business Intelligence</h3>

              <p>
                Business Intelligence (BI) involves collecting, organizing,
                analyzing and presenting information to support better
                organizational decisions.
              </p>

              <h4>Common BI Outputs</h4>

              <ul>
                <li>Reports</li>
                <li>Dashboards</li>
                <li>Charts</li>
                <li>Performance indicators</li>
                <li>Analytical summaries</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "game-development",
    number: "10",
    title: "Game Development & VR/AR",
    description: "Learn game design, programming, game engines and immersive technologies.",
    modules: [
      {
        title: "Game Development Foundations",
        lessons: [
          {
            title: "Introduction to Game Development",
            content: `
              <h3>Introduction to Game Development</h3>

              <p>
                Game development combines programming, design, art, audio,
                storytelling and interactive systems to create playable
                experiences.
              </p>

              <h4>Major Game Components</h4>

              <ul>
                <li>Game rules</li>
                <li>Player input</li>
                <li>Game state</li>
                <li>Graphics</li>
                <li>Audio</li>
                <li>Physics</li>
                <li>Levels and environments</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "iot",
    number: "11",
    title: "Internet of Things (IoT) & Embedded Systems",
    description: "Learn connected devices, sensors, embedded programming, communication and IoT architecture.",
    modules: [
      {
        title: "IoT Foundations",
        lessons: [
          {
            title: "What Is the Internet of Things?",
            content: `
              <h3>What Is the Internet of Things?</h3>

              <p>
                The Internet of Things describes physical devices that contain
                sensors, software and communication capabilities allowing them
                to collect and exchange information.
              </p>

              <h4>Examples</h4>

              <ul>
                <li>Smart home devices</li>
                <li>Industrial sensors</li>
                <li>Connected vehicles</li>
                <li>Environmental monitoring systems</li>
                <li>Wearable devices</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "qa-testing",
    number: "12",
    title: "Software Quality Assurance & Automated Testing",
    description: "Learn software testing principles, test planning, quality assurance and automation.",
    modules: [
      {
        title: "Software Testing Foundations",
        lessons: [
          {
            title: "Introduction to Software Testing",
            content: `
              <h3>Introduction to Software Testing</h3>

              <p>
                Software testing is the process of evaluating software to
                identify defects and determine whether it meets specified
                requirements.
              </p>

              <h4>Common Testing Levels</h4>

              <ul>
                <li>Unit testing</li>
                <li>Integration testing</li>
                <li>System testing</li>
                <li>Acceptance testing</li>
              </ul>

              <h4>Automated Testing</h4>

              <p>
                Automated testing uses software tools to execute tests and
                compare actual results with expected results. Automation can
                improve repeatability and reduce manual effort.
              </p>
            `
          }
        ]
      }
    ]
  },

  {
    id: "rpa",
    number: "13",
    title: "Robotic Process Automation (RPA)",
    description: "Learn how software robots automate repetitive digital business processes.",
    modules: [
      {
        title: "RPA Foundations",
        lessons: [
          {
            title: "What Is RPA?",
            content: `
              <h3>What Is Robotic Process Automation?</h3>

              <p>
                Robotic Process Automation uses software robots to perform
                structured, repetitive tasks that would otherwise require
                manual computer interaction.
              </p>

              <h4>Good Candidates for Automation</h4>

              <ul>
                <li>Repetitive data entry</li>
                <li>File processing</li>
                <li>Routine report generation</li>
                <li>Data transfer between systems</li>
                <li>Structured administrative workflows</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "database",
    number: "14",
    title: "Database Administration & Engineering",
    description: "Learn database concepts, SQL, administration, security, backups and performance.",
    modules: [
      {
        title: "Database Foundations",
        lessons: [
          {
            title: "Understanding Databases",
            content: `
              <h3>Understanding Databases</h3>

              <p>
                A database is an organized collection of information that can
                be stored, retrieved, updated and managed efficiently.
              </p>

              <h4>Relational Databases</h4>

              <p>
                Relational databases organize information into tables made up
                of rows and columns. Relationships can be created between
                tables using keys.
              </p>

              <h4>Database Administration</h4>

              <p>
                Database administrators may be responsible for security,
                backups, availability, monitoring, access control and
                performance management.
              </p>
            `
          }
        ]
      }
    ]
  },

  {
    id: "api-microservices",
    number: "15",
    title: "API Design & Microservices Architecture",
    description: "Learn API design, service communication, architecture and distributed applications.",
    modules: [
      {
        title: "API Foundations",
        lessons: [
          {
            title: "Understanding APIs",
            content: `
              <h3>Understanding APIs</h3>

              <p>
                An Application Programming Interface defines how software
                components communicate with one another.
              </p>

              <p>
                Well-designed APIs should be understandable, predictable,
                secure, maintainable and consistent.
              </p>

              <h4>Important API Design Concerns</h4>

              <ul>
                <li>Resource naming</li>
                <li>HTTP methods</li>
                <li>Status codes</li>
                <li>Authentication</li>
                <li>Authorization</li>
                <li>Validation</li>
                <li>Error handling</li>
                <li>Documentation</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "linux",
    number: "16",
    title: "Linux Systems Administration & Open Source Engineering",
    description: "Learn Linux fundamentals, command-line administration, permissions, processes and open-source practices.",
    modules: [
      {
        title: "Linux Foundations",
        lessons: [
          {
            title: "Introduction to Linux",
            content: `
              <h3>Introduction to Linux</h3>

              <p>
                Linux is an open-source operating-system kernel used in many
                operating systems and computing environments.
              </p>

              <h4>Linux Administration Concepts</h4>

              <ul>
                <li>Files and directories</li>
                <li>Users and groups</li>
                <li>Permissions</li>
                <li>Processes</li>
                <li>Packages</li>
                <li>Networking</li>
                <li>System services</li>
              </ul>

              <p>
                The command line is an important administration interface
                because it allows administrators to perform precise and
                repeatable operations.
              </p>
            `
          }
        ]
      }
    ]
  },

  {
    id: "digital-marketing",
    number: "17",
    title: "Technical Digital Marketing & Growth Engineering",
    description: "Learn technical approaches to digital marketing, analytics, SEO, experimentation and growth.",
    modules: [
      {
        title: "Technical Marketing Foundations",
        lessons: [
          {
            title: "Introduction to Technical Digital Marketing",
            content: `
              <h3>Introduction to Technical Digital Marketing</h3>

              <p>
                Technical digital marketing combines marketing strategy with
                technology, analytics, automation and data-driven
                experimentation.
              </p>

              <h4>Important Areas</h4>

              <ul>
                <li>Search engine optimization</li>
                <li>Web analytics</li>
                <li>Conversion optimization</li>
                <li>Marketing automation</li>
                <li>Performance measurement</li>
                <li>Content systems</li>
              </ul>
            `
          }
        ]
      }
    ]
  },

  {
    id: "it-support",
    number: "18",
    title: "IT Support, Networking & Systems Troubleshooting",
    description: "Learn computer support, networking fundamentals, diagnostics and systematic troubleshooting.",
    modules: [
      {
        title: "IT Support Foundations",
        lessons: [
          {
            title: "Introduction to IT Support",
            content: `
              <h3>Introduction to IT Support</h3>

              <p>
                IT support involves helping users and organizations maintain
                reliable computer systems, applications, networks and devices.
              </p>

              <h4>Troubleshooting Method</h4>

              <ol>
                <li>Identify the problem.</li>
                <li>Gather information.</li>
                <li>Determine possible causes.</li>
                <li>Test the most likely cause.</li>
                <li>Apply a solution.</li>
                <li>Verify that the problem is resolved.</li>
                <li>Document the result.</li>
              </ol>
            `
          }
        ]
      }
    ]
  },

  {
    id: "low-code",
    number: "19",
    title: "Low-Code / No-Code App Development",
    description: "Learn how applications and workflows can be created using visual development platforms.",
    modules: [
      {
        title: "Low-Code Foundations",
        lessons: [
          {
            title: "Understanding Low-Code and No-Code",
            content: `
              <h3>Understanding Low-Code and No-Code</h3>

              <p>
                Low-code and no-code platforms provide visual tools that allow
                applications and workflows to be created with less traditional
                programming.
              </p>

              <h4>Benefits</h4>

              <ul>
                <li>Faster prototyping</li>
                <li>Reduced development effort</li>
                <li>Visual workflow design</li>
                <li>Accessibility for non-specialist builders</li>
              </ul>

              <p>
                These platforms still require careful planning, testing,
                security considerations and understanding of the business
                problem being solved.
              </p>
            `
          }
        ]
      }
    ]
  },

  {
    id: "quantum",
    number: "20",
    title: "Quantum Computing Foundations",
    description: "Learn the fundamental ideas behind quantum computing and quantum information.",
    modules: [
      {
        title: "Quantum Computing Foundations",
        lessons: [
          {
            title: "Introduction to Quantum Computing",
            content: `
              <h3>Introduction to Quantum Computing</h3>

              <p>
                Quantum computing is a computing approach based on principles
                from quantum physics.
              </p>

              <h4>Qubits</h4>

              <p>
                A quantum bit, or qubit, is the basic unit of quantum
                information. Unlike a classical bit, which is represented as
                either 0 or 1, a qubit can exist in a quantum state involving
                both basis states.
              </p>

              <h4>Important Concepts</h4>

              <ul>
                <li>Qubits</li>
                <li>Superposition</li>
                <li>Entanglement</li>
                <li>Quantum gates</li>
                <li>Measurement</li>
                <li>Quantum algorithms</li>
              </ul>

              <p>
                Quantum computers are not simply faster versions of ordinary
                computers. They are specialized machines that may provide
                advantages for particular classes of problems.
              </p>
            `
          }
        ]
      }
    ]
  }
];


/* =========================================================
   COURSE LIST
   ========================================================= */

const courseContainer = document.getElementById("courseContainer");

if (courseContainer) {

  courses.forEach(course => {

    const card = document.createElement("a");

    card.href = `course.html?course=${course.id}`;
    card.className = "course-card";

    card.innerHTML = `
      <div class="course-number">
        ${course.number}
      </div>

      <h2>${course.title}</h2>

      <p>${course.description}</p>

      <span class="course-button">
        Start Course →
      </span>
    `;

    courseContainer.appendChild(card);
  });
}
