// Modified code that prints the current time every second
setInterval(function() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);
