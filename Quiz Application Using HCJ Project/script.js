// Questions that will be asked
const Questions = [
//     {
//     q: "File ",
//     a: [
//     { text: "", isCorrect: false },
//     { text: "", isCorrect: false },
//     { text: "", isCorrect: true },
//     { text: "", isCorrect: false }
//     ]
// },
    {
    q: "File specification books are created primarily for the use of ...",
	a: [
    { text: "Operators", isCorrect: false },
	{ text: "Systems analysts", isCorrect: false },
	{ text: "Programmers", isCorrect: true },
	{ text: " Managers", isCorrect: false }
	]

},
{
	q: "A terminal having local processing capability is...",
	a: [{ text: "Optical terminal", isCorrect: false },
	{ text: " AI", isCorrect: false },
	{ text: " KIPS", isCorrect: false },
	{ text: " Intelligent terminal", isCorrect: true }
	]

},
{
	q: "Which parts of the computer were is used for calculating and comparing ?",
	a: [{ text: "Control unit", isCorrect: false },
	{ text: "Disk unit", isCorrect: false },
	{ text: " ALU", isCorrect: true },
	{ text: "Control unit", isCorrect: false }
	]

},
{
    q: "Program execution time would be minimum if the programs are written in",
    a: [
    { text: "Assembly language", isCorrect: false },
    { text: " High level language", isCorrect: false },
    { text: " Machine language", isCorrect: true },
    { text: " None of the above", isCorrect: false }
    ]

},
{
    q: "A program used to detect overall system malfunction is ",
    a: [
    { text: "System analysis", isCorrect: false },
    { text: "Utilities", isCorrect: false },
    { text: " System diagnostics", isCorrect: true },
    { text: "System software", isCorrect: false }
    ]

},

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
