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
    }
{
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
        }
{
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
}
if (isSearch && q) {
    document.getElementById('search-query').textContent = "Showing results for " + q;
}
if (!isSearch) {
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

// only allow like button to be clicked once

if (window.location.pathname.includes('/content/watch/')) {
    document.getElementById('like-button').addEventListener('click', function () {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
        document.cookie = `liked-${window.location.pathname.split('/').pop()}=True; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
    });
    if (document.cookie.indexOf('liked-2uC2OEUDRaM=True') !== -1) {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
    }
    if (document.cookie.indexOf('liked-3yZDDr0JKVc=True') !== -1) {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
    }
    if (document.cookie.indexOf('liked-boKmZKTKXHc=True') !== -1) {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
    }
    if (document.cookie.indexOf('liked-fM-agiCB51c=True') !== -1) {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
    }
    if (document.cookie.indexOf('liked-MevKTPN4ozw=True') !== -1) {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
    }
    if (document.cookie.indexOf('liked-qW7CGTK-1vA=True') !== -1) {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
    }
}


// Redirect to the video URL when the iframe is clicked
var iframes = document.querySelectorAll('a > iframe');

for (var i = 0; i < iframes.length; i++) {
    iframes[i].addEventListener('click', function(event) {
        console.log("iframe clicked");
        event.preventDefault();
        var url = this.parentNode.getAttribute('href');
        window.location.href = url;
    });
}