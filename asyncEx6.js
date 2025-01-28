
async function getAlbum(){
    let url='https://jsonplaceholder.typicode.com/albums'
    let result=await fetch(url)
    let data=await result.json()
    
    let users='https://jsonplaceholder.typicode.com/users'
    let result1=await fetch(users)
    let data1=await result1.json()


    data.forEach(album=>{
        let li=document.createElement("li")
        li.textContent=album.title
        li.id=album.id
        let button=document.createElement('input')
        button.type='button'
        button.value='show details'
        button.addEventListener('click',()=>showDet(album.id))
        let div=document.createElement('div')
        div.id=`div${album.id}`
        let p=document.createElement("p")
        let user = data1.find(user => user.id === album.userId);
        p.textContent=user.name
        document.getElementById("album").append(li,p,button,div)
    })
  
}
async function showDet(id){
    let url='https://jsonplaceholder.typicode.com/photos?albumId='
    url+=id
    let result=await fetch(url)
    let data=await result.json()
    console.log(data)
    data.forEach(photo=>{
        let li=document.createElement("li")
        li.textContent=photo.title
        li.style.color='red'
        document.getElementById(`div${id}`).append(li)
    })

}

/*
useEffect(()=>{
    getAlbum()
},[])*/
document.addEventListener('DOMContentLoaded', getAlbum);
