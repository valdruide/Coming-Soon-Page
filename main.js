const btnMail = document.getElementById("btn-mail");
const badMail = document.getElementById("badMail");

btnMail.addEventListener("click", () => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailAddr.value
    )
  ) {
    badMail.style.visibility = "visible";
    badMail.style.color = "green";
    badMail.textContent = "Success !"
    return true;
  }
  badMail.style.visibility = "visible";
  badMail.style.color = "red";
  badMail.textContent = "Invalid Mail !"
  return false;
})



const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.getElementById("reponse");


btn1.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.color = "green";
})

btn2.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.color = "red";
})