// write your code here
// Problem 1
// fetch all ramen 
const delButton = document.createElement("button")
delButton.textContent = "DELETE"
delButton.id = "delete-button"
const rating = document.querySelector("#rating-display")
const comment_display = document.querySelector("#comment-display")
let globalRamenImg
let globalFirstRamenId
delButton.addEventListener("click",()=>{
    globalRamenImg.remove()
    const empty_ramen = {
        name: "",
        restaurant: "",
        image: "./assets/image-placeholder.jpg",
        rating: "",
        comment: ""
    }
    displayRamen(empty_ramen)
})

document.querySelector("#ramen-detail").append(delButton)
fetch('http://localhost:3000/ramens')
.then(r=>r.json())
.then(ramens => {
    console.log(ramens)
    globalFirstRamenId = ramens[0].id
    // using the ramen we fetch, create images for them.
    displayRamen(ramens[0])
    ramens.forEach(ramen => {
        addToNav(ramen)
    });
})

// select ramen menu, add images to it 
function addToNav(ramen){
    const menu = document.querySelector("#ramen-menu")
    const img = document.createElement("img")
    img.src = ramen.image
    menu.append(img)
    if(ramen.id === globalFirstRamenId){
        globalRamenImg = img
    }
    // add a click event listener to the image
    img.addEventListener("click", ()=>{
        displayRamen(ramen)
        globalRamenImg = img
    })
}

// Problem 2
// select ramen-detail
// update related content
function displayRamen(ramen){
    const img = document.querySelector("#ramen-detail img")
    const name = document.querySelector("#ramen-detail h2")
    const restaurant = document.querySelector("#ramen-detail h3")
    img.src = ramen.image
    name.textContent = ramen.name
    restaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    comment_display.textContent = ramen.comment
    
}

const edit_form = document.querySelector("#edit-ramen")
edit_form.addEventListener("submit", (e)=>{
    e.preventDefault()
    rating.textContent = e.target.rating.value
    comment_display.textContent = e.target["new-comment"].value
})

// Problem 3
// add submit event listener to ramen form 
const form = document.querySelector("#new-ramen")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const new_ramen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }
    e.target.reset()
    // e.target.name.value = ""
    // e.target.restaurant.value = ""
    // e.target.image.value = ""
    // e.target.rating.value = ""
    // e.target["new-comment"].value = ""
    addToNav(new_ramen)
    // displayRamen(new_ramen)
})
// add ramen image to the top bar
// NO FETCH POST NEEDED

