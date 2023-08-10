document.getElementById("beginButton").onclick = function(){
    
    document.getElementById("beginButton").style.display = "none";
    document.getElementById("projectButton").style.display = "block";
    document.getElementById("contactButton").style.display = "block";
    document.getElementById("moonButton").style.display = "block";
    document.getElementById("moon2Button").style.display = "block";
  
}





let myDocument = document.documentElement;
let btn = document.getElementById("beginButton");
beginButton.addEventListener("click", ()=>{
    if(btn.textContent == "Begin"){
        if (myDocument.requestFullscreen) {
            myDocument.requestFullscreen();
        } 
        else if (myDocument.msRequestFullscreen) {
            myDocument.msRequestFullscreen();
        } 
        else if (myDocument.mozRequestFullScreen) {
            myDocument.mozRequestFullScreen();
        }
        else if(myDocument.webkitRequestFullscreen) {
            myDocument.webkitRequestFullscreen();
        }
    }
    else{
        if(document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if(document.msexitFullscreen) {
            document.msexitFullscreen();
        }
        else if(document.mozexitFullscreen) {
            document.mozexitFullscreen();
        }
        else if(document.webkitexitFullscreen) {
            document.webkitexitFullscreen();
        }
        btn.textContent = "Go Fullscreen";
    }
});



