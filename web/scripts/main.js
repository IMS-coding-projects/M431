// Menu Click
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.body.style.backgroundColor = "#A5A5A5FF";
    document.querySelector('#searchbar').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('#searchbutton').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('header').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('main').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('a.playlist-items').style.backgroundColor = "#A5A5A5FF";
   

}

function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
    document.body.style.backgroundColor = "white";
    document.querySelector('#searchbar').style.backgroundColor = "#fff";
    document.querySelector('#searchbutton').style.backgroundColor = "#fff";
    document.querySelector('header').style.backgroundColor = "white";
    document.querySelector('main').style.backgroundColor = "white";

}

// Make the header sticky on scroll
window.onscroll = function() {onScroll()};

var header = document.getElementById("stickyhead");

var sticky = header.offsetTop;

function onScroll() {
    if (window.location.pathname.includes('/content/watch/')) {
        header.classList.remove("sticky");
    } else {
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}


// Search Bar
var urlParams = new URLSearchParams(window.location.search);

var q = urlParams.get('q');

var isSearch = window.location.pathname === '/search.html';

if (!q && isSearch) {
    window.location.href = "/";
} else if (isSearch && q) {
document.getElementById('search-query').textContent = "Showing results for " + q;
} else if (!isSearch) {
}

// Block ads
const clear = (() => {
    const defined = v => v !== null && v !== undefined;
    const timeout = setInterval(() => {
        const ad = [...document.querySelectorAll('.ad-showing')][0];
        if (defined(ad)) {
            const video = document.querySelector('video');
            if (defined(video)) {
                video.currentTime = video.duration;
            }
        }
    }, 500);
    return function() {
        clearTimeout(timeout);
    }
})();


// Like Ads
document.getElementById('like-button').addEventListener('click', function() {
    // Your code here
    document.getElementById('like-button').style.backgroundColor = "green";
    document.getElementById('like-button').textContent = "Liked👍";
});