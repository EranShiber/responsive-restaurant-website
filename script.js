const mobile = document.querySelector(".mob")
const navBtn = document.querySelector(".burger")
const mobLi = document.querySelector('.mob-ul');
const box = document.querySelectorAll('.box');
const iphone = document.querySelectorAll('.iphone-img');

let toggle = false;
navBtn.addEventListener("click", ()=> {
    if(toggle){
        mobile.style.display = "none"
        toggle = false;
    } else {
    mobile.style.display = "block"
    toggle = true;
    }
})

mobLi.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.className === "mob-li"){       
        mobile.style.display = "none"
        toggle = false;
    }
})

window.addEventListener("scroll", (e)=> {
    console.log(scrollY)
    if(scrollY > 300) {
        box.forEach(item => {
        item.style = "animation: fadeIn 4s"

        })
    }
})

window.addEventListener("scroll", (e) => {
    if(scrollY > 1600) {
        iphone[0].style = "animation: bounceInUp 2s";
    }
})
