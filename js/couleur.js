
 window.onload=function(){
    var choose = document.querySelector("choose");
    choose.addEventListener("click", changeColor, true);
function changeColor(e){
    choose.classList.toggle("choose");
  }
 }
 

