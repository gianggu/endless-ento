window.onload = function() {
    setGame();
    const background =document.getElementById('game_screen');

}

function setGame () {
    score = 0;
    gameOver = false;
    cricket = document.getElementById('cricket');
    bomb = document.getElementById('bomb');
    cricket.onclick = captureItem;
    bomb.onclick = captureItem;
    document.getElementById('score').innerTEXT = score.toString();
    moveItem();
    // setTimeout(endGame, 20000);
}




function captureItem () {
    if (this == cricket) {
        score += 10;
        document.getElementById('score').innerTEXT = "yum!", score.toString();
    }
    if(this == bomb) {
        score-=10;
        document.getElementById('score').innerTEXT = "ouch!", score.toString();
    }
    if (gameOver) {
        return;
    }
}