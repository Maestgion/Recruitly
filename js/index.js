
window.addEventListener('scroll', ()=>{
    let scrollTop = document.documentElement.scrollTop
    let nav = document.querySelector(".navbar")
    if(scrollTop > 0){
    
        nav.classList.add("scrolled")
    }else{
        nav.classList.remove("scrolled")
    }
})