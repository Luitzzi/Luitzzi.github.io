const textData = {
    german: {
        firstLine: "Hi, ich bin Luis Gerlinger",
        descriptions: [
            "ein Informatik-Student",
            "Programmierer",
            "ehemaliger Koch",
            "Boulderer"
        ]
    },
    english: {
        firstLine: "Hi, I am Luis Gerlinger",
        descriptions: [
            "a Computer Science Student",
            "a Programmer",
            "a former Chef",
            "a boulderer"
        ]
    }
};

// Stores the timeout/interval IDs to stop animations when switching languages
let typingTimeout;
let eraseInterval;

function typeText(element, text, speed, callback, removeCursor = false) {
    clearTimeout(typingTimeout)
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(type, speed);
        } else {
            if (removeCursor) {
                element.classList.add("no-cursor");
            }
            if (callback) {
                typingTimeout = setTimeout(callback, 1000);
            }
        }
    }
    type();
}


function cycleDescriptions(element, descriptions) {
    let index = 0;

    function typeAndErase() {
        clearTimeout(typingTimeout); // Stop previous animations
        clearInterval(eraseInterval);
        element.innerHTML = "";
        
        typeText(element, descriptions[index], 100, () => {
            typingTimeout = setTimeout(() => {
                eraseInterval = setInterval(() => {
                    if (element.innerHTML.length > 0) {
                        element.innerHTML = element.innerHTML.slice(0, -1);
                    } else {
                        clearInterval(eraseInterval);
                        index = (index + 1) % descriptions.length;
                        typingTimeout = setTimeout(typeAndErase, 500);
                    }
                }, 50);
            }, 1000);
        });
    }

    typeAndErase();
}


function startTyping(language) {
    clearTimeout(typingTimeout); // Stop previous typing animation
    clearInterval(eraseInterval); // Stop previous erasing animation

    let firstLineElement = document.getElementById("typing-line-1");
    let secondLineElement = document.getElementById("typing-line-2");
    firstLineElement.innerHTML = "";
    secondLineElement.innerHTML = "";

    let data = textData[language];

    typeText(firstLineElement, data.firstLine, 100, () => cycleDescriptions(secondLineElement, data.descriptions), true);
}