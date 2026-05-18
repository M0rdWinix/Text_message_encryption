const card = document.createElement("div");
card.classList.add("card");

const h2 = document.createElement("h2");
h2.textContent = "Title";

const p = document.createElement("p");
p.textContent = "Description";

card.append(h2, p);

document.body.append(card);
