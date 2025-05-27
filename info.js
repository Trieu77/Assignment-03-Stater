const emailInput = document.getElementById("email-input");
const submitBtn = document.getElementById("submit-btn");
const ErrorMsg = document.getElementById("email-error");
const emailForm = document.getElementById("email");
const infoForm = document.getElementById("info");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn.addEventListener("click", function () {
  const email = emailInput.value.trim();

  if (!regex.test(email)) {
    ErrorMsg.style.color = "red";
    ErrorMsg.innerHTML = "Email khong hop le. Vui long nhap lai";
  } else {
    ErrorMsg.textContent = "";
    emailForm.classList.add("hide");
    infoForm.classList.remove("info");
  }
});
