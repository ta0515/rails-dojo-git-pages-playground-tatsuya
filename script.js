const signalCards = [
  {
    title: "README を更新",
    tag: "docs",
    detail: "リポジトリの説明を自分の言葉で追記しました。",
    level: "done"
  },
  {
    title: "CSS を変更",
    tag: "style",
    detail: "背景色とカードの見た目を調整しました。",
    level: "active"
  },
  {
    title: "表示カードを追加",
    tag: "script",
    detail: "JavaScript の配列に新しい項目を追加しました。",
    level: "next"
  }
];

const board = document.querySelector("[data-signal-list]");
const signalButton = document.querySelector("[data-randomize]");

function renderCards(activeIndex = 1) {
  board.innerHTML = "";

  signalCards.forEach((card, index) => {
    const article = document.createElement("article");
    article.className = "signal-card";

    if (index === activeIndex) {
      article.classList.add("is-highlighted");
    }

    article.innerHTML = `
      <p class="card-tag">${card.tag}</p>
      <h3>${card.title}</h3>
      <p>${card.detail}</p>
      <span class="level">${card.level}</span>
    `;

    board.appendChild(article);
  });
}

signalButton.addEventListener("click", () => {
  const nextIndex = Math.floor(Math.random() * signalCards.length);
  renderCards(nextIndex);
});

renderCards();
