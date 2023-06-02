//CCS0043L APPDEV Midterms
/*
	Program: 	Computation of Grades using Function
	Programmer: Justine Romero 
	Section: 	BSCS-AN22  
*/

console.log('hello world');
//var prompt = require('prompt-sync')();

/*promptsync used for testing in gitbash
use command [npm install prompt-sync] in bash when implementing promptsync
*/



//declaring global vars
let studentName;
let studentNum;
let participation;
let summative;
let finalEx;




function getDetails(){
	let studentName = prompt("Enter Student Name: ")
	let studentNum = prompt("Enter Student Number: ")
	getGrade(studentName, studentNum)
}

function getGrade(studentName, studentNum){
var finalParti = 0; var finalSumma = 0;


for (var i = 1; i <= 5; i++){
	var participation = parseFloat(prompt(`Enter Student Participation Grade ${i}`));
	finalParti += participation;
}
participationAvg = finalParti / 5;

for (var j = 1; j <= 3; j++){
	var summative = parseFloat(prompt(`Enter Student Summative Grade ${j}`));
	finalSumma += summative;
}
summativeAvg = finalSumma / 3;

finalExam = parseFloat(prompt("Enter Final Exam Grade: "));


let grade = (participationAvg * 0.3) + (summativeAvg * 0.3) + (finalExam * 0.4);

	switch(true){
	case (grade < 60):
		letterGrade = "F";
		break;
	case (grade >= 60 && grade <= 69):
		letterGrade = "D";
		break;
	case (grade >= 70 && grade <= 79):
		letterGrade = "C";		break;
	case (grade >= 80 && grade <= 89):
		letterGrade = "B";
		break;
	case (grade >= 90 && grade <= 100):
		letterGrade = "A";
		break;
	}

console.log(`Name: ${studentName} | Student Number: ${studentNum} | Participation Grade: ${participationAvg} | Summative Grade: ${summativeAvg} Finals: ${finalExam} | Final Grade: ${grade} | Letter Grade: ${letterGrade}|`)
}

//loop call for 5 students(change for amount of details)
for (var k = 1; k < 6; k++){
	getDetails()
}
