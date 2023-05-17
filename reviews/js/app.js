let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modes = "one-two-three";




for (let index = 0; index < arrowButtons.length; index++) {
    arrowButtons[index].onclick = function () {
        if (modes === "one-two-three") {
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            modes = "four-five-six";
        }
            
        else{
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            modes = "one-two-three";
            
        }

    }
}