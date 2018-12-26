const mobile = document.querySelector(".mob")
const navBtn = document.querySelector(".burger")


let toggle;
navBtn.addEventListener("click", ()=> {
    if(toggle){
        mobile.style.display = "none"
        toggle = false;
    } else {
    mobile.style.display = "block"
    toggle = true;
    }
})