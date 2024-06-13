// Menu Click
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

// Make the header sticky on scroll
window.onscroll = function() {onScroll()};

var header = document.getElementById("stickyhead");

var sticky = header.offsetTop;

function onScroll() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}