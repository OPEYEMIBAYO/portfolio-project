let strengths = document.getElementById("myStrengths");
let aboutMe = document.getElementById("about");
let myProfession = document.getElementById("professional");

function isShow() {
  strengths.hidden = false;
  aboutMe.hidden = false;
  myProfession.hidden = false;
}

function isHidden() {
  strengths.hidden = true;
  aboutMe.hidden = true;
  myProfession.hidden = true;
}

strengths.addEventListener("mouseout", isShow);
strengths.addEventListener("mouseover", isHidden);
aboutMe.addEventListener("mouseout", isShow);
aboutMe.addEventListener("mouseover", isHidden);
myProfession.addEventListener("mouseout", isShow);
myProfession.addEventListener("mouseover", isHidden);



