let quantity = 1;
const qtyElement = document.getElementById("quantity");
const price=document.querySelector('.price');
let sum=399;
function increaseQty() {
  quantity++;
  qtyElement.textContent = quantity;
  sum=sum+399;
  price.textContent = `₹ ${sum}`;
}

function decreaseQty() {
  if (quantity >=1) {
    quantity--;
    qtyElement.textContent = quantity;
    sum=sum-399;
    if(sum<=0) sum=0;
    price.textContent = `₹ ${sum}`;
  }
}

// size selection logic
const sizeButtons = document.querySelectorAll(".sizes button");
sizeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    sizeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
