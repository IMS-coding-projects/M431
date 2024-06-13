function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "#A5A5A5FF";
    document.querySelector('#searchbar').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('#searchbutton').style.color = "#A5A5A5FF";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0px";
    document.body.style.backgroundColor = "white";
    document.querySelector('#searchbar').style.backgroundColor = "#fff";
    document.querySelector('#searchbutton').style.color = "#000";
}