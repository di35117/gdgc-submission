document.addEventListener("DOMContentLoaded", () => {
  const sizeButtons = document.querySelectorAll(".sizes button");
  const increaseQtyBtn = document.querySelector(".plus");
  const decreaseQtyBtn = document.querySelector(".minus");
  const qtySpan = document.querySelector(".qty");
  const priceSpan = document.querySelector(".price");
  const buyNowBtn = document.getElementById("buyNowBtn");
  const basePrice = 399;

  let currentQty = 1;
  let selectedSize = null;

  const updateStateAndLocalStorage = () => {
    const totalPrice = currentQty * basePrice;
    qtySpan.textContent = currentQty;
    priceSpan.textContent = `₹${totalPrice}`;
    localStorage.setItem("quantity", currentQty);
    localStorage.setItem("selectedSize", selectedSize || "");
    localStorage.setItem("totalPrice", totalPrice);
  };

  const initializeFromLocalStorage = () => {
    const storedQty = localStorage.getItem("quantity");
    currentQty = storedQty ? parseInt(storedQty, 10) : 1;
    updateStateAndLocalStorage();
  };

  sizeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      sizeButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedSize = button.textContent;
      updateStateAndLocalStorage();
    });
  });

  increaseQtyBtn.addEventListener("click", () => {
    currentQty++;
    updateStateAndLocalStorage();
  });

  decreaseQtyBtn.addEventListener("click", () => {
    if (currentQty > 1) {
      currentQty--;
      updateStateAndLocalStorage();
    }
  });

  buyNowBtn.addEventListener("click", () => {
    if (selectedSize) {
      window.location.href = "3rdpage.html";
    } else {
      alert("Please select a size before proceeding.");
    }
  });

  initializeFromLocalStorage();
});
