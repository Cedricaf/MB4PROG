const black = document.getElementById("js--black");
const orange = document.getElementById("js--orange");
const gold = document.getElementById("js--gold");
const darkblue = document.getElementById("js--darkblue");

const switches = document.getElementsByClassName("product");


black.onclick = function(){
    for (let index = 0; index < switches.length; index++) {
        switches[index].style.display = "none";
    }
    document.getElementById("js--blackModal").style.display = "grid";
}

orange.onclick = function(){
    for (let index = 0; index < switches.length; index++) {
        switches[index].style.display = "none";
    }
    document.getElementById("js--orangeModal").style.display = "grid";
}

gold.onclick = function(){
    for (let index = 0; index < switches.length; index++) {
        switches[index].style.display = "none";
    }
    document.getElementById("js--goldModal").style.display = "grid";
}

darkblue.onclick = function(){
    for (let index = 0; index < switches.length; index++) {
        switches[index].style.display = "none";
    }
    document.getElementById("js--darkblueModal").style.display = "grid";
}


const closeBlackModal = document.getElementById("js--close--black");
const closeOrangeModal = document.getElementById("js--close--orange");
const closeGoldModal = document.getElementById("js--close--gold");
const closeDarkblueModal = document.getElementById("js--close--darkblue");

closeBlackModal.onclick = function(){
    document.getElementById("js--blackModal").style.display = "none";
    for (let index = 0; index < switches.length; index++) {
        switches[index].style.display = "block";
    }

}


closeOrangeModal.onclick = function(){
    document.getElementById("js--orangeModal").style.display = "none";
    for (let index = 0; index < switches.length; index++) {
        switches[index].style.display = "block";
    }

}

closeGoldModal.onclick = function(){
    document.getElementById("js--goldModal").style.display = "none";
    for (let index = 0; index < switches.length; index++) {
        switches[index].style.display = "block";
    }

}

closeDarkblueModal.onclick = function(){
    document.getElementById("js--darkblueModal").style.display = "none";
    for (let index = 0; index < switches.length; index++) {
        switches[index].style.display = "block";
    }

}




