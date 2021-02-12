export const createResultSearch = (id, data) => {
  for (let i = 0; i < 80; i++) {
    createResultData(id, "sdf");
  }
  // for (const [key, value] of Object.entries(data)) {
  //   createResultData(id, value);
  // }
};
export const createResultData = (id, data) => {
  let de = document.getElementById(id);
  let div1 = document.createElement("div");
  let card = document.createElement("div");
  let card_body = document.createElement("div");
  let titre = document.createElement("h4");
  let p = document.createElement("p");
  let img = document.createElement("img");
  img.src =
    "https://blog.materielelectrique.com/wp-content/uploads/2017/02/harmoniques-perturbations-electriques-1.jpg";
  img.className = "card-img-top";
  p.innerText =
    "With supporting text below as a natural lead-in to additional content.";
  let p1 = document.createElement("p");
  p1.innerText =
    "With supporting text below as a natural lead-in to additional content.";
  let p2 = document.createElement("p");
  p2.innerText =
    "With supporting text below as a natural lead-in to additional content.";
  let p3 = document.createElement("p");
  p2.innerText =
    "With supporting text below as a natural lead-in to additional content.";
  titre.className = "header-title";
  titre.innerText = "textdsgdfgdf";
  card_body.className = "card-body";
  card.className = "card";
  div1.style = "width: 30rem;";
  div1.className = " col-xl-3 col-lg-3 col-sm-9";
  card_body.appendChild(titre);
  card_body.appendChild(p);
  card_body.appendChild(p1);
  card_body.appendChild(p2);
  card_body.appendChild(p3);
  card.appendChild(img);
  card.appendChild(card_body);
  div1.appendChild(card);
  de.appendChild(div1);
};
