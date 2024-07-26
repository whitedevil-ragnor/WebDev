const questions= [
    {
        question:"Who is the father of C language?",
        answers: [
            {text: "Steve Jobs",correct:false},
            {text: "James Gosling",correct:false},
            {text: "Dennis Ritchie",correct:true},
            {text: "Rasmus Lerdorf",correct:false},
        ]
    },
    {
        question:"Which of the following is not a valid C variable name?",
        answers: [
            {text: "int number;",correct:false},
            {text: "float rate;",correct:false},
            {text: "int variable_count;",correct:false},
            {text: "int $main;",correct:true},
        ]
    },
    {
        question:"All keywords in C are in ____________",
        answers: [
            {text: "LowerCase letters",correct:false},
            {text: "UpperCase letters",correct:false},
            {text: "CamelCase letters",correct:false},
            {text: "None of the mentioned",correct:true},
        ]
    },
    {
        question:"Which is valid C expression?",
        answers: [
            {text: "int my_num = 100,000;",correct:false},
            {text: "int my_num = 100000;",correct:true},
            {text: "int my num = 1000;",correct:false},
            {text: "int $my_num = 10000;",correct:false},
        ]
    },
    {
        question:"Which of the following cannot be a variable name in C?",
        answers: [
            {text: "volatile",correct:false},
            {text: " true",correct:true},
            {text: "friend",correct:false},
            {text: "export",correct:false},
        ]
    }
];
const questionElement=document.getElementById("questions");
const optionElement=document.getElementById("ans-btns");
const nextButton=document.getElementById("next-btn");

let currentQnIndex=0;
let score=0;

function startQuiz(){
    currentQnIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQestion();
}
function showQestion(){
    resetState();
    let currentQn=questions[currentQnIndex];
    let questionNo=currentQnIndex+1;
    // to show qn from questions list

    questionElement.innerHTML=questionNo+". "+currentQn.question;

    //to show ans

    currentQn.answers.forEach(answers =>{
        const button =document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        optionElement.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
            
        }
        button.addEventListener("click",selectAnswer);
    })

}
function resetState(){
    nextButton.style.display="none";
    while(optionElement.firstChild){
        optionElement.removeChild(optionElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(optionElement.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Try Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQnIndex++;
    if(currentQnIndex<questions.length){
        showQestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQnIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
