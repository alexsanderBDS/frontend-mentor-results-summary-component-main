import data from "./data.json" assert { type: "json" };

const resultEl = document.querySelectorAll(".result");

resultEl.forEach((el, index) => {
  const result = data[index];
  const { icon, category, score } = {
    icon: el.querySelector(".result-icon"),
    category: el.querySelector(".result-name"),
    score: el.querySelector(".result-response"),
  };

  icon.setAttribute("src", result.icon);
  category.textContent = result.category;
  score.innerHTML = `${result.score}<strong> / 100</strong>`;
});
