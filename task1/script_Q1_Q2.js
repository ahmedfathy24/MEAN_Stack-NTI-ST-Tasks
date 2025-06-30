
function getDayName(dateString) {
    const date = new Date(dateString);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
}
console.log(getDayName("2025-06-30"));
console.log(getDayName("2025-07-05")); 
console.log("==============================="); 

// ==================================================================== 
let input = prompt("Enter your birth date in this format (DD–MM–YYYY): ");
let regex = /^\d{2}-\d{2}-\d{4}$/;

if (regex.test(input)) {
    let parts = input.split("-");
    let day = parseInt(parts[0]);
    let month = parseInt(parts[1]) - 1;
    let year = parseInt(parts[2]);
    let inputDate = new Date(year, month, day);
    let today = new Date();
        if (inputDate > today) {
        alert("You can't enter a future date!");
    } else {
        let f_Date = inputDate.getDate() + "/" + (inputDate.getMonth() + 1) + "/" + inputDate.getFullYear();
        alert("Your birth date is: " + f_Date);
    }
}
else {
    alert("Wong Date Format");
}
