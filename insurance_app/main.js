//DOM variables
let riskScore = 500;

//input
const firstName = document.querySelector("#first-name").value;
const lastName = document.querySelector("#last-name").value;
const userAge = +document.querySelector("#age").value;
const currentHealthCheckBoxes = document.querySelectorAll(".current-health");
const healthyCheckboxes = document.querySelectorAll(".healthy-habits");
const unHealthyCheckboxes = document.querySelectorAll(".unhealthy-habits");

//output


//Functions

function getAge() {
    return userAge.value;
}

function getCheckboxesCount(checkboxArray) { 
    let count = 0;
    for (let element of checkboxArray) {
        if (element.checked === true) {
            count++
        }
    }
    return ((count * 0.01) = riskScore);
}
