var questions = [
{
    num: 1,
    question: "JavaScript is ?",
    answer :    "4.	one of the most popular programming languages in the world",
    options: [
        "1.	oracle",
        "2.	a web browser",
        "3.	python language",
        "4.	one of the most popular programming languages in the world",
    ]
},
{
    num: 2,
    question: "The console is part of the web browser and allows you ?",
    answer :    "1.	to log messages",
    options: [
        "1.	to log messages",
        "2.	write code",
        "3.	perform function",
        "4.	concatenate",
    ]
},
{
    num: 3,
    question: "Which function is used to generate output to the console?",
    answer :    "3.	Console.log()",
    options: [
        "1.	Print()",
        "2.	Write()",
        "3.	Console.log()",
        "4.	Function()",
    ]
},
{
    num: 4,
    question: "Which HTML tag is used for JavaScript code?",
    answer :    "2.	<script>",
    options: [
        "1.	<p>",
        "2.	<script>",
        "3.	<tag>",
        "4.	<h>",
    ]
},
{
    num: 5,
    question: "Which one is an assignment operator?;",
    answer :    "2.	=",
    options: [
        "1.	**",
        "2.	=",
        "3.	+",
        "4.	()",
    ]
},
{
    num: 6,
    question: "What is the output of “console.log(5+4);",
    answer :    "3.	9",
    options: [
        "1.	1",
        "2.	54",
        "3.	9",
        "4.	20",
    ]
},

]

var score = 0;

for (var i = 0; i < questions.length; i++){
    var userAnswer = (questions[i].question + "\n" + questions[i].options.join("\n"));

    if (userAnswer === questions[i].answer) {
        score++;
    }
}


