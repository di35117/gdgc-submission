document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".next");
  const backButton = document.querySelector(".back");
  const errorMessage = document.getElementById("errorMessage");

  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "product.html";
    });
  }

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const scholarId = document.getElementById("scholar").value.trim();
    const hostel = document.getElementById("hostel").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();

    let errors = [];
    if (email === "") errors.push("Please enter an email");
    if (scholarId === "") errors.push("Please enter your scholar id");
    if (hostel === "") errors.push("Please enter your hostel name");
    if (mobile === "") errors.push("Please enter your mobile number");
    if (firstName === "") errors.push("Please enter your first name");
    if (lastName === "") errors.push("Please enter your last name");

    if (errors.length > 0) {
      errorMessage.innerHTML = errors.join("<br>");
      errorMessage.style.display = "block";
    } else {
      localStorage.setItem("email", email);
      localStorage.setItem("scholarId", scholarId);
      localStorage.setItem("hostel", hostel);
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);

      window.location.href = "final.html";
      errorMessage.style.display = "none";
    }
  });
});
