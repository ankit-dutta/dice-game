const playgame = () => {
  var randomnumberone = Math.floor(Math.random() * 6) + 1;
  var randomimageonepath = "images/" + randomnumberone + ".png";

  var randomnumbertwo = Math.floor(Math.random() * 6) + 1;
  var randomimagetwopath = "images/" + randomnumbertwo + ".png";

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomimageonepath);

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomimagetwopath);

  if (randomnumberone > randomnumbertwo) {
    document.querySelector("h1").innerHTML = "player one wins👑";
  } else if (randomnumbertwo > randomnumberone) {
    document.querySelector("h1").innerHTML = "player two wins👑";
  } else {
    document.querySelector("h1").innerHTML = "draw👑";
  }
};

document.querySelector("button").addEventListener("click", playgame);
