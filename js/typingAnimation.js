const mainText = "Hi, I am Luis Gerlinger";
const descriptions = [
    "a Computer Science Student",
    "a Programmer",
    "a former Chef",
    "a boulderer"
];

function typeText(element, text, speed, callback, removeCursor = false) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (removeCursor) {
                element.classList.add("no-cursor"); // Remove cursor only if specified
            }
            if (callback) {
                setTimeout(callback, 1000);
            }
        }
    }
    type();
}

function cycleDescriptions() {
    let index = 0;
    const element = document.getElementById("typing-line-2");
    
    function typeAndErase() {
        element.innerHTML = "";
        typeText(element, descriptions[index], 100, () => {
            setTimeout(() => {
                let text = element.innerHTML;
                let erase = setInterval(() => {
                    if (text.length > 0) {
                        text = text.slice(0, -1);
                        element.innerHTML = text;
                    } else {
                        clearInterval(erase);
                        index = (index + 1) % descriptions.length;
                        setTimeout(typeAndErase, 500);
                    }
                }, 50);
            }, 1000);
        });
    }
    typeAndErase();
}

typeText(document.getElementById("typing-line-1"), mainText, 100, cycleDescriptions, true);