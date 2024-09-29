function getElementById(id){
    return document.getElementById(id);
}

const root = getElementById("root");
const btn = getElementById("change-color");
const hexCode = getElementById("hexCode");

btn.addEventListener("click", function(){
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;

    hexCode.value = bgColor;
});


function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}