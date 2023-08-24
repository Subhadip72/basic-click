const first = document.getElementById("first");
const middle = document.getElementById("middle");
const last = document.getElementById("last");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const firstName = first.value;
  const middleName = middle.value;
  const lastName = last.value;

  alert(`Welcome ${firstName} ${middleName} ${lastName}`);
});
