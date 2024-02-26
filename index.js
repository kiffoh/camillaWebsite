const messageBtn = document.querySelector(".message");
const btnContainer = document.querySelector(".btn-container");

const overallContainer = document.createElement("div");
overallContainer.classList.add("overall-container");

const imgContainer = document.createElement("div");
imgContainer.classList.add("img-container");
const img = document.createElement("img");
img.src = "C:/Users/Dell/repos/Javascript/JavaScript Course/camilla/camilla_photo.jpg";
img.classList.add("active");
imgContainer.appendChild(img);

const textContainer = document.createElement("div");
textContainer.classList.add("text-container");
const text = document.createElement("p");


text.textContent = "Cada día le doy gracias a la vida por que nuestros caminos se hayan cruzado, hoy en especial, agradezco por la tuya y porque el universo haya decidido prolongar tu existencia en este plano terrenal un poco más. Así la vida sea un poco agridulce a veces, tu vida endulza la mía muchas veces, hoy deseo que recibas tanta alegría como das, y la luz y las bendiciones del universo estén contigo siempre. Te amo con el corazon, happy birthday :)"
textContainer.appendChild(text);

overallContainer.appendChild(imgContainer);
overallContainer.appendChild(textContainer);

messageBtn.addEventListener("click", () => {
    document.body.removeChild(btnContainer);
    document.body.appendChild(overallContainer);
    const trimText = textContainer.textContent.trim();
    textContainer.textContent = "";

    let index = 0;
    function type() {
        const char = trimText[index++];
        textContainer.textContent += char;
        if (index < trimText.length) {
            setTimeout(type, 50);
        }
    }

    type();
})