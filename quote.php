<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="/css//index.css" rel="stylesheet">
    <link href="/css/quote.css" rel="stylesheet"> 
    <link href="/css/nav.css" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Mrs+Saint+Delafield&family=Nothing+You+Could+Do&family=Parisienne&family=Petit+Formal+Script&family=Reenie+Beanie&display=swap" rel="stylesheet">    <link href="https://fonts.googleapis.com/css2?family=Arapey&family=Brygada+1918:wght@400;700&family=DM+Serif+Text&family=Domine:wght@400;700&family=Faustina:wght@400;700&family=Libre+Baskerville:wght@400;700&family=Roboto+Slab:wght@400;800;900&display=swap" rel="stylesheet">    <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Abel&family=Economica:ital,wght@0,400;0,700;1,400&family=Open+Sans+Condensed:wght@300;700&family=Quicksand:wght@300;400;700&family=Rajdhani:wght@400;700&family=Raleway:wght@200;400;800&family=Saira+Condensed:wght@200;400;700;900&display=swap" rel="stylesheet">    <link href="https://fonts.googleapis.com/css2?family=Arapey&family=Blinker:wght@200;400;700;900&family=Brygada+1918:wght@700&family=DM+Serif+Text&family=Domine:wght@700&family=Faustina:wght@600;700&family=Libre+Baskerville:wght@400;700&family=Roboto+Slab:wght@200;400;500;900&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Répliques</title>
</head>
<body>
<div class="windows">
    <?php include "menu.php" ?>
        <section class="container citation">
               
            <div id="quizz">
                <h1 class="title"><div class="titleText"><span class="titleLetter">R</span>épliques <span class="titleLetter">C</span>ultes</div></h1>
                <h2 id="question" class="question"></h2>

                <h3 id="score"></h3>

                <div class="choices">
                
                    <button id="guess0" class="btn">
                        <span class="line"></span>
                        <p id="choice0"></p>
                    </button>
                    
                    <button id="guess1" class="btn">
                        <span class="line"></span>
                        <p id="choice1"></p>
                    </button>

                </div>
               
            </div>
            
                <p id="progress"></p>
              
         
            
            <img class="asideImg" src="/img/chirac1.png" alt="Chirac pensse"/>
            
        </section>
</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
    <script src="/script/anim.js"></script>
    <script src="/script/script.js"></script>
    <script src="/script/nav.js"></script>
</body>
</html>