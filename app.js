var dob = new Date("2008-05-15T10:30:00"); 

function calculateAge() {
    var now = new Date();

    var diff = now - dob; // milliseconds difference

    var seconds = Math.floor(diff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    var years = now.getFullYear() - dob.getFullYear();
    var months = now.getMonth() - dob.getMonth();
    var dayDiff = now.getDate() - dob.getDate();

    if (dayDiff < 0) {
        months--;
        var prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        dayDiff += prevMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    var remainingHours = hours % 24;
    var remainingSeconds = seconds % 60;

    console.log("Age:");
    console.log(years + " Years");
    console.log(months + " Months");
    console.log(dayDiff + " Days");
    console.log(remainingHours + " Hours");
    console.log(remainingSeconds + " Seconds");
}

// har second age update hogi
setInterval(calculateAge, 1000);