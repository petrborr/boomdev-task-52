import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
      const article = document.createElement("article")
      article.classList.add("message")
      article.innerText = "sample content"
      document.body.appendChild(article)
    }
    alert("💣");
  });
});
