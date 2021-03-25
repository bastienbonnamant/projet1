/* ---------------------------------------- Nav Quotes ---------------------------------------- */
let quoteHtml = document.querySelector('.quote');

let quotes = [
    '"On greffe de tout aujourd\'hui : des reins, des bras, un coeur, sauf des couilles, par manque de donneurs."',
    '"Ma femme est un homme politique."',
    '"Le courage, c\'est de ne pas avoir peur"',
    '"J\'apprécie plus le pain, le pâté, le saucisson, que les limitations de vitesse."',
    '"Le monde politique est une jungle."',
    '"Que voulez-vous, je suis Français, et j\'adore aller expliquer aux autres ce que je suis infoutu de faire chez moi."',
    '"Bien sûr que je suis de gauche ! Je mange de la choucroute et je bois de la bière."',
    '"Il ne faut pas blesser une bête : on la caresse ou on la tue."',
    '"Aujourd\'hui on rapporte une histoire abracadabrantesque"',
    '"La pomme est un fruit sympathique et je l\'observe tous les jours"',
    '"On gagne toujours quand on parie sur l\'homme."',
    '"Il y a plus d\'idées dans deux têtes que dans une."',
    '"Il est des moments, rares, où l\'Histoire est dans la main de quelques hommes."',
    '"Le désarmement suppose une transparence. Et les dictatures ne résistent pas longtemps à la transparence."'
]


function indexQuotes(){
   return Math.round(Math.random()*(12 - 0 + 1))+ 0; 
} 
quoteHtml.innerHTML = `${quotes[indexQuotes()]}`;
function displayQuote(){
    setTimeout(() => {
      quoteHtml.innerHTML = `${quotes[indexQuotes()]}`;
      setTimeout(()=>{
          quoteHtml.classList.add('in');
      },1000) ; 
    }, 1000); 
}

displayQuote();
setInterval(() => {    
    quoteHtml.classList.remove('in');
    displayQuote();
}, 10000);
