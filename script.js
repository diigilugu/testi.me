let counter = document.querySelector('#counter-value')
var now = moment("2021-07-12"); // new Date().getTime();
var then = moment().add(60, 'seconds'); // new Date(now + 60 * 1000);

// from then until now
(function timerLoop() {
    $().text(moment(then).to(now));
    $("#counter").text(countdown(now).toString());
    requestAnimationFrame(timerLoop);
})();