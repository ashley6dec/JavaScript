const Circel = document.querySelector(".Circel");
const btn1 = document.querySelector("#clr");
const btn2 = document.querySelector("#shp");
const Shp = document.getElementsByClassName("shp");

function chngclor() {
  let str = "0123456789abcdef";
  let colstr = "#";

  for (let i = 0; i < 6; i++) {
    let crt = Math.floor(Math.random() * str.length);
    colstr += str[crt];
  }

  Circel.style.backgroundColor = colstr;
}

const shape = [
  "square",
  "triangle-up",
  "star-six",
  "hexagon",
  "diamond"
];

function changeShape() {
  let chng = Math.floor(Math.random() * shape.length);
  // console.log(chng);

  Shp[0].id = shape[chng];
}

btn1.addEventListener("click", chngclor);
btn2.addEventListener("click", changeShape);