// Notice: most (not all) of the code here is AI generated and may not be the best practice. It has been modified to work with the website.


// Menu Click
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("sidenav").style.zIndex = "3";
    document.body.style.backgroundColor = "#A5A5A5FF";
    document.querySelector('#searchbar').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('#searchbutton').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('header').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('main').style.backgroundColor = "#A5A5A5FF";
    document.querySelector('header').style.zIndex = "1";
    //document.querySelector('a.playlist-items').style.backgroundColor = "#A5A5A5FF";
    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.filter = "brightness(50%)";
        images[i].style.transition = "filter 0.5s";
        images[i].style.zIndex = "0";
    }
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
    document.body.style.backgroundColor = "white";
    document.querySelector('#searchbar').style.backgroundColor = "#fff";
    document.querySelector('#searchbutton').style.backgroundColor = "#fff";
    document.querySelector('header').style.backgroundColor = "white";
    document.querySelector('main').style.backgroundColor = "white";
    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.filter = "brightness(100%)";
        images[i].style.zIndex = "0";
    }
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
    var videoId = window.location.pathname.split('/').pop();
    document.getElementById('like-button').addEventListener('click', function () {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
        document.cookie = `liked-${videoId}=True; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
    });
    if (document.cookie.indexOf(`liked-${videoId}=True`) !== -1) {
        document.getElementById('like-button').style.backgroundColor = "green";
        document.getElementById('like-button').textContent = "Liked👍";
    }
}

// read more button
var pElement = document.querySelector('main.watchview > p');
if (pElement.textContent.length > 300) {
    var fullText = pElement.innerHTML;
    var truncatedText = pElement.innerHTML.substring(0, 300) + '...';
    pElement.innerHTML = truncatedText;
    pElement.style.borderBottomRightRadius = '0px';
    pElement.style.borderBottomLeftRadius = '0px';
    var readMoreButton = document.createElement('button');
    readMoreButton.textContent = 'Read More';
    readMoreButton.className = 'read-more';
    readMoreButton.addEventListener('click', function() {
        pElement.style.borderBottomRightRadius = '15px';
        pElement.style.borderBottomLeftRadius = '15px';
        pElement.innerHTML = fullText;
        readMoreButton.remove();
    });
    pElement.parentNode.insertBefore(readMoreButton, pElement.nextSibling);
}