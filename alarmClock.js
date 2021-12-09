
console.log('ALARM CLOCK JAVASCRIPT');

var alarmSound = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3');

function ringAlarm() {
    alarmSound.play();
};

let form = document.getElementById('form');

form.addEventListener('submit', function onSubmit(event) {

    function something() {
        let setTime = document.getElementById('setTime').value;
        let currentTime = new Date().toTimeString().slice(0, 5);

        if (setTime == currentTime) {
            test();
            ringAlarm();
            return true;
        }
        else {
            return false;
        }
    }
    if (!something()) {
        var mylet = setInterval(something, 1000);
        if (mylet > 2) {
            clearInterval(mylet);
            console.log('previous alarm cancelled');
            mylet = setInterval(something, 1000);
            console.log('New alarm set');
        }
        else{
            console.log('Alarm set');
        }
    }
    event.preventDefault();

    function test() {
        console.log('Time Matched');
        clearInterval(mylet);
    }
});