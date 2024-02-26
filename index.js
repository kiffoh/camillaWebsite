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
textContainer.classList.add("textElement-container");
const text = "Cada día le doy gracias a la vida por que nuestros caminos se hayan cruzado, hoy en especial, agradezco por la tuya y porque el universo haya decidido prolongar tu existencia en este plano terrenal un poco más. Así la vida sea un poco agridulce a veces, tu vida endulza la mía muchas veces, hoy deseo que recibas tanta alegría como das, y la luz y las bendiciones del universo estén contigo siempre. Te amo con el corazon, happy birthday :)"

const lines = text.split("\n")

lines.forEach(line => {
    const paragraph = document.createElement("p");
    paragraph.textContent = line;
    textContainer.appendChild(paragraph);
});

overallContainer.appendChild(imgContainer);
overallContainer.appendChild(textContainer);

messageBtn.addEventListener("click", () => {
    document.body.removeChild(btnContainer);
    document.body.appendChild(overallContainer);
})