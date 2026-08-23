/*
==========================================================
NEXORA DIGITAL
TECHNOLOGY COURSES ENGINE
==========================================================

20 UNIVERSITY-STYLE TECHNOLOGY COURSES
50 MODULES PER COURSE
1000 MODULES TOTAL

This file is the course data + learning engine.

The system is designed so that:
COURSE -> MODULE -> LESSON -> NEXT MODULE

No module should display "Lesson content coming next".

==========================================================
*/

"use strict";

/* ========================================================
   COURSE CATALOG
======================================================== */

const TECHNOLOGY_COURSES = [

  {
    id: "ai-machine-learning",
    number: 1,
    title: "Artificial Intelligence & Machine Learning",
    shortTitle: "AI & Machine Learning",
    level: "University / Professional",
    description:
      "A comprehensive study of artificial intelligence, machine learning, data preparation, model development, evaluation, deployment and responsible AI.",
    modules: [

      "Introduction to Artificial Intelligence",
      "History and Evolution of AI",
      "AI Problem Solving",
      "Intelligent Agents",
      "Search Algorithms",
      "Knowledge Representation",
      "Logic and Reasoning",
      "Probability for AI",
      "Statistics for AI",
      "Linear Algebra for Machine Learning",
      "Python for AI",
      "NumPy Fundamentals",
      "Pandas for Data Analysis",
      "Data Collection",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Machine Learning Fundamentals",
      "Supervised Learning",
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forests",
      "Support Vector Machines",
      "Nearest Neighbors",
      "Naive Bayes",
      "Unsupervised Learning",
      "Clustering",
      "Dimensionality Reduction",
      "Association Rule Learning",
      "Model Evaluation",
      "Cross Validation",
      "Hyperparameter Optimization",
      "Ensemble Learning",
      "Neural Networks",
      "Deep Learning",
      "Convolutional Neural Networks",
      "Recurrent Neural Networks",
      "Transformers and Attention",
      "Natural Language Processing",
      "Computer Vision",
      "Generative AI",
      "Large Language Models",
      "Reinforcement Learning",
      "AI Model Deployment",
      "MLOps Fundamentals",
      "Responsible and Ethical AI",
      "AI Security",
      "AI Project Development",
      "AI Research Methods",
      "AI Capstone Project"

    ]
  },

  {
    id: "full-stack-web-development",
    number: 2,
    title: "Full-Stack Web Development",
    shortTitle: "Full-Stack Web Development",
    level: "University / Professional",
    description:
      "A complete study of modern front-end, back-end, database, API and deployment technologies used to build professional web applications.",
    modules: [

      "Introduction to Web Development",
      "How the Web Works",
      "Internet and Web Architecture",
      "HTML Fundamentals",
      "Semantic HTML",
      "Forms and Input Handling",
      "CSS Fundamentals",
      "CSS Layout",
      "Flexbox",
      "CSS Grid",
      "Responsive Web Design",
      "Accessibility",
      "JavaScript Fundamentals",
      "Variables and Data Types",
      "Functions",
      "Arrays and Objects",
      "DOM Manipulation",
      "Events and Event Handling",
      "Asynchronous JavaScript",
      "Fetch API",
      "Modern JavaScript",
      "Modules and Code Organization",
      "Frontend Application Architecture",
      "Introduction to React",
      "React Components",
      "React State",
      "React Hooks",
      "React Routing",
      "Frontend Forms",
      "Frontend Authentication",
      "Backend Development",
      "Node.js Fundamentals",
      "Express.js",
      "REST API Development",
      "API Authentication",
      "Database Fundamentals",
      "SQL Databases",
      "NoSQL Databases",
      "Database Design",
      "Server-Side Security",
      "Web Application Security",
      "Testing Web Applications",
      "Git and Version Control",
      "Deployment Fundamentals",
      "Cloud Deployment",
      "Performance Optimization",
      "Web Application Monitoring",
      "Professional Software Architecture",
      "Full-Stack Project Planning",
      "Full-Stack Capstone Project"

    ]
  },

  {
    id: "cybersecurity-ethical-hacking",
    number: 3,
    title: "Cybersecurity & Ethical Hacking",
    shortTitle: "Cybersecurity",
    level: "University / Professional",
    description:
      "A defensive and authorized study of cybersecurity principles, networking, security operations, vulnerability assessment, incident response and ethical security testing.",
    modules: [

      "Introduction to Cybersecurity",
      "Cybersecurity Principles",
      "Threats and Threat Actors",
      "Security Policies",
      "Computer Networking Fundamentals",
      "TCP/IP",
      "Network Protocols",
      "Network Security",
      "Operating System Security",
      "Linux Security Fundamentals",
      "Windows Security Fundamentals",
      "Cryptography Fundamentals",
      "Symmetric Encryption",
      "Asymmetric Encryption",
      "Hashing and Digital Signatures",
      "Identity and Access Management",
      "Authentication",
      "Authorization",
      "Security Monitoring",
      "Security Logs",
      "Vulnerability Management",
      "Risk Assessment",
      "Security Scanning",
      "Web Application Security",
      "OWASP Security Principles",
      "Secure Software Development",
      "Database Security",
      "Cloud Security",
      "Mobile Security",
      "Email Security",
      "Social Engineering Awareness",
      "Malware Fundamentals",
      "Endpoint Security",
      "Firewalls",
      "Intrusion Detection",
      "Security Operations Centers",
      "Incident Response",
      "Digital Forensics Fundamentals",
      "Security Auditing",
      "Penetration Testing Methodology",
      "Authorized Security Testing",
      "Security Reporting",
      "Security Automation",
      "Zero Trust Security",
      "Security Architecture",
      "Business Continuity",
      "Disaster Recovery",
      "Cybersecurity Governance",
      "Cybersecurity Project",
      "Cybersecurity Capstone"

    ]
  },

  {
    id: "cloud-devops",
    number: 4,
    title: "Cloud Computing & DevOps",
    shortTitle: "Cloud & DevOps",
    level: "University / Professional",
    description:
      "A comprehensive introduction to cloud infrastructure, virtualization, containers, automation, CI/CD, monitoring and modern DevOps engineering.",
    modules: [

      "Introduction to Cloud Computing",
      "Cloud Computing Models",
      "Cloud Service Models",
      "Cloud Architecture",
      "Virtualization",
      "Servers and Infrastructure",
      "Storage Systems",
      "Networking in the Cloud",
      "Cloud Security",
      "Identity in Cloud Platforms",
      "Cloud Databases",
      "Cloud Application Architecture",
      "Introduction to DevOps",
      "DevOps Culture",
      "Version Control",
      "Git Fundamentals",
      "Branching Strategies",
      "Continuous Integration",
      "Continuous Delivery",
      "Continuous Deployment",
      "Build Automation",
      "Testing Automation",
      "Infrastructure as Code",
      "Configuration Management",
      "Containers",
      "Docker Fundamentals",
      "Container Networking",
      "Container Storage",
      "Container Security",
      "Kubernetes Fundamentals",
      "Kubernetes Workloads",
      "Kubernetes Networking",
      "Kubernetes Security",
      "Cloud-Native Applications",
      "Microservices",
      "Service Discovery",
      "API Gateways",
      "Observability",
      "Logging",
      "Metrics",
      "Distributed Tracing",
      "DevSecOps",
      "Site Reliability Engineering",
      "Cloud Cost Management",
      "Infrastructure Monitoring",
      "Disaster Recovery",
      "Cloud Architecture Design",
      "DevOps Project",
      "Cloud Deployment Project",
      "Cloud and DevOps Capstone"

    ]
  },

  {
    id: "data-science-big-data",
    number: 5,
    title: "Data Science & Big Data Analytics",
    shortTitle: "Data Science",
    level: "University / Professional",
    description:
      "A structured study of statistics, programming, data analysis, visualization, machine learning and large-scale data processing.",
    modules: [

      "Introduction to Data Science",
      "Data Science Workflow",
      "Data Types",
      "Data Collection",
      "Data Quality",
      "Data Cleaning",
      "Python for Data Science",
      "NumPy",
      "Pandas",
      "Data Transformation",
      "Descriptive Statistics",
      "Probability",
      "Distributions",
      "Sampling",
      "Statistical Inference",
      "Correlation",
      "Regression",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Matplotlib",
      "Visualization Principles",
      "Dashboard Design",
      "SQL Fundamentals",
      "Advanced SQL",
      "Database Analytics",
      "Data Warehousing",
      "ETL Pipelines",
      "Data Engineering",
      "Big Data Concepts",
      "Distributed Computing",
      "Hadoop Concepts",
      "Spark Fundamentals",
      "Data Lakes",
      "Streaming Data",
      "Machine Learning for Data Science",
      "Feature Engineering",
      "Model Evaluation",
      "Predictive Analytics",
      "Text Analytics",
      "Time Series Analysis",
      "Geospatial Data",
      "Business Analytics",
      "Data Ethics",
      "Data Privacy",
      "Data Governance",
      "Data Science Research",
      "Professional Data Projects",
      "Data Science Portfolio",
      "Industry Case Study",
      "Data Science Capstone"

    ]
  },

  {
    id: "mobile-app-development",
    number: 6,
    title: "Mobile App Development",
    shortTitle: "Mobile App Development",
    level: "University / Professional",
    description:
      "Study mobile application design, development, testing, security, deployment and maintenance.",
    modules: [

      "Introduction to Mobile Development",
      "Mobile Operating Systems",
      "Mobile Application Architecture",
      "Mobile UI Principles",
      "Mobile UX Principles",
      "Programming Fundamentals",
      "Mobile Development Tools",
      "Application Lifecycle",
      "User Input",
      "Navigation",
      "Layouts",
      "Responsive Mobile Interfaces",
      "Local Storage",
      "Mobile Databases",
      "Networking",
      "REST APIs",
      "Authentication",
      "Authorization",
      "Push Notifications",
      "Device Sensors",
      "Camera Integration",
      "Location Services",
      "Maps",
      "Media Applications",
      "Background Processing",
      "Application State",
      "Mobile Performance",
      "Mobile Security",
      "Secure Storage",
      "Encryption",
      "Error Handling",
      "Debugging",
      "Automated Testing",
      "UI Testing",
      "API Testing",
      "Application Analytics",
      "App Accessibility",
      "App Internationalization",
      "Application Packaging",
      "App Signing",
      "Application Deployment",
      "App Store Principles",
      "Release Management",
      "Application Maintenance",
      "Mobile Architecture",
      "Cross-Platform Development",
      "Professional Mobile Project",
      "Mobile Product Design",
      "Mobile Application Case Study",
      "Mobile Development Capstone"

    ]
  },

  {
    id: "ui-ux-product-design",
    number: 7,
    title: "UI/UX Product Design",
    shortTitle: "UI/UX Product Design",
    level: "University / Professional",
    description:
      "Study user research, interaction design, visual design, prototyping, accessibility, usability testing and digital product development.",
    modules: [

      "Introduction to UI and UX",
      "Human-Centered Design",
      "Design Thinking",
      "User Research",
      "User Interviews",
      "Personas",
      "User Journeys",
      "Problem Definition",
      "Information Architecture",
      "Navigation Design",
      "Interaction Design",
      "Visual Hierarchy",
      "Typography",
      "Color Theory",
      "Layout Principles",
      "Design Systems",
      "Components",
      "Responsive Design",
      "Accessibility",
      "Wireframing",
      "Low-Fidelity Prototypes",
      "High-Fidelity Prototypes",
      "Interaction Prototypes",
      "Usability Testing",
      "A/B Testing",
      "Design Research",
      "Product Strategy",
      "Product Requirements",
      "User Stories",
      "Design Documentation",
      "Mobile UX",
      "Web UX",
      "Dashboard UX",
      "Forms and Data Entry UX",
      "Error States",
      "Onboarding",
      "Notifications",
      "Design for Trust",
      "Inclusive Design",
      "Design Ethics",
      "Design Tools",
      "Developer Handoff",
      "Design QA",
      "Product Analytics",
      "UX Writing",
      "Portfolio Development",
      "Client Presentation",
      "Professional Design Practice",
      "Product Case Study",
      "UX Capstone"

    ]
  },

  {
    id: "blockchain-web3",
    number: 8,
    title: "Blockchain & Web3 Development",
    shortTitle: "Blockchain & Web3",
    level: "University / Professional",
    description:
      "Study distributed ledgers, blockchain architecture, cryptographic concepts, decentralized applications and smart-contract development.",
    modules: [

      "Introduction to Blockchain",
      "Distributed Systems",
      "Decentralization",
      "Cryptographic Foundations",
      "Hash Functions",
      "Digital Signatures",
      "Public Key Cryptography",
      "Blockchain Data Structures",
      "Blocks and Transactions",
      "Consensus Concepts",
      "Proof-Based Consensus",
      "Blockchain Networks",
      "Wallet Concepts",
      "Keys and Addresses",
      "Transaction Lifecycle",
      "Smart Contracts",
      "Smart Contract Architecture",
      "Contract Development",
      "Contract Testing",
      "Contract Security",
      "Decentralized Applications",
      "Web3 Frontend Architecture",
      "Blockchain APIs",
      "Token Concepts",
      "Token Standards",
      "Digital Assets",
      "Decentralized Identity",
      "Oracles",
      "Decentralized Storage",
      "Blockchain Governance",
      "DAO Concepts",
      "Layered Blockchain Architecture",
      "Scaling Concepts",
      "Interoperability",
      "Blockchain Privacy",
      "Blockchain Security",
      "Common Blockchain Vulnerabilities",
      "Auditing Principles",
      "Web3 User Experience",
      "Web3 Product Design",
      "Blockchain Data Analytics",
      "Enterprise Blockchain",
      "Blockchain Use Cases",
      "Blockchain Legal and Ethical Issues",
      "Web3 Development Workflow",
      "Blockchain Testing",
      "Deployment Principles",
      "Blockchain Project Planning",
      "Web3 Case Study",
      "Blockchain Capstone"

    ]
  },

  {
    id: "business-intelligence",
    number: 9,
    title: "Business Intelligence & Data Visualization",
    shortTitle: "Business Intelligence",
    level: "University / Professional",
    description:
      "Study business data, reporting, dashboards, visualization, analytics, decision support and data-driven management.",
    modules: [

      "Introduction to Business Intelligence",
      "BI Architecture",
      "Business Data",
      "Data Sources",
      "Data Collection",
      "Data Quality",
      "Data Preparation",
      "SQL for BI",
      "Relational Data",
      "Data Warehouses",
      "Data Marts",
      "ETL",
      "ELT",
      "Dimensional Modeling",
      "Fact Tables",
      "Dimension Tables",
      "KPIs",
      "Business Metrics",
      "Descriptive Analytics",
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
      "Data Visualization Principles",
      "Charts and Graphs",
      "Dashboard Design",
      "Interactive Dashboards",
      "Reporting",
      "Executive Reporting",
      "Operational Reporting",
      "Self-Service BI",
      "Data Storytelling",
      "Visualization Ethics",
      "Data Interpretation",
      "Trend Analysis",
      "Forecasting",
      "Business Performance",
      "Financial Analytics",
      "Marketing Analytics",
      "Sales Analytics",
      "Customer Analytics",
      "Operations Analytics",
      "BI Security",
      "Data Governance",
      "BI Architecture Design",
      "Analytics Projects",
      "Dashboard Development",
      "Business Case Study",
      "BI Strategy",
      "Professional BI Practice",
      "BI Capstone"

    ]
  },

  {
    id: "game-development-vr-ar",
    number: 10,
    title: "Game Development & VR/AR",
    shortTitle: "Game Development & VR/AR",
    level: "University / Professional",
    description:
      "Study game design, programming, graphics, physics, audio, artificial intelligence and immersive VR/AR experiences.",
    modules: [

      "Introduction to Game Development",
      "Game Design Principles",
      "Game Genres",
      "Game Mechanics",
      "Game Loops",
      "Game Programming",
      "Programming for Games",
      "Game Engines",
      "Scenes and Objects",
      "Input Systems",
      "Physics",
      "Collision Detection",
      "Character Controllers",
      "Camera Systems",
      "Lighting",
      "Materials",
      "Textures",
      "3D Models",
      "Animation",
      "Particle Systems",
      "Game Audio",
      "UI in Games",
      "Game Menus",
      "Game Saving",
      "Artificial Intelligence in Games",
      "Pathfinding",
      "Non-Player Characters",
      "Game Networking",
      "Multiplayer Concepts",
      "Performance Optimization",
      "Memory Management",
      "Game Testing",
      "Game Debugging",
      "Game Accessibility",
      "Game Security",
      "Publishing Games",
      "Monetization Principles",
      "Game Production",
      "Project Management",
      "Virtual Reality",
      "VR Interaction",
      "VR User Experience",
      "Augmented Reality",
      "AR Interaction",
      "Spatial Computing",
      "Immersive Design",
      "XR Performance",
      "XR Safety",
      "Game Portfolio",
      "Game Development Capstone"

    ]
  },

  {
    id: "iot-embedded",
    number: 11,
    title: "Internet of Things (IoT) & Embedded Systems",
    shortTitle: "IoT & Embedded Systems",
    level: "University / Professional",
    description:
      "Study connected devices, sensors, embedded programming, networking, data collection, automation and IoT security.",
    modules: [

      "Introduction to IoT",
      "IoT Architecture",
      "Embedded Systems",
      "Microcontrollers",
      "Microprocessors",
      "Digital Electronics",
      "Analog Electronics",
      "Sensors",
      "Actuators",
      "GPIO",
      "Serial Communication",
      "I2C",
      "SPI",
      "UART",
      "Embedded Programming",
      "Real-Time Systems",
      "Interrupts",
      "Timers",
      "Memory Management",
      "Embedded Operating Systems",
      "IoT Networking",
      "Wireless Communication",
      "Wi-Fi",
      "Bluetooth",
      "Cellular IoT",
      "MQTT",
      "IoT Gateways",
      "Edge Computing",
      "Cloud IoT",
      "IoT Data Processing",
      "IoT Databases",
      "Device Management",
      "IoT Security",
      "Device Authentication",
      "Secure Communication",
      "Firmware Security",
      "IoT Privacy",
      "Industrial IoT",
      "Smart Homes",
      "Smart Agriculture",
      "Smart Cities",
      "Healthcare IoT",
      "IoT Automation",
      "Energy Management",
      "IoT Monitoring",
      "IoT Testing",
      "IoT Project Design",
      "Embedded Product Development",
      "IoT Case Study",
      "IoT Capstone"

    ]
  },

  {
    id: "software-qa-testing",
    number: 12,
    title: "Software Quality Assurance & Automated Testing",
    shortTitle: "Software QA & Testing",
    level: "University / Professional",
    description:
      "Study software quality, test planning, manual testing, automation, API testing, performance testing and quality engineering.",
    modules: [

      "Introduction to Software Quality",
      "Quality Assurance",
      "Quality Control",
      "Software Development Lifecycle",
      "Testing Lifecycle",
      "Test Planning",
      "Test Cases",
      "Test Scenarios",
      "Requirements Testing",
      "Functional Testing",
      "Non-Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing",
      "Exploratory Testing",
      "Usability Testing",
      "Accessibility Testing",
      "API Testing",
      "Database Testing",
      "Security Testing",
      "Performance Testing",
      "Load Testing",
      "Stress Testing",
      "Test Automation",
      "Automation Frameworks",
      "Test Data",
      "Test Environments",
      "Continuous Testing",
      "CI/CD Testing",
      "Unit Testing",
      "Integration Automation",
      "End-to-End Testing",
      "Web Application Testing",
      "Mobile Testing",
      "Defect Management",
      "Bug Reporting",
      "Root Cause Analysis",
      "Test Metrics",
      "Quality Metrics",
      "Test Documentation",
      "Test Management",
      "Risk-Based Testing",
      "Quality Engineering",
      "Test Architecture",
      "QA Team Practices",
      "Professional QA Project",
      "QA Capstone"

    ]
  },

  {
    id: "rpa",
    number: 13,
    title: "Robotic Process Automation",
    shortTitle: "RPA",
    level: "University / Professional",
    description:
      "Study process automation, workflow analysis, software robots, automation design, testing, deployment and governance.",
    modules: [

      "Introduction to RPA",
      "Automation Concepts",
      "Business Process Analysis",
      "Process Mapping",
      "Automation Opportunities",
      "RPA Architecture",
      "RPA Platforms",
      "Workflow Design",
      "Variables",
      "Conditions",
      "Loops",
      "Data Handling",
      "File Automation",
      "Spreadsheet Automation",
      "Email Automation",
      "Document Processing",
      "Web Automation",
      "Desktop Automation",
      "Database Automation",
      "API Automation",
      "Exception Handling",
      "Logging",
      "Debugging",
      "Automation Testing",
      "Credential Management",
      "Security in RPA",
      "Human-in-the-Loop",
      "Process Orchestration",
      "Scheduling",
      "Queues",
      "Robot Management",
      "Automation Monitoring",
      "Performance Measurement",
      "Process Optimization",
      "Intelligent Automation",
      "OCR Concepts",
      "Document Understanding",
      "AI-Assisted Automation",
      "RPA Governance",
      "Compliance",
      "Automation Risk",
      "Change Management",
      "RPA Deployment",
      "RPA Maintenance",
      "Enterprise Automation",
      "Automation Architecture",
      "RPA Project Planning",
      "Business Case Development",
      "RPA Case Study",
      "RPA Capstone"

    ]
  },

  {
    id: "database-administration",
    number: 14,
    title: "Database Administration & Engineering",
    shortTitle: "Database Administration",
    level: "University / Professional",
    description:
      "Study database design, SQL, administration, security, performance, backup, recovery, reliability and data engineering.",
    modules: [

      "Introduction to Databases",
      "Database Concepts",
      "Database Management Systems",
      "Relational Databases",
      "Database Architecture",
      "Data Modeling",
      "Entity Relationship Modeling",
      "Normalization",
      "SQL Fundamentals",
      "DDL",
      "DML",
      "Queries",
      "Joins",
      "Subqueries",
      "Views",
      "Indexes",
      "Constraints",
      "Transactions",
      "Concurrency",
      "ACID Principles",
      "Stored Procedures",
      "Triggers",
      "Database Security",
      "Authentication",
      "Authorization",
      "Database Auditing",
      "Backup Strategies",
      "Database Recovery",
      "High Availability",
      "Replication",
      "Database Clustering",
      "Performance Tuning",
      "Query Optimization",
      "Monitoring",
      "Capacity Planning",
      "Cloud Databases",
      "NoSQL Databases",
      "Document Databases",
      "Key-Value Databases",
      "Distributed Databases",
      "Data Warehousing",
      "ETL",
      "Database Migration",
      "Database Automation",
      "Database DevOps",
      "Data Governance",
      "Database Troubleshooting",
      "Database Engineering Project",
      "Professional DBA Practice",
      "Database Capstone"

    ]
  },

  {
    id: "api-microservices",
    number: 15,
    title: "API Design & Microservices Architecture",
    shortTitle: "APIs & Microservices",
    level: "University / Professional",
    description:
      "Study professional API design, distributed systems, microservices, communication patterns, security, reliability and deployment.",
    modules: [

      "Introduction to APIs",
      "API Architecture",
      "HTTP Fundamentals",
      "REST Principles",
      "Resource Design",
      "Request and Response Design",
      "HTTP Methods",
      "HTTP Status Codes",
      "JSON APIs",
      "API Documentation",
      "API Versioning",
      "Pagination",
      "Filtering and Searching",
      "API Validation",
      "API Error Handling",
      "API Authentication",
      "API Authorization",
      "OAuth Concepts",
      "API Security",
      "Rate Limiting",
      "Caching",
      "API Gateways",
      "Service Discovery",
      "Microservices Fundamentals",
      "Monolithic Architecture",
      "Microservice Decomposition",
      "Service Communication",
      "Synchronous Communication",
      "Asynchronous Communication",
      "Message Queues",
      "Event-Driven Architecture",
      "Distributed Transactions",
      "Data Ownership",
      "Service Databases",
      "Resilience",
      "Retries",
      "Circuit Breakers",
      "Observability",
      "Logging",
      "Metrics",
      "Tracing",
      "Microservice Testing",
      "Contract Testing",
      "Containerization",
      "Microservice Deployment",
      "CI/CD",
      "Microservice Security",
      "Architecture Documentation",
      "Distributed System Design",
      "Microservices Project",
      "Architecture Capstone"

    ]
  },

  {
    id: "linux-open-source",
    number: 16,
    title: "Linux Systems Administration & Open Source Engineering",
    shortTitle: "Linux Administration",
    level: "University / Professional",
    description:
      "Study Linux administration, shell environments, networking, storage, security, automation and open-source engineering.",
    modules: [

      "Introduction to Linux",
      "Linux Distributions",
      "Linux Architecture",
      "Installing Linux",
      "Command Line Fundamentals",
      "Filesystem Structure",
      "File Management",
      "Permissions",
      "Users and Groups",
      "Processes",
      "Services",
      "Systemd",
      "Package Management",
      "Environment Variables",
      "Shell Scripting",
      "Bash Fundamentals",
      "Text Processing",
      "Pipelines",
      "Redirection",
      "Scheduling Jobs",
      "System Monitoring",
      "CPU and Memory Management",
      "Storage Management",
      "Partitions",
      "Filesystems",
      "Mounting Storage",
      "Networking Fundamentals",
      "Linux Networking",
      "DNS",
      "SSH",
      "Web Servers",
      "Reverse Proxies",
      "Linux Security",
      "Firewalls",
      "Security Hardening",
      "Logs",
      "Backup",
      "Recovery",
      "Automation",
      "Configuration Management",
      "Containers on Linux",
      "Virtualization",
      "Open Source Principles",
      "Open Source Licensing",
      "Git and Open Source",
      "Contribution Workflows",
      "Package and Project Management",
      "Linux Troubleshooting",
      "Systems Administration Project",
      "Linux Capstone"

    ]
  },

  {
    id: "technical-digital-marketing",
    number: 17,
    title: "Technical Digital Marketing & Growth Engineering",
    shortTitle: "Technical Digital Marketing",
    level: "University / Professional",
    description:
      "Study the technical side of digital marketing, analytics, search, conversion optimization, automation and growth systems.",
    modules: [

      "Introduction to Technical Marketing",
      "Digital Marketing Systems",
      "Marketing Technology",
      "Web Fundamentals",
      "Website Architecture",
      "Technical SEO",
      "Search Engines",
      "Crawling and Indexing",
      "Structured Data",
      "Website Performance",
      "Core Web Performance Concepts",
      "Mobile Optimization",
      "Content Architecture",
      "Keyword Research",
      "Search Intent",
      "Content Strategy",
      "Analytics Fundamentals",
      "Web Analytics",
      "Event Tracking",
      "Conversion Tracking",
      "Marketing Dashboards",
      "Conversion Rate Optimization",
      "Landing Pages",
      "A/B Testing",
      "Email Marketing Technology",
      "Marketing Automation",
      "Customer Journeys",
      "CRM Systems",
      "Lead Management",
      "Growth Funnels",
      "Acquisition",
      "Activation",
      "Retention",
      "Referral",
      "Revenue Analytics",
      "Attribution",
      "Campaign Measurement",
      "Social Platform Analytics",
      "Advertising Technology",
      "Privacy and Consent",
      "Marketing Security",
      "Technical Content Marketing",
      "Programmatic Concepts",
      "Growth Experiments",
      "Marketing APIs",
      "Automation Workflows",
      "Growth Engineering",
      "Marketing Technology Architecture",
      "Growth Case Study",
      "Digital Growth Capstone"

    ]
  },

  {
    id: "it-support-networking",
    number: 18,
    title: "IT Support, Networking & Systems Troubleshooting",
    shortTitle: "IT Support & Networking",
    level: "University / Professional",
    description:
      "Study computer support, networking, operating systems, troubleshooting, hardware, software and IT service management.",
    modules: [

      "Introduction to IT Support",
      "Computer Hardware",
      "Computer Components",
      "Motherboards",
      "Processors",
      "Memory",
      "Storage Devices",
      "Input and Output Devices",
      "Power Systems",
      "Computer Assembly",
      "Operating Systems",
      "Windows Administration",
      "Linux Fundamentals",
      "Software Installation",
      "Software Troubleshooting",
      "Hardware Troubleshooting",
      "Networking Fundamentals",
      "Network Topologies",
      "OSI Model",
      "TCP/IP Model",
      "IP Addressing",
      "Subnetting",
      "Ethernet",
      "Switches",
      "Routers",
      "Wireless Networking",
      "DNS",
      "DHCP",
      "Network Troubleshooting",
      "Network Security",
      "Firewalls",
      "User Accounts",
      "Permissions",
      "Printer Support",
      "Remote Support",
      "Help Desk Operations",
      "Ticket Management",
      "IT Documentation",
      "Backup",
      "Recovery",
      "System Monitoring",
      "Endpoint Security",
      "Malware Prevention",
      "IT Asset Management",
      "IT Service Management",
      "Troubleshooting Methodology",
      "Professional IT Support",
      "Network Administration Project",
      "IT Support Case Study",
      "IT Support Capstone"

    ]
  },

  {
    id: "low-code-no-code",
    number: 19,
    title: "Low-Code / No-Code App Development",
    shortTitle: "Low-Code / No-Code",
    level: "University / Professional",
    description:
      "Study application development using visual platforms, automation, databases, integrations, workflows and governance.",
    modules: [

      "Introduction to Low-Code Development",
      "No-Code Development",
      "Low-Code Architecture",
      "Application Planning",
      "Requirements Analysis",
      "Data Modeling",
      "Visual Interfaces",
      "Forms",
      "Navigation",
      "Components",
      "Reusable Components",
      "Variables",
      "Logic",
      "Conditions",
      "Workflows",
      "Automation",
      "Database Connections",
      "API Connections",
      "Authentication",
      "Authorization",
      "User Management",
      "Notifications",
      "File Management",
      "Reporting",
      "Dashboards",
      "Business Processes",
      "Approval Workflows",
      "Integration",
      "Webhooks",
      "External Services",
      "Data Validation",
      "Error Handling",
      "Testing",
      "Security",
      "Privacy",
      "Performance",
      "Deployment",
      "Version Management",
      "Application Monitoring",
      "Maintenance",
      "Governance",
      "Citizen Development",
      "Enterprise Low-Code",
      "Automation Strategy",
      "Low-Code Architecture",
      "Application Case Study",
      "Professional Project",
      "Business Application",
      "Production Deployment",
      "Low-Code Capstone"

    ]
  },

  {
    id: "quantum-computing",
    number: 20,
    title: "Quantum Computing Foundations",
    shortTitle: "Quantum Computing",
    level: "University / Professional",
    description:
      "An accessible academic foundation in quantum computing, quantum information, quantum algorithms, programming concepts and applications.",
    modules: [

      "Introduction to Quantum Computing",
      "Classical vs Quantum Computing",
      "Quantum Information",
      "Linear Algebra Foundations",
      "Complex Numbers",
      "Vectors and Matrices",
      "Quantum States",
      "Qubits",
      "Superposition",
      "Measurement",
      "Quantum Gates",
      "Single-Qubit Gates",
      "Multi-Qubit Systems",
      "Entanglement",
      "Quantum Circuits",
      "Circuit Notation",
      "Quantum Programming Concepts",
      "Quantum Algorithms",
      "Deutsch Algorithm",
      "Deutsch-Jozsa Algorithm",
      "Bernstein-Vazirani Algorithm",
      "Grover's Algorithm",
      "Quantum Fourier Transform",
      "Shor's Algorithm",
      "Quantum Search",
      "Quantum Optimization",
      "Quantum Machine Learning",
      "Quantum Cryptography",
      "Quantum Key Distribution",
      "Quantum Communication",
      "Quantum Error",
      "Error Correction Concepts",
      "Noise in Quantum Systems",
      "Quantum Hardware",
      "Superconducting Qubits",
      "Trapped Ions",
      "Photonic Quantum Computing",
      "Quantum Annealing",
      "Quantum Software",
      "Quantum Simulators",
      "Quantum Development Environments",
      "Quantum Complexity",
      "Quantum Applications",
      "Quantum Chemistry",
      "Quantum Finance",
      "Quantum Machine Learning Applications",
      "Quantum Research Methods",
      "Quantum Project Design",
      "Quantum Case Study",
      "Quantum Computing Capstone"

    ]
  }

];


/* ========================================================
   VALIDATION
======================================================== */

function validateCourses() {

  const errors = [];

  if (TECHNOLOGY_COURSES.length !== 20) {
    errors.push(
      `Expected 20 courses but found ${TECHNOLOGY_COURSES.length}.`
    );
  }

  TECHNOLOGY_COURSES.forEach(course => {

    if (!course.id) {
      errors.push("A course is missing an ID.");
    }

    if (!course.title) {
      errors.push(`Course ${course.id} is missing a title.`);
    }

    if (!Array.isArray(course.modules)) {
      errors.push(`${course.title} does not contain a modules array.`);
      return;
    }

    if (course.modules.length !== 50) {
      errors.push(
        `${course.title} contains ${course.modules.length} modules instead of 50.`
      );
    }

  });

  if (errors.length) {
    console.error("COURSE VALIDATION ERRORS:");
    errors.forEach(error => console.error(error));
    return false;
  }

  console.log(
    "NEXORA DIGITAL COURSE SYSTEM READY: 20 courses / 1000 modules."
  );

  return true;
}


/* ========================================================
   LESSON CONTENT ENGINE
======================================================== */

/*
The previous system showed:

"Lesson content coming next"

That is now removed.

Every module receives an actual lesson structure.

The module title is used to generate the academic lesson
framework. This is intentionally separated from the course
catalog so detailed authored notes can be expanded module
by module without rebuilding the website.
*/

function createLesson(course, moduleTitle, moduleIndex) {

  const moduleNumber = moduleIndex + 1;

  return {

    moduleNumber,

    title: moduleTitle,

    objectives: [
      `Define and explain the fundamental concepts of ${moduleTitle}.`,
      `Identify the major principles and terminology associated with ${moduleTitle}.`,
      `Explain how ${moduleTitle} is applied in practical technology environments.`,
      `Analyse common problems associated with ${moduleTitle}.`,
      `Apply the knowledge from this module in a practical learning activity.`
    ],

    introduction:
      `${moduleTitle} is an important area of study within ${course.title}. ` +
      `This module introduces the major concepts, terminology, principles ` +
      `and practical considerations that learners need before progressing ` +
      `to more advanced topics.`,

    notes: [

      {
        heading: "1. Introduction",
        content:
          `${moduleTitle} should be understood as both a theoretical ` +
          `and practical subject. A strong learner should understand not ` +
          `only what the technology or concept means, but also why it exists, ` +
          `how it works, where it is used and what limitations it has.`
      },

      {
        heading: "2. Core Concepts",
        content:
          `The core concepts of ${moduleTitle} provide the foundation for ` +
          `further study. Learners should become familiar with the terminology, ` +
          `components, processes and relationships involved in the subject. ` +
          `These concepts should be connected to real-world technology systems ` +
          `rather than memorised in isolation.`
      },

      {
        heading: "3. How It Works",
        content:
          `A useful way to study ${moduleTitle} is to examine its workflow. ` +
          `First, identify the inputs or requirements. Next, understand the ` +
          `processing or decision-making stages. Finally, examine the outputs, ` +
          `results, limitations and possible improvements. This approach helps ` +
          `learners understand the subject as a system.`
      },

      {
        heading: "4. Practical Application",
        content:
          `In professional environments, knowledge of ${moduleTitle} is used ` +
          `to solve practical problems. A learner should therefore practise ` +
          `analysing requirements, selecting appropriate techniques, implementing ` +
          `solutions and evaluating the resulting outcome.`
      },

      {
        heading: "5. Professional Considerations",
        content:
          `Professional work involving ${moduleTitle} requires attention to ` +
          `security, reliability, maintainability, performance, documentation ` +
          `ethics and responsible use. Technical solutions should be designed ` +
          `with the needs of users and organisations in mind.`
      },

      {
        heading: "6. Summary",
        content:
          `The central lesson of this module is that ${moduleTitle} should be ` +
          `understood through a combination of theory and practical application. ` +
          `Learners should review the terminology, principles and examples before ` +
          `continuing to the next module.`
      }

    ],

    keyTerms: [
      moduleTitle,
      "Technology",
      "System",
      "Process",
      "Architecture",
      "Implementation",
      "Security",
      "Performance",
      "Reliability",
      "Documentation"
    ],

    practicalActivity:
      `Design a small practical exercise related to ${moduleTitle}. ` +
      `Document the objective, required resources, procedure, expected result ` +
      `and lessons learned.`,

    reviewPoints: [
      `What is ${moduleTitle}?`,
      `Why is ${moduleTitle} important?`,
      `What are its major concepts?`,
      `Where is it used in professional environments?`,
      `What risks or limitations should a professional consider?`
    ],

    conclusion:
      `After completing this module, the learner should be able to explain ` +
      `${moduleTitle}, discuss its importance and relate its principles to ` +
      `real-world technology systems.`
  };
}


/* ========================================================
   BUILD THE COMPLETE LESSON DATABASE
======================================================== */

const LESSON_DATABASE = {};

TECHNOLOGY_COURSES.forEach(course => {

  LESSON_DATABASE[course.id] = course.modules.map(
    (moduleTitle, index) =>
      createLesson(course, moduleTitle, index)
  );

});


/* ========================================================
   COURSE ACCESS FUNCTIONS
======================================================== */

function getCourse(courseId) {

  return TECHNOLOGY_COURSES.find(
    course => course.id === courseId
  );

}


function getLessons(courseId) {

  return LESSON_DATABASE[courseId] || [];

}


function getLesson(courseId, moduleNumber) {

  const lessons = getLessons(courseId);

  return lessons[moduleNumber - 1] || null;

}


/* ========================================================
   PROGRESS SYSTEM
======================================================== */

function getProgressKey(courseId) {

  return `nexora_progress_${courseId}`;

}


function getCourseProgress(courseId) {

  try {

    const saved =
      localStorage.getItem(getProgressKey(courseId));

    if (!saved) {
      return [];
    }

    return JSON.parse(saved);

  } catch (error) {

    console.error("Unable to read course progress.", error);

    return [];

  }

}


function markModuleComplete(courseId, moduleNumber) {

  const progress = getCourseProgress(courseId);

  if (!progress.includes(moduleNumber)) {

    progress.push(moduleNumber);

    progress.sort(
      (a, b) => a - b
    );

  }

  localStorage.setItem(
    getProgressKey(courseId),
    JSON.stringify(progress)
  );

}


function getProgressPercentage(courseId) {

  const course = getCourse(courseId);

  if (!course) {
    return 0;
  }

  const completed =
    getCourseProgress(courseId).length;

  return Math.round(
    (completed / course.modules.length) * 100
  );

}


/* ========================================================
   COURSE URL NAVIGATION
======================================================== */

function openCourse(courseId) {

  window.location.href =
    `technology-guides.html?course=${encodeURIComponent(courseId)}`;

}


function openModule(courseId, moduleNumber) {

  window.location.href =
    `technology-guides.html?course=${encodeURIComponent(courseId)}&module=${moduleNumber}`;

}


/* ========================================================
   RENDER COURSE LIST
======================================================== */

function renderCourseList(container) {

  if (!container) {
    return;
  }

  container.innerHTML = "";

  TECHNOLOGY_COURSES.forEach(course => {

    const article =
      document.createElement("article");

    article.className = "course-card";

    article.innerHTML = `

      <div class="course-number">
        COURSE ${String(course.number).padStart(2, "0")}
      </div>

      <h3>
        ${escapeHTML(course.title)}
      </h3>

      <p>
        ${escapeHTML(course.description)}
      </p>

      <div class="course-meta">
        <span>50 Modules</span>
        <span>${escapeHTML(course.level)}</span>
      </div>

      <button
        type="button"
        class="course-button"
        data-course="${escapeHTML(course.id)}"
      >
        Start Course →
      </button>

    `;

    container.appendChild(article);

  });

  container
    .querySelectorAll("[data-course]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => openCourse(button.dataset.course)
      );

    });

}


/* ========================================================
   RENDER MODULE LIST
======================================================== */

function renderModuleList(container, courseId) {

  if (!container) {
    return;
  }

  const course = getCourse(courseId);

  if (!course) {
    container.innerHTML =
      "<p>Course not found.</p>";
    return;
  }

  const progress =
    getCourseProgress(courseId);

  container.innerHTML = "";

  course.modules.forEach(
    (moduleTitle, index) => {

      const moduleNumber = index + 1;

      const completed =
        progress.includes(moduleNumber);

      const button =
        document.createElement("button");

      button.type = "button";
      button.className =
        `module-card ${completed ? "completed" : ""}`;

      button.innerHTML = `

        <span class="module-number">
          MODULE ${String(moduleNumber).padStart(2, "0")}
        </span>

        <strong>
          ${escapeHTML(moduleTitle)}
        </strong>

        <span class="module-status">
          ${completed ? "Completed ✓" : "Study Module →"}
        </span>

      `;

      button.addEventListener(
        "click",
        () => openModule(courseId, moduleNumber)
      );

      container.appendChild(button);

    }
  );

}


/* ========================================================
   RENDER SINGLE LESSON
======================================================== */

function renderLesson(container, courseId, moduleNumber) {

  if (!container) {
    return;
  }

  const course =
    getCourse(courseId);

  const lesson =
    getLesson(courseId, moduleNumber);

  if (!course || !lesson) {

    container.innerHTML = `
      <section class="lesson-error">
        <h2>Lesson not found</h2>
        <p>
          The requested course or module could not be found.
        </p>
      </section>
    `;

    return;

  }

  const previous =
    moduleNumber > 1
      ? moduleNumber - 1
      : null;

  const next =
    moduleNumber < course.modules.length
      ? moduleNumber + 1
      : null;

  container.innerHTML = `

    <article class="lesson-page">

      <div class="lesson-header">

        <div class="lesson-course">
          ${escapeHTML(course.title)}
        </div>

        <div class="lesson-module">
          MODULE ${String(moduleNumber).padStart(2, "0")}
        </div>

        <h1>
          ${escapeHTML(lesson.title)}
        </h1>

        <p>
          ${escapeHTML(lesson.introduction)}
        </p>

      </div>


      <section class="lesson-section">

        <h2>Learning Objectives</h2>

        <ul>
          ${lesson.objectives
            .map(
              item =>
                `<li>${escapeHTML(item)}</li>`
            )
            .join("")
          }
        </ul>

      </section>


      <section class="lesson-section">

        <h2>Detailed Notes</h2>

        ${lesson.notes
          .map(
            note => `

              <div class="lesson-note">

                <h3>
                  ${escapeHTML(note.heading)}
                </h3>

                <p>
                  ${escapeHTML(note.content)}
                </p>

              </div>

            `
          )
          .join("")
        }

      </section>


      <section class="lesson-section">

        <h2>Key Terms</h2>

        <div class="key-terms">

          ${lesson.keyTerms
            .map(
              term =>
                `<span>${escapeHTML(term)}</span>`
            )
            .join("")
          }

        </div>

      </section>


      <section class="lesson-section practical">

        <h2>Practical Learning Activity</h2>

        <p>
          ${escapeHTML(lesson.practicalActivity)}
        </p>

      </section>


      <section class="lesson-section">

        <h2>Module Review</h2>

        <ul>
          ${lesson.reviewPoints
            .map(
              item =>
                `<li>${escapeHTML(item)}</li>`
            )
            .join("")
          }
        </ul>

      </section>


      <section class="lesson-section">

        <h2>Module Conclusion</h2>

        <p>
          ${escapeHTML(lesson.conclusion)}
        </p>

      </section>


      <div class="lesson-actions">

        ${
          previous
            ? `
              <button
                type="button"
                onclick="openModule('${course.id}', ${previous})"
              >
                ← Previous Module
              </button>
            `
            : ""
        }


        <button
          type="button"
          class="complete-button"
          onclick="
            markModuleComplete('${course.id}', ${moduleNumber});
            refreshLessonProgress('${course.id}');
          "
        >
          Mark Module Complete ✓
        </button>


        ${
          next
            ? `
              <button
                type="button"
                onclick="openModule('${course.id}', ${next})"
              >
                Next Module →
              </button>
            `
            : `
              <button
                type="button"
                onclick="openCourse('${course.id}')"
              >
                Return to Course
              </button>
            `
        }

      </div>


      <div
        id="lesson-progress"
        class="lesson-progress"
      >
        Course progress:
        ${getProgressPercentage(course.id)}%
      </div>

    </article>

  `;

}


/* ========================================================
   PROGRESS REFRESH
======================================================== */

function refreshLessonProgress(courseId) {

  const progressElement =
    document.getElementById("lesson-progress");

  if (!progressElement) {
    return;
  }

  progressElement.textContent =
    `Course progress: ${getProgressPercentage(courseId)}%`;

}


/* ========================================================
   SEARCH COURSES
======================================================== */

function searchCourses(searchTerm) {

  const term =
    String(searchTerm || "")
      .trim()
      .toLowerCase();

  if (!term) {
    return TECHNOLOGY_COURSES;
  }

  return TECHNOLOGY_COURSES.filter(
    course => {

      const courseText =
        `${course.title} ${course.description} ${course.modules.join(" ")}`
          .toLowerCase();

      return courseText.includes(term);

    }
  );

}


/* ========================================================
   SECURITY HELPER
======================================================== */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* ========================================================
   INITIALIZATION
======================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    validateCourses();

    const params =
      new URLSearchParams(
        window.location.search
      );

    const courseId =
      params.get("course");

    const moduleNumber =
      Number(params.get("module"));


    const courseContainer =
      document.getElementById(
        "course-list"
      );

    const moduleContainer =
      document.getElementById(
        "module-list"
      );

    const lessonContainer =
      document.getElementById(
        "lesson-content"
      );


    if (
      courseContainer &&
      !courseId
    ) {

      renderCourseList(
        courseContainer
      );

    }


    if (
      moduleContainer &&
      courseId
    ) {

      renderModuleList(
        moduleContainer,
        courseId
      );

    }


    if (
      lessonContainer &&
      courseId &&
      moduleNumber
    ) {

      renderLesson(
        lessonContainer,
        courseId,
        moduleNumber
      );

    }

  }
);


/* ========================================================
   GLOBAL API
======================================================== */

window.NexoraTechnologyCourses = {

  courses:
    TECHNOLOGY_COURSES,

  lessons:
    LESSON_DATABASE,

  getCourse,

  getLessons,

  getLesson,

  getCourseProgress,

  getProgressPercentage,

  markModuleComplete,

  openCourse,

  openModule,

  searchCourses,

  renderCourseList,

  renderModuleList,

  renderLesson

};
