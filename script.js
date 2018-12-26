const mobile = document.querySelector(".mob")
const navBtn = document.querySelector(".burger")
const mobLi = document.querySelector('.mob-ul');

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