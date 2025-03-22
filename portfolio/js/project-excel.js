// Auto Rotate der Bildcollage

let excelImg1 = document.getElementById("excelImg1");
let excelImg2 = document.getElementById("excelImg2");
let excelImg3 = document.getElementById("excelImg3");
let excelImg4 = document.getElementById("excelImg4");

let excelButton1 = document.getElementById("first");
let excelButton2 = document.getElementById("second");
let excelButton3 = document.getElementById("third");
let excelButton4 = document.getElementById("fourth");
let excelAllButtons = document.getElementsByClassName("excelButton");
let excelButtonLeft = document.getElementById("mediaButtonLeft");
let excelButtonRight = document.getElementById("mediaButtonRight");

// Auto
let c = 1;

function interval(){
    imgInterval = setInterval(changeExcelAuto,4000);
}

interval();

function changeExcelAuto(){
    if(c==1){
        excelImg2.classList.add("displayed");
        excelImg2.classList.remove("hidden");
        excelImg1.classList.add("hidden");
        excelImg1.classList.remove("displayed");
        excelButton2.style.backgroundColor = "var(--accentBackgroundColor)";
        excelButton1.style.backgroundColor = "var(--backgroundColor)";
    } else if(c==2){
        excelImg3.classList.add("displayed");
        excelImg3.classList.remove("hidden");
        excelImg2.classList.add("hidden");
        excelImg2.classList.remove("displayed");
        excelButton3.style.backgroundColor = "var(--accentBackgroundColor)";
        excelButton2.style.backgroundColor = "var(--backgroundColor)";
    } else if(c==3){
        excelImg4.classList.add("displayed");
        excelImg4.classList.remove("hidden");
        excelImg3.classList.add("hidden");
        excelImg3.classList.remove("displayed");
        excelButton4.style.backgroundColor = "var(--accentBackgroundColor)";
        excelButton3.style.backgroundColor = "var(--backgroundColor)";
    } else{
        excelImg1.classList.add("displayed");
        excelImg1.classList.remove("hidden");
        excelImg4.classList.add("hidden");
        excelImg4.classList.remove("displayed");
        excelButton1.style.backgroundColor = "var(--accentBackgroundColor)";
        excelButton4.style.backgroundColor = "var(--backgroundColor)";
    }

    if(c<4){
        c++;
    } else{
        c = 1;
    }
}

// Change img by buttonclick

excelButton1.addEventListener("click",function(){
    excelImg1.classList.add("displayed");
    excelImg1.classList.remove("hidden");
    excelImg2.classList.add("hidden");
    excelImg2.classList.remove("displayed");
    excelImg3.classList.add("hidden");
    excelImg3.classList.remove("displayed");
    excelImg4.classList.add("hidden");
    excelImg4.classList.remove("displayed");
    c=1;
    excelButton1.style.backgroundColor = "var(--accentBackgroundColor)";
    excelButton2.style.backgroundColor = "var(--backgroundColor)";
    excelButton3.style.backgroundColor = "var(--backgroundColor)";
    excelButton4.style.backgroundColor = "var(--backgroundColor)";
})
excelButton2.addEventListener("click",function(){
    excelImg2.classList.add("displayed");
    excelImg2.classList.remove("hidden");
    excelImg1.classList.add("hidden");
    excelImg1.classList.remove("displayed");
    excelImg3.classList.add("hidden");
    excelImg3.classList.remove("displayed");
    excelImg4.classList.add("hidden");
    excelImg4.classList.remove("displayed");
    c=2;
    excelButton2.style.backgroundColor = "var(--accentBackgroundColor)";
    excelButton1.style.backgroundColor = "var(--backgroundColor)";
    excelButton3.style.backgroundColor = "var(--backgroundColor)";
    excelButton4.style.backgroundColor = "var(--backgroundColor)";
})
excelButton3.addEventListener("click",function(){
    excelImg3.classList.add("displayed");
    excelImg3.classList.remove("hidden");
    excelImg2.classList.add("hidden");
    excelImg2.classList.remove("displayed");
    excelImg1.classList.add("hidden");
    excelImg1.classList.remove("displayed");
    excelImg4.classList.add("hidden");
    excelImg4.classList.remove("displayed");
    c=3;
    excelButton3.style.backgroundColor = "var(--accentBackgroundColor)";
    excelButton2.style.backgroundColor = "var(--backgroundColor)";
    excelButton1.style.backgroundColor = "var(--backgroundColor)";
    excelButton4.style.backgroundColor = "var(--backgroundColor)";
})
excelButton4.addEventListener("click",function(){
    excelImg4.classList.add("displayed");
    excelImg4.classList.remove("hidden");
    excelImg2.classList.add("hidden");
    excelImg2.classList.remove("displayed");
    excelImg3.classList.add("hidden");
    excelImg3.classList.remove("displayed");
    excelImg1.classList.add("hidden");
    excelImg1.classList.remove("displayed");
    c=4;
    excelButton4.style.backgroundColor = "var(--accentBackgroundColor)";
    excelButton2.style.backgroundColor = "var(--backgroundColor)";
    excelButton3.style.backgroundColor = "var(--backgroundColor)";
    excelButton1.style.backgroundColor = "var(--backgroundColor)";
})

let stop = document.getElementById("stop");
let start = document.getElementById("start");

// Reset Interval bei Buttonclick

stop.addEventListener("click",stopInterval);
start.addEventListener("click",startInterval);

function stopInterval(){
    clearInterval(imgInterval)
    clearInterval(intervalTimeBar)
}
function startInterval(){
    interval();
    timeBarEvent();
    timer = 0;
    width = 0;
}

//Time Bar

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