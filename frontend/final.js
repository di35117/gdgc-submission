document.addEventListener("DOMContentLoaded", () => {
  //alert("HEllo");
  document
    .getElementById("paymentForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      const upi1 = document.getElementById("upi1").checked;
      const upi2 = document.getElementById("upi2").checked;
      const proofInput = document.getElementById("proof");
      const errorMessage = document.getElementById("errorMessage");
      let errors = [];

      if (!upi1 && !upi2) {
        errors.push("Please select a UPI ID option.");
      }
      if (proofInput.files.length === 0) {
        errors.push("Please upload proof of payment.");
      }

      if (errors.length > 0) {
        errorMessage.innerHTML = errors.join("<br>");
        errorMessage.style.display = "block";
        return;
      }

      errorMessage.style.display = "none";

      const orderDetails = {
        quantity: localStorage.getItem("quantity"),
        size: localStorage.getItem("selectedSize"),
        priceAtPurchase: localStorage.getItem("totalPrice"),
        email: localStorage.getItem("email"),
        scholarId: localStorage.getItem("scholarId"),
        hostelNumber: localStorage.getItem("hostel"),
        mobileNumber: localStorage.getItem("mobile"),
        firstName: localStorage.getItem("firstName"),
        secondName: localStorage.getItem("lastName"),
        paidToUpiId: upi1 ? "hello@oksbi" : "hola@oksbi",
      };

      const formData = new FormData();
      for (const key in orderDetails) {
        formData.append(key, orderDetails[key]);
      }
      formData.append("proofOfPayment", proofInput.files[0]);

      try {
        alert("Data submitted");
        const response = await fetch(
          "http://localhost:8000/api/v1/users/submitData",
          {
            method: "POST",
            body: formData,
          }
        );

        const result = await response.json();

        if (response.ok) {
          //alert("Form submitted successfully!");
          localStorage.clear();
        } else {
          errorMessage.innerHTML =
            result.message || "An error occurred during submission.";
          errorMessage.style.display = "block";
        }
      } catch (error) {
        console.error("Submission error:", error);
        errorMessage.innerHTML =
          "Could not connect to the server. Please try again later.";
        errorMessage.style.display = "block";
      }
    });

  document.getElementById("backBtn").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "3rdpage.html";
  });
});
