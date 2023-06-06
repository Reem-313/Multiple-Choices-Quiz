 var numQuestions=0;
var questions = [];

function newQuestion(){
    var newQuizForm = document.getElementById("newQuiz");
    // create a span element
    var q = document.createElement("div");
    // fill in the content based on the question text input
    q.innerHTML= document.getElementById("questionText").value;
    // Add it to the body of the page
    newQuizForm.appendChild(q);
    //increse the the number of the question counter
    numQuestions ++;
    //store the question information
    questions[numQuestions]={questionText:document.getElementById("questionText").value, answers:[]};
}

function newOption(){
    var newQuizForm = document.getElementById("newQuiz");
  // Create a span element
  var q = document.createElement("input");
  q.type = "radio";
  q.name = "q" + numQuestions;
  // fill in the content based on the question text input
  if (document.getElementById("isAnswer").checked){
      q.value="yes"
    }
  else{
      q.value="no"
  }

  //add it to the body of the page
  newQuizForm.appendChild(q);
  var label=document.createElement("label");
  label.innerHTML=document.getElementById("optionText").value;
  // add it to the body of the page
  newQuizForm.appendChild(label);
  newQuizForm.appendChild(document.createElement("br"));
  //store answer information
  questions[numQuestions].answers.push(document.getElementById("optionText").value);

}

function checkAnswer(){
    var newQuizForm = document.getElementById("newQuiz").elements;
  var score = 0;
  for (i = 1; i <= numQuestions; i++) {
    if (newQuizForm["q" + i].value == "yes") {
      score++;
      // alert("You got question " + i + " correct!");
    }
  }
  alert("You got " + score + " questions right");
}