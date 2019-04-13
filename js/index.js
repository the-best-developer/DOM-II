// Your code goes here

// const image = document.querySelector('.lambda-image')

// image.addEventListener('click', function(event){
//   const imageSource = event.target.src;
//   document.body.style.background = `url(${imageSource})`;
// })

// workBtn.addEventListener('mousedown', function(event){
//   event.target.classList.add('big-button')
// })
// workBtn.addEventListener('mouseup', function(event){
//   event.target.classList.remove('big-button')
// })
// firstName.addEventListener('keydown', function(event){
//        console.log(event) 
//      })

// My code

//Navigation menu
const navItems = document.querySelectorAll(".nav-link");
console.log(navItems);

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
navItems[0].addEventListener('keydown', function(event){
        console.log(event.key)
        if(event.key === "ArrowLeft") {
            ind++;
            event.target.style.order = ind;
            console.log(ind)
        }
        if(event.key === "ArrowRight") {
            ind--;
            event.target.style.order = ind;
            console.log(ind)
        }
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
      //Wheel
      document.addEventListener('scroll', function(event){
        focusParagraph.forEach(para => para.style.color = "darkgreen")
        
})

