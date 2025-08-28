document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const upi1 = document.getElementById("upi1").checked;
  const upi2 = document.getElementById("upi2").checked;
  const proof = document.getElementById("proof").files.length;

  const errorMessage = document.getElementById("errorMessage");
  let errors = [];

  if (!upi1 && !upi2) {
    errors.push("Please select a UPI ID option.");
  }

  if (proof === 0) {
    errors.push("Please upload proof of payment.");
  }

  if (errors.length > 0) {
    errorMessage.innerHTML = errors.join("<br>");
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    alert("Form submitted successfully!");
  }
});

document.getElementById("backBtn").addEventListener("click", function () {
  alert("Going back...");
});
/*
const email = document.getElementById("email").value.trim();
const scholar = document.getElementById("scholar").value.trim();
const hostel = document.getElementById("hostel").value.trim();
const mobile = document.getElementById("mobile").value.trim();
const fname = document.getElementById("fname").value.trim();
const lname = document.getElementById("lname").value.trim();
*/
