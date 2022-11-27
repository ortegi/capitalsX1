

const postList = document.querySelector('.posts')



export const setUpPosts = (data) => {
    if (data.length){
        let html =''
        let list = [];
        data.forEach(doc => {
            let post = doc.data()
            list.push(post);
           
       })
       
       list.sort((a, b) => b.score - a.score)
        
        if(data.length >= 10){
        for (let i = 0; i < 10; i++){
            const li = `
            <li class='list-group-item list-group-item-action'>
           <p> <span class = 'ranking'> ${i+1} </span> ${list[i].name}  ${list[i].score}  <i class="fa-solid fa-trophy"></i>  </p>
            </li>
            `
            html += li
            
           }
       } else {
            for (let i = 0; i < data.length; i++){
                const li = `
                <li class='list-group-item list-group-item-action'>
            <p> <span class = 'ranking'> ${i+1} </span> ${list[i].name}  ${list[i].score} <i class="fa-solid fa-trophy"> </i>   </p>
                </li>
                `
                html += li
                
            }

            /*list.forEach(item => {
                const li = `
                <li class='list-group-item list-group-item-action'>
               <p> <i class="fa-solid fa-trophy"></i> ${item.score} ${item.name}</p>
                </li>
                `
               
                html += li
                

            })*/


       }

  
       postList.innerHTML = html;

      console.log(list)

    } else {
        postList.innerHTML= `
        <h1> Not scores yet </h1>
         `
    }

    setTimeout(trophiesColor, 500)
    
}

export function trophiesColor(){

    let trophies = document.querySelectorAll('.fa-trophy');
   

    if (trophies.length){
        if(trophies.length === 1){
            trophies[0].style.color = '#fdc500'
        }else if(trophies.length === 2){
            trophies[0].style.color = '#fdc500'
            trophies[1].style.color =  '#adb5bd'
        }else if(trophies.length >= 3){
            trophies[0].style.color = 'yellow'
            trophies[1].style.color =  '#adb5bd'
            trophies[2].style.color = '#daa520'
        }

    }
    

   

}