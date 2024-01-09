// const getcolor = () => {

//     const randomNumber = Math.floor(Math.random() * 16777215)
//     const randomcode = "#" + randomNumber.toString(16);
//     document.body.style.backgroundColor = randomcode
//     document.getElementById("color-code").innerText = randomcode
// }

// document.getElementById("btn1").addEventListener(
//     "click",
//     getcolor()
// )
// getcolor()








let btn = document.querySelector("#btn1");
let color = document.querySelector("#color-code");

btn.addEventListener("click", (event) => {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red},${green},${blue})`

    document.body.style.backgroundColor = rgb;

    color.textContent = rgb
})

