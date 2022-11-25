


function heartOn(){
    document.getElementById('heart').style.display = 'block'     //sets the heart of the score ON
    document.getElementById('lives').style.display = 'block'
    
}

function heartOff(){
    document.getElementById('heart').style.display = 'none'   //sets the heart of the score OFF
    document.getElementById('lives').style.display = 'none';
}


function reset(){   //it reset the buttons appeareance so the became white and abled again
    let x = document.getElementsByClassName('btn-asw')
    for (let i =0; i < 3; i++){
        x[i].disabled = false;
        x[i].style.backgroundColor = '#f8f9fa'
    }

}

function playAgainbtnOn(){   //sets the play again bttn 
    let btn = document.getElementById('btn4')
    btn.style.display = 'block';
}

function playAgainbtnOff(){ //turns the play again btn OFF
    let btn = document.getElementById('btn4')
    btn.style.display = 'none';
}

function WonGameTextOff(){  //turn the winning text of
    document.getElementById('info').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.getElementById('infoCol').style.display = 'none'
}

export {heartOn, heartOff, reset, playAgainbtnOn, playAgainbtnOff, WonGameTextOff}