const loginSignupElement = document.querySelector('.login-button');
const loginSignupText = document.querySelector('.login-button a');
if (localStorage.getItem('loggedIn') === 'true') {
    loginSignupText.textContent = 'Dashboard';
    loginSignupText.href = '/M431-WebProject/pages/account/';
    loginSignupElement.href = '/M431-WebProject/pages/account/';
    loginSignupElement.style.backgroundColor = '#f71d1d';
}

// Menu Click
// nav from w3schools.com with custom modifications
const sidenavElement = document.getElementById("sidenav");
const headerElement = document.querySelectorAll('header');
const mainElement = document.querySelectorAll('main');
const welcomemsgElement = document.querySelector('main div.welcomemsg');
const inputElements = document.querySelectorAll('input');
const buttonElements = document.querySelectorAll('button:not(.sidenav-styles button):not(.login-button)');
const images = document.querySelectorAll('img');
const footerElement = document.querySelectorAll('footer');
const bodyElement = document.querySelector('body');
const loginButton = document.querySelector('.login-button a');
const formElement = document.querySelectorAll('.login-signup-container form');
const selectElements = document.querySelectorAll('select');
const accountCenterButtons = document.querySelectorAll('.account-center-container button');

function openNav() {
    loginButton.style.color = "#A5A5A5FF";
    bodyElement.style.backgroundColor = "#A5A5A5FF";
    if(sidenavElement) {
        sidenavElement.style.width = "250px";
        sidenavElement.style.zIndex = "5";
    }
    for (let h = 0; h < headerElement.length; h++) {
        if(headerElement[h]) {
            headerElement[h].style.backgroundColor = "#A5A5A5FF";
            headerElement[h].style.zIndex = "1";
        }
    }
    for (let s = 0; s < selectElements.length; s++) {
        if(selectElements[s]) {
            selectElements[s].style.backgroundColor = "#A5A5A5FF";
        }
    }
    for (let m = 0; m < mainElement.length; m++) {
        if(mainElement[m]) {
            mainElement[m].style.backgroundColor = "#A5A5A5FF";
        }
    }
    if(welcomemsgElement) {
        welcomemsgElement.style.filter = "brightness(50%)";
    }
    for (let f = 0; f < footerElement.length; f++) {
        if(footerElement[f]) {
            footerElement[f].style.backgroundColor = "#A5A5A5FF";
        }
    }
    for (let i = 0; i < inputElements.length; i++) {
        if(inputElements[i]) {
            inputElements[i].style.backgroundColor = "#959595";
        }
    }
    for (let i = 0; i < buttonElements.length; i++) {
        if(buttonElements[i]) {
            buttonElements[i].style.backgroundColor = "#5e5e5e";
            buttonElements[i].style.color = "#a5a5a5";
        }
    }
    for (let i = 0; i < images.length; i++) {
        if(images[i]) {
            images[i].style.filter = "brightness(60%)";
            images[i].style.transition = "filter 0.5s";
            images[i].style.zIndex = "0";
        }
    }
    for (let i = 0; i < formElement.length; i++) {
        if(formElement[i]) {
            formElement[i].style.backgroundColor = "#9c9c9c";
        }
    }
}

function closeNav() {
    loginButton.style.color = "white";
    bodyElement.style.backgroundColor = "white";
    if(sidenavElement) {
        sidenavElement.style.width = "0px";
    }
    for (let h = 0; h < headerElement.length; h++) {
        if(headerElement[h]) {
            headerElement[h].style.backgroundColor = "white";
        }
    }
    for (let m = 0; m < mainElement.length; m++) {
        if(mainElement[m]) {
            mainElement[m].style.backgroundColor = "white";
        }
    }
    for (let s = 0; s < selectElements.length; s++) {
        if(selectElements[s]) {
            selectElements[s].style.backgroundColor = "white";
        }
    }
    for (let f = 0; f < footerElement.length; f++) {
        if(footerElement[f]) {
            footerElement[f].style.backgroundColor = "white";
        }
    }
    for (let i = 0; i < inputElements.length; i++) {
        if(inputElements[i]) {
            inputElements[i].style.backgroundColor = "white";
        }
    }
    for (let i = 0; i < buttonElements.length; i++) {
        if(buttonElements[i]) {
            buttonElements[i].style.backgroundColor = "#595959";
            buttonElements[i].style.color = "white";
        }
    }
    if(welcomemsgElement) {
        welcomemsgElement.style.filter = "brightness(100%)";
    }
    for (let i = 0; i < images.length; i++) {
        if(images[i]) {
            images[i].style.filter = "brightness(100%)";
            images[i].style.zIndex = "0";
        }
    }
    for (let i = 0; i < formElement.length; i++) {
        if(formElement[i]) {
            formElement[i].style.backgroundColor = "#e1e1e1";
        }
    }
    for (let i = 0; i < accountCenterButtons.length; i++) {
        if(accountCenterButtons[i]) {
            accountCenterButtons[i].style.backgroundColor = "#F0F0F0";
            accountCenterButtons[i].style.color = "black";
            if (accountCenterButtons[i].textContent === "Log Out") {
                accountCenterButtons[i].style.backgroundColor = "#595959";
                accountCenterButtons[i].style.color = "white";
                accountCenterButtons[i].addEventListener('mouseover', function() {
                    accountCenterButtons[i].style.backgroundColor = "#f71d1d";
                });
                accountCenterButtons[i].addEventListener('mouseout', function() {
                    accountCenterButtons[i].style.backgroundColor = "#595959";
                });
            }
            if (accountCenterButtons[i].textContent === "Delete Account") {
                accountCenterButtons[i].style.backgroundColor = "#F0F0F0";
                accountCenterButtons[i].style.color = "black";
                accountCenterButtons[i].addEventListener('mouseover', function() {
                    accountCenterButtons[i].style.backgroundColor = "#f71d1d";
                });
                accountCenterButtons[i].addEventListener('mouseout', function() {
                    accountCenterButtons[i].style.backgroundColor = "#F0F0F0";
                });
            }
        }
    }
}

// Make the header sticky on scroll
// stick header from GitHub Copilot with custom modifications
window.onscroll = function() {onScroll()};
const header = document.getElementById("stickyhead");
const sticky = header.offsetTop;
function onScroll() {
    if (window.location.pathname.includes('/M431-WebProject/content/watch/') || window.location.pathname.includes('/M431-WebProject/pages/streamsphere-music/')) {
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
window.onload = function() {
    function getUrlParams() {
        return new URLSearchParams(window.location.search);
    }
    let urlParams = getUrlParams();
    let q = urlParams.get('q');
    let isSearch = window.location.pathname === '/M431-WebProject/search.html' || window.location.pathname === '/M431-WebProject/pages/streamsphere-music/search.html';
    if (isSearch && q) {
        document.getElementById('search-query').textContent = "Showing results for " + q + ":";
    } else if (isSearch && !q) {
        window.location.href = "/M431-WebProject/";
    }

    // only allow like button to be clicked once
    // own code with little help from Copilot
    if (window.location.pathname.includes('/M431-WebProject/content/watch/')) {
        const videoId = window.location.pathname.split('/').pop();
        document.getElementById('like-button').addEventListener('click', function () {
            document.getElementById('like-button').style.backgroundColor = "green";
            document.getElementById('like-button').textContent = "Liked👍";
            localStorage.setItem(`liked-${videoId}`, 'True');
        });
        if (localStorage.getItem(`liked-${videoId}`) === 'True') {
            document.getElementById('like-button').style.backgroundColor = "green";
            document.getElementById('like-button').textContent = "Liked👍";
        }
    }

};



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

// read more button
// Copilot generated code with modifications
const pElement = document.querySelector('main.watchview > p');
if (pElement && pElement.textContent.length > 300) {
    const fullText = pElement.innerHTML;
    pElement.innerHTML = pElement.innerHTML.substring(0, 300) + '...';
    pElement.style.borderBottomRightRadius = '0';
    pElement.style.borderBottomLeftRadius = '0';
    const readMoreButton = document.createElement('button');
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