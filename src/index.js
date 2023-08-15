// write your code here

// Deliverable 1: Display images on menu
// Fill top bar for navigation
// fetch from server
fetch("http://localhost:3000/ramens")
.then(r=>r.json())
.then(ramens => {
    console.log(ramens)
    // loop through the ramen array (foreach)
    ramens.forEach((ramenObj) => addToMenu(ramenObj))
    displayRamen(ramens[0])
})

// Create and assign image tag for ramen menu
function addToMenu(ramenObj){
    const menu = document.querySelector("#ramen-menu")
    const img = document.createElement("img")
    // console.log(menu)
    img.src = ramenObj.image
    menu.appendChild(img)
    // event listener (click) on image
    img.addEventListener("click",()=>displayRamen(ramenObj))
}

// Deliverable 2: Display ramen
function displayRamen(ramenObj){
    // query select all necessary info for detail
    const detail_image = document.querySelector(".detail-image")
    const name = document.querySelector(".name")
    const restaurant = document.querySelector(".restaurant")
    const rating_display = document.querySelector("#rating-display")
    const comment_display = document.querySelector("#comment-display")
    
    // fill out the text content
    detail_image.src = ramenObj.image
    name.textContent = ramenObj.name
    restaurant.textContent = ramenObj.restaurant
    rating_display.textContent = ramenObj.rating
    comment_display.textContent = ramenObj.comment
}



// Deliverable 3: Form deliverable (NO POST NEEDED)
// addEventListner (submit)
const form = document.querySelector("#new-ramen")
form.addEventListener("submit", (e)=>ramenFormHandler(e))
function ramenFormHandler(e){
    e.preventDefault()
    // console.log(e.target["name"].value)
    // console.log(document.querySelector("#new-name").value)
    // create new ramen object
    const newRamenObj ={
        "name": e.target["name"].value,
        "restaurant": e.target["restaurant"].value,
        "image": e.target["image"].value,
        "rating": e.target["rating"].value,
        "comment": e.target["new-comment"].value
    }
    // add to menu div
    addToMenu(newRamenObj)
}
