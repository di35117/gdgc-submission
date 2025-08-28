const modal = document.getElementById("buyFormModal");
const productTitle = document.getElementById("productTitle");

function openForm(productName) {
  productTitle.textContent = "Buy " + productName;
  modal.style.display = "block";
}

function closeForm() {
  modal.style.display = "none";
}

// Close modal if clicked outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle form submit (demo only)
document.getElementById("buyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Order submitted! Admin will verify payment.");
  closeForm();
});
