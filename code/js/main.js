(function () {
    "use strict";
    function updateTime () {
        let timer = document.getElementsByClassName("time")[0];
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let secs =  date.getSeconds();
        function ifSingleDigit (number) {
            number = number.toString()
            if (number.length > 1 ) {
                return number
            } else {
                return `0${number}`
            }
        }
        timer.innerHTML = `${ifSingleDigit(hour)}:${ifSingleDigit(minutes)}:${ifSingleDigit(secs)}`;
    }
    setInterval(updateTime, 1000)
}());
