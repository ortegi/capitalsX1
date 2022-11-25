

const postList = document.querySelector('.posts')



export const setUpPosts = (data) => {
    if (data.length){
        let html =''

        data.forEach(doc => {
            const post = doc.data()
            console.log(post)
            const li = `
            <li class='list-group-item list-group-item-action'>
            <p>${post.name } ${post.continent} ${post.score}</p>
            </li>
            `
            html += li
            
        })

        postList.innerHTML = html;
    } else {
        postList.innerHTMLn= `
        <h1> Not scores yet </h1>
         `
    }
}