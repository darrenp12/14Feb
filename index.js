var yesClicked = false;
let padding = 1.5;

document.getElementById('yes').addEventListener('click', function(event) {
    console.log("Yes clicked"); 
    yesClicked = true;

    var noButton = document.getElementById('no');
    noButton.remove();
});

document.getElementById('no').addEventListener('click', function(event) {
    var yesButton = document.getElementById('yes');

    padding += 0.5;
    yesButton.style.padding = `${padding}%`;

    console.log(`New padding is ${padding}%`);
});