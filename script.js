function calculateDays() {
    var startDate = new Date("May 2, 2023");
    var today = new Date();
    var timeDiff = Math.abs(today.getTime() - startDate.getTime());
    var daysPassed = (Math.ceil(timeDiff / (1000 * 3600 * 24))) - 1 ;

    document.getElementById("result").innerHTML = "David ha fatto quella cosa " + daysPassed + " sere fa";
}
