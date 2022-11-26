

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
           <p> <i class="fa-solid fa-trophy"></i>${list[i].score} ${list[i].name} en <i class="fa-solid fa-earth-americas"></i> ${list[i].continent} </p>
            </li>
            `
            html += li
           }
       } else {
        
            list.forEach(item => {
                const li = `
                <li class='list-group-item list-group-item-action'>
               <p> <i class="fa-solid fa-trophy"></i> ${item.score} ${item.name} en <i class="fa-solid fa-earth-americas"></i> ${item.continent}</p>
                </li>
                `
                html += li
                

            })


       }
      
       postList.innerHTML = html;

      console.log(list)

    } else {
        postList.innerHTML= `
        <h1> Not scores yet </h1>
         `
    }
}

