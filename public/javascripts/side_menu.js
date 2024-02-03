let btn_bio1 = document.querySelector("#bio > div:nth-child(1) > button");
let btn_bio2 = document.querySelector("#bio > div:nth-child(2) > button");
let btn_photos1 = document.querySelector("#photos > div:nth-child(1) > button");
let btn_photos2 = document.querySelector("#photos > div:nth-child(2) > button");

btn_bio1.addEventListener("click", () => {
  let div = document.querySelector("main");
  div.innerHTML =
    '<iframe src="../text/bio_early.txt" type="plain/text" width="100%" height="100%">';
});

btn_bio2.addEventListener("click", () => {
  let div = document.querySelector("main");
  div.innerHTML =
    '<iframe src="../text/bio_death.txt" type="plain/text" width="100%" height="100%">';
});

btn_photos1.addEventListener("click", () => {
  let div = document.querySelector("main");
  div.innerHTML =
    '<div id="image_container">' +
    '<div><img src="../images/red_1.jpg"></img></div>' +
    '<div><img src="../images/red_2.jpg"></img></div>' +
    '<div><img src="../images/red_3.jpg"></img></div>' +
    '<div><img src="../images/red_4.jpg"></img></div>' +
    "</div>";
});

btn_photos2.addEventListener("click", () => {
  let div = document.querySelector("main");
  div.innerHTML =
    '<div id="image_container">' +
    '<div><img src="../images/hat_1.jpg"></img></div>' +
    '<div><img src="../images/hat_2.jpg"></img></div>' +
    '<div><img src="../images/hat_3.jpg"></img></div>' +
    '<div><img src="../images/hat_4.jpg"></img></div>' +
    '<div><img src="../images/hat_5.jpg"></img></div>' +
    "</div>";
});
