// JavaScript code to handle button click and change background color
document.getElementById('change-color').addEventListener('click', function() {
    changeBackgroundColor();
});

function changeBackgroundColor() {
    // Generate a random color
    var randomColor = getRandomColor();

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    // Generate a random hex color code
    var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}