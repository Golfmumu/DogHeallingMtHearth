const toggleOpen = document.querySelector(".toggle-open")
const navList = document.querySelector(".nav-list")

/* show nav-list */
toggleOpen.addEventListener("click", function() {
    navList.classList.add("nav-show")
})
/* remove navlist */
const navLink = document.querySelectorAll(".nav-link")
navLink.forEach(n => n.addEventListener('click', function (){
    navList.classList.remove("nav-show")
}))

/* fixed nav */
const navBar = document.querySelector(".nav-bar")
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navBar.classList.add("fixed-nav")
    } else {
        navBar.classList.remove("fixed-nav")
    }
})

/* smooth scroll */
navLink.forEach(function(link){
    link.addEventListener("click", function(e){
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        //calculate the heights
        const navHeight = navBar.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        
        if(!fixedNav){
            position = position;
        }
        if(fixedNav){
            position = position;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });

        navList.style.height = 10;
    });
})

/* random dog breed */
const dogBreed = [{
    id : 1,
    name : "Labrador Retriever",
    img : "./img/LabradorRetriever.jpg"
    },
    {
    id : 2,
    name : "French Bulldog",
    img : "./img/FrenchBulldog.jpg"
    },
    {
    id : 3,
    name : "German Shepherd",
    img : "./img/GermanShepherd.jpg"
    },
    {
    id : 4,
    name : "Golden Retriever",
    img : "./img/GoldenRetriever.jpg"
    },
    {
    id : 5,
    name : "Bulldog",
    img : "./img/Bulldog.jpg"
    },
    {
    id : 6,
    name : "Poodle",
    img : "./img/Poodle.jpg"
    },
    {
    id : 7,
    name : "Beagle",
    img : "./img/Beagle.jpg"
    },
    {
    id : 8,
    name : "Rottweiler",
    img : "./img/Rottweiler.jpg"
    },
    {
    id : 9,
    name : "German Shorthaired Pointer",
    img : "./img/GermanShorthairedPointer.jpg"
    },
    {
    id : 10,
    name : "Dachshund",
    img : "./img/Dachshund.jpg"
    }
]

const randomBtn = document.querySelector(".random-dog")

const dogName = document.getElementById("dog-name")
const dogImg = document.getElementById("dog-img")

window.addEventListener("DOMContentLoaded", function (){
    showDog()
})

let currentItem = 0;
function showDog() {
    const item = dogBreed[currentItem];
    dogName.textContent = item.name;
    dogImg.src = item.img;
}

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * dogBreed.length);
    showDog();
});