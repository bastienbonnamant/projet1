class Question {
    constructor(text, choices, answer){
        this.text = text,
        this.choices = choices,
        this.answer = answer
    }
    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}

let questions = [
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertand Delenoeud"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Jacques Chirac", "Bertrand Delanoë"],
                "Jacques Chirac"
                ),
    new Question("Ma femme est un homme politique.",
                ["Zobie", "zoba"],
                "Zobie"
                ),
];

class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }
    getCurrentQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer){
        if(this.getCurrentQuestion().isCorrectAnswer(answer)){
            this.score ++;
        }
        this.currentQuestionIndex++;
    }
    hasEnded(){
       return this.currentQuestionIndex >= this.questions.length;
    }
}

//Dysplay functions

const display = {
    elementShown : function(id, text){        
        let element = document.getElementById(id);
        element.innerHTML = text;
    },
    endQuiz: function(){
        let endQuizHTML = `
            <h1>Fin de Citations !</h1>
            <h3>
                Votre score est de : ${quiz.score} / ${quiz.questions.length}
            </h3>
        `
        this.elementShown("quizz", endQuizHTML);
    },
    question: function(){     
        this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function(){
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler = (id, guess)=>{
            
            document.getElementById(id).onclick = function(){
                quiz.guess(guess);       
                quizApp();
                console.log(quiz.currentQuestionIndex, questions.length, quiz.score)
            }
        }
        choices.forEach((choice, i) => {
            this.elementShown(`choice${i}`, choice);
            guessHandler(`guess${i}`, choice);
        });
        
    }
}

//logic
quizApp = () => {
    if(quiz.hasEnded()){
        display.endQuiz();
    }else{
        //question
        display.question();
        //choice
        display.choices()
        //progress
    }
}



// QUIZZ

let quiz = new Quiz(questions);
quizApp();
