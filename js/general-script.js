// Dark-Mode Button_________________________________________________________________________________________

let switchDarkMode = document.getElementById("darkModeCheckbox");

//Hört auf eine Änderung der Checkbox und führt dann die Funktion aus
switchDarkMode.addEventListener('change', changeDarkMode);

function changeDarkMode(){
    if (switchDarkMode.checked){
        document.body.classList.add("darkMode");
        localStorage.setItem("darkMode","dark")
    } else{
        document.body.classList.remove("darkMode");
        localStorage.setItem("darkMode","light")
    }
};


// Nimmt den Wert von darkMode im localStorage und setzt den Modus dementsprechend
if (localStorage.getItem("darkMode") == "dark"){
    switchDarkMode.checked = true;
    document.body.classList.add("darkMode");
}

//________________________________________________________________________________




//Languages Change


let german = document.getElementById("german");
let germanText = document.getElementsByClassName("german");

let english = document.getElementById("english");
let englishText = document.getElementsByClassName("english");

english.addEventListener("click", changeLanguageEnglish);

function changeLanguageEnglish(){
    localStorage.setItem("language","english"); //safes picked language in local storage
    for (let i = 0;i < englishText.length; i++){
        englishText[i].style.display = "flex";
        germanText[i].style.display = "none";
    }
}

german.addEventListener("click", changeLanguageGerman);

function changeLanguageGerman(){
    localStorage.setItem("language","german"); //safes picked language in local storage
    for (let i = 0;i < englishText.length; i++){
        germanText[i].style.display = "flex";
        englishText[i].style.display = "none";
    }
}

//Load language from local storage
if (localStorage.getItem("language") == "english"){
    changeLanguageEnglish();
}




    /* Languages Media Nav-Bar fix*/

    let languagesButton = document.getElementById("languagesCheckbox")
    let toggleButton = document.getElementById("toggleButton")
    let languagesCheckbox = document.getElementById("languagesCheckbox")
    let navLinks = document.getElementsByClassName("vanishOnClick")

    function hideDarkModeButton(){ //Lässt den DarkMode button verschwinden, wenn das "Sprachen-Dropdownmenü" ausfährt
        if (languagesButton.checked){
            document.getElementById("liDarkMode").style.display = "none";
        } else {
            document.getElementById("liDarkMode").style.display = "flex";
        }
    }
    function closeNavBar(){ //Setzt die Checkbox vom ToggleButton auf false, wodurch die NavBar eingeklappt wird
        toggleButton.checked = false;
        languagesCheckbox.checked = false;
        document.getElementById("liDarkMode").style.display = "flex";
    }

    if(window.innerWidth < 851){
        languagesButton.addEventListener("change", hideDarkModeButton);
        german.addEventListener("click",closeNavBar);
        english.addEventListener("click",closeNavBar);
        for (var i = 0 ; i < navLinks.length ; i++){ //Für die NavLinks mit hyperlink
            navLinks[i].addEventListener("click",closeNavBar)
        } 
    }

//________________________________________________________________________________
