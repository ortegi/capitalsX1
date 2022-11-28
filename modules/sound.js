
//this files contains the sounds of the game.


function winSound(){
    let x = document.getElementById('audioWin')
    x.play()
}

function loseSound(){
    let x = document.getElementById('audioLose')
    x.play()
}

function startGame(){
    let x = document.getElementById('audioStartGame');
    x.play()
}

function gameOVer(){
    let x = document.getElementById('audioGameOver');
    x.play()
}

function gameWonSound(){
    let x= document.getElementById('audioGameOverWin')
    x.play()
}

export {winSound, loseSound, startGame, gameOVer, gameWonSound}