// write your code here
// all ramen in ramen-menu on load. Get all ramen from server use
let RamenMenu = document.querySelector("#ramen-menu")
console.log(RamenMenu)

fetch("http://localhost:3000/ramens")
.then(r => r.json())
.then(ramens => {
    console.log(ramens)
    MenuBar(ramens)
    ShowDetail(ramens[0])
    AddRamen()
})

function MenuBar(ramens){
    ramens.forEach(ramen => {
        let img = document.createElement("img")
        console.log(ramen.image)
        img.src = ramen.image
        img.addEventListener("click", () => {
            ShowDetail(ramen)
        })
        RamenMenu.appendChild(img)
    })
}

function ShowDetail(ramen){
    let detail = document.querySelector("#ramen-detail")
    let detailname = detail.querySelector(".name")
    let detailimg = detail.querySelector(".detail-image")
    let detailrest = detail.querySelector(".restaurant")
    let rating = document.querySelector("#rating-display")
    let comment = document.querySelector("#comment-display")
    // console.log(comment)
    detailname.textContent = ramen.name
    detailimg.src = ramen.image
    detailrest.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    comment.textContent = ramen.comment
}

function AddRamen(){
    let ramenform = document.querySelector("#new-ramen")
    ramenform.addEventListener("submit", (e)=>{
        e.preventDefault()
        //console.log(e.target["new-name"].value)
        let ramen = {
            name: e.target["new-name"].value,
            image: e.target["new-image"].value,
            rating: e.target["new-rating"].value,
            restaurant: e.target["new-restaurant"].value,
            comment: e.target["new-comment"].value
        }
        console.log(ramen)
        let img = document.createElement("img")
        console.log(ramen.image)
        img.src = ramen.imagegit
        img.addEventListener("click", () => {
            ShowDetail(ramen)
        })
        RamenMenu.appendChild(img)
        ramenform.reset()
    })
}
//click on an image and render details