let div = null;
const root = getElementById("root");
const btn = getElementById("change-color");
const hexCode = getElementById("hexCode");
const copyBtn = document.getElementById("copy");


function getElementById(id){
    return document.getElementById(id);
}

btn.addEventListener("click", function(){
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;

    hexCode.value = bgColor;
    copyBtn.addEventListener("click", function(){div.style.backgroundColor = bgColor})
    
    if(copyBtn.innerText === "Copied"){
        copyBtn.innerText = "Copy";
    }
});

function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

copyBtn.addEventListener("click", copyText);

function copyText(){
    navigator.clipboard.writeText(hexCode.value);
    copyBtn.innerText = "Copied";

    if(div !== null){
        div.remove();
        div = null;
    }
    generateToastMessage(`${hexCode.value} copied`);
}

// toast message
function generateToastMessage(msg){
    div = document.createElement("div");
    div.innerText = msg;
    div.className = "fixed top-8 right-8 cursor-pointer bg-green-400 border border-white rounded-md px-4 py-3 shadow-md animation-in";

    div.addEventListener("click", function(){
        div.classList.remove("animation-in");
        div.classList.add("animation-out");

        div.addEventListener("animationend", function(){
            div.remove();
        })
    })

    document.body.appendChild(div);
}