let homePageCaption = document.getElementById("caption");

function captionChange(){
    let number = Math.floor(Math.random() * 3);
    let arr = ["IT innovation by Yemi", "We are ready to help", "Welcome!"];
    let newMessage = [];
    
    for(let i = 0; i < arr.length; i++){
        switch(number){
            case 0:
                homePageCaption.innerHTML = arr[0];
                break;
            case 1:
                homePageCaption.innerHTML = arr[1];
                break;
            case 2:
                homePageCaption.innerHTML = arr[2];
                break;
        }  
    }   
    newMessage.push(arr);
}
homePageCaption.onclick = captionChange;
homePageCaption.onmouseover = captionChange;


let strengths = document.getElementById("myStrengths");

function isShow() {
  strengths.hidden = false;
}

function isHidden() {
  strengths.hidden = true;
}

strengths.addEventListener("mouseover", isShow);
strengths.addEventListener("mouseout", isHidden);



