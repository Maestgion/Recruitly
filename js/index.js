
window.addEventListener('scroll', ()=>{
    let scrollTop = document.documentElement.scrollTop
    let nav = document.querySelector(".navbar")
    if(scrollTop > 0){
    
        nav.classList.add("scrolled")
    }else{
        nav.classList.remove("scrolled")
    }
})


// JavaScript code
document.getElementById("feat").addEventListener("mouseover", function() {
    document.getElementById("features").style.display = "grid";
  });
  
  document.getElementById("feat").addEventListener("mouseout", function() {
    document.getElementById("features").style.display = "none";
  });
  

document.getElementById("integ").addEventListener("mouseover", function() {
    document.getElementById("integrations").style.display = "grid";
  });
  
  document.getElementById("integ").addEventListener("mouseout", function() {
    document.getElementById("integrations").style.display = "none";
  });
  

  