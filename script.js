let costelement = document.getElementById("cost");
let coststring = costelement.textContent;
let cost = parseInt(coststring);
let countelement = document.getElementById("count");
let countstring = countelement.textContent;
let count = parseInt(countstring);
let totalcost = document.getElementById("totalcost");

let add_btn = document.getElementById("add_btn");
let remove_btn = document.getElementById("remove_btn");
let inc_btn = document.getElementById("inc_btn");
let dec_btn = document.getElementById("dec_btn");
let checkout_btn = document.getElementById("checkout_btn");

add_btn.addEventListener("click", () => {
  count = 1;
  countelement.textContent = count;
  total = cost * count;
  totalcost.innerHTML = `total cost : ${total}`;
});
remove_btn.addEventListener("click", () => {
  count = 0;
  countelement.textContent = count;
  totalcost.innerHTML = "";
});

inc_btn.addEventListener("click", () => {
  count++;
  countelement.textContent = count;
  total = cost * count;
  totalcost.innerHTML = `total cost : ${total}`;
});
dec_btn.addEventListener("click", () => {
  if (count <= 0) {
    alert("add items first");
  } else {
    count--;
    countelement.textContent = count;
    total = cost * count;
    totalcost.innerHTML = `total cost : ${total}`;
  }
});
checkout_btn.addEventListener("click", () => {
  if (count <= 0) {
    alert("add items first");
  } else {
    alert("thank you for shopping");
  }
});
