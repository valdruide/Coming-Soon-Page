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
