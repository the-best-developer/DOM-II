// Your code goes here

const navItems = document.querySelectorAll(".nav-link");

//Mouseover
navItems[0].addEventListener("mouseover",item => {
    event.target.style.color = "Red";
} )
navItems[1].addEventListener("mouseover",item => {
    event.target.style.color = "Green";
} )
navItems[2].addEventListener("mouseover",item => {
    event.target.style.color = "Blue";
} )
navItems[3].addEventListener("mouseover",item => {
    event.target.style.color = "Purple";
} )

//Keydown
let ind = 0;
navItems.forEach(item => {
    item.addEventListener('keydown', function(event){
        console.log(event.key)
        if(event.key === "ArrowLeft" && ind !== 3) {
            ind++;
            event.target.style.order = ind;
        }
        if(event.key === "ArrowRight" && ind !== -3) {
            ind--;
            event.target.style.order = ind;
        }
    })
})

const funBusImg = document.querySelector(".intro img");
//Wheel
funBusImg.addEventListener('wheel', function(event){
    event.preventDefault();
    event.target.style.opacity = -(event.deltaY / 16);
})
//Double click
funBusImg.addEventListener('dblclick', function(event){
    event.preventDefault();
    event.target.style.opacity = "1"
})

const focusParagraph = document.querySelectorAll("p");
//Scroll
document.addEventListener('scroll', function(event){
    focusParagraph.forEach(para => para.style.color = "darkgreen")
})

const bigH2 = document.querySelectorAll("h2");
//MouseEnter
bigH2.forEach(item => {
    item.addEventListener('mouseenter', function(event){
        item.style.fontSize = "5.5rem";
    })    
})
//MouseLeave
bigH2.forEach(item => {
    item.addEventListener('mouseleave', function(event){
        item.style.fontSize = "3.5rem";
    })
})

const formButton = document.querySelector("#formButton");
//Click
formButton.addEventListener('click', function(event){
    event.preventDefault();
    event.target.textContent = "Success!"
    event.target.style.color = "green";
})

// Focus and blur
formName = document.querySelector("#formName");
formName.addEventListener('focus', (event) => {
    event.target.style.background = 'yellow';    
});
formName.addEventListener('blur', (event) => {
    event.target.style.background = "";    
});

formEmail = document.querySelector("#formEmail");
formEmail.addEventListener('focus', (event) => {
    event.target.style.background = 'green';  
    event.target.style.color = "white";    
});
formEmail.addEventListener('blur', (event) => {
    event.target.style.background = "";
    event.target.style.color = ""; 
});

// Stop propagation
// When double clicking the main-navigation, turn background lightgrey.
const mainNav = document.querySelector(".main-navigation");
mainNav.addEventListener("dblclick", (event) => {
    event.target.style.background = "lightgrey";
})

// When double clicking logo-heading class, turn background darkgrey
// If event.stopPropagation() is not invoked, clicking logo-heading would result in
// the background first being changed to darkgrey, and then overwrote
// by main-navigation EventListener with lightgrey due to bubbling up and
// main-navigation EventListener being the last activated event.
const logo = document.querySelector(".logo-heading");
logo.addEventListener("dblclick", (event) => {
    event.stopPropagation();
    event.target.style.background = "darkgrey";
})
