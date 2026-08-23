/*
============================================================
NEXORA DIGITAL
ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
COMPLETE 50-MODULE COURSE

COURSE FILE:
ai-ml.js

IMPORTANT:
- 50 actual modules
- Each module contains full lesson notes
- No "coming soon" placeholders
- No empty lesson arrays
- No fake completion claims
- Designed to work with ai-ml.html
============================================================
*/

"use strict";

const AI_ML_COURSE = {

    id: "ai-ml",

    number: 1,

    title: "Artificial Intelligence & Machine Learning",

    subtitle:
        "A Comprehensive University-Style Foundation in Artificial Intelligence, Machine Learning and Modern AI Engineering",

    level:
        "University / Professional",

    modulesCount: 50,

    description:
        "This course provides a structured and comprehensive study of artificial intelligence and machine learning. It begins with the foundations of AI and the mathematical concepts required to understand learning algorithms, then progresses through data preparation, supervised learning, unsupervised learning, neural networks, deep learning, natural language processing, computer vision, generative AI, reinforcement learning, model deployment, MLOps, security, privacy, ethics, research and professional AI engineering.",

    prerequisites: [
        "Basic computer literacy",
        "Basic mathematics",
        "Willingness to learn programming",
        "No previous AI experience is required"
    ],

    learningOutcomes: [
        "Explain the major concepts and historical development of artificial intelligence.",
        "Distinguish artificial intelligence, machine learning, deep learning and generative AI.",
        "Understand the mathematical foundations used in AI.",
        "Use Python concepts relevant to AI and data analysis.",
        "Understand how datasets are collected, cleaned and transformed.",
        "Build a conceptual understanding of supervised and unsupervised learning.",
        "Explain major machine learning algorithms and their applications.",
        "Understand model training, validation, testing and evaluation.",
        "Explain neural networks, optimization and deep learning.",
        "Understand computer vision and natural language processing.",
        "Explain transformers, large language models and generative AI.",
        "Understand reinforcement learning and decision-making systems.",
        "Understand AI deployment, monitoring and MLOps.",
        "Apply cybersecurity, privacy and responsible-AI principles.",
        "Design and evaluate a complete AI project."
    ],

    modules: [

        /* ===================================================
           MODULE 01
        =================================================== */

        {
            number: 1,
            title: "Introduction to Artificial Intelligence",

            objectives: [
                "Define artificial intelligence.",
                "Explain the purpose of AI systems.",
                "Distinguish AI from ordinary software.",
                "Identify major areas of AI."
            ],

            notes: `
Artificial Intelligence (AI) is a broad field of computer science concerned
with building computational systems that can perform tasks associated with
intelligent behavior. These tasks may include recognizing patterns, learning
from examples, interpreting language, solving problems, planning actions,
making predictions and supporting decisions.

A conventional computer program normally follows explicitly written rules.
An AI system may also use rules, but modern AI frequently relies on statistical
and machine-learning techniques in which useful patterns are learned from data.

AI should not be confused with human consciousness. A system can perform a
highly specialized intelligent task without possessing general human
understanding, emotions or consciousness.

The major areas of AI include machine learning, deep learning, natural language
processing, computer vision, robotics, expert systems, planning, knowledge
representation and intelligent agents.

An AI system normally begins with an objective or problem. It receives some
form of input, processes that information through algorithms or models, and
produces an output. The output may be a prediction, classification,
recommendation, generated document, image, decision or action.

Successful AI development therefore involves much more than selecting an
algorithm. A professional must understand the problem, data, architecture,
evaluation, security, deployment and ethical consequences of the system.

AI is used in healthcare, finance, agriculture, education, manufacturing,
transportation, communication, entertainment and business. The appropriate
use of AI depends on the characteristics of the problem and the reliability
requirements of the application.

The most important foundation at this stage is to understand AI as a
multidisciplinary engineering field rather than a single piece of software.
`,

            example: `
A recommendation engine on an online learning platform may analyze a learner's
previous activity and recommend courses that are likely to be useful. The
system does not need human consciousness; it needs a reliable computational
method for identifying useful patterns.
`,

            practical: `
Select five AI systems that people use in everyday life. For each system,
identify its input, the intelligent task being performed, its output and the
possible risks associated with incorrect results.
`,

            summary: `
AI is a broad discipline for building systems capable of performing
intelligent computational tasks. Modern AI relies heavily on data, algorithms,
mathematics and software engineering.
`
        },

        /* ===================================================
           MODULE 02
        =================================================== */

        {
            number: 2,
            title: "History and Evolution of Artificial Intelligence",

            objectives: [
                "Describe major stages in the development of AI.",
                "Explain symbolic AI.",
                "Explain the rise of machine learning.",
                "Understand the development of deep learning."
            ],

            notes: `
The history of artificial intelligence spans several decades and reflects
changes in mathematics, computing hardware, algorithms and available data.

Early AI research focused strongly on symbolic reasoning. Researchers
attempted to represent knowledge using rules, symbols and logical statements.
These systems could perform certain reasoning tasks but often struggled with
the uncertainty and complexity of real-world environments.

Later approaches increasingly used statistical methods. Instead of manually
encoding every rule, researchers began developing systems that could learn
patterns from examples. This shift contributed to the rise of machine learning.

As computing power increased and large datasets became available, neural
networks became increasingly practical. Graphics processing units and other
parallel computing technologies helped accelerate deep-learning workloads.

Modern AI systems combine ideas from statistics, optimization, computer
science, linguistics, information theory and engineering.

The development of AI has not been a straight line. Periods of strong
enthusiasm were followed by periods in which progress was slower than expected.
These periods are often described as AI winters.

Modern AI has been accelerated by three major factors: large datasets,
powerful computation and improved algorithms and architectures.

Understanding this history helps learners avoid the misconception that modern
AI appeared suddenly. Current systems are the result of decades of research,
experimentation and engineering.
`,

            example: `
The transition from hand-written rules to models trained from large datasets
illustrates the broader transition from symbolic methods toward statistical
learning.
`,

            practical: `
Create a chronological AI history containing important developments in
symbolic AI, expert systems, statistical machine learning, neural networks,
deep learning, transformers and generative AI.
`,

            summary: `
AI evolved from rule-based approaches toward increasingly data-driven
statistical and neural methods. Modern AI is built upon decades of research.
`
        },

        /* ===================================================
           MODULE 03
        =================================================== */

        {
            number: 3,
            title: "Types of Artificial Intelligence",

            objectives: [
                "Understand narrow AI.",
                "Explain artificial general intelligence.",
                "Distinguish capability-based classifications.",
                "Evaluate AI systems according to their scope."
            ],

            notes: `
Artificial intelligence can be classified according to its capabilities,
scope and operating characteristics.

Narrow AI, sometimes called weak AI, is designed to perform a specific task or
a limited collection of related tasks. Examples include recommendation
systems, speech recognition systems, image classifiers and fraud-detection
models. Most AI systems currently deployed in practical environments belong
to this category.

Artificial General Intelligence (AGI) is a theoretical concept referring to
an AI system with broad intellectual capabilities across many different
domains. AGI is a research concept rather than a universally established
engineering category.

The concept of artificial superintelligence refers to a hypothetical system
whose intellectual capabilities would exceed human abilities across many
domains.

Another way to classify systems is according to how they operate. Some systems
use only current input, while others incorporate information from previous
interactions or maintain internal state.

These distinctions are useful because they prevent exaggerated claims about
what a particular AI system can do. A system that performs one task extremely
well is not automatically a generally intelligent system.

Professionals should describe AI capabilities precisely. Accuracy about
system limitations is an important part of responsible AI engineering.
`,

            example: `
A spam-classification model is narrow AI because it is designed to distinguish
spam from legitimate messages rather than perform general reasoning across
unrelated tasks.
`,

            practical: `
Identify ten real-world AI applications and classify each according to its
scope and intended capability.
`,

            summary: `
Most practical AI is specialized. Understanding capability and scope prevents
misunderstanding about the actual abilities of AI systems.
`
        },

        /* ===================================================
           MODULE 04
        =================================================== */

        {
            number: 4,
            title: "Intelligent Agents and Problem Solving",

            objectives: [
                "Define an intelligent agent.",
                "Explain states, actions and environments.",
                "Understand goal-oriented behavior.",
                "Describe basic problem-solving processes."
            ],

            notes: `
An intelligent agent is a system that perceives information from an
environment and selects actions intended to achieve a goal.

The environment may be physical, such as a robot operating in a building, or
digital, such as a software agent interacting with a website or database.

A useful abstraction includes a set of possible states, a set of actions, an
environment and an objective or performance measure.

Problem solving often involves representing the current state, defining the
desired goal state, identifying possible actions and searching for an
appropriate sequence of actions.

A route-planning system, for example, may represent locations as states and
roads as transitions between states.

AI systems can use search, optimization, rules, machine learning or
combinations of these techniques to select actions.

The quality of an intelligent agent depends on the information available to
it, the quality of its model of the environment, the objective it is given and
the reliability of its decision process.

A poorly defined objective can produce unwanted behavior. Therefore problem
definition is as important as algorithm design.
`,

            example: `
A navigation application receives a starting location and destination, then
searches possible routes and selects one according to criteria such as travel
time or distance.
`,

            practical: `
Design a simple intelligent-agent model for an automated warehouse system.
Define its environment, sensors, actions, goals and performance measures.
`,

            summary: `
Intelligent agents perceive environments, reason or learn from available
information and take actions intended to achieve defined objectives.
`
        },

        /* ===================================================
           MODULE 05
        =================================================== */

        {
            number: 5,
            title: "Mathematical Foundations for Artificial Intelligence",

            objectives: [
                "Explain the role of mathematics in AI.",
                "Understand variables and functions.",
                "Understand vectors and matrices.",
                "Understand basic probability and statistics."
            ],

            notes: `
Artificial intelligence relies heavily on mathematics. Mathematics provides
the language through which data, models, uncertainty and optimization are
represented.

Variables represent quantities whose values can change. Functions describe
relationships between inputs and outputs. A basic machine-learning model can
be expressed as a mathematical function that maps input features to a
prediction.

Linear algebra is central because datasets can be represented as vectors and
matrices. A row of a dataset can represent one observation, while columns can
represent features.

Probability provides a framework for describing uncertainty. AI systems often
produce uncertain predictions rather than absolute answers.

Statistics allows practitioners to summarize data through measures such as
mean, median, variance and standard deviation.

Calculus is important for optimization, especially in neural-network training,
where derivatives and gradients help determine how model parameters should be
updated.

The goal of mathematical study in AI is not merely memorization. Learners
should understand what mathematical operations mean and why they are useful.
`,

            example: `
A dataset containing 500 records and 10 numerical features can be represented
as a 500-by-10 matrix.
`,

            practical: `
Create a small dataset and represent it as a matrix. Calculate its mean for
one feature and explain how the resulting statistics could help analyze the
data.
`,

            summary: `
Mathematics provides the foundation for representing data, measuring
uncertainty and optimizing machine-learning models.
`
        },

        /* ===================================================
           MODULE 06
        =================================================== */

        {
            number: 6,
            title: "Python Programming for AI",

            objectives: [
                "Understand Python's role in AI.",
                "Use variables and data structures.",
                "Write basic functions.",
                "Understand program organization."
            ],

            notes: `
Python is one of the most widely used programming languages in artificial
intelligence and data science.

Its popularity is partly due to readable syntax and a large ecosystem of
libraries for numerical computing, data analysis, machine learning,
visualization and scientific research.

Important programming foundations include variables, data types, operators,
conditional statements, loops and functions.

Lists allow programmers to store ordered collections of values. Dictionaries
store key-value relationships and are useful for representing structured
information.

Functions group reusable instructions into logical units. Good function
design reduces duplication and makes programs easier to test.

In AI projects, code is often divided into stages such as data loading,
preprocessing, feature engineering, training, evaluation and inference.

Professional code should be readable, documented and organized into logical
modules. A model that works only inside a large, undocumented notebook is
difficult to maintain.

Programming therefore forms an essential bridge between AI theory and
practical implementation.
`,

            example: `
A Python function can receive a dataset and return summary statistics that
are then used during exploratory analysis.
`,

            practical: `
Write a Python program that reads numerical values, calculates descriptive
statistics and reports the results in a readable format.
`,

            summary: `
Python provides the practical programming foundation used throughout many AI
and machine-learning workflows.
`
        },

        /* ===================================================
           MODULE 07
        =================================================== */

        {
            number: 7,
            title: "NumPy and Numerical Computing",

            objectives: [
                "Understand numerical arrays.",
                "Explain vectors and matrices in code.",
                "Perform basic numerical operations.",
                "Understand why vectorized operations matter."
            ],

            notes: `
NumPy is a Python library designed for numerical computing. Its central
structure is the multidimensional array.

Machine-learning algorithms operate heavily on numerical data, making
efficient array operations essential.

An array can represent a feature vector, a matrix of observations or even
higher-dimensional scientific data.

NumPy provides mathematical operations, aggregation functions, reshaping,
indexing, random-number generation and linear-algebra functionality.

Vectorization allows operations to be applied to entire arrays rather than
processing every element manually with Python loops. This can improve both
clarity and performance.

Understanding array dimensions is particularly important. A model may expect
data in a specific shape, and incorrect dimensions can lead to errors or,
worse, incorrect results.

Numerical computing also requires attention to data types, missing values,
overflow, underflow and numerical precision.

NumPy forms a conceptual foundation for many libraries used later in machine
learning.
`,

            example: `
A matrix can represent a dataset in which rows correspond to training
examples and columns correspond to numerical features.
`,

            practical: `
Create a numerical matrix and perform operations such as mean, sum, minimum,
maximum, transpose and matrix multiplication.
`,

            summary: `
NumPy provides efficient numerical data structures and operations that are
fundamental to scientific and machine-learning computing.
`
        },

        /* ===================================================
           MODULE 08
        =================================================== */

        {
            number: 8,
            title: "Pandas and Data Analysis",

            objectives: [
                "Understand tabular data.",
                "Use DataFrame concepts.",
                "Perform data inspection.",
                "Prepare data for modeling."
            ],

            notes: `
Pandas is a Python library used extensively for working with tabular data.

The DataFrame structure represents rows and columns and is particularly useful
for datasets stored in CSV files, spreadsheets or databases.

Common operations include loading data, inspecting columns, filtering rows,
sorting records, creating new columns, handling missing values and calculating
summary statistics.

Data analysis should begin with understanding the structure and meaning of a
dataset. Blindly applying machine-learning algorithms without examining the
data can produce meaningless results.

Pandas also supports grouping and aggregation, which are useful for business
analysis.

A professional data workflow should document important transformations so that
the same operations can later be reproduced for new data.

DataFrames are therefore not only coding structures; they are practical tools
for understanding and preparing real-world information.
`,

            example: `
A sales DataFrame may contain date, product, quantity, customer and revenue
columns, allowing analysts to calculate sales totals and trends.
`,

            practical: `
Take a small CSV dataset, inspect its schema, identify missing values, compute
descriptive statistics and create two useful derived columns.
`,

            summary: `
Pandas provides practical tools for inspecting, cleaning, transforming and
analyzing structured datasets.
`
        },

        /* ===================================================
           MODULE 09
        =================================================== */

        {
            number: 9,
            title: "Data Collection and Data Sources",

            objectives: [
                "Identify major data sources.",
                "Understand data collection methods.",
                "Evaluate data provenance.",
                "Recognize privacy considerations."
            ],

            notes: `
Machine learning depends on data. The quality, relevance and representativeness
of the collected information strongly influence the quality of the resulting
model.

Data can come from databases, business applications, APIs, sensors, surveys,
web platforms, documents, transactional systems, public datasets and
scientific instruments.

Data provenance refers to the history and origin of data. A responsible
organization should know where information came from, how it was collected,
when it was collected and what transformations have been applied.

Sampling is important when the available population is too large to collect
completely. Poor sampling can introduce bias.

Data collection must also consider privacy, security, consent and applicable
laws or policies.

A technically excellent model cannot compensate for a dataset that does not
represent the real population or problem being studied.

The data-collection stage should therefore be treated as a core part of AI
engineering rather than a minor preparation step.
`,

            example: `
An agricultural AI system may collect information from weather stations,
soil sensors, satellite imagery and farm records.
`,

            practical: `
Design a complete data-collection strategy for an AI system that predicts
equipment failure.
`,

            summary: `
Data sources and collection methods determine what an AI system can learn and
what limitations its results may contain.
`
        },

        /* ===================================================
           MODULE 10
        =================================================== */

        {
            number: 10,
            title: "Data Cleaning and Data Quality",

            objectives: [
                "Identify common data-quality problems.",
                "Handle missing values.",
                "Detect duplicates and inconsistencies.",
                "Build reproducible cleaning procedures."
            ],

            notes: `
Real-world data is rarely clean when first collected.

Common problems include missing values, duplicate records, inconsistent units,
invalid values, incorrect formats, spelling differences, impossible dates and
measurement errors.

Data cleaning involves identifying and correcting these problems while
preserving legitimate information.

Missing values should not automatically be deleted. The correct treatment
depends on why values are missing and how much information would be lost.

Duplicates can distort statistical analysis if the same observation is counted
multiple times.

Inconsistent formats can also create serious problems. Dates, currencies,
units and categorical labels should be standardized.

Data-quality rules should be documented and, where practical, automated.

Cleaning is not simply a technical activity. It requires domain knowledge
because a value that looks unusual numerically may be legitimate in the
business context.

Good AI engineering therefore treats data quality as a measurable requirement.
`,

            example: `
A dataset containing both "Kenya", "KE" and "K.E." in the same country column
requires standardization before analysis.
`,

            practical: `
Create a data-quality checklist covering completeness, correctness,
consistency, uniqueness and validity.
`,

            summary: `
Clean data is necessary for reliable analysis and machine learning. Cleaning
decisions should be documented and justified.
`
        },

        /* ===================================================
           MODULE 11
        =================================================== */

        {
            number: 11,
            title: "Exploratory Data Analysis",

            objectives: [
                "Explain exploratory data analysis.",
                "Use descriptive statistics.",
                "Identify patterns and anomalies.",
                "Use visual analysis."
            ],

            notes: `
Exploratory Data Analysis (EDA) is the systematic examination of a dataset
before or alongside modeling.

EDA helps practitioners understand the distributions of variables, identify
outliers, discover relationships and detect possible data-quality problems.

Descriptive statistics such as mean, median, minimum, maximum, variance and
standard deviation provide numerical summaries.

Visualization can reveal patterns that are difficult to see in tables alone.
Common visualizations include histograms, box plots, scatter plots, line charts
and bar charts.

Correlation can indicate that two variables move together, but correlation
does not automatically prove causation.

EDA is also an opportunity to question assumptions. A strange pattern may
reflect a genuine phenomenon, a data-collection problem or a hidden subgroup.

Exploratory findings should influence later decisions about preprocessing,
feature engineering and model selection.

EDA is therefore both analytical and investigative.
`,

            example: `
A histogram of customer ages may reveal that most records belong to a narrow
age range while a small number of extreme values require investigation.
`,

            practical: `
Perform an EDA exercise using a small dataset and document at least ten
observations.
`,

            summary: `
EDA transforms an unfamiliar dataset into something the practitioner
understands well enough to model responsibly.
`
        },

        /* ===================================================
           MODULE 12
        =================================================== */

        {
            number: 12,
            title: "Feature Engineering",

            objectives: [
                "Define a feature.",
                "Create useful derived features.",
                "Understand domain-specific features.",
                "Avoid information leakage."
            ],

            notes: `
A feature is a variable used as input to a machine-learning model.

Raw data is not always in the most useful form. Feature engineering involves
transforming or combining information to create representations that better
capture relationships relevant to the prediction task.

Examples include calculating age from date of birth, average purchase value
from revenue and transaction count, or extracting hour and day from a
timestamp.

Good feature engineering requires understanding the domain.

A powerful feature may produce excellent results because it captures information
that is genuinely relevant. However, a feature can also create leakage if it
contains information that would only become available after the prediction is
made.

Feature engineering should therefore be evaluated carefully.

In modern deep learning, neural networks can learn useful representations
automatically, but feature engineering remains valuable for structured
business data and many practical systems.
`,

            example: `
For customer churn prediction, a useful feature may be the number of support
requests made during the previous thirty days.
`,

            practical: `
Create ten candidate features for a customer-churn prediction system and
explain why each may be useful.
`,

            summary: `
Feature engineering transforms available information into representations
that help machine-learning models learn useful relationships.
`
        },

        /* ===================================================
           MODULE 13
        =================================================== */

        {
            number: 13,
            title: "Machine Learning Fundamentals",

            objectives: [
                "Define machine learning.",
                "Distinguish machine learning from rule-based programming.",
                "Understand training data.",
                "Understand model generalization."
            ],

            notes: `
Machine learning is a branch of artificial intelligence in which algorithms
learn patterns from data and use those patterns to produce predictions or
decisions.

Traditional software typically specifies rules directly. In machine learning,
the practitioner defines an objective and provides data from which a model can
estimate useful parameters.

A model is a mathematical representation that maps inputs to outputs.

Training is the process of estimating parameters from examples.

Generalization is the ability of a trained model to perform well on previously
unseen data.

The central challenge of machine learning is therefore not simply memorizing
training examples. The system must learn patterns that remain useful beyond
the examples it has already seen.

Machine learning can be divided into several major categories including
supervised learning, unsupervised learning and reinforcement learning.

Choosing the appropriate learning paradigm depends on the type of problem,
available data and intended outcome.
`,

            example: `
A model can learn from historical customer data and predict which customers
are likely to cancel their subscriptions.
`,

            practical: `
Identify five practical problems and determine whether each is better suited
to supervised, unsupervised or reinforcement learning.
`,

            summary: `
Machine learning learns useful patterns from data with the objective of
generalizing to new examples.
`
        },

        /* ===================================================
           MODULE 14
        =================================================== */

        {
            number: 14,
            title: "Training, Validation and Testing",

            objectives: [
                "Explain training data.",
                "Explain validation data.",
                "Explain test data.",
                "Recognize data leakage."
            ],

            notes: `
A machine-learning dataset is often divided into training, validation and test
sets.

The training set is used to estimate model parameters.

The validation set is used during model development to compare models,
hyperparameters or design choices.

The test set is reserved for final evaluation of the selected system.

The separation is important because evaluating a model on the same information
used to train it can create an overly optimistic estimate of performance.

Data leakage occurs when information from outside the legitimate prediction
process enters training.

Examples include using future information, performing preprocessing using the
entire dataset before splitting, or allowing duplicate observations to appear
in multiple subsets.

Proper experimental design is essential for trustworthy model evaluation.
`,

            example: `
When predicting next month's sales, information from next month must not
accidentally be used to construct training features.
`,

            practical: `
Design a train-validation-test split for a dataset and explain why the chosen
split is appropriate.
`,

            summary: `
Separate datasets allow developers to evaluate how well a model generalizes
to unseen information.
`
        },

        /* ===================================================
           MODULE 15
        =================================================== */

        {
            number: 15,
            title: "Linear Regression",

            objectives: [
                "Explain regression.",
                "Understand linear models.",
                "Interpret model coefficients.",
                "Evaluate regression predictions."
            ],

            notes: `
Regression is used when the target variable is numerical.

Linear regression assumes that a target can be approximated by a weighted
combination of input features.

A simple model may be represented as:

y = wx + b

where x is the input, w is a learned weight and b is a bias.

With multiple features, the model contains multiple weighted inputs.

The model attempts to find parameters that minimize a loss function measuring
prediction error.

Linear regression is valuable because it is mathematically understandable and
often provides a useful baseline.

However, real-world relationships may be nonlinear. In such cases, more
complex models or transformed features may be required.

Interpretability is one of the strengths of linear models because coefficients
can often be examined directly, although interpretation still depends on data
quality and modeling assumptions.
`,

            example: `
A business can use property size, number of rooms and location-related
variables to estimate a numerical property price.
`,

            practical: `
Develop a conceptual regression model for predicting monthly electricity
consumption.
`,

            summary: `
Linear regression provides a foundational method for predicting continuous
numerical outcomes.
`
        },

        /* ===================================================
           MODULE 16 */
        {
            number: 16,
            title: "Logistic Regression and Classification",

            objectives: [
                "Understand classification.",
                "Explain logistic regression.",
                "Interpret probability outputs.",
                "Understand classification thresholds."
            ],

            notes: `
Classification predicts categories rather than continuous numerical values.

Binary classification involves two categories, while multiclass
classification involves more than two.

Logistic regression is widely used for binary classification. It combines
input features into a score and transforms that score into a probability-like
quantity using the logistic function.

A threshold is then used to convert the probability into a class decision.

Changing the threshold changes the balance between false positives and false
negatives.

Logistic regression is often valued for simplicity and interpretability.
However, its decision boundary is limited by the representation and
assumptions of the model.

Classification problems should always define the meaning of each class
carefully.
`,

            example: `
A bank can classify a transaction as legitimate or potentially fraudulent.
`,

            practical: `
Design a binary classification system and explain the consequences of false
positives and false negatives.
`,

            summary: `
Logistic regression provides a foundational classification approach and
illustrates the importance of probabilities and decision thresholds.
`
        },

        /* ===================================================
           MODULE 17 */
        {
            number: 17,
            title: "Decision Trees",

            objectives: [
                "Explain decision-tree structure.",
                "Understand splitting.",
                "Identify strengths and weaknesses.",
                "Understand overfitting in trees."
            ],

            notes: `
A decision tree makes predictions by applying a sequence of decision rules.

Each internal node tests a condition, branches represent possible outcomes
and leaf nodes represent final predictions.

Decision trees can naturally represent nonlinear relationships and interactions
between variables.

They are also relatively easy to visualize.

However, unrestricted trees can grow very deep and memorize training data.
This is one form of overfitting.

Tree algorithms therefore use criteria for selecting useful splits and may
include limits such as maximum depth or minimum samples per leaf.

Trees are useful for both classification and regression.

They are especially valuable as interpretable baseline models and as building
blocks for ensemble methods.
`,

            example: `
A scholarship decision tree could consider academic performance, attendance,
financial need and other defined criteria.
`,

            practical: `
Draw a decision tree for approving or rejecting a hypothetical loan
application.
`,

            summary: `
Decision trees represent predictive decisions as sequences of conditional
rules and are widely used in machine learning.
`
        },

        /* ===================================================
           MODULE 18 */
        {
            number: 18,
            title: "Random Forests and Ensemble Learning",

            objectives: [
                "Explain ensemble learning.",
                "Understand random forests.",
                "Explain variance reduction.",
                "Understand model diversity."
            ],

            notes: `
Ensemble learning combines multiple models rather than relying on a single
model.

Random forests are ensembles of decision trees. Each tree is trained using
randomized data and feature selection, and their predictions are combined.

The basic intuition is that multiple models may make different errors. If
their errors are not perfectly correlated, combining them can improve
stability and prediction quality.

Random forests can handle nonlinear relationships and interactions and often
work well on structured datasets.

They can also provide estimates of feature importance, although such measures
should be interpreted cautiously.

The broader principle of ensemble learning is that diversity among component
models can be valuable.

Other ensemble methods include boosting, stacking and bagging.
`,

            example: `
A random forest can combine hundreds of decision trees to classify customer
records into different risk categories.
`,

            practical: `
Compare a single decision tree and a random forest for the same hypothetical
classification problem.
`,

            summary: `
Ensemble methods combine models to improve robustness, stability or predictive
performance.
`
        },

        /* ===================================================
           MODULE 19 */
        {
            number: 19,
            title: "Support Vector Machines",

            objectives: [
                "Explain support vector machines.",
                "Understand decision boundaries.",
                "Understand margins.",
                "Explain kernel concepts."
            ],

            notes: `
Support Vector Machines (SVMs) are supervised learning algorithms used for
classification and some regression problems.

The central idea is to identify a decision boundary that separates classes
while maximizing the margin between the boundary and the nearest training
examples.

Those critical examples are called support vectors.

A larger margin can improve generalization under appropriate assumptions.

SVMs can also use kernel functions to represent nonlinear decision boundaries
without explicitly transforming the data into a high-dimensional space.

Common kernel concepts include linear, polynomial and radial basis function
kernels.

SVMs can be powerful for smaller and medium-sized datasets but may become
computationally expensive for very large datasets.

Feature scaling is often important for SVM performance.
`,

            example: `
An SVM can classify observations belonging to two groups by learning a
boundary that maximizes the separation between them.
`,

            practical: `
Create a two-dimensional classification example and explain how a linear
boundary could separate the classes.
`,

            summary: `
SVMs classify data by constructing decision boundaries with strong margin
properties.
`
        },

        /* ===================================================
           MODULE 20 */
        {
            number: 20,
            title: "Nearest Neighbors",

            objectives: [
                "Explain nearest-neighbor methods.",
                "Understand distance.",
                "Understand KNN classification.",
                "Identify limitations."
            ],

            notes: `
The k-nearest neighbors algorithm predicts a new observation by examining
nearby training examples.

For classification, the majority class among nearby examples may be selected.

For regression, the average of nearby target values may be used.

The meaning of “nearby” depends on a distance measure.

Feature scaling is important because variables with larger numerical ranges
can dominate distance calculations.

The value of k controls the model's sensitivity. A very small k may make the
model sensitive to noise, while a larger k can smooth predictions.

KNN is simple and intuitive but can become computationally expensive because
predictions require comparisons with stored observations.
`,

            example: `
A customer can be assigned to a segment based on the behavior of nearby
customers in a feature space.
`,

            practical: `
Construct a small two-dimensional dataset and manually classify a new
observation using KNN.
`,

            summary: `
Nearest-neighbor methods make predictions from the examples most similar to
the new observation.
`
        },

        /* ===================================================
           MODULE 21 */
        {
            number: 21,
            title: "Naive Bayes",

            objectives: [
                "Explain probabilistic classification.",
                "Understand Bayes' theorem conceptually.",
                "Explain the independence assumption.",
                "Identify practical applications."
            ],

            notes: `
Naive Bayes is a family of probabilistic classifiers based on Bayes'
theorem.

Bayesian reasoning combines prior beliefs with evidence to estimate the
probability of a hypothesis.

Naive Bayes makes a simplifying assumption that certain features are
conditionally independent given the class.

This assumption is often unrealistic, but the method can still perform well
in practice.

Naive Bayes has been widely used for text classification because it is fast,
simple and effective for many high-dimensional problems.

It is useful as a baseline and remains educationally important because it
demonstrates how probability can be used for classification.
`,

            example: `
A text classifier can estimate whether an email is spam based on the words
appearing in the message.
`,

            practical: `
Create a small document-classification example and identify how word
occurrences influence class probabilities.
`,

            summary: `
Naive Bayes demonstrates how probabilistic reasoning can be used to classify
observations.
`
        },

        /* ===================================================
           MODULE 22 */
        {
            number: 22,
            title: "Unsupervised Learning",

            objectives: [
                "Define unsupervised learning.",
                "Explain clustering.",
                "Identify useful applications.",
                "Understand challenges in evaluation."
            ],

            notes: `
Unsupervised learning works with datasets where predefined target labels are
not available.

The objective may be to discover groups, hidden structure or more compact
representations.

Clustering is one of the most common unsupervised tasks.

Other approaches include dimensionality reduction, association analysis and
anomaly detection.

Unsupervised learning is often exploratory. The model may reveal patterns
that require human interpretation.

A cluster is mathematically meaningful only if it is useful in the context of
the problem.

Evaluation is therefore more difficult than in supervised learning because
ground-truth labels may not exist.

Practitioners should combine numerical analysis with domain understanding.
`,

            example: `
A retailer may group customers into segments based on purchase behavior
without having predefined segment labels.
`,

            practical: `
Design an unsupervised-learning project for grouping customers by purchasing
behavior.
`,

            summary: `
Unsupervised learning discovers structure in data without predefined target
labels.
`
        },

        /* ===================================================
           MODULE 23 */
        {
            number: 23,
            title: "K-Means Clustering",

            objectives: [
                "Explain K-means.",
                "Understand centroids.",
                "Understand cluster assignment.",
                "Identify limitations."
            ],

            notes: `
K-means is a common clustering algorithm.

The practitioner chooses a number of clusters, represented by k.

The algorithm begins with candidate cluster centers, assigns observations to
their nearest center, updates the centers and repeats the process.

The result depends partly on initialization and the selected value of k.

K-means works best when clusters have shapes and scales compatible with its
assumptions.

Because it uses distance, feature scaling can be important.

The algorithm is popular because it is relatively simple and efficient for
many numerical datasets.

However, clusters discovered by K-means are not automatically meaningful.
Human interpretation remains essential.
`,

            example: `
A marketing team can use K-means to group customers according to spending
frequency and total spending.
`,

            practical: `
Work through one small K-means example manually using a two-dimensional
dataset.
`,

            summary: `
K-means organizes observations around cluster centers and requires careful
selection and interpretation.
`
        },

        /* ===================================================
           MODULE 24 */
        {
            number: 24,
            title: "Dimensionality Reduction",

            objectives: [
                "Explain the curse of dimensionality.",
                "Understand PCA conceptually.",
                "Understand feature reduction.",
                "Use reduced representations for visualization."
            ],

            notes: `
High-dimensional datasets may contain hundreds or thousands of variables.

As dimensionality increases, many algorithms become more computationally
expensive and distance-based reasoning can become less informative.

This phenomenon is associated with the curse of dimensionality.

Dimensionality reduction attempts to represent data using fewer dimensions
while preserving important information.

Principal Component Analysis (PCA) is one classical method.

PCA constructs new directions that capture variance in the data.

Reduced representations can support visualization, compression and
preprocessing.

However, reducing dimensions may make the resulting features less
interpretable because they are combinations of original variables.

Dimensionality reduction should therefore be used for a clear purpose.
`,

            example: `
A dataset containing fifty correlated numerical variables may be transformed
into a smaller representation for visualization.
`,

            practical: `
Explain when dimensionality reduction would be useful and when it might be
harmful.
`,

            summary: `
Dimensionality reduction simplifies complex datasets while attempting to
preserve useful structure.
`
        },

        /* ===================================================
           MODULE 25 */
        {
            number: 25,
            title: "Model Evaluation and Performance Metrics",

            objectives: [
                "Explain evaluation metrics.",
                "Understand classification errors.",
                "Understand regression metrics.",
                "Match metrics to business objectives."
            ],

            notes: `
Model evaluation determines how well a system performs on data that was not
used directly to fit its parameters.

For classification, common measures include accuracy, precision, recall and
F1 score.

Accuracy can be misleading when classes are imbalanced.

Precision measures the proportion of predicted positives that are actually
positive.

Recall measures the proportion of actual positives successfully identified.

The F1 score combines precision and recall.

Regression models can be evaluated using measures such as Mean Absolute Error,
Mean Squared Error and Root Mean Squared Error.

The correct metric depends on the consequences of errors.

A medical screening system, for example, may prioritize recall differently
from a recommendation system.

Evaluation must therefore be connected to real-world objectives.
`,

            example: `
A fraud-detection system may place greater importance on recall because
missing a fraudulent transaction may be costly.
`,

            practical: `
Create a comparison table of classification and regression metrics and explain
when each metric is useful.
`,

            summary: `
Metrics must be selected according to the task, data and consequences of
different errors.
`
        },

        /* ===================================================
           MODULE 26 */
        {
            number: 26,
            title: "Overfitting, Underfitting and Generalization",

            objectives: [
                "Define overfitting.",
                "Define underfitting.",
                "Explain generalization.",
                "Recognize training-validation differences."
            ],

            notes: `
Overfitting occurs when a model learns training-specific patterns that do not
generalize well.

An overfit model may achieve very strong training performance while
performing poorly on validation or test data.

Underfitting occurs when a model is too simple or insufficiently trained to
capture important relationships.

The ideal model should learn useful structure while avoiding unnecessary
memorization.

Generalization measures how well the learned relationship transfers to
previously unseen examples.

Approaches for improving generalization include appropriate model complexity,
regularization, better data, feature engineering, cross-validation and
early stopping.

Understanding this balance is one of the central concepts of machine learning.
`,

            example: `
A decision tree that perfectly memorizes training examples but performs badly
on new records is likely overfitting.
`,

            practical: `
Describe how training and validation curves can reveal overfitting and
underfitting.
`,

            summary: `
A useful model must generalize beyond the training examples.
`
        },

        /* ===================================================
           MODULE 27 */
        {
            number: 27,
            title: "Regularization",

            objectives: [
                "Explain regularization.",
                "Understand L1 and L2 concepts.",
                "Understand complexity control.",
                "Explain early stopping."
            ],

            notes: `
Regularization is a family of techniques used to discourage unnecessarily
complex models.

The goal is to improve generalization by controlling model flexibility.

L1 regularization adds a penalty related to the absolute values of
parameters, while L2 regularization penalizes squared parameter values.

Regularization can encourage simpler solutions and, depending on the method,
may reduce the influence of some features.

Neural networks can also use techniques such as dropout and early stopping.

Early stopping monitors validation performance and ends training when further
training appears to harm generalization.

Regularization should be tuned rather than applied blindly. Excessive
regularization can produce underfitting.
`,

            example: `
A linear model with many correlated features may benefit from regularization
that discourages excessively large coefficients.
`,

            practical: `
Compare under-regularization, appropriate regularization and excessive
regularization conceptually.
`,

            summary: `
Regularization controls model complexity and can improve generalization.
`
        },

        /* ===================================================
           MODULE 28 */
        {
            number: 28,
            title: "Cross-Validation",

            objectives: [
                "Explain cross-validation.",
                "Understand fold-based evaluation.",
                "Understand model selection.",
                "Recognize limitations."
            ],

            notes: `
Cross-validation provides a way to estimate model performance using multiple
training and validation splits.

In k-fold cross-validation, the data is divided into k parts. The model is
trained on k-1 parts and validated on the remaining part. This process is
repeated so each part serves as the validation set.

The results are then aggregated.

Cross-validation can provide a more stable estimate than using a single split.

However, it can be computationally expensive.

Time-series data requires special treatment because random folds can violate
temporal order.

Cross-validation should be designed according to the structure of the data.
`,

            example: `
Five-fold cross-validation can evaluate a classifier by training and
validating it five separate times.
`,

            practical: `
Design an appropriate validation strategy for a standard dataset and a
time-series dataset.
`,

            summary: `
Cross-validation improves the reliability of model comparison when applied
appropriately.
`
        },

        /* ===================================================
           MODULE 29 */
        {
            number: 29,
            title: "Hyperparameter Optimization",

            objectives: [
                "Distinguish parameters and hyperparameters.",
                "Explain grid search.",
                "Explain random search.",
                "Understand optimization trade-offs."
            ],

            notes: `
Model parameters are learned during training. Hyperparameters are selected by
the practitioner before or during the training process.

Examples include learning rate, tree depth, regularization strength, number of
trees and network architecture.

Grid search evaluates predefined combinations of hyperparameter values.

Random search samples configurations from specified ranges.

More sophisticated optimization methods can search efficiently through large
spaces.

However, optimization should not be treated as a competition to maximize one
metric blindly.

Computational cost, latency, interpretability, stability and fairness can
also matter.

The final configuration should therefore balance predictive performance with
real-world requirements.
`,

            example: `
A random search can explore different learning rates and regularization values
to identify promising neural-network configurations.
`,

            practical: `
Design a small hyperparameter experiment and define the metric used to select
the final configuration.
`,

            summary: `
Hyperparameter optimization searches for useful model configurations while
balancing performance and engineering cost.
`
        },

        /* ===================================================
           MODULE 30 */
        {
            number: 30,
            title: "Neural Networks",

            objectives: [
                "Explain artificial neurons.",
                "Understand layers.",
                "Understand weights and biases.",
                "Explain forward propagation."
            ],

            notes: `
A neural network consists of connected computational units organized into
layers.

An artificial neuron receives inputs, multiplies them by weights, adds a bias
and applies an activation function.

Weights determine how strongly inputs influence the resulting computation.

A network usually contains an input layer, one or more hidden layers and an
output layer.

Forward propagation is the process of passing an input through these layers to
produce an output.

Neural networks can represent complex nonlinear relationships when they
contain appropriate activation functions and sufficient capacity.

The practical power of neural networks comes from learning their parameters
from data rather than manually specifying every rule.
`,

            example: `
A simple neural network can receive numerical customer features and produce
the probability that the customer will leave a service.
`,

            practical: `
Draw a neural network with an input layer, two hidden layers and an output
layer. Label the data flow.
`,

            summary: `
Neural networks are layered mathematical models that learn transformations
from data.
`
        },

        /* ===================================================
           MODULE 31 */
        {
            number: 31,
            title: "Activation Functions",

            objectives: [
                "Explain nonlinear activation.",
                "Understand ReLU.",
                "Understand sigmoid and tanh.",
                "Match activation functions to tasks."
            ],

            notes: `
Activation functions introduce nonlinear behavior into neural networks.

Without nonlinear activation functions, multiple linear layers would still
collapse into a linear transformation.

The Rectified Linear Unit (ReLU) is commonly used in hidden layers.

The sigmoid function produces values between zero and one and has historically
been useful for binary outputs.

The hyperbolic tangent function produces values between negative one and one.

Modern architectures may use variants of ReLU and other activation functions
depending on the task.

The output activation is chosen based on the problem. For example, a regression
model may use a linear output while a classification system may use a
probability-producing output.
`,

            example: `
A ReLU activation allows positive values to pass through while replacing
negative values with zero.
`,

            practical: `
Calculate the output of ReLU, sigmoid and tanh for several simple inputs.
`,

            summary: `
Activation functions provide the nonlinearity that makes deep neural networks
capable of representing complex relationships.
`
        },

        /* ===================================================
           MODULE 32 */
        {
            number: 32,
            title: "Loss Functions and Optimization",

            objectives: [
                "Explain loss functions.",
                "Understand gradient-based learning.",
                "Understand learning rate.",
                "Explain model optimization."
            ],

            notes: `
A loss function measures how far a model's prediction is from the desired
output.

The training process attempts to minimize this loss.

Different tasks use different loss functions.

Regression may use squared-error-based objectives, while classification often
uses cross-entropy.

Optimization algorithms adjust model parameters according to information
derived from the loss.

The learning rate controls the size of parameter updates.

A learning rate that is too large may cause unstable training, while one that
is too small may lead to very slow convergence.

Training therefore requires monitoring the loss and other validation measures.
`,

            example: `
A classification model can use cross-entropy to measure how well predicted
probabilities match the correct class labels.
`,

            practical: `
Explain why reducing training loss does not automatically guarantee improved
performance on unseen data.
`,

            summary: `
Loss functions define training objectives and optimization algorithms adjust
model parameters to improve those objectives.
`
        },

        /* ===================================================
           MODULE 33 */
        {
            number: 33,
            title: "Backpropagation and Gradient Descent",

            objectives: [
                "Explain gradients.",
                "Explain backpropagation.",
                "Understand gradient descent.",
                "Understand training iterations."
            ],

            notes: `
A gradient describes how a function changes with respect to its parameters.

In neural-network training, gradients indicate how changing each parameter
would affect the loss.

Backpropagation efficiently calculates gradients by propagating information
backward through the network using the chain rule of calculus.

Once gradients are calculated, an optimization algorithm such as gradient
descent can adjust parameters.

A single update is part of an iterative learning process.

Training may involve many batches and epochs.

The process continues until performance is satisfactory or another stopping
condition is reached.

Understanding backpropagation is important because it explains how neural
networks actually learn rather than treating training as a black box.
`,

            example: `
If a particular weight contributes strongly to the model's error, the
gradient can indicate how that weight should change.
`,

            practical: `
Draw a simple neural network and illustrate the forward pass followed by the
backward flow of gradient information.
`,

            summary: `
Backpropagation calculates gradients and gradient-based optimization uses them
to improve neural-network parameters.
`
        },

        /* ===================================================
           MODULE 34 */
        {
            number: 34,
            title: "Deep Learning Architectures",

            objectives: [
                "Define deep learning.",
                "Understand depth.",
                "Explain architectural choice.",
                "Understand training requirements."
            ],

            notes: `
Deep learning refers broadly to neural-network methods that use multiple
layers to learn hierarchical representations.

Early layers can detect relatively simple patterns, while deeper layers can
combine those representations into more complex structures.

Different architectures are appropriate for different data types.

Convolutional networks are particularly useful for spatial data. Recurrent
architectures were historically important for sequences. Transformer
architectures have become dominant in many language tasks.

Deep models can achieve strong performance but may require significant amounts
of data and computational resources.

They also require careful regularization, optimization and evaluation.

Architecture should be chosen because it fits the problem, not merely because
it is technologically sophisticated.
`,

            example: `
An image-recognition network may learn low-level visual features before
combining them into high-level object representations.
`,

            practical: `
Compare three neural architectures and identify the type of problem for
which each is appropriate.
`,

            summary: `
Deep learning uses multiple neural layers to learn increasingly complex
representations.
`
        },

        /* ===================================================
           MODULE 35 */
        {
            number: 35,
            title: "Convolutional Neural Networks",

            objectives: [
                "Understand image representation.",
                "Explain convolution.",
                "Explain pooling.",
                "Understand image classification."
            ],

            notes: `
Convolutional Neural Networks (CNNs) are designed to process spatial data,
especially images.

An image can be represented numerically as a grid of pixels. Color images
usually contain multiple channels.

Convolutional layers use learned filters to detect local patterns such as
edges, textures and shapes.

As the network becomes deeper, these local representations can be combined
into more complex patterns.

Pooling operations can reduce spatial dimensions and computation.

CNNs have been widely used for image classification, object detection and
segmentation.

Training a CNN requires sufficient data, appropriate preprocessing and careful
evaluation.
`,

            example: `
A CNN can learn to recognize visual patterns that distinguish different
categories of objects.
`,

            practical: `
Design a CNN-based image-classification system and specify its input, output,
training data and evaluation method.
`,

            summary: `
CNNs use convolutional operations to learn spatial patterns from images and
other structured data.
`
        },

        /* ===================================================
           MODULE 36 */
        {
            number: 36,
            title: "Computer Vision",

            objectives: [
                "Define computer vision.",
                "Explain image classification.",
                "Explain object detection.",
                "Explain segmentation."
            ],

            notes: `
Computer vision enables computers to analyze visual information.

Major tasks include image classification, object detection, image
segmentation, tracking, recognition and visual question answering.

Classification predicts one or more labels for an image.

Object detection identifies objects and their locations, often using bounding
boxes.

Segmentation assigns labels to pixels or regions and provides more detailed
spatial information.

Computer vision systems are used in healthcare, manufacturing, agriculture,
transportation, security and scientific research.

Performance depends strongly on the quality and representativeness of visual
data.

Privacy and ethical issues are especially important for applications involving
faces, surveillance or sensitive environments.
`,

            example: `
A manufacturing system can inspect products on a production line and detect
visual defects automatically.
`,

            practical: `
Design a computer-vision pipeline for quality inspection in a manufacturing
environment.
`,

            summary: `
Computer vision transforms visual information into computationally useful
representations for prediction and analysis.
`
        },

        /* ===================================================
           MODULE 37 */
        {
            number: 37,
            title: "Natural Language Processing",

            objectives: [
                "Define NLP.",
                "Explain text representation.",
                "Understand text classification.",
                "Understand language ambiguity."
            ],

            notes: `
Natural Language Processing (NLP) focuses on enabling computers to process
human language.

Language is difficult because meaning depends on context, syntax, semantics,
culture and world knowledge.

Important NLP tasks include classification, summarization, translation,
information extraction, sentiment analysis and question answering.

Traditional systems may use tokenization, term frequencies and manually
designed features.

Modern systems increasingly use learned representations.

Language data must be represented numerically before machine-learning models
can process it.

NLP systems should be evaluated not only for accuracy but also for robustness,
bias, language coverage and safety.
`,

            example: `
A customer-support system can classify incoming messages into categories such
as billing, technical support and account access.
`,

            practical: `
Design an NLP system for classifying customer-support messages.
`,

            summary: `
NLP applies computational methods to language and requires careful handling of
context, ambiguity and representation.
`
        },

        /* ===================================================
           MODULE 38 */
        {
            number: 38,
            title: "Transformers and Attention",

            objectives: [
                "Explain attention.",
                "Understand transformer architecture.",
                "Understand contextual representations.",
                "Explain why transformers are important."
            ],

            notes: `
Transformers introduced a powerful architecture based heavily on attention.

Attention allows a model to determine which parts of an input are relevant to
the current processing step.

This is especially valuable for language because relationships between words
may span long distances.

Transformer models process token representations through repeated layers of
attention and nonlinear transformations.

The architecture can be trained efficiently on large datasets and has become
fundamental to many modern language systems.

Transformers are not limited to text. Related ideas have been applied to
images, audio and multimodal data.

Understanding transformers is essential for understanding contemporary
generative AI.
`,

            example: `
In a sentence containing a pronoun, attention can help the model consider the
most relevant earlier words when determining meaning.
`,

            practical: `
Create a simple diagram showing tokens passing through several transformer
layers.
`,

            summary: `
Attention and transformer architectures are central to many modern AI systems.
`
        },

        /* ===================================================
           MODULE 39 */
        {
            number: 39,
            title: "Large Language Models",

            objectives: [
                "Define a large language model.",
                "Explain language-model training conceptually.",
                "Understand tokenization.",
                "Understand limitations."
            ],

            notes: `
Large Language Models (LLMs) are neural models trained on large collections of
text and related data.

They learn statistical relationships among tokens and can generate, transform,
classify and summarize language.

Tokenization converts text into units that the model can process.

During training, language models learn to predict or represent patterns in
sequences.

Modern LLMs can perform many tasks without task-specific training, especially
when instructions and examples are provided in context.

However, LLMs do not automatically guarantee factual correctness.

They can produce plausible but incorrect statements, inherit biases and fail
on specialized tasks.

Professional use therefore requires verification and appropriate controls.
`,

            example: `
An LLM can draft a summary of a document, but a human should review important
facts before the summary is used in a high-stakes environment.
`,

            practical: `
List ten useful LLM applications and ten risks associated with those
applications.
`,

            summary: `
LLMs are powerful language models, but generated output must be evaluated for
accuracy, relevance and safety.
`
        },

        /* ===================================================
           MODULE 40 */
        {
            number: 40,
            title: "Generative AI",

            objectives: [
                "Define generative AI.",
                "Distinguish generation from classification.",
                "Understand major modalities.",
                "Identify responsible-use concerns."
            ],

            notes: `
Generative AI refers to AI systems capable of creating new content.

Generated outputs may include text, images, audio, video, code and structured
information.

Generative systems learn patterns from training data and use those patterns
to produce new outputs.

The generated output is not necessarily copied from a single training example;
it is produced through a learned generative process.

Applications include writing assistance, design, programming support,
education, simulation, media generation and research assistance.

Risks include hallucination, misinformation, copyright disputes, identity
misuse, privacy concerns and automation bias.

Responsible use requires clear expectations, verification and safeguards.
`,

            example: `
A design team can use generative AI to create early visual concepts before
producing a final design.
`,

            practical: `
Design a responsible generative-AI workflow for a university learning
platform.
`,

            summary: `
Generative AI creates new content but must be used with verification,
security and ethical controls.
`
        },

        /* ===================================================
           MODULE 41 */
        {
            number: 41,
            title: "Prompt Engineering and AI Interaction",

            objectives: [
                "Explain prompting.",
                "Structure effective instructions.",
                "Use constraints.",
                "Understand prompt limitations."
            ],

            notes: `
Prompt engineering is the practice of constructing useful instructions and
context for generative AI systems.

A strong instruction often identifies the task, context, constraints and
desired output format.

Examples can be included when a specific response style is required.

Prompting can improve consistency, but it cannot guarantee truthfulness.

Complex applications may need more than prompting. They may require retrieval,
tools, validation, structured output, external databases and human review.

Prompts should therefore be treated as one component of a larger AI system.

Security also matters because user-supplied text may attempt to manipulate an
AI system into violating its intended instructions.
`,

            example: `
A vague instruction such as "write something about AI" provides less control
than a structured request specifying audience, length, purpose and format.
`,

            practical: `
Create three prompts for the same educational task and compare how the
outputs differ.
`,

            summary: `
Good prompts provide clear instructions and constraints, but prompting alone
does not solve accuracy or safety problems.
`
        },

        /* ===================================================
           MODULE 42 */
        {
            number: 42,
            title: "Reinforcement Learning",

            objectives: [
                "Define reinforcement learning.",
                "Explain states and actions.",
                "Explain rewards.",
                "Understand exploration and exploitation."
            ],

            notes: `
Reinforcement learning involves an agent interacting with an environment.

At each step, the agent observes a state, chooses an action and receives a
reward.

The agent's objective is generally to maximize cumulative reward over time.

This differs from supervised learning because the correct answer is not
necessarily provided directly for every step.

Important concepts include state, action, policy, reward, value and environment.

A major challenge is balancing exploration, where the agent tries unfamiliar
actions, and exploitation, where the agent chooses actions already believed
to work well.

Reward design is especially important. A poorly designed reward can produce
unexpected behavior even when the learning algorithm is technically correct.
`,

            example: `
A robot learning to navigate can receive positive reward for reaching a
destination and negative reward for collisions.
`,

            practical: `
Design a reinforcement-learning environment for an automated warehouse robot.
`,

            summary: `
Reinforcement learning learns decision-making strategies through interaction,
actions and rewards.
`
        },

        /* ===================================================
           MODULE 43 */
        {
            number: 43,
            title: "Recommender Systems",

            objectives: [
                "Explain recommendation systems.",
                "Understand collaborative filtering.",
                "Understand content-based recommendation.",
                "Evaluate recommendation quality."
            ],

            notes: `
Recommendation systems attempt to identify information, products or content
that may be useful to a user.

Collaborative filtering uses patterns of interaction among users and items.

Content-based systems use item characteristics and user preferences.

Hybrid systems combine multiple approaches.

Recommendation systems must balance relevance with diversity, freshness,
fairness and user experience.

A system optimized only for clicks can produce undesirable outcomes, such as
repetitive content or excessive engagement optimization.

Evaluation may include ranking metrics, engagement measures, diversity,
coverage and business outcomes.

Recommendation systems are widely used in e-commerce, media, education and
digital platforms.
`,

            example: `
An online learning platform can recommend a course based on a learner's
previously completed courses and interests.
`,

            practical: `
Design a recommendation engine for an online education platform.
`,

            summary: `
Recommendation systems personalize information using user and item
relationships while balancing multiple objectives.
`
        },

        /* ===================================================
           MODULE 44 */
        {
            number: 44,
            title: "Time-Series Forecasting",

            objectives: [
                "Define time-series data.",
                "Explain trend and seasonality.",
                "Understand forecasting.",
                "Understand temporal validation."
            ],

            notes: `
Time-series data consists of observations ordered in time.

Examples include sales, electricity demand, temperatures, sensor readings,
website traffic and financial measurements.

Important patterns include trend, seasonality and cycles.

Forecasting uses historical information to predict future values.

Time-series modeling requires special validation because future observations
must not be allowed to influence earlier training.

Randomly shuffling data can therefore create leakage.

Forecast evaluation should reproduce the actual prediction scenario.

Useful metrics include MAE and RMSE, but the correct choice depends on the
business consequences of error.
`,

            example: `
A retailer may forecast next month's demand using previous months of sales
information.
`,

            practical: `
Design a forecasting system for monthly product demand and explain its
training and evaluation strategy.
`,

            summary: `
Forecasting requires respect for temporal order and careful evaluation.
`
        },

        /* ===================================================
           MODULE 45 */
        {
            number: 45,
            title: "Anomaly Detection",

            objectives: [
                "Define an anomaly.",
                "Explain statistical anomaly detection.",
                "Understand machine-learning approaches.",
                "Design alert systems."
            ],

            notes: `
Anomaly detection identifies observations that differ significantly from
expected behavior.

Applications include fraud detection, equipment monitoring, cybersecurity,
quality control and scientific analysis.

Simple approaches can use statistical thresholds.

Machine-learning approaches can examine multidimensional patterns that are
difficult to define manually.

A critical challenge is that unusual does not always mean wrong. Some unusual
events may represent legitimate but rare conditions.

Operational systems therefore need investigation workflows rather than simply
flagging every unusual event as an error.

Threshold selection should balance detection ability with false alarms.
`,

            example: `
An industrial sensor may generate an alert when its behavior deviates from
normal operating conditions.
`,

            practical: `
Design an anomaly-detection workflow for a financial transaction system.
`,

            summary: `
Anomaly detection identifies unusual behavior but requires careful thresholds
and human interpretation.
`
        },

        /* ===================================================
           MODULE 46 */
        {
            number: 46,
            title: "MLOps and Model Deployment",

            objectives: [
                "Explain MLOps.",
                "Understand deployment.",
                "Understand model monitoring.",
                "Understand lifecycle management."
            ],

            notes: `
MLOps applies software engineering and operational practices to machine
learning systems.

A model is not finished when training ends. It must be integrated into an
application, deployed, monitored and maintained.

Deployment may be batch-based or real-time.

A prediction API can expose a trained model to other applications.

Monitoring should include technical metrics such as latency and failure rates
as well as model-related metrics such as data drift and prediction quality.

Models may become less effective when real-world behavior changes.

This means production machine learning requires a continuous lifecycle rather
than a one-time training event.
`,

            example: `
A customer-churn model can be deployed through an API and monitored for
changes in data distributions and prediction performance.
`,

            practical: `
Draw an end-to-end MLOps lifecycle from data collection to retraining.
`,

            summary: `
MLOps turns machine-learning experiments into maintainable production systems.
`
        },

        /* ===================================================
           MODULE 47 */
        {
            number: 47,
            title: "AI Security and Privacy",

            objectives: [
                "Identify AI security threats.",
                "Understand data protection.",
                "Understand access control.",
                "Apply defensive practices."
            ],

            notes: `
AI systems face both traditional cybersecurity threats and AI-specific risks.

Sensitive training data may be exposed through poor access controls.

Model APIs may be abused through unauthorized requests or manipulated inputs.

Training data can also be targeted through poisoning or malicious modification.

Privacy is especially important when AI systems process personal information.

Least-privilege access should be used so that users and systems receive only
the permissions necessary for their roles.

Data should be protected appropriately in storage and during transmission.

Security should be built into the architecture instead of being added after
deployment.

Logging, monitoring, authentication, authorization and incident response are
essential elements of responsible AI engineering.
`,

            example: `
A public application should not expose confidential training records through
an unrestricted API.
`,

            practical: `
Create a security checklist for a production AI application.
`,

            summary: `
AI security combines traditional cybersecurity with protections specific to
data, models and AI-enabled applications.
`
        },

        /* ===================================================
           MODULE 48 */
        {
            number: 48,
            title: "Responsible, Ethical and Explainable AI",

            objectives: [
                "Explain AI ethics.",
                "Understand bias.",
                "Understand explainability.",
                "Design human oversight."
            ],

            notes: `
Responsible AI considers the effects of AI systems on people and society.

Important principles include fairness, transparency, accountability, privacy,
safety and human oversight.

Bias can enter through data collection, sampling, labeling, feature design,
model selection and deployment.

Fairness must therefore be evaluated in context rather than assumed from a
single numerical measure.

Explainability concerns how users and stakeholders understand model behavior.

Some models are naturally easier to interpret than others.

High-impact applications may require stronger explanations and human
review.

Professionals should communicate uncertainty honestly and avoid claiming
accuracy or fairness without evidence.

Ethics is not an optional final section of AI development. It is part of
system design.
`,

            example: `
A hiring model should be evaluated for whether qualified candidates are being
treated unfairly because of systematic patterns in historical data.
`,

            practical: `
Conduct an ethical risk assessment for an AI-assisted recruitment system.
`,

            summary: `
Responsible AI combines technical performance with fairness, privacy,
transparency, safety and accountability.
`
        },

        /* ===================================================
           MODULE 49 */
        {
            number: 49,
            title: "AI Research, Project Development and Evaluation",

            objectives: [
                "Define an AI research problem.",
                "Develop an experimental plan.",
                "Compare models.",
                "Document results."
            ],

            notes: `
A professional AI project begins with a well-defined problem.

The project should identify the intended users, objective, data sources,
constraints and success criteria.

A baseline should be established before evaluating more complex approaches.

Experimental procedures must avoid leakage and use suitable validation.

Results should be reported honestly, including failures and limitations.

A professional project should document the data, preprocessing, architecture,
hyperparameters, evaluation metrics and deployment considerations.

Reproducibility is important because another practitioner should be able to
understand how the result was produced.

A complete AI project therefore combines research methodology, data work,
software engineering and communication.
`,

            example: `
A student may compare logistic regression, random forest and a neural network
for the same classification task and document the strengths and weaknesses of
each.
`,

            practical: `
Design a complete AI research project including a research question,
dataset, baseline, models, evaluation criteria and reporting structure.
`,

            summary: `
A successful AI project requires a clear problem, rigorous experimentation,
careful evaluation and transparent reporting.
`
        },

        /* ===================================================
           MODULE 50 */
        {
            number: 50,
            title: "AI Capstone Project and Professional Practice",

            objectives: [
                "Integrate knowledge from the entire course.",
                "Design an end-to-end AI system.",
                "Evaluate technical and ethical requirements.",
                "Present a professional AI project."
            ],

            notes: `
The final module integrates the knowledge developed throughout the course.

A complete AI capstone should begin with a practical problem that can
reasonably be addressed using artificial intelligence.

The student should define the problem, identify stakeholders, gather and
evaluate data, design a preprocessing pipeline, select appropriate algorithms,
train models, evaluate results and document limitations.

A production-oriented project should also consider deployment, security,
monitoring and maintenance.

Responsible AI requirements should be included. The student should consider
privacy, fairness, explainability and the possible consequences of incorrect
predictions.

The final project report should explain the problem, dataset, methodology,
experiments, evaluation, results, limitations and recommendations.

A professional presentation should demonstrate not only the final result but
also the reasoning that led to the result.

The most important lesson of the course is that successful AI is not defined
simply by using a sophisticated model. Strong AI engineering requires a sound
problem definition, reliable data, appropriate evaluation, secure deployment,
ethical responsibility and continuous improvement.

Learners should continue beyond the course by building projects, reading
technical documentation, studying research papers and practising software
engineering.
`,

            example: `
A complete capstone might build an AI system that predicts customer churn,
provides a web-based prediction interface, stores results securely and
includes monitoring and documentation.
`,

            practical: `
Build and document a complete AI project. The final submission should contain
the problem statement, dataset description, data preparation process, model
selection, training process, evaluation results, limitations, deployment plan,
security assessment and responsible-AI analysis.
`,

            summary: `
The capstone demonstrates that the learner can combine AI theory, data,
programming, machine learning, deployment, security and responsible practice
into one coherent system.
`
        }

    ]

};


/* ============================================================
   COURSE VALIDATION
============================================================ */

function validateAIMLCourse() {

    const errors = [];

    if (
        !AI_ML_COURSE.modules ||
        !Array.isArray(AI_ML_COURSE.modules)
    ) {

        errors.push(
            "The AI/ML course does not contain a valid modules array."
        );

        return errors;

    }

    if (
        AI_ML_COURSE.modules.length !== 50
    ) {

        errors.push(
            "AI/ML course must contain exactly 50 modules. Found: " +
            AI_ML_COURSE.modules.length
        );

    }


    AI_ML_COURSE.modules.forEach(
        function (module, index) {

            if (!module.title) {

                errors.push(
                    "Module " +
                    (index + 1) +
                    " has no title."
                );

            }


            if (!module.notes || module.notes.trim().length < 500) {

                errors.push(
                    "Module " +
                    (index + 1) +
                    " has insufficient notes."
                );

            }


            if (
                !Array.isArray(module.objectives) ||
                module.objectives.length < 3
            ) {

                errors.push(
                    "Module " +
                    (index + 1) +
                    " needs more learning objectives."
                );

            }


            if (
                !module.practical ||
                module.practical.trim().length < 50
            ) {

                errors.push(
                    "Module " +
                    (index + 1) +
                    " is missing a practical activity."
                );

            }

        }
    );


    return errors;

}


/* ============================================================
   COURSE HELPERS
============================================================ */

function getAIModule(moduleNumber) {

    return AI_ML_COURSE.modules.find(
        function (module) {

            return module.number === Number(moduleNumber);

        }
    ) || null;

}


function getAILesson(moduleNumber) {

    return getAIModule(moduleNumber);

}


function getTotalCourseModules() {

    return AI_ML_COURSE.modules.length;

}


/* ============================================================
   COURSE PROGRESS
============================================================ */

function getAIProgress() {

    try {

        const saved =
            localStorage.getItem(
                "nexora_ai_ml_progress"
            );

        if (!saved) {

            return [];

        }

        return JSON.parse(saved);

    } catch (error) {

        console.error(
            "Unable to read AI/ML progress.",
            error
        );

        return [];

    }

}


function markAIModuleComplete(moduleNumber) {

    const progress =
        getAIProgress();

    const number =
        Number(moduleNumber);


    if (!progress.includes(number)) {

        progress.push(number);

        progress.sort(
            function (a, b) {
                return a - b;
            }
        );

    }


    localStorage.setItem(
        "nexora_ai_ml_progress",
        JSON.stringify(progress)
    );


    return progress;

}


function getAIProgressPercentage() {

    const completed =
        getAIProgress().length;

    const total =
        getTotalCourseModules();


    if (!total) {

        return 0;

    }


    return Math.round(
        (completed / total) * 100
    );

}


/* ============================================================
   EXPORT
============================================================ */

window.AI_ML_COURSE =
    AI_ML_COURSE;

window.getAIModule =
    getAIModule;

window.getAILesson =
    getAILesson;

window.markAIModuleComplete =
    markAIModuleComplete;

window.getAIProgress =
    getAIProgress;

window.getAIProgressPercentage =
    getAIProgressPercentage;


/* ============================================================
   VALIDATION REPORT
============================================================ */

const aiCourseErrors =
    validateAIMLCourse();


if (
    aiCourseErrors.length === 0
) {

    console.log(
        "NEXORA DIGITAL: AI/ML course loaded successfully."
    );

    console.log(
        "Total modules:",
        AI_ML_COURSE.modules.length
    );

} else {

    console.error(
        "NEXORA DIGITAL: AI/ML course validation failed."
    );

    aiCourseErrors.forEach(
        function (error) {

            console.error(
                error
            );

        }
    );

          }
