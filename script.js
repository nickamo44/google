let searchBar = document.querySelector(".searchBar");

searchBar.addEventListener("mouseover", function(){
    this.style.backgroundColor = "rgb(180, 180, 180)"
});

searchBar.addEventListener("mouseleave", function(){
    this.style.backgroundColor = "rgb(103, 103, 103)"
});

searchBar.addEventListener("click", function(){
    this.style.backgroundColor = "rgb(71, 71, 71)"
});