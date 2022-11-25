
function selectContinent() {
    document.getElementById('selectContinent').style.display = 'block';
    document.getElementById('mainContainer').style.display = 'none'
    document.getElementById('containerPost').style.display = 'none';
}


function selectContinentOff(){ //turn the 5 continent btns of the continents
    document.getElementById('selectContinent').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'block'
    document.getElementById('containerPost').style.display = 'none';
}


//let playButton = document.getElementById('firstBtn')

//playButton.addEventListener('click', selectContinent)


//let playAgainBtn = document.getElementById('btn4')
//playAgainBtn.addEventListener('click', selectContinent)

export {selectContinent, selectContinentOff, }