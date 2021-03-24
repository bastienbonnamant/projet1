<!DOCTYPE html>
<html lang="fr">
<head>
    <link href="/css//index.css" rel="stylesheet">
    <link href="/css/quote.css" rel="stylesheet"> 
    <link href="/css/nav.css" rel="stylesheet">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Répliques</title>
</head>
<body>
<?php include "menu.php" ?>
    <div class="container">
    
        <div id="quizz">
            <h1><span class="titleLetter">Q</span>UIZZ</h1>
            
            <h2 id="question"></h2>

            <h3 id="score"></h3>

            <div class="choices">
            
                <button id="guess0" class="btn">
                    <p id="choice0"></p>
                </button>
                
                <button id="guess1" class="btn">
                    <p id="choice1"></p>
                </button>

            </div>
        </div>

        <p id="progress"></p>

    </div>
<script src="/script/script.js"></script>
</body>
</html>