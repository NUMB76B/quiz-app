const questions = [
    questionOne = {
        question : ' 5 + 6',
        optionOne : '10',
        optionTwo : '12',
        optionThree : '11',
        optionFour : '15',
        currectAnswer : '11',
    } ,

    questionTwo = {
        question : ' 10 * 10',
        optionOne : '100',
        optionTwo : '1000',
        optionThree : '10000',
        optionFour : '100000',
        currectAnswer : '100',
    },

    questionThree = {
        question : ' 10 - 6',
        optionOne : '5',
        optionTwo : '3',
        optionThree : '2',
        optionFour : '4',
        currectAnswer : '4',
    },
    questionFour = {
        question : ' 9 + 7',
        optionOne : '16',
        optionTwo : '15',
        optionThree : '17',
        optionFour : '14',
        currectAnswer : '16',
    },
    questionFive = {
        question : ' 4 * 8',
        optionOne : '18',
        optionTwo : '38',
        optionThree : '54',
        optionFour : '34',
        currectAnswer : '38',
    }
]

let currentQuestion = questions[0];
let qu_counter = 0;
let progressPersent = 20;
let counter = 1;
let chosenAnswer = null;
let isChosen = false;

const quiz = document.getElementById('quiz-app');
const score = document.querySelector('.score-container');
const answerStorage = [];
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');

const answerOne = document.querySelector('.answer-one');
const answerTwo = document.querySelector('.answer-two');
const answerThree = document.querySelector('.answer-three');
const answerFour = document.querySelector('.answer-four');

const currect_Answer = document.querySelector('.currect-answer');
const false_Answer = document.querySelector('.false-answer');


const nextBtn = document.querySelector('.next-btn');
const finishBtn = document.querySelector('.finish-btn');


const progress = document.querySelector('.progress');
const counterQuestion = document.querySelector('.current-qu')


function questionGenerator(){
    question.innerText = currentQuestion.question;
    
    answerOne.innerText = currentQuestion.optionOne;
    answerTwo.innerText = currentQuestion.optionTwo;
    answerThree.innerText = currentQuestion.optionThree;
    answerFour.innerText = currentQuestion.optionFour;

    progress.style.width = progressPersent + '%';
    
    currentQuestion = counter;

    if(qu_counter === 4){
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block'
    }

    

}

answers.forEach(answer =>{
    answer.addEventListener('click', (e)=>{
        
        if(!isChosen){
            isChosen = true;
            answerSelected = true;
            chosenAnswer = answer;
            chosenAnswer.classList.remove('answer');
            chosenAnswer.classList.add('active-style');
            
        }else{
            chosenAnswer.classList.remove('active-style');
            chosenAnswer.classList.add('answer');
            chosenAnswer = null;
            chosenAnswer = answer;
            chosenAnswer.classList.remove('answer');
            chosenAnswer.classList.add('active-style');
            
            
            
        }
       
    })
})

nextBtn.addEventListener('click' , ()=>{
        if(!isChosen) return;

        if(isChosen){
            qu_counter++;
            progressPersent += 20;
            counter++;
            counterQuestion.innerText = counter;
            progress.style.width = progressPersent + '%';
            currentQuestion = questions[qu_counter];

           
            isChosen = false;
            answerStorage.push(chosenAnswer.innerText);
            chosenAnswer.classList.remove('active-style');
            chosenAnswer.classList.add('answer');
            chosenAnswer = null;
           


        };

                 

    
        questionGenerator();
})

finishBtn.addEventListener('click',() =>{
    if(!isChosen) return ;

    if(isChosen){
        let currectCounter = 0;
        answerStorage.push(chosenAnswer.innerText);
        quiz.style.display = 'none';

        
       
        if(answerStorage[0] === questions[0].currectAnswer) currectCounter++
        if(answerStorage[1] === questions[1].currectAnswer) currectCounter++
        if(answerStorage[2] === questions[2].currectAnswer) currectCounter++
        if(answerStorage[3] === questions[3].currectAnswer) currectCounter++
        if(answerStorage[4] === questions[4].currectAnswer) currectCounter++

        currect_Answer.innerText = currectCounter;
        false_Answer.innerText = questions.length - currectCounter;
        score.style.display = 'inline-block';


        console.log(currectCounter)


       
    }
})
questionGenerator();

