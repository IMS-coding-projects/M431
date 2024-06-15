// Notice: most (not all) of the code here is AI generated and may not be the best practice. It has been modified to work with the website.


// Menu Click
function openNav() {
    var sidenavElement = document.getElementById("sidenav");
    var searchbarElement = document.querySelector('#searchbar');
    var searchbuttonElement = document.querySelector('#searchbutton');
    var headerElement = document.querySelector('header');
    var mainElement = document.querySelector('main');
    var welcomemsgElement = document.querySelector('main div.welcomemsg');
    var images = document.querySelectorAll('img');

    if(sidenavElement) {
        sidenavElement.style.width = "250px";
        sidenavElement.style.zIndex = "3";
    }
    if(searchbarElement) {
        searchbarElement.style.backgroundColor = "#A5A5A5FF";
    }
    if(searchbuttonElement) {
        searchbuttonElement.style.backgroundColor = "#A5A5A5FF";
    }
    if(headerElement) {
        headerElement.style.backgroundColor = "#A5A5A5FF";
        headerElement.style.zIndex = "1";
    }
    if(mainElement) {
        mainElement.style.backgroundColor = "#A5A5A5FF";
    }
    if(welcomemsgElement) {
        welcomemsgElement.style.filter = "brightness(50%)";
    }
    for (var i = 0; i < images.length; i++) {
        if(images[i]) {
            images[i].style.filter = "brightness(60%)";
            images[i].style.transition = "filter 0.5s";
            images[i].style.zIndex = "0";
        }
    }
}

function closeNav() {
    var sidenavElement = document.getElementById("sidenav");
    var searchbarElement = document.querySelector('#searchbar');
    var searchbuttonElement = document.querySelector('#searchbutton');
    var headerElement = document.querySelector('header');
    var mainElement = document.querySelector('main');
    var welcomemsgElement = document.querySelector('main div.welcomemsg');
    var images = document.querySelectorAll('img');

    if(sidenavElement) {
        sidenavElement.style.width = "0px";
    }
    if(searchbarElement) {
        searchbarElement.style.backgroundColor = "#fff";
    }
    if(searchbuttonElement) {
        searchbuttonElement.style.backgroundColor = "lightgrey";
    }
    if(headerElement) {
        headerElement.style.backgroundColor = "white";
    }
    if(mainElement) {
        mainElement.style.backgroundColor = "white";
    }
    if(welcomemsgElement) {
        welcomemsgElement.style.filter = "brightness(100%)";
    }
    for (var i = 0; i < images.length; i++) {
        if(images[i]) {
            images[i].style.filter = "brightness(100%)";
            images[i].style.zIndex = "0";
        }
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
const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get('q');
const isSearch = window.location.pathname === '/search.html';
if (isSearch && q) {
    document.getElementById('search-query').textContent = "Showing results for " + q + ":";
} else if (isSearch && !q) {
    window.location.href = "/";
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
    pElement.style.borderBottomRightRadius = '0';
    pElement.style.borderBottomLeftRadius = '0';
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