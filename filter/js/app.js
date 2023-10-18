let allGames = document.getElementsByClassName("game");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 


setInterval(function(){
    document.getElementsByTagName("body")[0].style.overflow = "auto";
}, 3000);


let filters = document.getElementsByClassName("filter");

for (let index = 0; index < filters.length; index++) {
    filters[index].checked = true;
    
}

let adventureFilter = document.getElementById("checkbox-adventure");
let horrorFilter = document.getElementById("checkbox-horror");
let fantasyFilter = document.getElementById("checkbox-fantasy");


filters[0].onchange = function(){
    console.log(filters[0].checked)
    if (filters[0].checked === true){
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "adventure") {
                allGames[index].style.display = "block";

            
            }
            
        }
        
    }
    else{
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "adventure"){
                allGames[index].style.display= "none";
            }
            
    
        }
    }


}

filters[1].onchange = function(){
    console.log(filters[1].checked)
    if (filters[1].checked === true){
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "horror") {
                allGames[index].style.display = "block";

            
            }
            
        }
        
    }
    else{
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "horror"){
                allGames[index].style.display= "none";
            }
            
    
        }
    }


}

filters[2].onchange = function(){
    console.log(filters[2].checked)
    if (filters[2].checked === true){
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "fantasy") {
                allGames[index].style.display = "block";

            
            }
            
        }
        
    }
    else{
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "fantasy"){
                allGames[index].style.display= "none";
            }
            
    
        }
    }


}