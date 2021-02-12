export const createResultSearch = (id, data) => {
  // for (let i = 0; i < 80; i++) {
  //   createResultDataTheme(id, "sdf");
  // }
  data.forEach((element) => {
    createResultDataTheme(id, element);
  });
};
export const createResultSearchsous = (id, data) => {
  // for (let i = 0; i < 80; i++) {
  //   createResultDatasousTheme(id, "sdf");
  // }
  data.forEach((element) => {
    createResultDatasousTheme(id, element);
    console.log(element);
  });
};
const createResultDataTheme = (id, data) => {
  let de = document.getElementById(id);
  let div1 = document.createElement("div");
  let card = document.createElement("div");
  let card_body = document.createElement("div");
  let titre = document.createElement("h4");
  let p = document.createElement("p");
  let img = document.createElement("img");
  let a = document.createElement("a");
  img.src = data.image;
  img.className = "card-img-top";
  p.innerText = data.description;
  titre.className = "header-title";
  titre.innerText = data.nom_theme;
  card_body.className = "card-body";
  card.className = "card";
  card.style = "height:592px;";
  div1.style = "width: 30rem;";
  div1.className = " col-xl-3 col-lg-2 col-sm-6";
  a.className = "btn btn-manomano";
  a.href = `/manomano/soustheme.php?idtheme=${data.id_theme}`;
  a.innerText = "Choisir";
  div1.setAttribute("data-aos", "fade-left");
  div1.setAttribute("data-aos-duration", "1000");
  card_body.appendChild(titre);
  card_body.appendChild(p);

  card_body.appendChild(a);
  card.appendChild(img);
  card.appendChild(card_body);
  div1.appendChild(card);
  de.appendChild(div1);
};
const createResultDatasousTheme = (id, data) => {
  let de = document.getElementById(id);
  let div1 = document.createElement("div");
  let card = document.createElement("div");
  let card_body = document.createElement("div");
  let titre = document.createElement("h4");
  let p = document.createElement("p");
  let img = document.createElement("img");
  let a = document.createElement("a");
  img.src = data.image;
  img.className = "card-img-top";
  p.innerText = data.description;
  titre.className = "header-title";
  titre.innerText = data.nom_soustheme;
  card_body.className = "card-body";
  card.className = "card";
  card.style = "height:592px;";
  div1.style = "width: 30rem;";
  div1.className = "col-xl-3 col-lg-2 col-sm-6";
  a.className = "btn btn-manomano";
  a.href = `/manomano/modelisation/index.php?idthemesous=${data.id_soustheme}`;
  a.innerText = "Choisir";
  div1.setAttribute("data-aos", "fade-left");
  div1.setAttribute("data-aos-duration", "1000");
  card_body.appendChild(titre);
  card_body.appendChild(p);
  card_body.appendChild(a);
  card.appendChild(img);
  card.appendChild(card_body);
  div1.appendChild(card);
  de.appendChild(div1);
};
