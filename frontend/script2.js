document.addEventListener("DOMContentLoaded", () => {
  const next = document.querySelector(".next");
  const errorMessage = document.getElementById("errorMessage");
  const back = document.querySelector(".back").addEventListener("click", () => {
    window.location.href = "product.html";
    alert("Going back to previous step");
  });

  next.addEventListener("click", (e) => {
    //console.log("chutiya");
    const email = document.getElementById("email").value.trim();
    const scholar = document.getElementById("scholar").value.trim();
    const hostel = document.getElementById("hostel").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    e.preventDefault();
    let errors = [];
    if (email == "") {
      errors.push("Please enter an email");
    }
    if (scholar == "") {
      errors.push("Please enter your scholar id");
    }
    if (hostel == "") {
      errors.push("Please enter your hostel name");
    }
    if (mobile == "") {
      errors.push("Please enter your mobile numnber");
    }
    if (fname == "") {
      errors.push("Please enter your first name");
    }
    if (lname == "") {
      errors.push("Please enter your last name");
    }
    //console.log(errors);
    if (errors.length > 0) {
      errorMessage.innerHTML = errors.join("<br>");
      errorMessage.style.display = "block";
    } else {
      window.location.href = "final.html";
      errorMessage.style.display = "none";
      alert("Proceeding to next page");
    }
  });
});
