let searchBarGroup = document.querySelector(".searchBarGroup");
let searchBar = document.querySelector(".searchBar");

searchBarGroup.addEventListener("mouseover", function(){
    this.style.backgroundColor = "rgb(180, 180, 180)";
});

searchBarGroup.addEventListener("mouseleave", function(){
    if(searchBarGroup.clicked !== true){
        this.style.backgroundColor = "rgb(103, 103, 103)";
    }
});

searchBarGroup.addEventListener("click", function(){
    this.style.backgroundColor = "rgb(71, 71, 71)";
    searchBar.focus();
});