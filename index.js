alert("Assalomu alaykum My Profile ga hush kelibsiz");
const form = document.querySelector("form");
const input = document.querySelector(".js-input");
const result = document.querySelector(".js-result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const text = input.value;

  if (text === "") {
    result.textContent = "Matn kiriting!";
    return;
  }

  const length = text.length;
  const lower = text.toLowerCase();
  const upper = text.toUpperCase();

  result.innerHTML = `
    Uzunligi: ${length} <br>
    Kichik harflar: ${lower} <br>
    Katta harflar: ${upper}
  `;
});
