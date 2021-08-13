const date = parseInt(prompt("Enter date: "));
const month = parseInt(prompt("Enter month: "));
const year = parseInt(prompt("Enter year: "));

// Kiểm tra xem có phải năm nhuận không
var leapYear = false;
if (year % 4 == 0) {
    if (year % 100 == 0) {
       if (year % 400 == 0) {
           leapYear = true;
       }
    } else {
        leapYear = true;
    }
}

// Kiểm tra tính hợp lệ của ngày
const days31 = [1,3,5,7,8,10,12];
const days30 = [4,6,9,11];

var validDate = true;
switch (date) {
    case 29:
        if (month == 2 && !leapYear) {
            validDate = false;
        }
        break;
    case 30:
        if (month == 2) {
            validDate = false;
        }
        break;
    case 31:
        if (!days31.includes(month)) {
            validDate = false;
        }
        break;
    default:
        break;
}

if (validDate) {
    console.log("Valid date");
} else {
    console.log("Invalid date");
}

// In ra ngày tiếp theo
if (validDate) {
    if (date < 28) {
        var newDate = date + 1;
        console.log("Next day: " + newDate + "/" + month + "/" + year);
    } else {
        switch (date) {
            case 29:
                console.log("Next day: 01/03/" + year);
                break;
            case 30:
                if (days30.includes(month)) {
                    var newMonth = month + 1;
                    console.log("Next day: 01/" + newMonth + "/" + year);
                } else {
                    console.log("Next day: 31/" + month + "/" + year);
                }
                break;
            case 31:
                if (month < 12) {
                    var newMonth = month + 1;
                    console.log("Next day: 01/" + newMonth + "/" + year);
                } else {
                    var newYear = year + 1;
                    console.log("Next day: 01/01/" + newYear);
                }
                break;
            default:
                break;
        }
    }
}
