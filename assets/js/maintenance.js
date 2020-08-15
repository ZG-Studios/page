window.setInterval(function() {
    var date = new Date();

    /* Get second value from here: https://www.onlineconversion.com/days_between_advanced.htm */
    /* Time in secs since 1/1/1970 and down date times 1000 */
    var time = date.getTime() - 1597496400000;

    /* Compensate for my time zone */
    time = time - 18000000;
    
    var days = Math.trunc((((time / 1000) / 60) / 60) / 24);
    var hrs = Math.trunc(((time / 1000) / 60) / 60) - (days * 24);
    var mins = Math.trunc((time / 1000) / 60) - ((days * 24 * 60) + (hrs * 60));
    var secs = Math.trunc(time / 1000) - ((days * 24 * 60 * 60) + (hrs * 60 * 60) + (mins * 60));

    document.getElementById("down-time").innerHTML = "Down time: " + days.toString() + " days, " + hrs.toString() + " hrs, " + mins.toString() + " mins, " + secs.toString() + " secs";
}, 1000);