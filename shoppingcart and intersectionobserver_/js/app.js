const gameButton = document.getElementsByClassName("games__button");
const cartAmount = document.getElementsByClassName("shoppingCart__Message")[0];
const shoppingModal = document.getElementById("js--shopModal");

let cartMessage = 0;
let modalisOpen = false;
let yoda = 0;
let wakanda = 0;
let spiderman = 0;


const amountOfYoda = document.getElementById("js--yoda");
const amountOfWakanda = document.getElementById("js--wakanda");
const amountOfSpiderman = document.getElementById("js--spiderman");


for (let index = 0; index < gameButton.length; index++) {
    gameButton[index].onclick = function () {
        cartMessage += 1;
        cartAmount.innerHTML = cartMessage;
        switch (gameButton[index].dataset.product) {
            case "yoda":
                yoda += 1;
                amountOfYoda.innerHTML = yoda + "x";
                break;
            case "wakanda":
                wakanda += 1;
                amountOfWakanda.innerHTML = wakanda + "x";
                break;
            case "spiderman":
                spiderman += 1;
                amountOfSpiderman.innerHTML = spiderman + "x";
                break;
        }

        if (modalisOpen === false) {
            modalisOpen = true;
            shoppingModal.style.display = "flex";
            setTimeout(function () {
                shoppingModal.style.display = "none";
                modalisOpen = false;
            }, 1500);
        }

    }

}


var magnifyer = document.getElementsByClassName("searchBar__glass")[0].style.display = "flex";

const checkoutButton = document.getElementById("js--checkoutButton");
const checkoutWindow = document.getElementById("js--checkoutWindow");

let checkoutisOpen = false;

checkoutButton.onclick = function () {
    if (checkoutisOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block";
        checkoutisOpen = true;
        SearchBar.style.display = "none";
        document.getElementsByClassName("searchBar__glass")[0].style.display = "none";
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    SearchBar.style.display = "block";
    document.getElementsByClassName("searchBar__glass")[0].style.display = "flex";
    checkoutisOpen = false;


}


const SearchBar = document.getElementById("js--searchBar");
const games = document.getElementsByClassName("games__game");

SearchBar.onkeyup = function (event) {
    let searchTerm = SearchBar.value.toUpperCase().split("").join("");

    if (event.keyCode === 13) {
        for (let index = 0; index < games.length; index++) {
            console.log(searchTerm);
            if (games[index].dataset.type.search(SearchBar.value.toUpperCase()) === -1) {
                games[index].style.opacity = 0.3;
            }
            else {
                games[index].style.opacity = 1;
            }

        }

    }
}



//intersection observer

let observer = new IntersectionObserver(
    function (entries) {
        if (entries[0].isIntersecting === true) {
            console.log("voor 50% in beeld");
            document.getElementsByTagName("main")[0].classList.add("a-popup");
            observer.disconnect();
        }
        else {
            console.log("voor minder dan 50% in beeld");
        }

    }, {
    threshold: 0.5,
}
);

observer.observe(document.getElementsByTagName("main")[0]);