// ======================================
// QUIZORA - PROFESSIONAL QUIZ APPLICATION
// ======================================

const questionBank = {

    HTML: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },
        {
            question: "Which tag creates a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: 1
        },
        {
            question: "Which tag creates the largest heading?",
            options: ["<h6>", "<head>", "<h1>", "<heading>"],
            answer: 2
        },
        {
            question: "Which tag inserts an image?",
            options: ["<image>", "<picture>", "<img>", "<src>"],
            answer: 2
        },
        {
            question: "Which attribute provides alternative text for an image?",
            options: ["title", "alt", "name", "text"],
            answer: 1
        },
        {
            question: "Which tag creates an ordered list?",
            options: ["<ul>", "<li>", "<dl>", "<ol>"],
            answer: 3
        },
        {
            question: "Which tag creates a table row?",
            options: ["<td>", "<tr>", "<th>", "<table-row>"],
            answer: 1
        },
        {
            question: "Which attribute makes an input field mandatory?",
            options: ["validate", "required", "mandatory", "must"],
            answer: 1
        },
        {
            question: "Which tag connects an external CSS file?",
            options: ["<style>", "<css>", "<link>", "<script>"],
            answer: 2
        },
        {
            question: "Which HTML element creates a paragraph?",
            options: ["<para>", "<p>", "<text>", "<pg>"],
            answer: 1
        },
        {
            question: "Which tag creates a line break?",
            options: ["<break>", "<br>", "<lb>", "<line>"],
            answer: 1
        },
        {
            question: "Which attribute specifies a unique element ID?",
            options: ["class", "name", "id", "style"],
            answer: 2
        },
        {
            question: "Which input type creates a checkbox?",
            options: [
                '<input type="checkbox">',
                "<checkbox>",
                "<check>",
                '<input type="check">'
            ],
            answer: 0
        },
        {
            question: "Which tag defines a navigation section?",
            options: ["<navigate>", "<nav>", "<navigation>", "<menuitem>"],
            answer: 1
        },
        {
            question: "Which attribute opens a link in a new tab?",
            options: ["newtab", "open", 'target="_blank"', "tab"],
            answer: 2
        },
        {
            question: "Which tag defines the main content of a page?",
            options: ["<main>", "<bodytext>", "<content>", "<sectiononly>"],
            answer: 0
        },
        {
            question: "Which tag is used to play video?",
            options: ["<media>", "<movie>", "<video>", "<play>"],
            answer: 2
        },
        {
            question: "Which tag defines a table header cell?",
            options: ["<td>", "<tr>", "<th>", "<theadcell>"],
            answer: 2
        },
        {
            question: "Which tag creates a numbered list item?",
            options: ["<ol>", "<li>", "<ul>", "<item>"],
            answer: 1
        },
        {
            question: "Which semantic tag represents the footer of a page or section?",
            options: ["<bottom>", "<end>", "<footer>", "<last>"],
            answer: 2
        }
    ],

    CSS: [
        {
            question: "What does CSS stand for?",
            options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style System",
                "Colorful Style Sheets"
            ],
            answer: 1
        },
        {
            question: "Which property changes text color?",
            options: ["font-color", "text-color", "color", "background"],
            answer: 2
        },
        {
            question: "Which symbol selects an element by ID?",
            options: [".", "#", "*", "&"],
            answer: 1
        },
        {
            question: "Which property changes background color?",
            options: ["bgcolor", "background-color", "color", "background-text"],
            answer: 1
        },
        {
            question: "Which CSS layout system is one-dimensional?",
            options: ["Grid", "Flexbox", "Float", "Position"],
            answer: 1
        },
        {
            question: "Which property makes text bold?",
            options: ["font-weight", "font-style", "text-bold", "bold"],
            answer: 0
        },
        {
            question: "Which property adds space inside an element's border?",
            options: ["margin", "padding", "outline", "gap"],
            answer: 1
        },
        {
            question: "Which selector targets all paragraph elements?",
            options: ["#p", ".p", "p", "*p"],
            answer: 2
        },
        {
            question: "Which property rounds element corners?",
            options: ["corner-style", "border-round", "border-radius", "round"],
            answer: 2
        },
        {
            question: "Which rule is used for responsive layouts?",
            options: ["@responsive", "@media", "@screen-size", "@mobile"],
            answer: 1
        },
        {
            question: "Which property changes the text size?",
            options: ["text-size", "font-size", "size", "font-style"],
            answer: 1
        },
        {
            question: "Which property controls transparency?",
            options: ["visibility", "transparent", "opacity", "display"],
            answer: 2
        },
        {
            question: "Which position value fixes an element relative to the viewport?",
            options: ["static", "relative", "fixed", "normal"],
            answer: 2
        },
        {
            question: "Which property adds a shadow around a box?",
            options: ["text-shadow", "box-shadow", "element-shadow", "shadow-box"],
            answer: 1
        },
        {
            question: "Which unit is relative to the root font size?",
            options: ["px", "em", "rem", "vh"],
            answer: 2
        },
        {
            question: "Which property controls the space between grid cells?",
            options: ["spacing", "gap", "cell-space", "margin-cell"],
            answer: 1
        },
        {
            question: "Which property aligns flex items along the main axis?",
            options: ["align-items", "justify-content", "text-align", "float"],
            answer: 1
        },
        {
            question: "Which property controls the stacking order of positioned elements?",
            options: ["stack", "layer", "z-index", "order-index"],
            answer: 2
        },
        {
            question: "Which pseudo-class applies when an element is hovered over?",
            options: [":focus", ":active", ":hover", ":visited"],
            answer: 2
        },
        {
            question: "Which property controls how content exceeding an element's box is handled?",
            options: ["overflow", "content-fit", "box-size", "wrap"],
            answer: 0
        }
    ],

    JavaScript: [
        {
            question: "Which keyword declares a reassignable block-scoped variable?",
            options: ["const", "let", "static", "define"],
            answer: 1
        },
        {
            question: "Which method displays a message in the console?",
            options: ["print()", "display()", "console.log()", "writeConsole()"],
            answer: 2
        },
        {
            question: "Which operator checks strict equality?",
            options: ["=", "==", "===", "!="],
            answer: 2
        },
        {
            question: "Which method selects an element by its ID?",
            options: [
                "document.getElementById()",
                "document.getClass()",
                "document.selectId()",
                "window.getId()"
            ],
            answer: 0
        },
        {
            question: "Which event occurs when a user clicks an element?",
            options: ["onchange", "onhover", "onclick", "onload"],
            answer: 2
        },
        {
            question: "Which array method adds an item to the end?",
            options: ["pop()", "push()", "shift()", "remove()"],
            answer: 1
        },
        {
            question: "Which keyword declares a function?",
            options: ["method", "func", "function", "create"],
            answer: 2
        },
        {
            question: "Which value represents an intentional absence of a value?",
            options: ["null", "true", "1", "false only"],
            answer: 0
        },
        {
            question: "Which loop runs while its condition is true?",
            options: ["if", "while", "switch", "case"],
            answer: 1
        },
        {
            question: "Which method parses a JSON string?",
            options: [
                "JSON.stringify()",
                "JSON.parse()",
                "JSON.convert()",
                "JSON.read()"
            ],
            answer: 1
        },
        {
            question: "Which keyword declares a constant?",
            options: ["let", "var", "const", "static"],
            answer: 2
        },
        {
            question: "Which method adds an event listener?",
            options: [
                "addEventListener()",
                "addEvent()",
                "listenEvent()",
                "onEvent()"
            ],
            answer: 0
        },
        {
            question: "What does typeof return?",
            options: [
                "The variable's value",
                "The type of a value",
                "The variable's name",
                "The value's length"
            ],
            answer: 1
        },
        {
            question: "Which method removes the last array item?",
            options: ["shift()", "pop()", "push()", "slice()"],
            answer: 1
        },
        {
            question: "Which of these is a Boolean value?",
            options: ['"true"', "1 only", "true", '"yes"'],
            answer: 2
        },
        {
            question: "Which operator means logical AND?",
            options: ["||", "&&", "!", "&|"],
            answer: 1
        },
        {
            question: "Which method converts an array to a string with separators?",
            options: ["join()", "merge()", "combine()", "append()"],
            answer: 0
        },
        {
            question: "Which keyword handles an error-catching block?",
            options: ["check", "catch", "error", "handle"],
            answer: 1
        },
        {
            question: "Which method converts a JSON value into a JSON string?",
            options: [
                "JSON.parse()",
                "JSON.stringify()",
                "JSON.convert()",
                "JSON.toObject()"
            ],
            answer: 1
        },
        {
            question: "Which method selects the first element matching a CSS selector?",
            options: [
                "document.querySelector()",
                "document.getFirst()",
                "document.selectFirst()",
                "document.findElement()"
            ],
            answer: 0
        }
    ],

    "C++": [
        {
            question: "Who developed C++?",
            options: [
                "Dennis Ritchie",
                "James Gosling",
                "Bjarne Stroustrup",
                "Guido van Rossum"
            ],
            answer: 2
        },
        {
            question: "Which symbol ends a C++ statement?",
            options: [".", ":", ";", ","],
            answer: 2
        },
        {
            question: "Which header is commonly used for cout and cin?",
            options: ["<stdio.h>", "<iostream>", "<string.h>", "<math.h>"],
            answer: 1
        },
        {
            question: "Which operator sends output to cout?",
            options: [">>", "<<", "==", "&&"],
            answer: 1
        },
        {
            question: "Which keyword creates a class?",
            options: ["object", "structonly", "class", "define"],
            answer: 2
        },
        {
            question: "Which loop executes its body at least once?",
            options: ["for", "while", "do-while", "range-for"],
            answer: 2
        },
        {
            question: "Which access specifier is the default in a C++ class?",
            options: ["public", "private", "protected", "global"],
            answer: 1
        },
        {
            question: "Which operator accesses a member through an object?",
            options: ["-> only", ".", "::", "#"],
            answer: 1
        },
        {
            question: "What allows the same function name with different parameters?",
            options: [
                "Function overloading",
                "Encapsulation",
                "Compilation",
                "Iteration"
            ],
            answer: 0
        },
        {
            question: "Which keyword declares a constant variable?",
            options: ["fixed", "static", "const", "constant"],
            answer: 2
        },
        {
            question: "Which keyword allocates an object dynamically?",
            options: ["create", "malloc only", "new", "object"],
            answer: 2
        },
        {
            question: "Which operator compares two values for equality?",
            options: ["=", "==", "=>", ":="],
            answer: 1
        },
        {
            question: "Which loop is useful when the iteration count is known?",
            options: ["for", "if", "switch", "goto"],
            answer: 0
        },
        {
            question: "Which OOP concept bundles data and methods together?",
            options: ["Encapsulation", "Iteration", "Compilation", "Casting"],
            answer: 0
        },
        {
            question: "Which symbol is used for inheritance in C++ class declarations?",
            options: ["extends", "inherits", ":", "implements"],
            answer: 2
        },
        {
            question: "Which operator accesses a member through a pointer?",
            options: [".", "->", "::", "&&"],
            answer: 1
        },
        {
            question: "Which function is the usual entry point of a C++ program?",
            options: ["start()", "run()", "main()", "begin()"],
            answer: 2
        },
        {
            question: "Which feature allows one interface to have different implementations?",
            options: ["Polymorphism", "Compilation", "Iteration", "Declaration"],
            answer: 0
        },
        {
            question: "Which keyword is used to return a value from a function?",
            options: ["send", "return", "output", "break"],
            answer: 1
        },
        {
            question: "Which operator accesses a scope such as a class member?",
            options: [".", "->", "::", "#"],
            answer: 2
        }
    ]
};


// ======================================
// DOM ELEMENTS
// ======================================

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const questionNumberEl = document.getElementById("questionNumber");
const categoryLabelEl = document.getElementById("categoryLabel");
const progressBar = document.getElementById("progressBar");
const answeredCountEl = document.getElementById("answeredCount");
const scoreDisplay = document.getElementById("scoreDisplay");
const totalAnsweredEl = document.getElementById("totalAnswered");
const timerEl = document.getElementById("timer");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");


// ======================================
// QUIZ VARIABLES
// ======================================

let currentCategory = "HTML";
let questions = [];
let currentIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let totalAnswered = 0;
let roundNumber = 1;

let answered = false;
let quizFinished = false;

let timeLeft = 300;
let timerInterval = null;


// ======================================
// SHUFFLE QUESTIONS AND OPTIONS
// ======================================

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function getFreshQuestions(category) {
    // Shuffle the question order.
    return shuffleArray(questionBank[category]).map(item => {
        // Shuffle options while keeping the correct answer.
        const correctOption = item.options[item.answer];
        const shuffledOptions = shuffleArray(item.options);

        return {
            question: item.question,
            options: shuffledOptions,
            answer: shuffledOptions.indexOf(correctOption)
        };
    });
}


// ======================================
// START QUIZ
// ======================================

function startQuiz(category, newRound = false) {
    clearInterval(timerInterval);

    currentCategory = category;

    if (newRound) {
        roundNumber++;
    } else {
        roundNumber = 1;
        score = 0;
        correctCount = 0;
        wrongCount = 0;
        totalAnswered = 0;
    }

    questions = getFreshQuestions(category);

    currentIndex = 0;
    answered = false;
    quizFinished = false;
    timeLeft = 300;

    document.querySelectorAll(".category").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });

    scoreDisplay.textContent = score;
    totalAnsweredEl.textContent = totalAnswered;

    quizScreen.hidden = false;
    resultScreen.hidden = true;

    renderQuestion();
    updateTimer();

    timerInterval = setInterval(() => {
        if (quizFinished) return;

        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            finishQuiz(true);
        }
    }, 1000);
}


// ======================================
// DISPLAY QUESTION
// ======================================

function renderQuestion() {
    answered = false;

    const current = questions[currentIndex];

    categoryLabelEl.textContent =
        `${currentCategory.toUpperCase()} • ROUND ${roundNumber}`;

    questionNumberEl.textContent =
        `QUESTION ${currentIndex + 1}/${questions.length}`;

    questionEl.textContent = current.question;

    progressBar.style.width =
        `${((currentIndex + 1) / questions.length) * 100}%`;

    answeredCountEl.textContent =
        `${totalAnswered} questions answered`;

    feedbackEl.textContent = "";
    nextBtn.disabled = true;

    nextBtn.textContent =
        currentIndex === questions.length - 1
            ? "Finish Round →"
            : "Next Question →";

    optionsEl.replaceChildren();

    current.options.forEach((optionText, index) => {
        const button = document.createElement("button");
        button.className = "option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const text = document.createElement("span");
        text.textContent = optionText;

        button.append(letter, text);

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        optionsEl.appendChild(button);
    });
}


// ======================================
// CHECK ANSWER
// ======================================

function selectAnswer(selectedIndex, selectedButton) {
    if (answered || quizFinished) return;

    answered = true;
    totalAnswered++;

    const correctIndex = questions[currentIndex].answer;
    const optionButtons = optionsEl.querySelectorAll(".option");

    optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
        correctCount++;

        feedbackEl.textContent =
            "✓ Correct answer! Excellent work.";

        feedbackEl.style.color = "#159b73";
    } else {
        wrongCount++;

        selectedButton.classList.add("wrong");

        feedbackEl.textContent =
            "✗ Incorrect answer. The correct option is highlighted.";

        feedbackEl.style.color = "#e34e65";
    }

    scoreDisplay.textContent = score;
    totalAnsweredEl.textContent = totalAnswered;

    answeredCountEl.textContent =
        `${totalAnswered} questions answered`;

    nextBtn.disabled = false;
}


// ======================================
// NEXT QUESTION / INFINITE ROUNDS
// ======================================

nextBtn.addEventListener("click", () => {
    if (!answered || quizFinished) return;

    if (currentIndex < questions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        finishQuiz(false);
    }
});


// ======================================
// FINISH ROUND
// ======================================

function finishQuiz(timeUp = false) {
    if (quizFinished) return;

    quizFinished = true;

    clearInterval(timerInterval);

    quizScreen.hidden = true;
    resultScreen.hidden = false;

    const attempted = correctCount + wrongCount;

    const percentage = attempted === 0
        ? 0
        : Math.round((correctCount / attempted) * 100);

    document.getElementById("finalScore").textContent =
        `${correctCount}/${attempted}`;

    document.getElementById("percentage").textContent =
        `${percentage}% Accuracy`;

    document.getElementById("correctCount").textContent =
        correctCount;

    document.getElementById("wrongCount").textContent =
        wrongCount;

    document.getElementById("resultIcon").textContent =
        percentage >= 80 ? "🏆" :
        percentage >= 50 ? "🎯" : "📚";

    document.getElementById("resultTitle").textContent =
        percentage >= 80 ? "Excellent Work!" :
        percentage >= 50 ? "Good Effort!" : "Keep Practicing!";

    document.getElementById("resultMessage").textContent =
        timeUp
            ? "Time is up! Your final result is ready."
            : "Round completed! You can continue with fresh questions.";

    timerEl.textContent = timeUp ? "00:00" : timerEl.textContent;

    document.getElementById("restartBtn").textContent =
        "↻ Start Next Round";
}


// ======================================
// CATEGORY BUTTONS
// ======================================

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        startQuiz(button.dataset.category);
    });
});


// ======================================
// START NEXT ROUND
// ======================================

document.getElementById("restartBtn").addEventListener("click", () => {
    startQuiz(currentCategory, true);
});


// ======================================
// DARK / LIGHT MODE
// ======================================

document.getElementById("themeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    document.getElementById("themeBtn").textContent =
        darkMode ? "☀️" : "🌙";
});


// ======================================
// TIMER
// ======================================

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerEl.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// ======================================
// INITIALIZE APPLICATION
// ======================================

startQuiz("HTML");
