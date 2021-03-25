/* --------------------  QUIZ QUOTES --------------------*/
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
    [
        new Question('"Ma femme est un homme politique."',
                    ["Jacques Chirac", "Bertrand Delanoë"],
                    "Jacques Chirac"
                    ),
        new Question('"Le courage, c\'est de ne pas avoir peur"',
                    ["Sébastien Chabal", "Jacques Chirac"],
                    "Jacques Chirac"
                    ),
        new Question('"Pourquois essayer de faire semblant de travailler? C\'est de la fatigue inutile !"',
                    ["Jacques Chirac", "Pierre Dac"],
                    "Pierre Dac"
                    ),
        new Question('"Bien sûr que je suis de gauche ! Je mange de la choucroute et je bois de la bière."',
                    ["Jacques Chirac", "Jean-Luc Mélenchon"],
                    "Jacques Chirac"
                    ),
        new Question('"On dit que le ridicule tue.Pas du tout! Regardez autour de vous, il n\'y a que des gens bien portants"',
                    ["Raymond Devos", "Jacques Chirac"],
                    "Raymond Devos"
                    )
    ],
    [
        new Question('"Sur la route, il y avait déjà des bandes réfléchissantes, maintenant il y roule des voitures intelligentes."',
                    ["Jacques Chirac", "Marc Escaryol"],
                    "Marc Escaryol"
                    ),
        new Question('"Il a un côté sympathique, seulement on le voit toujours de face."',
                    ["Jacques Chirac", "Francis Blanche"],
                    "Francis Blanche"
                    ),
        new Question('"On ne peut pas mettre tout le monde à la porte sous peine de se retrouver seul."',
                    ["Jacques Chirac", "Coluche"],
                    "Jacques Chirac"
                    ),
        new Question('"Il n\'y a pas de différends entre le ministre des Finances et moi, je décide, et il exécute."',
                    ["Dominique Strauss Kahn", "Jacques Chirac"],
                    "Jacques Chirac"
                    ),
        new Question('"On fait les cadeaux avant les élections et on décide les impôts tout de suite après."',
                    ["Jacques Chirac", "Nicolas Sarkozy"],
                    "Jacques Chirac")
    ],
    [
        new Question('"Il y a tellement de jeunnes qui sont vieux que ce n\'est pas la peine de rajouter des vieux qui veulent jouer les jeunes"',
                    ["Jacques Chirac", "Laurent Baffie"],
                    "Jacques Chirac"
                    ),
        new Question('"C\'est pas dur la politique comme métier ! Vous faites 5 ans de droit, et tout le reste c\'est de travers"',
                    ["Jacques Chirac", "Coluche"],
                    "Coluche"
                    ),
        new Question('"Les conneries c\'est comme les impôts, on finit toujours par les payer"',
                    ["Michel Audiard", "Jacques Chirac"],
                    "Michel Audiard"
                    ),
        new Question('"On greffe de tout aujourd\'hui : des reins, des bras, un coeur, sauf des couilles, par manque de donneurs"',
                    ["Jean Marie Bigard", "Jacques Chirac"],
                    "Jacques Chirac"
                    ),
        new Question('"Notre Maison brûle et nous regardons ailleurs"',
                    ["Jacques Chirac", "Directeur d'OVH"],
                    "Jacques Chirac"
                    ),
    ],
    [
        new Question('"A la télé ils disent tous les jours qu\'il y a 3 millions de personnes qui veulent un travail. \'est pas vrais, l\'argent leur suffirait"',
                    ["Jacques Chirac", "Coluche"],
                    "Coluche"
                    ),
        new Question('"J\'apprécie plus le pain, le pâté, le saucisson, que les limitation de vitesse"',
                    ["Patrick Sebastien", "Jacques Chirac"],
                    "Jacques Chirac"
                    ),
        new Question('"Le contact humain est le véhicule essentiel de la démocratie"',
                    ["Jacques Chirac", "Charles de Gaulle"],
                    "Jacques Chirac"
                    ),
        new Question('"Je me suis rendu compte que j\'avais pris de l\'âge le jour où j\'ai constaté que je passais plus de temps à bavarder avec les pharmaciens qu\'avec les patrons de bistrot."',
                    ["Michel Audiard", "Jacques Chirac"],
                    "Michel Audiard"
                    ),
        new Question('"C\'est drôle comme les gens instruits éprouvent le besoin de faire chier le monde."',
                    ["Jacques Chirac", "Boris Vian"],
                    "Boris Vian"
                    )
    ]
];

class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.errors = []
    }
    getCurrentQuestion(){
        return this.questions[this.currentQuestionIndex];
    }
    guess(answer){
        if(this.getCurrentQuestion().isCorrectAnswer(answer)){
            this.score ++;
        }else{
            this.errors.push(this.getCurrentQuestion());
           // console.log(this.errors)
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
            <ul id="errors">
               
            </ul>
        `
        this.elementShown("quizz", endQuizHTML);
        let displayErrors = ()=>{
            quiz.errors.forEach(error=>{
                let err = document.createElement('li');
                err.innerHTML = `${error.text} <span class="false">  ${error.answer}</span>`;
                document.getElementById('errors').appendChild(err);
            }) 
        }
        displayErrors();
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
            }
        }
        choices.forEach((choice, i) => {
            this.elementShown(`choice${i}`, choice);
            guessHandler(`guess${i}`, choice);
        });    
    },
    progress : function(){
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown('progress', `Question ${currentQuestionNumber} sur ${quiz.questions.length}`);
    }
}

//logic
quizApp = () => {
    if(quiz.hasEnded()){
        display.endQuiz();
    }else{ 
        display.question();
        display.choices()
        display.progress()
    }
}



// QUIZZ
let randomArray = Math.round(Math.random()*(2 - 0 + 1))+ 0;
let quiz = new Quiz(questions[randomArray]);
quizApp();


