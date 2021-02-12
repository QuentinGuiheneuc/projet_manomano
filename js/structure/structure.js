export const createResultSearch = (id, data) => {
  for (let i = 0; i < 80; i++) {
    createResultDataTheme(id, "sdf");
  }
  // for (const [key, value] of Object.entries(data)) {
  //   createResultData(id, value);
  // }
};
export const createResultSearchsous = (id, data) => {
  for (let i = 0; i < 80; i++) {
    createResultDatasousTheme(id, "sdf");
  }
  // for (const [key, value] of Object.entries(data)) {
  //   createResultData(id, value);
  // }
};
export const createResultDataTheme = (id, data) => {
  let de = document.getElementById(id);
  let div1 = document.createElement("div");
  let card = document.createElement("div");
  let card_body = document.createElement("div");
  let titre = document.createElement("h4");
  let p = document.createElement("p");
  let img = document.createElement("img");
  let a = document.createElement("a");
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
  div1.className = " col-xl-3 col-lg-2 col-sm-6";
  a.className = "btn btn-manomano";
  a.href = `/manomano/soustheme.php?idtheme=${"1"}`;
  a.innerText = "Choisir";
  div1.setAttribute("data-aos", "fade-left");
  div1.setAttribute("data-aos-duration", "1000");
  card_body.appendChild(titre);
  card_body.appendChild(p);
  card_body.appendChild(p1);
  card_body.appendChild(p2);
  card_body.appendChild(p3);
  card_body.appendChild(a);
  card.appendChild(img);
  card.appendChild(card_body);
  div1.appendChild(card);
  de.appendChild(div1);
};
export const createResultDatasousTheme = (id, data) => {
  let de = document.getElementById(id);
  let div1 = document.createElement("div");
  let card = document.createElement("div");
  let card_body = document.createElement("div");
  let titre = document.createElement("h4");
  let p = document.createElement("p");
  let img = document.createElement("img");
  let a = document.createElement("a");
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
  div1.className = " col-xl-3 col-lg-2 col-sm-6";
  a.className = "btn btn-manomano";
  a.href = `/manomano/tuto.php?idtheme=${"1"}`;
  a.innerText = "Choisir";
  div1.setAttribute("data-aos", "fade-left");
  div1.setAttribute("data-aos-duration", "1000");
  card_body.appendChild(titre);
  card_body.appendChild(p);
  card_body.appendChild(p1);
  card_body.appendChild(p2);
  card_body.appendChild(p3);
  card_body.appendChild(a);
  card.appendChild(img);
  card.appendChild(card_body);
  div1.appendChild(card);
  de.appendChild(div1);
};
