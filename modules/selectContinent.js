
function selectContinent() {
    document.getElementById('selectContinent').style.display = 'block';
    document.getElementById('mainContainer').style.display = 'none'
   
}


function selectContinentOff(){ //turn the 5 continent btns of the continents
    document.getElementById('selectContinent').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'block'
    
}


export {selectContinent, selectContinentOff, }