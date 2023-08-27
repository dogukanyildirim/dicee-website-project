let img_1 = document.getElementById("img_1");
let img_2 = document.getElementById("img_2");
const roll_btn = document.getElementById("btn");

roll_btn.addEventListener("click", function () {
  let random_number_1 = Math.floor(Math.random() * 6) + 1;
  let random_img_src_1 = "./assets/images/" + random_number_1 + ".png";
  let random_number_2 = Math.floor(Math.random() * 6) + 1;
  let random_img_src_2 = "./assets/images/" + random_number_2 + ".png";
  img_1.setAttribute("src", random_img_src_1);
  img_2.setAttribute("src", random_img_src_2);

  if (random_number_1 > random_number_2) {
    document.querySelector("h1").innerHTML = "player 1 wins!";
  } else if (random_number_1 < random_number_2) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
  } else {
    document.querySelector("h1").innerHTML = "draw!";
  }
});
