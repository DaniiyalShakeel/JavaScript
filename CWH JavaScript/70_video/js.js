// Function to generate a random color
function getRandomColor() {
    // Generate random values for red, green, and blue channels
    var r = Math.floor(Math.random() * 256); // Red
    var g = Math.floor(Math.random() * 256); // Green
    var b = Math.floor(Math.random() * 256); // Blue
    return `rgb(${r}, ${g}, ${b})`; // Return the random color in RGB format
}

// Function to change the background color of all boxes
document.getElementById('changeColorButton').onclick = function () {
    var elements = document.getElementsByClassName('box');

    // Loop through each element and change its background color to a random one
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = getRandomColor();
        elements[i].style.color = getRandomColor();
    }
};