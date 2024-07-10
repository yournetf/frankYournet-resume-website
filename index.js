const aboutButton = document.querySelector('#aboutButton');
const skillsButton = document.querySelector('#skillsButton');
const projectsButton = document.querySelector('#projectsButton');
const gitButton = document.querySelector('#githubButton');
const contactButton = document.querySelector('#contactButton');
const plusButton = document.querySelector('#plusButton')
const lightSwitch = document.querySelector('#lightSwitch');
const buttonSection = document.querySelector('#plusButtonDiv');
const javaIcon = document.querySelector('#javaIcon');
const jsIcon = document.querySelector('#jsIcon');
const htmlIcon = document.querySelector('#htmlIcon');
const cssIcon = document.querySelector('#cssIcon');
const sqlIcon = document.querySelector('#sqlIcon');
const iosIcon = document.querySelector('#iosIcon');
const editingIcon = document.querySelector('#editingIcon');
const cIcon = document.querySelector('#cIcon');
const podcastIcon = document.querySelector('#podcastIcon');


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


skillsButton.addEventListener('click', () =>{
    var skillSection = document.getElementById("languagesSection");
    skillSection.scrollIntoView({ behavior:"smooth", block:"start", inline:"nearest"}); 
});






let degree = 0;
let speed = 0;

javaIcon.addEventListener('mouseover', addSpinToButtonJava, {once : true});
jsIcon.addEventListener('mouseover', addSpinToButtonjs, {once : true});
htmlIcon.addEventListener('mouseover', addSpinToButtonhtml, {once : true});
cssIcon.addEventListener('mouseover', addSpinToButtoncss, {once : true});
sqlIcon.addEventListener('mouseover', addSpinToButtonsql, {once : true});
iosIcon.addEventListener('mouseover', addSpinToButtonios, {once : true});
editingIcon.addEventListener('mouseover', addSpinToButtonediting, {once : true});
cIcon.addEventListener('mouseover', addSpinToButtonc, {once : true});
podcastIcon.addEventListener('mouseover', addSpinToButtonPodcast, {once : true});




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


function addSpinToButtonJava(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("javaSpinner");
    let spinTimer = setInterval(spin, 22);

    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}
function addSpinToButtonjs(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("jsSpinner");
    let spinTimer = setInterval(spin, 20);


    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}

function addSpinToButtonhtml(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("htmlSpinner");
    let spinTimer = setInterval(spin, 22);

    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}

function addSpinToButtoncss(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("cssSpinner");
    let spinTimer = setInterval(spin, 22);

    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}

function addSpinToButtonsql(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("sqlSpinner");
    let spinTimer = setInterval(spin, 22);

    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}

function addSpinToButtonios(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("iosSpinner");
    let spinTimer = setInterval(spin, 22);

    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}



function addSpinToButtonc(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("cSpinner");
    let spinTimer = setInterval(spin, 22);

    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}

function addSpinToButtonediting(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("editingSpinner");
    let spinTimer = setInterval(spin, 22);

    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}

function addSpinToButtonPodcast(){
    let degreeTemp = degree;
    let speedTemp = speed;
    let d = document.getElementById("podcastingSpinner");
    let spinTimer = setInterval(spin, 22);

    function spin(){

        if(degreeTemp >= 720){
            clearInterval(spinTimer);
            degreeTemp = 0;
        }

        else{
            d.style.transform = 'perspective(2000px) rotate3d(0,1,0,' + speedTemp +'deg)';
            degreeTemp+=1;
            speedTemp+=1;
        }
    } 
}