const aboutButton = document.querySelector('#aboutButton');
const resumeButton = document.querySelector('#resumeButton');
const projectsButton = document.querySelector('#projectsButton');
const gitButton = document.querySelector('#githubButton');
const contactButton = document.querySelector('#contactButton');
const plusButton = document.querySelector('#plusButton')
const lightSwitch = document.querySelector('#lightSwitch');
const buttonSection = document.querySelector('#plusButtonDiv');
const javaIcon = document.querySelector('#javaIcon');


var plusClicked = false;


plusButton.addEventListener('click', () =>{
        if(!plusClicked){
            plusClicked = true;
            plusButton.style.transform = 'rotate(225deg)';
            movementUp();
        }
        else{
            plusClicked = false;
            plusButton.style.transform = 'rotate(0deg)';
            movementDown();
        }
        
});

buttonSection.addEventListener('mouseout', () =>{
           // movementDown();
});



aboutButton.addEventListener('click', () =>{

    var welcomeCard = document.getElementById("experienceSection");
    welcomeCard.scrollIntoView({ behavior:"smooth", block:"start", inline:"nearest"}); 
});


projectsButton.addEventListener('click', () =>{

    var videoSection = document.getElementById("videoSection");
    videoSection.scrollIntoView({ behavior:"smooth", block:"start", inline:"nearest"}); 
});





var degree = 0;
var speed = 0;

javaIcon.addEventListener('mouseover', ()=> {


    var d = document.getElementById("javaSpinner");
    let spinTimer = setInterval(spin, 20);

    function spin(){

        if(degree >= 10800){
            clearInterval(spinTimer);
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speed +'deg)';
            degree+=1;
            speed+=1;
        }
    }


    

});



lightSwitch.addEventListener('click', () =>{
    document.body.style.backgroundColor = 'rgb(36, 35, 35)';
});












function movementUp(){
    var d = document.getElementById("lightSwitch");
    var height =  90;
    var opacity = 0;
    let buttonsTimer = setInterval(moveUp, 50);

    function moveUp(){
    
        if(height == 80) {
            clearInterval(buttonsTimer);
        }
        else{
            d.style.top = height + 'vh';
            d.style.opacity = opacity + '%';
            opacity += 6;
            height -= 1;
        }
       
    }
}

function movementDown(){
    var d = document.getElementById("lightSwitch");
    var height =  80;
    var opacity = 60;
    let buttonsTimer = setInterval(moveUp, 50);

    function moveUp(){
    
        if(height == 90) {
            clearInterval(buttonsTimer);
        }
        else{
            opacity -= 6;
            height += 1;
            d.style.top = height + 'vh';
            d.style.opacity = opacity + '%';
        }
       
    }
}


function darkModeActivate(){

}







// aboutButton.addEventListener('mouseover', () => {
//         fade(resumeButton);
//         fade(projectsButton);
//         fade(gitButton);
//         fade(contactButton);
//     });


// aboutButton.addEventListener('mouseout', () => {
//         unfade(resumeButton);
//         unfade(projectsButton);
//         unfade(gitButton);
//         unfade(contactButton);
// });




