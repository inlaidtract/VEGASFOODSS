document.addEventListener('DOMContentLoaded', function () {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth >= 50) {
        var warning = document.querySelector('.warning');
        warning.style.display = 'block';
    }
});

function getTime() {
    var date = new Date();
    var options = { timeZone: 'Asia/Jakarta' };
    var time = date.toLocaleTimeString('id-ID', options);
    document.getElementById("clock").innerHTML = time;
}

setInterval(getTime, 1000);