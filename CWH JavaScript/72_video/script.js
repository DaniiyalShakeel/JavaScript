const getColor = () => {
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)
    
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

const divs = document.getElementsByClassName("box")
const but = document.getElementById("but")

const colorChanger = () => {
    for (let i = 0; i < divs.length; i++) {
       divs[i].style.background = getColor()
    }
}



for (let i = 0; i < divs.length ;  i++) {
    divs[i].onclick = colorChanger
}
