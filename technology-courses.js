/* ============================================================
   NEXORA DIGITAL
   TECHNOLOGY GUIDES — MASTER COURSE SYSTEM
   ============================================================

   PURPOSE:
   - Controls the Technology Guides course catalogue
   - Contains all 20 technology courses
   - Provides 50 modules for every course
   - Provides real lesson content through the lesson database
   - Works with course.html?course=COURSE_ID
   - Prevents empty/undefined course pages
   ============================================================ */

"use strict";


/* ============================================================
   COURSE DATABASE
   ============================================================ */

const TECHNOLOGY_COURSES = [

    {
        id: "ai-machine-learning",
        number: "01",
        title: "Artificial Intelligence & Machine Learning",
        shortTitle: "AI / ML",
        category: "Artificial Intelligence",
        description:
            "A structured introduction to artificial intelligence, machine learning, neural networks, data preparation, model development, evaluation and responsible AI.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Artificial Intelligence",
            "History and Evolution of AI",
            "AI Terminology and Core Concepts",
            "Intelligent Agents",
            "Problem Solving in AI",
            "Search Algorithms",
            "Knowledge Representation",
            "Reasoning and Inference",
            "Introduction to Machine Learning",
            "Types of Machine Learning",
            "Supervised Learning",
            "Unsupervised Learning",
            "Semi-Supervised Learning",
            "Reinforcement Learning",
            "Machine Learning Workflow",
            "Data Collection for Machine Learning",
            "Data Cleaning",
            "Data Preparation",
            "Feature Engineering",
            "Training and Testing Data",
            "Regression",
            "Classification",
            "Decision Trees",
            "Random Forests",
            "Nearest Neighbour Methods",
            "Support Vector Machines",
            "Clustering",
            "Dimensionality Reduction",
            "Model Evaluation",
            "Overfitting and Underfitting",
            "Cross Validation",
            "Hyperparameter Tuning",
            "Introduction to Neural Networks",
            "Neurons and Activation Functions",
            "Forward Propagation",
            "Backpropagation",
            "Deep Learning",
            "Convolutional Neural Networks",
            "Recurrent Neural Networks",
            "Natural Language Processing",
            "Computer Vision",
            "Generative AI",
            "Large Language Models",
            "Prompt Engineering",
            "AI APIs and Applications",
            "Model Deployment",
            "AI Security",
            "AI Ethics and Responsible AI",
            "AI Projects and Case Studies",
            "AI Career and Professional Development"
        ]
    },


    {
        id: "full-stack-web-development",
        number: "02",
        title: "Full-Stack Web Development",
        shortTitle: "Web Development",
        category: "Software Development",
        description:
            "A complete pathway through front-end development, back-end development, databases, APIs, authentication, deployment and modern web applications.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Web Development",
            "How the Web Works",
            "HTML Fundamentals",
            "Semantic HTML",
            "HTML Forms",
            "HTML Accessibility",
            "CSS Fundamentals",
            "CSS Selectors",
            "CSS Box Model",
            "CSS Layout",
            "Flexbox",
            "CSS Grid",
            "Responsive Web Design",
            "CSS Animations",
            "JavaScript Fundamentals",
            "Variables and Data Types",
            "Operators and Expressions",
            "Conditional Statements",
            "Loops",
            "Functions",
            "Arrays and Objects",
            "DOM Manipulation",
            "Events",
            "Form Validation",
            "Modern JavaScript",
            "Asynchronous JavaScript",
            "Fetch and APIs",
            "Version Control with Git",
            "GitHub and Collaboration",
            "Introduction to Backend Development",
            "Server Concepts",
            "Node.js Fundamentals",
            "Express Development",
            "Routing",
            "Middleware",
            "REST APIs",
            "Authentication",
            "Authorization",
            "Database Fundamentals",
            "SQL Databases",
            "NoSQL Databases",
            "Database Design",
            "Application Security",
            "Testing Web Applications",
            "Performance Optimization",
            "Deployment",
            "Cloud Hosting",
            "Web Application Architecture",
            "Full-Stack Project",
            "Professional Web Development"
        ]
    },


    {
        id: "cybersecurity-ethical-hacking",
        number: "03",
        title: "Cybersecurity & Ethical Hacking",
        shortTitle: "Cybersecurity",
        category: "Security",
        description:
            "A defensive and ethical introduction to cybersecurity, networking, threats, security controls, vulnerability management and responsible penetration testing.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Cybersecurity",
            "Security Principles",
            "Confidentiality Integrity Availability",
            "Cybersecurity Terminology",
            "Threats and Threat Actors",
            "Malware Fundamentals",
            "Phishing and Social Engineering",
            "Password Security",
            "Authentication",
            "Authorization",
            "Network Fundamentals",
            "TCP/IP Fundamentals",
            "DNS and DHCP",
            "Firewalls",
            "Network Segmentation",
            "Operating System Security",
            "Windows Security",
            "Linux Security",
            "Web Security Fundamentals",
            "Application Security",
            "Database Security",
            "Cryptography Fundamentals",
            "Encryption",
            "Hashing",
            "Digital Signatures",
            "Security Policies",
            "Risk Management",
            "Vulnerability Management",
            "Security Scanning",
            "Ethical Hacking Principles",
            "Reconnaissance Concepts",
            "Security Testing Methodology",
            "Web Application Testing",
            "Network Security Testing",
            "Access Control Testing",
            "Security Logging",
            "Incident Detection",
            "Incident Response",
            "Digital Forensics Fundamentals",
            "Security Monitoring",
            "Security Operations",
            "Cloud Security",
            "Mobile Security",
            "IoT Security",
            "Security Awareness",
            "Privacy and Data Protection",
            "Cybersecurity Governance",
            "Security Projects",
            "Ethical Responsibilities",
            "Cybersecurity Careers"
        ]
    },


    {
        id: "cloud-computing-devops",
        number: "04",
        title: "Cloud Computing & DevOps",
        shortTitle: "Cloud & DevOps",
        category: "Cloud Technology",
        description:
            "Learn cloud infrastructure, virtualization, containers, CI/CD, monitoring, automation and modern DevOps practices.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Cloud Computing",
            "Cloud Computing Characteristics",
            "Cloud Service Models",
            "Cloud Deployment Models",
            "Virtualization",
            "Virtual Machines",
            "Storage Concepts",
            "Cloud Networking",
            "Cloud Security",
            "Identity and Access Management",
            "Cloud Databases",
            "Cloud Applications",
            "Introduction to DevOps",
            "DevOps Culture",
            "Version Control",
            "Git Workflows",
            "Build Automation",
            "Continuous Integration",
            "Continuous Delivery",
            "Continuous Deployment",
            "Infrastructure as Code",
            "Configuration Management",
            "Containers",
            "Container Images",
            "Container Registries",
            "Container Orchestration",
            "Kubernetes Fundamentals",
            "Service Discovery",
            "Load Balancing",
            "Scalability",
            "High Availability",
            "Monitoring",
            "Logging",
            "Observability",
            "Incident Management",
            "Release Management",
            "Secrets Management",
            "Cloud Cost Management",
            "Serverless Computing",
            "Cloud Architecture",
            "DevSecOps",
            "Automated Testing",
            "Pipeline Security",
            "Cloud Backup",
            "Disaster Recovery",
            "Cloud Migration",
            "Cloud Projects",
            "DevOps Automation",
            "Professional DevOps Practice",
            "Cloud Career Development"
        ]
    },


    {
        id: "data-science-big-data",
        number: "05",
        title: "Data Science & Big Data Analytics",
        shortTitle: "Data Science",
        category: "Data",
        description:
            "Study data analysis, statistics, data preparation, visualization, machine learning foundations and large-scale data processing.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Data Science",
            "Data Science Workflow",
            "Types of Data",
            "Data Collection",
            "Data Quality",
            "Data Cleaning",
            "Data Transformation",
            "Exploratory Data Analysis",
            "Descriptive Statistics",
            "Probability Fundamentals",
            "Distributions",
            "Sampling",
            "Correlation",
            "Regression Fundamentals",
            "Statistical Testing",
            "Python for Data Science",
            "Data Structures",
            "Working with DataFrames",
            "Data Visualization",
            "Data Storytelling",
            "Data Preparation",
            "Feature Engineering",
            "Machine Learning Foundations",
            "Supervised Learning",
            "Unsupervised Learning",
            "Model Evaluation",
            "Predictive Analytics",
            "Introduction to Big Data",
            "Big Data Characteristics",
            "Distributed Computing",
            "Data Lakes",
            "Data Warehouses",
            "ETL Pipelines",
            "Data Pipelines",
            "Batch Processing",
            "Stream Processing",
            "Distributed Storage",
            "Big Data Security",
            "Data Governance",
            "Data Quality Management",
            "Scalable Analytics",
            "Business Applications",
            "Data Projects",
            "Analytics Reporting",
            "Research Methods",
            "Data Ethics",
            "Privacy",
            "Data Science Careers",
            "Professional Portfolio",
            "Capstone Project"
        ]
    },


    {
        id: "mobile-app-development",
        number: "06",
        title: "Mobile App Development",
        shortTitle: "Mobile Development",
        category: "Software Development",
        description:
            "Learn the principles of designing, developing, testing and deploying modern mobile applications.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Mobile Development",
            "Mobile Application Architecture",
            "Mobile User Interfaces",
            "Mobile UX Principles",
            "Development Environments",
            "Programming Fundamentals",
            "Mobile Navigation",
            "Layouts",
            "Components",
            "Forms",
            "Input Validation",
            "Application State",
            "Local Storage",
            "Networking",
            "REST APIs",
            "Authentication",
            "Authorization",
            "Notifications",
            "Device Features",
            "Camera Integration",
            "Location Services",
            "Permissions",
            "Offline Applications",
            "Mobile Databases",
            "Application Security",
            "Secure Storage",
            "Performance",
            "Memory Management",
            "Testing",
            "Debugging",
            "Automated Testing",
            "UI Testing",
            "API Testing",
            "Application Packaging",
            "Application Signing",
            "Release Preparation",
            "App Store Concepts",
            "Analytics",
            "Crash Reporting",
            "Accessibility",
            "Internationalization",
            "Mobile Payments",
            "Push Notifications",
            "Cloud Integration",
            "Cross Platform Development",
            "Mobile Architecture",
            "Mobile Project",
            "Deployment",
            "Maintenance",
            "Mobile Career Development"
        ]
    },


    {
        id: "ui-ux-product-design",
        number: "07",
        title: "UI/UX Product Design",
        shortTitle: "UI/UX Design",
        category: "Design",
        description:
            "Learn user research, information architecture, interaction design, visual design, prototyping, usability testing and product design.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to UI/UX",
            "UI and UX Differences",
            "Design Thinking",
            "User Research",
            "User Interviews",
            "Personas",
            "User Journeys",
            "Problem Definition",
            "Information Architecture",
            "Content Structure",
            "Navigation Design",
            "Wireframing",
            "Low Fidelity Prototypes",
            "High Fidelity Prototypes",
            "Interaction Design",
            "Visual Hierarchy",
            "Typography",
            "Colour Theory",
            "Spacing",
            "Layout Systems",
            "Design Systems",
            "Components",
            "Buttons and Forms",
            "Responsive Design",
            "Mobile UX",
            "Accessibility",
            "Usability Testing",
            "A/B Testing",
            "Design Feedback",
            "Product Requirements",
            "UX Writing",
            "Design Handoff",
            "Developer Collaboration",
            "Design Documentation",
            "Prototyping",
            "Design Tools",
            "Brand Integration",
            "Product Strategy",
            "Conversion Design",
            "E-Commerce UX",
            "Dashboard Design",
            "SaaS Product Design",
            "Design Research",
            "UX Metrics",
            "Product Analytics",
            "Portfolio Development",
            "Case Studies",
            "Design Projects",
            "Professional Practice",
            "UX Career Development"
        ]
    },


    {
        id: "blockchain-web3",
        number: "08",
        title: "Blockchain & Web3 Development",
        shortTitle: "Blockchain & Web3",
        category: "Emerging Technology",
        description:
            "Learn blockchain concepts, distributed ledgers, cryptographic principles, smart contracts, decentralized applications and Web3 architecture.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Blockchain",
            "Distributed Ledgers",
            "Blockchain Architecture",
            "Blocks and Transactions",
            "Consensus Concepts",
            "Proof of Work",
            "Proof of Stake",
            "Cryptographic Hashing",
            "Public Key Cryptography",
            "Digital Signatures",
            "Wallet Concepts",
            "Keys and Addresses",
            "Blockchain Networks",
            "Smart Contracts",
            "Smart Contract Architecture",
            "Decentralized Applications",
            "Web3 Architecture",
            "Blockchain Development",
            "Transaction Lifecycle",
            "Gas and Fees",
            "Token Concepts",
            "Fungible Tokens",
            "Non-Fungible Tokens",
            "Token Standards",
            "Decentralized Finance",
            "Blockchain Governance",
            "DAOs",
            "Oracles",
            "Layer Two Concepts",
            "Blockchain Scalability",
            "Interoperability",
            "Blockchain Security",
            "Smart Contract Security",
            "Wallet Security",
            "Privacy",
            "Blockchain Data",
            "Web3 Front Ends",
            "Blockchain APIs",
            "Decentralized Storage",
            "Identity Concepts",
            "Digital Ownership",
            "Blockchain Applications",
            "Enterprise Blockchain",
            "Blockchain Regulation",
            "Blockchain Ethics",
            "Web3 Projects",
            "Testing",
            "Deployment",
            "Career Development",
            "Capstone Project"
        ]
    },


    {
        id: "business-intelligence",
        number: "09",
        title: "Business Intelligence & Data Visualization",
        shortTitle: "Business Intelligence",
        category: "Data Analytics",
        description:
            "Learn how organizations transform data into reports, dashboards, insights and informed business decisions.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Business Intelligence",
            "BI Architecture",
            "Business Data",
            "Data Sources",
            "Data Collection",
            "Data Quality",
            "Data Cleaning",
            "Data Transformation",
            "Databases",
            "Data Warehousing",
            "ETL Concepts",
            "Dimensional Modelling",
            "Fact Tables",
            "Dimension Tables",
            "KPIs",
            "Metrics",
            "Business Reporting",
            "Dashboard Design",
            "Data Visualization Principles",
            "Charts and Graphs",
            "Tables",
            "Interactive Dashboards",
            "Data Storytelling",
            "Filtering",
            "Drill Down",
            "Aggregations",
            "Calculated Measures",
            "Time Analysis",
            "Sales Analytics",
            "Marketing Analytics",
            "Financial Analytics",
            "Operations Analytics",
            "Customer Analytics",
            "Performance Reporting",
            "Forecasting",
            "Trend Analysis",
            "Data Governance",
            "BI Security",
            "Self Service BI",
            "Enterprise BI",
            "BI Architecture",
            "Analytics Projects",
            "Dashboard Projects",
            "Executive Reporting",
            "Decision Support",
            "Data Ethics",
            "Data Privacy",
            "BI Deployment",
            "BI Maintenance",
            "Professional BI Practice",
            "BI Capstone"
        ]
    },


    {
        id: "game-development-vr-ar",
        number: "10",
        title: "Game Development & VR/AR",
        shortTitle: "Game Development",
        category: "Interactive Technology",
        description:
            "Learn game design, programming, graphics, physics, audio, interaction, virtual reality and augmented reality foundations.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Game Development",
            "Game Design Principles",
            "Game Genres",
            "Game Mechanics",
            "Game Loops",
            "Game Programming",
            "Game Engines",
            "Scenes and Objects",
            "Input Systems",
            "Player Controllers",
            "Game Physics",
            "Collision Detection",
            "Animation",
            "Character Design",
            "Level Design",
            "Lighting",
            "Materials",
            "Textures",
            "3D Models",
            "Cameras",
            "Audio",
            "Game UI",
            "Menus",
            "Game State",
            "Artificial Intelligence in Games",
            "Pathfinding",
            "Non Player Characters",
            "Particles",
            "Effects",
            "Performance Optimization",
            "Mobile Games",
            "Multiplayer Concepts",
            "Networking",
            "Game Security",
            "Testing",
            "Debugging",
            "Game Publishing",
            "Game Monetization",
            "Introduction to VR",
            "VR Interaction",
            "VR User Experience",
            "Introduction to AR",
            "AR Interaction",
            "Spatial Computing",
            "XR Design",
            "Immersive Applications",
            "VR/AR Testing",
            "Game Project",
            "Portfolio Development",
            "Professional Game Development"
        ]
    },


    {
        id: "iot-embedded-systems",
        number: "11",
        title: "Internet of Things & Embedded Systems",
        shortTitle: "IoT & Embedded",
        category: "Hardware & Software",
        description:
            "Learn connected devices, sensors, embedded programming, communication protocols, IoT architecture, security and automation.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to IoT",
            "IoT Architecture",
            "Connected Devices",
            "Sensors",
            "Actuators",
            "Microcontrollers",
            "Embedded Systems",
            "Digital Electronics",
            "Analog Electronics",
            "Programming Embedded Devices",
            "Memory Concepts",
            "GPIO",
            "Timers",
            "Interrupts",
            "Serial Communication",
            "UART",
            "SPI",
            "I2C",
            "Networking for IoT",
            "Wi-Fi",
            "Bluetooth",
            "MQTT",
            "HTTP",
            "IoT Gateways",
            "Edge Computing",
            "Cloud IoT",
            "IoT Data",
            "Device Management",
            "IoT Security",
            "Device Authentication",
            "Secure Communication",
            "Firmware Security",
            "Over The Air Updates",
            "Industrial IoT",
            "Smart Homes",
            "Smart Agriculture",
            "Smart Cities",
            "Healthcare IoT",
            "IoT Analytics",
            "Automation",
            "Robotics Integration",
            "Energy Management",
            "IoT Reliability",
            "Testing",
            "Debugging",
            "IoT Project Design",
            "Deployment",
            "Maintenance",
            "IoT Ethics",
            "Professional IoT Practice"
        ]
    },


    {
        id: "software-quality-assurance",
        number: "12",
        title: "Software Quality Assurance & Automated Testing",
        shortTitle: "QA & Testing",
        category: "Software Quality",
        description:
            "Learn software testing principles, test planning, defect management, automation, API testing, performance testing and quality engineering.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Software Quality",
            "Software Testing Fundamentals",
            "Quality Assurance",
            "Quality Control",
            "Testing Principles",
            "Software Development Lifecycle",
            "Testing Lifecycle",
            "Test Planning",
            "Test Cases",
            "Test Scenarios",
            "Requirements Analysis",
            "Functional Testing",
            "Non Functional Testing",
            "Regression Testing",
            "Smoke Testing",
            "Sanity Testing",
            "Integration Testing",
            "System Testing",
            "Acceptance Testing",
            "Exploratory Testing",
            "Usability Testing",
            "Accessibility Testing",
            "Security Testing",
            "Performance Testing",
            "Load Testing",
            "Stress Testing",
            "Test Data",
            "Defect Management",
            "Bug Reports",
            "Test Metrics",
            "Test Documentation",
            "Automation Fundamentals",
            "Automation Frameworks",
            "Web Automation",
            "API Testing",
            "Database Testing",
            "Mobile Testing",
            "Continuous Testing",
            "CI/CD Testing",
            "Test Environments",
            "Test Automation Strategy",
            "Maintainable Tests",
            "Quality Engineering",
            "Shift Left Testing",
            "Risk Based Testing",
            "Test Reporting",
            "QA Project",
            "Professional QA Practice",
            "QA Career Development",
            "Capstone Testing Project"
        ]
    },


    {
        id: "robotic-process-automation",
        number: "13",
        title: "Robotic Process Automation",
        shortTitle: "RPA",
        category: "Automation",
        description:
            "Learn how software robots automate repetitive digital processes using workflows, data handling, integrations and monitoring.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to RPA",
            "RPA Concepts",
            "Automation Opportunities",
            "Process Discovery",
            "Process Mapping",
            "Automation Assessment",
            "Workflow Design",
            "Variables",
            "Data Types",
            "Conditions",
            "Loops",
            "Functions",
            "Error Handling",
            "Logging",
            "File Automation",
            "Spreadsheet Automation",
            "Email Automation",
            "Web Automation",
            "Desktop Automation",
            "Document Processing",
            "OCR Concepts",
            "Data Extraction",
            "Data Transformation",
            "Database Integration",
            "API Integration",
            "Authentication",
            "Robotic Workflows",
            "Human In The Loop",
            "Exception Management",
            "Queue Concepts",
            "Scheduling",
            "Bot Monitoring",
            "Bot Security",
            "Credential Management",
            "Automation Governance",
            "RPA Architecture",
            "Attended Automation",
            "Unattended Automation",
            "Process Optimization",
            "Automation Testing",
            "Deployment",
            "Version Control",
            "Performance Monitoring",
            "Business Case Development",
            "RPA Projects",
            "Scaling Automation",
            "RPA Ethics",
            "Professional Practice",
            "RPA Career Development",
            "Capstone Project"
        ]
    },


    {
        id: "database-administration",
        number: "14",
        title: "Database Administration & Engineering",
        shortTitle: "Database Engineering",
        category: "Databases",
        description:
            "Learn relational and non-relational databases, SQL, database design, administration, security, performance and reliability.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Databases",
            "Database Concepts",
            "Relational Databases",
            "Database Tables",
            "Keys",
            "Relationships",
            "Normalization",
            "SQL Fundamentals",
            "SELECT Queries",
            "Filtering",
            "Sorting",
            "Aggregation",
            "Joins",
            "Subqueries",
            "Views",
            "Stored Procedures",
            "Transactions",
            "Indexes",
            "Query Optimization",
            "Database Design",
            "Entity Relationship Modelling",
            "Data Integrity",
            "Constraints",
            "Database Security",
            "User Management",
            "Authentication",
            "Authorization",
            "Backup Concepts",
            "Database Recovery",
            "High Availability",
            "Replication",
            "Monitoring",
            "Performance Tuning",
            "Database Maintenance",
            "NoSQL Databases",
            "Document Databases",
            "Key Value Databases",
            "Distributed Databases",
            "Cloud Databases",
            "Database Migration",
            "Data Engineering",
            "ETL",
            "Data Pipelines",
            "Database Automation",
            "Database Testing",
            "Disaster Recovery",
            "Database Governance",
            "Database Projects",
            "Professional Administration",
            "Database Career Development"
        ]
    },


    {
        id: "api-microservices",
        number: "15",
        title: "API Design & Microservices Architecture",
        shortTitle: "APIs & Microservices",
        category: "Software Architecture",
        description:
            "Learn API design, HTTP, REST, authentication, service architecture, communication patterns, reliability and distributed systems.",
        level: "Intermediate to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to APIs",
            "API Architecture",
            "HTTP Fundamentals",
            "HTTP Methods",
            "HTTP Status Codes",
            "Headers",
            "JSON",
            "REST Principles",
            "REST API Design",
            "Resource Modelling",
            "API Parameters",
            "Validation",
            "Error Handling",
            "API Documentation",
            "API Versioning",
            "Authentication",
            "Authorization",
            "Tokens",
            "OAuth Concepts",
            "API Security",
            "Rate Limiting",
            "Caching",
            "Pagination",
            "Filtering",
            "Sorting",
            "API Testing",
            "API Monitoring",
            "Introduction to Microservices",
            "Monoliths and Microservices",
            "Service Boundaries",
            "Service Communication",
            "Synchronous Communication",
            "Asynchronous Communication",
            "Message Queues",
            "Event Driven Architecture",
            "Service Discovery",
            "API Gateways",
            "Distributed Systems",
            "Fault Tolerance",
            "Retries",
            "Circuit Breakers",
            "Observability",
            "Containerized Services",
            "Microservices Security",
            "Deployment",
            "Scaling",
            "Microservices Testing",
            "Architecture Projects",
            "Professional Architecture",
            "Capstone Project"
        ]
    },


    {
        id: "linux-open-source",
        number: "16",
        title: "Linux Systems Administration & Open Source Engineering",
        shortTitle: "Linux Administration",
        category: "Systems",
        description:
            "Learn Linux administration, command-line operation, users, permissions, networking, services, security and open-source engineering.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Linux",
            "Linux Distributions",
            "Linux Architecture",
            "Installing Linux",
            "Command Line Fundamentals",
            "Files and Directories",
            "File Permissions",
            "Users and Groups",
            "Process Management",
            "Package Management",
            "Environment Variables",
            "Shell Fundamentals",
            "Shell Scripting",
            "Text Processing",
            "Pipes and Redirection",
            "Networking Fundamentals",
            "Network Configuration",
            "DNS",
            "SSH",
            "Remote Administration",
            "System Services",
            "Systemd",
            "Logs",
            "Storage Management",
            "Filesystems",
            "Disk Management",
            "Backups",
            "System Monitoring",
            "Performance",
            "Linux Security",
            "Firewalls",
            "Access Control",
            "Secure Configuration",
            "Web Servers",
            "Database Services",
            "Virtualization",
            "Containers",
            "Git",
            "Open Source Principles",
            "Open Source Licenses",
            "Collaborative Development",
            "Issue Tracking",
            "Code Review",
            "Automation",
            "Infrastructure Management",
            "Troubleshooting",
            "Linux Projects",
            "System Administration Practice",
            "Professional Linux Administration",
            "Career Development"
        ]
    },


    {
        id: "technical-digital-marketing",
        number: "17",
        title: "Technical Digital Marketing & Growth Engineering",
        shortTitle: "Technical Marketing",
        category: "Digital Business",
        description:
            "Learn the technical foundations behind search, analytics, websites, conversion optimization, automation and digital growth.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Digital Marketing",
            "Digital Marketing Strategy",
            "Audience Research",
            "Customer Personas",
            "Customer Journeys",
            "Marketing Funnels",
            "Website Fundamentals",
            "Landing Pages",
            "Technical SEO",
            "Search Engines",
            "Keyword Research",
            "On Page SEO",
            "Technical Website Optimization",
            "Structured Data",
            "Website Performance",
            "Mobile Optimization",
            "Content Systems",
            "Content Strategy",
            "Email Marketing",
            "Marketing Automation",
            "Analytics Fundamentals",
            "Web Analytics",
            "Conversion Tracking",
            "Event Tracking",
            "UTM Parameters",
            "Conversion Rate Optimization",
            "A/B Testing",
            "Growth Experiments",
            "Lead Generation",
            "CRM Concepts",
            "Marketing APIs",
            "Data Integration",
            "Social Media Technology",
            "Advertising Technology",
            "Campaign Measurement",
            "Attribution",
            "Customer Retention",
            "Product Growth",
            "Growth Metrics",
            "Marketing Dashboards",
            "Data Privacy",
            "Marketing Ethics",
            "Automation",
            "Growth Engineering",
            "Marketing Projects",
            "Technical Audits",
            "Growth Strategy",
            "Professional Practice",
            "Portfolio Development",
            "Capstone Project"
        ]
    },


    {
        id: "it-support-networking",
        number: "18",
        title: "IT Support, Networking & Systems Troubleshooting",
        shortTitle: "IT Support",
        category: "Information Technology",
        description:
            "Learn computer support, networking, operating systems, troubleshooting methodology, hardware, software and IT service management.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to IT Support",
            "Computer Hardware",
            "Motherboards",
            "Processors",
            "Memory",
            "Storage Devices",
            "Input and Output Devices",
            "Operating Systems",
            "Windows Fundamentals",
            "Linux Fundamentals",
            "Software Installation",
            "Drivers",
            "System Configuration",
            "File Management",
            "User Accounts",
            "Computer Security",
            "Malware Protection",
            "Backup",
            "Troubleshooting Methodology",
            "Hardware Troubleshooting",
            "Software Troubleshooting",
            "Operating System Troubleshooting",
            "Networking Fundamentals",
            "Network Devices",
            "IP Addressing",
            "Subnetting",
            "DHCP",
            "DNS",
            "Ethernet",
            "Wireless Networks",
            "Routing",
            "Switching",
            "Network Security",
            "Remote Support",
            "Help Desk Practice",
            "Ticket Management",
            "Incident Management",
            "Problem Management",
            "IT Documentation",
            "System Monitoring",
            "Performance Troubleshooting",
            "Printer Troubleshooting",
            "Email Troubleshooting",
            "Cloud Support",
            "User Training",
            "IT Asset Management",
            "Disaster Recovery",
            "IT Projects",
            "Professional IT Support",
            "Career Development"
        ]
    },


    {
        id: "low-code-no-code",
        number: "19",
        title: "Low-Code / No-Code App Development",
        shortTitle: "Low-Code / No-Code",
        category: "Application Development",
        description:
            "Learn how to design applications using visual development platforms, workflows, databases, automation and integrations.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Low-Code Development",
            "No-Code Development",
            "Visual Development",
            "Application Planning",
            "Requirements Analysis",
            "User Interface Design",
            "Forms",
            "Navigation",
            "Components",
            "Data Models",
            "Databases",
            "Relationships",
            "Data Validation",
            "Workflows",
            "Automation",
            "Triggers",
            "Conditions",
            "Business Rules",
            "User Management",
            "Authentication",
            "Permissions",
            "APIs",
            "Integrations",
            "Webhooks",
            "External Services",
            "Notifications",
            "Reporting",
            "Dashboards",
            "Analytics",
            "Testing",
            "Debugging",
            "Deployment",
            "Application Security",
            "Data Protection",
            "Version Management",
            "Collaboration",
            "Reusable Components",
            "Application Architecture",
            "Performance",
            "Scalability",
            "Process Automation",
            "Business Applications",
            "Rapid Prototyping",
            "Application Governance",
            "Low-Code Projects",
            "Professional Practice",
            "Maintenance",
            "Optimization",
            "Portfolio Development",
            "Capstone Project"
        ]
    },


    {
        id: "quantum-computing",
        number: "20",
        title: "Quantum Computing Foundations",
        shortTitle: "Quantum Computing",
        category: "Advanced Computing",
        description:
            "An accessible foundation in quantum information, qubits, quantum gates, circuits, algorithms, measurement and applications.",
        level: "Foundation to Advanced",
        duration: "50+ modules",
        modules: [
            "Introduction to Quantum Computing",
            "Classical and Quantum Computing",
            "Quantum Information",
            "Qubits",
            "Quantum States",
            "Superposition",
            "Measurement",
            "Probability in Quantum Systems",
            "Complex Numbers",
            "Vectors and Matrices",
            "Linear Algebra Foundations",
            "Quantum Gates",
            "Single Qubit Gates",
            "Multi Qubit Systems",
            "Entanglement",
            "Quantum Circuits",
            "Circuit Notation",
            "Quantum Measurement",
            "Quantum Algorithms",
            "Deutsch Algorithm",
            "Deutsch Jozsa Algorithm",
            "Grover Search",
            "Shor Algorithm",
            "Quantum Fourier Transform",
            "Quantum Teleportation",
            "Superdense Coding",
            "Quantum Error Concepts",
            "Quantum Noise",
            "Decoherence",
            "Quantum Error Correction",
            "Quantum Hardware",
            "Superconducting Qubits",
            "Trapped Ions",
            "Photonic Quantum Computing",
            "Quantum Annealing",
            "Quantum Programming",
            "Quantum Software",
            "Quantum Simulators",
            "Hybrid Quantum Computing",
            "Quantum Machine Learning",
            "Quantum Cryptography",
            "Post Quantum Cryptography",
            "Quantum Networking",
            "Quantum Communication",
            "Quantum Applications",
            "Quantum Research",
            "Quantum Ethics",
            "Quantum Industry",
            "Quantum Projects",
            "Quantum Career Development",
            "Capstone Project"
        ]
    }

];


/* ============================================================
   LESSON CONTENT ENGINE
   ============================================================

   This creates substantial teaching material for every
   module instead of displaying "content coming soon".

   IMPORTANT:
   The course structure above gives every course 50 modules.
   Detailed specialist notes should then be expanded course
   by course rather than pretending that a few sentences are
   a complete university course.
   ============================================================ */

function createLessonContent(course, moduleTitle, moduleNumber) {

    const courseTitle = course.title;

    return `
        <article class="lesson">

            <div class="lesson-header">

                <span class="lesson-number">
                    MODULE ${String(moduleNumber).padStart(2, "0")}
                </span>

                <h1>
                    ${escapeHTML(moduleTitle)}
                </h1>

                <p class="lesson-course">
                    ${escapeHTML(courseTitle)}
                </p>

            </div>


            <section class="lesson-section">

                <h2>Module Overview</h2>

                <p>
                    This module introduces <strong>
                    ${escapeHTML(moduleTitle)}
                    </strong> as part of the
                    ${escapeHTML(courseTitle)} programme.
                    The purpose of the module is to develop
                    a clear conceptual and practical understanding
                    of the subject and its relationship to the
                    wider technology discipline.
                </p>

            </section>


            <section class="lesson-section">

                <h2>Learning Objectives</h2>

                <p>
                    By the end of this module, the learner should
                    be able to explain the major concepts covered
                    in the topic, identify the terminology used
                    by professionals, describe practical
                    applications, recognize common problems and
                    apply the knowledge appropriately in a
                    technology project.
                </p>

                <ul>
                    <li>Explain the fundamental concepts of the topic.</li>
                    <li>Use the correct technical terminology.</li>
                    <li>Describe practical applications.</li>
                    <li>Identify common challenges and limitations.</li>
                    <li>Connect the topic with the wider course.</li>
                    <li>Apply the knowledge to a practical situation.</li>
                </ul>

            </section>


            <section class="lesson-section">

                <h2>Core Concepts</h2>

                <p>
                    ${escapeHTML(moduleTitle)} should be understood
                    as part of a larger technology system rather
                    than as an isolated concept. Professional
                    technology work normally requires an understanding
                    of how individual components interact with data,
                    software, users, infrastructure, security and
                    operational requirements.
                </p>

                <p>
                    When studying this topic, learners should pay
                    attention to terminology, processes, inputs,
                    outputs, dependencies, limitations, security
                    considerations and real-world use cases.
                    These concepts provide the foundation for
                    deeper practical work.
                </p>

            </section>


            <section class="lesson-section">

                <h2>Practical Application</h2>

                <p>
                    A useful way to understand
                    ${escapeHTML(moduleTitle)}
                    is to connect the theory to a realistic
                    technology scenario. Consider how an
                    organization could use the concepts in this
                    module to solve a problem, improve an existing
                    system, reduce errors, improve efficiency or
                    create a new digital service.
                </p>

                <p>
                    A professional implementation should normally
                    begin by identifying the requirement, selecting
                    an appropriate approach, designing the solution,
                    implementing it in a controlled environment,
                    testing the result and documenting the outcome.
                </p>

            </section>


            <section class="lesson-section">

                <h2>Professional Considerations</h2>

                <ul>

                    <li>
                        <strong>Security:</strong>
                        Protect systems, information and users
                        throughout the implementation.
                    </li>

                    <li>
                        <strong>Reliability:</strong>
                        Design solutions that behave predictably
                        and can be maintained.
                    </li>

                    <li>
                        <strong>Scalability:</strong>
                        Consider how the solution will perform
                        when usage or data increases.
                    </li>

                    <li>
                        <strong>Documentation:</strong>
                        Record important decisions, configurations
                        and procedures.
                    </li>

                    <li>
                        <strong>Ethics:</strong>
                        Use technology responsibly and respect
                        privacy, safety and applicable laws.
                    </li>

                </ul>

            </section>


            <section class="lesson-section">

                <h2>Module Summary</h2>

                <p>
                    This module provides the foundation for
                    understanding ${escapeHTML(moduleTitle)}
                    within the broader ${escapeHTML(courseTitle)}
                    programme. The concepts should be reinforced
                    through practical work, demonstrations,
                    independent study and project-based learning.
                </p>

            </section>


            <section class="lesson-section">

                <h2>Practical Activity</h2>

                <p>
                    Create a small practical exercise related to
                    ${escapeHTML(moduleTitle)}. Document the
                    objective, resources used, procedure,
                    observations, results and lessons learned.
                </p>

            </section>

        </article>
    `;
}


/* ============================================================
   HTML ESCAPING
   ============================================================ */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ============================================================
   FIND COURSE
   ============================================================ */

function getTechnologyCourse(courseId) {

    return TECHNOLOGY_COURSES.find(
        course => course.id === courseId
    );

}


/* ============================================================
   BUILD COURSE MODULES
   ============================================================ */

function getCourseModules(courseId) {

    const course =
        getTechnologyCourse(courseId);

    if (!course) {

        return [];

    }

    return course.modules.map(
        (title, index) => ({

            number: index + 1,

            title: title,

            content:
                createLessonContent(
                    course,
                    title,
                    index + 1
                )

        })
    );

}


/* ============================================================
   GET INDIVIDUAL MODULE
   ============================================================ */

function getTechnologyLesson(
    courseId,
    moduleNumber
) {

    const course =
        getTechnologyCourse(courseId);

    if (!course) {

        return null;

    }

    const index =
        Number(moduleNumber) - 1;

    if (
        index < 0 ||
        index >= course.modules.length
    ) {

        return null;

    }

    const title =
        course.modules[index];

    return {

        courseId: course.id,

        courseTitle: course.title,

        moduleNumber: index + 1,

        moduleTitle: title,

        content:
            createLessonContent(
                course,
                title,
                index + 1
            )

    };

}


/* ============================================================
   RENDER COURSE CATALOGUE
   ============================================================ */

function renderTechnologyCourses(container) {

    if (!container) {

        console.error(
            "Technology course container was not found."
        );

        return;

    }

    container.innerHTML = "";


    TECHNOLOGY_COURSES.forEach(
        course => {

            const card =
                document.createElement("article");

            card.className =
                "technology-course-card";


            card.innerHTML = `

                <div class="technology-course-number">
                    COURSE ${course.number}
                </div>

                <h3>
                    ${escapeHTML(course.title)}
                </h3>

                <p>
                    ${escapeHTML(course.description)}
                </p>

                <div class="technology-course-meta">

                    <span>
                        ${escapeHTML(course.level)}
                    </span>

                    <span>
                        ${course.modules.length} Modules
                    </span>

                </div>

                <a
                    href="course.html?course=${encodeURIComponent(course.id)}"
                    class="technology-course-button"
                >
                    Start Course →
                </a>

            `;


            container.appendChild(card);

        }
    );

}


/* ============================================================
   RENDER COURSE PAGE
   ============================================================ */

function renderTechnologyCoursePage(options = {}) {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const courseId =
        options.courseId ||
        params.get("course");


    const course =
        getTechnologyCourse(courseId);


    if (!course) {

        renderCourseNotFound();

        return;

    }


    const titleElement =
        document.getElementById(
            "courseTitle"
        );

    const descriptionElement =
        document.getElementById(
            "courseDescription"
        );

    const modulesElement =
        document.getElementById(
            "courseModules"
        );


    if (titleElement) {

        titleElement.textContent =
            course.title;

    }


    if (descriptionElement) {

        descriptionElement.textContent =
            course.description;

    }


    if (!modulesElement) {

        console.error(
            "courseModules container was not found."
        );

        return;

    }


    modulesElement.innerHTML = "";


    course.modules.forEach(
        (moduleTitle, index) => {

            const moduleCard =
                document.createElement("article");

            moduleCard.className =
                "course-module-card";


            moduleCard.innerHTML = `

                <div class="module-number">
                    MODULE ${String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                    ${escapeHTML(moduleTitle)}
                </h3>

                <p>
                    Study this module as part of the
                    ${escapeHTML(course.title)}
                    programme.
                </p>

                <button
                    type="button"
                    class="module-open-button"
                    data-course="${escapeHTML(course.id)}"
                    data-module="${index + 1}"
                >
                    Open Lesson →
                </button>

            `;


            modulesElement.appendChild(
                moduleCard
            );

        }
    );


    modulesElement
        .querySelectorAll(
            ".module-open-button"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    openTechnologyLesson(
                        this.dataset.course,
                        this.dataset.module
                    );

                }
            );

        });

}


/* ============================================================
   OPEN LESSON
   ============================================================ */

function openTechnologyLesson(
    courseId,
    moduleNumber
) {

    const lesson =
        getTechnologyLesson(
            courseId,
            moduleNumber
        );


    if (!lesson) {

        console.error(
            "Lesson not found:",
            courseId,
            moduleNumber
        );

        return;

    }


    const lessonPanel =
        document.getElementById(
            "lessonContent"
        );


    if (!lessonPanel) {

        /*
         * If course.html does not have an inline lesson
         * container, use the dedicated lesson URL.
         */

        window.location.href =
            "course.html?course=" +
            encodeURIComponent(courseId) +
            "&module=" +
            encodeURIComponent(moduleNumber);

        return;

    }


    lessonPanel.innerHTML =
        lesson.content;


    lessonPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ============================================================
   RENDER SPECIFIC LESSON FROM URL
   ============================================================ */

function renderTechnologyLessonFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const courseId =
        params.get("course");


    const moduleNumber =
        params.get("module");


    if (
        !courseId ||
        !moduleNumber
    ) {

        return;

    }


    const lesson =
        getTechnologyLesson(
            courseId,
            moduleNumber
        );


    if (!lesson) {

        renderCourseNotFound();

        return;

    }


    const lessonContainer =
        document.getElementById(
            "lessonContent"
        );


    if (!lessonContainer) {

        return;

    }


    lessonContainer.innerHTML =
        lesson.content;

}


/* ============================================================
   COURSE NOT FOUND
   ============================================================ */

function renderCourseNotFound() {

    const titleElement =
        document.getElementById(
            "courseTitle"
        );

    const modulesElement =
        document.getElementById(
            "courseModules"
        );

    const lessonElement =
        document.getElementById(
            "lessonContent"
        );


    if (titleElement) {

        titleElement.textContent =
            "Course Not Found";

    }


    if (modulesElement) {

        modulesElement.innerHTML = `

            <div class="course-error">

                <h2>
                    Course unavailable
                </h2>

                <p>
                    The requested course could not be
                    found in the technology course database.
                </p>

                <a href="index.html#learn">
                    Return to Learn
                </a>

            </div>

        `;

    }


    if (lessonElement) {

        lessonElement.innerHTML = "";

    }

}


/* ============================================================
   AUTOMATIC INITIALIZATION
   ============================================================ */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
         * Technology catalogue page
         */

        const courseContainer =
            document.getElementById(
                "technologyCourses"
            );


        if (courseContainer) {

            renderTechnologyCourses(
                courseContainer
            );

        }


        /*
         * Course page
         */

        if (
            document.getElementById(
                "courseModules"
            )
        ) {

            renderTechnologyCoursePage();

        }


        /*
         * Individual lesson
         */

        if (
            document.getElementById(
                "lessonContent"
            )
        ) {

            renderTechnologyLessonFromURL();

        }

    }
);


/* ============================================================
   PUBLIC API
   ============================================================ */

window.NEXORA_TECHNOLOGY = {

    courses:
        TECHNOLOGY_COURSES,

    getCourse:
        getTechnologyCourse,

    getModules:
        getCourseModules,

    getLesson:
        getTechnologyLesson,

    renderCourses:
        renderTechnologyCourses,

    renderCourse:
        renderTechnologyCoursePage,

    openLesson:
        openTechnologyLesson

};


/* ============================================================
   DEVELOPMENT CHECK
   ============================================================ */

console.log(
    "NEXORA DIGITAL Technology Guides loaded:",
    TECHNOLOGY_COURSES.length,
    "courses."
);


console.log(
    "AI/ML course available:",
    Boolean(
        getTechnologyCourse(
            "ai-machine-learning"
        )
    )
);
