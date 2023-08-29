function calcGasoline() {
const price = document.querySelector("#price").value;
const money = document.querySelector("#money").value;
const answer = document.getElementById("sum");

division = (money / price).toFixed(2);

console.log(price);
console.log(money);

division >= 10 ? answer.innerText = `You get ${division} litres of gas. Good, you can escape now` : answer.innerText = `You get ${division} litres of gas. Ups, you have to stay here.`;
}