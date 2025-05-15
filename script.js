
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message! 🌸");
  this.reset();
});

const cards = document.querySelectorAll(".card");

function filterWork(type) {
  cards.forEach(card => {
    if (type === "all" || card.textContent.toLowerCase().includes(type)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const workSection = document.getElementById("work");
const filterBar = document.createElement("div");
filterBar.innerHTML = `
  <button onclick="filterWork('all')">All</button>
  <button onclick="filterWork('flower')">Flower</button>
  <button onclick="filterWork('garden')">Garden</button>
`;
workSection.insertBefore(filterBar, workSection.children[1]);
filterBar.style.marginBottom = "20px";
filterBar.querySelectorAll("button").forEach(btn => {
  btn.style.margin = "0 5px";
  btn.style.padding = "5px 10px";
  btn.style.background = "#ffe0eb";
  btn.style.border = "1px solid #ffb6c1";
  btn.style.borderRadius = "5px";
});
