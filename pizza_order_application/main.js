// DOM variables
const customerName = document.querySelector("#customer-name");
const pizzaSizeRadios = document.querySelectorAll("input[name='pizza-size']");
const toppingCheckBoxes = document.querySelectorAll("input[name='topping']");
const deliveryOption = document.querySelector("#delivery");
const testButton = document.querySelector("#test");
let totalAmount = document.querySelector("#total");
const form = document.querySelector(".form");

// Functions section

// Returns the value from CustomerName input field
function getCustomerName() {
    return customerName.value;
}

// Checks which of the pizza size radio buttons is pressed and return it's value as a number
function getPizzaSizeValue() {
    for (let i = 0; i < pizzaSizeRadios.length; i++) {
        if (pizzaSizeRadios[i].checked) {
            return parseFloat(pizzaSizeRadios[i].value);
        }
    }
}

// Calculates the cost of toppings
function getToppingsValue() {
    let toppingCount = 0;
    let toppingsCost = 0;

    for (let i = 0; i < toppingCheckBoxes.length; i++) {
        if (toppingCheckBoxes[i].checked) {
            toppingCount++;
            // First 4 topping are free. After 4th topping they cost 0.50 each.
            if (toppingCount > 4) {
                toppingsCost+= 0.50;
            }
        }
    }
    return toppingsCost;
}

// Returns the value of delivery option
function getDeliveryCost() {
    return parseFloat(deliveryOption.value);
}

// Every time you click some part of the form, the price gets updated
function updateCost() {
    totalAmount.textContent = `${getPizzaSizeValue() + getToppingsValue() + getDeliveryCost()}`
}

// Event listeners

// Pizza size radio buttons

for (let i = 0; i < pizzaSizeRadios.length; i++) {
    pizzaSizeRadios[i].addEventListener("click",updateCost);
}

// Pizza topping checkboxes

for (let i = 0; i < toppingCheckBoxes.length; i++) {
    toppingCheckBoxes[i].addEventListener("change", updateCost);
}

// Delivery method options 

deliveryOption.addEventListener("change", updateCost);
