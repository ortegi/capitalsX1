

const postList = document.querySelector('.posts')



export const setUpPosts = (data, userName) => {
    if (data.length){
        let html =''
        let list = []
        data.forEach(doc => {
            let post = doc.data()
            list.push(post)

          
           
       })

       list.sort((a, b) => b.score - a.score)
        
       for (let i = 0; i < 10; i++){
        const li = `
        <li class='list-group-item list-group-item-action'>
       <p> ${list[i].name} ${list[i].continent} ${list[i].score}</p>
        </li>
        `
        html += li
       }
       postList.innerHTML = html;



    } else {
        postList.innerHTMLn= `
        <h1> Not scores yet </h1>
         `
    }
}