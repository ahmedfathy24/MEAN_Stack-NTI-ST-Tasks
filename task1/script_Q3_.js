window.onload = function () {
    let num = 0;
    do {num = prompt("How many users do you want to enter?");
    num = parseInt(num);
    if (isNaN(num) || num <= 0) {alert("Please enter a valid number.");}}
    while (isNaN(num) || num <= 0);
        let users = [];
        for (let i = 0; i < num; i++) 
            {
            let name, age;
                do {
                name = prompt("Enter name for user " + (i + 1) + " (3-10 characters):");
                    if (name.length <= 3 || name.length >= 10) {alert("Invalid input. Try again.");}
                } while (name.length <= 3 || name.length >= 10);
                do {
                age = prompt("Enter age for " + name + ", should be greater than 10 and less than 60.");
                age = parseInt(age);
                    if (isNaN(age) || age <= 10 || age >= 60) {alert("Invalid input. Try again.");}
                } while (isNaN(age) || age <= 10 || age >= 60);
                users.push({ name: name, age: age });
            }
            
            
    let tableBody = document.querySelector(".user_table tbody");
        for (let i = 0; i < users.length; i++) {
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            tdName.textContent = users[i].name;
            let tdAge = document.createElement("td");
            tdAge.textContent = users[i].age;
            tr.appendChild(tdName);
            tr.appendChild(tdAge);
            tableBody.appendChild(tr);
        }
    };