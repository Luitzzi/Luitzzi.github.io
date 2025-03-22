/* About Me Section: Mehrere Background Bilder*/


let bgImgZero = document.getElementById("aboutMeBgImgZero");
let bgImgOne = document.getElementById("aboutMeBgImgOne");
let bgImgTwo = document.getElementById("aboutMeBgImgTwo");
let bgImgButtonLeft = document.getElementById("BgButtonLeft");
let bgImgButtonRight = document.getElementById("BgButtonRight");

let f = 1;

function intervalAboutMe(){
    intervalAM = setInterval(changeImage,4000);
}

intervalAboutMe();

function changeImage(){
    if(f==0){
        bgImgZero.classList.add("displayed");
        bgImgZero.classList.remove("hidden");
        bgImgTwo.classList.add("hidden");
        bgImgTwo.classList.remove("displayed");
    }else if(f==1){
        bgImgOne.classList.add("displayed");
        bgImgOne.classList.remove("hidden");
        bgImgZero.classList.add("hidden");
        bgImgZero.classList.remove("displayed");
    }else{
        bgImgTwo.classList.add("displayed");
        bgImgTwo.classList.remove("hidden");
        bgImgOne.classList.add("hidden");
        bgImgOne.classList.remove("displayed");
    }

    if(f<2){
        f++;
    } else{
        f = 0;
    }
}

bgImgButtonLeft.addEventListener("click",changePictureLeft);
bgImgButtonRight.addEventListener("click",changePictureRight);

function timeout(){
    clearInterval(intervalAM);
    clearInterval(intervalTimeBar);
    timer = 0;
    width = 0;
    intervalAboutMe();
    timeBarEvent()
}

function changePictureLeft(){
    if (f == 0){
        bgImgOne.classList.add("displayed");
        bgImgOne.classList.remove("hidden");
        bgImgTwo.classList.add("hidden");
        bgImgTwo.classList.remove("displayed");
        f = 2;
        timeout()
    } else if (f == 1){
        bgImgTwo.classList.add("displayed");
        bgImgTwo.classList.remove("hidden");
        bgImgZero.classList.add("hidden");
        bgImgZero.classList.remove("displayed");
        f = 0;
        timeout()
    }
    else {
        bgImgZero.classList.add("displayed");
        bgImgZero.classList.remove("hidden");
        bgImgOne.classList.add("hidden");
        bgImgOne.classList.remove("displayed");
        f = 1;
        timeout()
    }
}
function changePictureRight(){
    if (f == 0){
        bgImgZero.classList.add("displayed");
        bgImgZero.classList.remove("hidden");
        bgImgTwo.classList.add("hidden");
        bgImgTwo.classList.remove("displayed");
        f = 1;
        timeout()
    } else if (f == 1){
        bgImgOne.classList.add("displayed");
        bgImgOne.classList.remove("hidden");
        bgImgZero.classList.add("hidden");
        bgImgZero.classList.remove("displayed");
        f = 2;
        timeout()
    }
    else {
        bgImgTwo.classList.add("displayed");
        bgImgTwo.classList.remove("hidden");
        bgImgOne.classList.add("hidden");
        bgImgOne.classList.remove("displayed");
        f = 0;
        timeout()
    }
}


// Time Bar


let timeBar = document.getElementById("timeBar");
let timer = 0;
let width = 0;

function timeBarEvent(){
    intervalTimeBar = setInterval(widthGrow,800);
}

timeBarEvent();

function widthGrow(){
    if(timer < 4000){
        timer = timer + 800;
        width = width + 20;
        timeBar.style.width = width + '%';
    } else{
        timer = 800;
        width = 20;
        timeBar.style.width = width + '%';
    }
}

