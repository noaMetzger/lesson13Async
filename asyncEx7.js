async function getPosts(){
    let url='https://jsonplaceholder.typicode.com/posts'
    let result=await fetch(url)
    let posts=await result.json()
    


    posts.map(post=>{
        let li=document.createElement("li")
        li.textContent=post.title
        li.id=post.id
        let button=document.createElement('input')
        button.type='button'
        button.value='show comments'
        button.addEventListener('click',()=>showCom(post.id))
        let div=document.createElement('div')
        div.id=`div${post.id+100}`
        document.getElementById("album").append(li,button,div)
    })
}


async function showCom(id){
    //דרך 1
    // let url1='https://jsonplaceholder.typicode.com/comments'
    // let result1=await fetch(url1)
    // let comments=await result1.json()
    // let thisComment=comments.filter(com=>com.postId===id)


    //דרך2
    let url1='https://jsonplaceholder.typicode.com/comments?postId='+id
    let result1=await fetch(url1)
    let thisComment=await result1.json()


    thisComment.map(comment=>{
        let li=document.createElement("li")
        li.textContent=comment.body
        li.style.color='green'
        document.getElementById(`div${id+100}`).append(li)
    })

}
document.addEventListener('DOMContentLoaded', getPosts);
