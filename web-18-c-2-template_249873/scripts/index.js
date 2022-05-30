// Add the coffee to local storage with key "coffee"
async function getCoffee(){
    let api =`https://masai-mock-api.herokuapp.com/coffee/menu`;

    let res =await fetch(api);
     
    let data = await res.json()
    console.log(data)
    append(data.menu.data)
}
getCoffee()
function append(data){
    let container =document.getElementById("menu")
 
    data.forEach(function(ele){
        let div =document.createElement("div")

        let image =document.createElement("img")
        image.src=ele.image
    
        let title=document.createElement("h3")
        title.innerText=ele.title
    
        let price=document.createElement("h4")
        title.innerText=ele.price
    
        let btn=document.createElement("button")
        title.innerText="Add to Bucket"
        btn.addEventListener("click",function(){
            addtobucket(ele)
        })
    
       container.append(div)
       div.append(image,title,price,btn)

    })
    let addbucket=JSON.parse(localStorage.getItem("addbucket"))||[]
    function addtobucket(ele){
        addbucket.push(ele)
        localStorage.setItem("coffee",JSON.stringify(addbucket))
    }


    
}
