// Summary Bildrotation

let websiteImg1 = document.getElementById("websiteImg1");
let websiteImg2 = document.getElementById("websiteImg2");
let websiteImg3 = document.getElementById("websiteImg3");

let websiteButton1 = document.getElementById("first");
let websiteButton2 = document.getElementById("second");
let websiteButton3 = document.getElementById("third");
let websiteAllButtons = document.getElementsByClassName("websiteButton");
let websiteButtonLeft = document.getElementById("mediaButtonLeft");
let websiteButtonRight = document.getElementById("mediaButtonRight");

// Auto
let c = 1;

function interval(){
    imgInterval = setInterval(changewebsiteAuto,4000);
}

interval();

function changewebsiteAuto(){
    if(c==1){
        websiteImg2.classList.add("displayed");
        websiteImg2.classList.remove("hidden");
        websiteImg1.classList.add("hidden");
        websiteImg1.classList.remove("displayed");
        websiteButton2.style.backgroundColor = "var(--accentBackgroundColor)";
        websiteButton1.style.backgroundColor = "var(--backgroundColor)";
    } else if(c==2){
        websiteImg3.classList.add("displayed");
        websiteImg3.classList.remove("hidden");
        websiteImg2.classList.add("hidden");
        websiteImg2.classList.remove("displayed");
        websiteButton3.style.backgroundColor = "var(--accentBackgroundColor)";
        websiteButton2.style.backgroundColor = "var(--backgroundColor)";
    } else{
        websiteImg1.classList.add("displayed");
        websiteImg1.classList.remove("hidden");
        websiteImg3.classList.add("hidden");
        websiteImg3.classList.remove("displayed");
        websiteButton1.style.backgroundColor = "var(--accentBackgroundColor)";
        websiteButton3.style.backgroundColor = "var(--backgroundColor)";
    }

    if(c<3){
        c++;
    } else{
        c = 1;
    }
}

// Change img by buttonclick

websiteButton1.addEventListener("click",function(){
    websiteImg1.classList.add("displayed");
    websiteImg1.classList.remove("hidden");
    websiteImg2.classList.add("hidden");
    websiteImg2.classList.remove("displayed");
    websiteImg3.classList.add("hidden");
    websiteImg3.classList.remove("displayed");
    c=1;
    websiteButton1.style.backgroundColor = "var(--accentBackgroundColor)";
    websiteButton2.style.backgroundColor = "var(--backgroundColor)";
    websiteButton3.style.backgroundColor = "var(--backgroundColor)";
})
websiteButton2.addEventListener("click",function(){
    websiteImg2.classList.add("displayed");
    websiteImg2.classList.remove("hidden");
    websiteImg1.classList.add("hidden");
    websiteImg1.classList.remove("displayed");
    websiteImg3.classList.add("hidden");
    websiteImg3.classList.remove("displayed");
    c=2;
    websiteButton2.style.backgroundColor = "var(--accentBackgroundColor)";
    websiteButton1.style.backgroundColor = "var(--backgroundColor)";
    websiteButton3.style.backgroundColor = "var(--backgroundColor)";
})
websiteButton3.addEventListener("click",function(){
    websiteImg3.classList.add("displayed");
    websiteImg3.classList.remove("hidden");
    websiteImg2.classList.add("hidden");
    websiteImg2.classList.remove("displayed");
    websiteImg1.classList.add("hidden");
    websiteImg1.classList.remove("displayed");
    c=3;
    websiteButton3.style.backgroundColor = "var(--accentBackgroundColor)";
    websiteButton2.style.backgroundColor = "var(--backgroundColor)";
    websiteButton1.style.backgroundColor = "var(--backgroundColor)";
})

let stop = document.getElementById("stop");
let start = document.getElementById("start");

// Reset Interval bei Buttonclick

stop.addEventListener("click",stopInterval);
start.addEventListener("click",startInterval);

function stopInterval(){
    clearInterval(imgInterval);
    clearInterval(intervalTimeBar)
}
function startInterval(){
    interval();
    timeBarEvent();
    timer = 0;
    width = 0;
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