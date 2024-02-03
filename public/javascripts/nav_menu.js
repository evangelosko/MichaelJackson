function show_hide_sidemenu(div_id) {
  for (let elem of document.querySelector("#side_menu_container").children) {
    if (elem.id === div_id) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  }
}

let homebtn = document.querySelector("#home_button");
let btn1 = document.querySelector("nav > div:nth-child(1) > button");
let btn2 = document.querySelector("nav > div:nth-child(2) > button");
let btn3 = document.querySelector("nav > div:nth-child(3) > button");
let btn4 = document.querySelector("nav > div:nth-child(4) > button");
let btn5 = document.querySelector("nav > div:nth-child(5) > button");

homebtn.addEventListener("click", () => {
  show_hide_sidemenu("");
  let div = document.querySelector("main");
  div.innerHTML = "";
});

btn1.addEventListener("click", () => {
  show_hide_sidemenu("bio");
});

btn2.addEventListener("click", () => {
  show_hide_sidemenu("photos");
});

btn3.addEventListener("click", () => {
  show_hide_sidemenu("discography");
});

btn4.addEventListener("click", () => {
  show_hide_sidemenu("links");
});

btn5.addEventListener("click", () => {
  show_hide_sidemenu("manage");
});
