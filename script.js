const box1 = document.querySelector(".boxmodel-1");
const box2 = document.querySelector(".boxmodel-2");
const submit = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submit.addEventListener("click", () => {
  box2.classList.remove("hidden");
  box1.classList.toggle("hidden");
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
