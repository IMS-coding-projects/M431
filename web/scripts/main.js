// Notice: most (not all) of the code here is AI generated (GitHub Copilot) and may not be the best practice. It has been modified to work with the website.

var sidenavElement = document.getElementById("sidenav");
var headerElement = document.querySelectorAll('header');
var mainElement = document.querySelectorAll('main');
var welcomemsgElement = document.querySelector('main div.welcomemsg');
var inputElements = document.querySelectorAll('input');
var buttonElements = document.querySelectorAll('button:not(.sidenav-styles button)');
var images = document.querySelectorAll('img');
var footerElement = document.querySelectorAll('footer');
var bodyElement = document.querySelector('body');
var loginButton = document.querySelector('.login-button a');

// Menu Click
// nav from w3schools.com with custom modifications
function openNav() {
    loginButton.style.color = "#A5A5A5FF";
    bodyElement.style.backgroundColor = "#A5A5A5FF";
    if(sidenavElement) {
        sidenavElement.style.width = "250px";
        sidenavElement.style.zIndex = "5";
    }
    for (var h = 0; h < headerElement.length; h++) {
        if(headerElement[h]) {
            headerElement[h].style.backgroundColor = "#A5A5A5FF";
            headerElement[h].style.zIndex = "1";
        }
    }
    for (var m = 0; m < mainElement.length; m++) {
        if(mainElement[m]) {
            mainElement[m].style.backgroundColor = "#A5A5A5FF";
        }
    }
    if(welcomemsgElement) {
        welcomemsgElement.style.filter = "brightness(50%)";
    }
    for (var f = 0; f < footerElement.length; f++) {
        if(footerElement[f]) {
            footerElement[f].style.backgroundColor = "#A5A5A5FF";
        }
    }
    for (var i = 0; i < inputElements.length; i++) {
        if(inputElements[i]) {
            inputElements[i].style.backgroundColor = "#959595";
        }
    }
    for (var i = 0; i < buttonElements.length; i++) {
        if(buttonElements[i]) {
            buttonElements[i].style.backgroundColor = "#5e5e5e";
            buttonElements[i].style.color = "#a5a5a5";
        }
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
    loginButton.style.color = "white";
    bodyElement.style.backgroundColor = "white";
    if(sidenavElement) {
        sidenavElement.style.width = "0px";
    }
    for (var h = 0; h < headerElement.length; h++) {
        if(headerElement[h]) {
            headerElement[h].style.backgroundColor = "white";
        }
    }
    for (var m = 0; m < mainElement.length; m++) {
        if(mainElement[m]) {
            mainElement[m].style.backgroundColor = "white";
        }
    }
    for (var f = 0; f < footerElement.length; f++) {
        if(footerElement[f]) {
            footerElement[f].style.backgroundColor = "white";
        }
    }
    for (var i = 0; i < inputElements.length; i++) {
        if(inputElements[i]) {
            inputElements[i].style.backgroundColor = "white";
        }
    }
    for (var i = 0; i < buttonElements.length; i++) {
        if(buttonElements[i]) {
            buttonElements[i].style.backgroundColor = "#595959";
            buttonElements[i].style.color = "white";
        }
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
// stick header from GitHub Copilot with custom modifications
window.onscroll = function() {onScroll()};
var header = document.getElementById("stickyhead");
var sticky = header.offsetTop;
function onScroll() {
    if (window.location.pathname.includes('/content/watch/') || window.location.pathname.includes('/pages/streamsphere-music/')) {
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
// search from w3schools.com with custom modifications
const urlParams = new URLSearchParams(window.location.search);
const q = urlParams.get('q');
const isSearch = window.location.pathname === '/search.html';
if (isSearch && q) {
    document.getElementById('search-query').textContent = "Showing results for " + q + ":";
} else if (isSearch && !q) {
    window.location.href = "/";
}

// Block ads
// block embedded ads from https://stackoverflow.com/questions/53433184/remove-ads-from-embedded-youtube-video
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
// own code with little help from Copilot
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
// Copilot generated code with modifications
var pElement = document.querySelector('main.watchview > p');
if (pElement && pElement.textContent.length > 300) {
    var fullText = pElement.innerHTML;
    pElement.innerHTML = pElement.innerHTML.substring(0, 300) + '...';
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