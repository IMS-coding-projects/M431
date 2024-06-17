function saveData() {
    const username = document.querySelector('#username').value;
    if (username === '' || username.length < 3 || username === 'admin' || username.includes(' ')) {
        alert('Invalid username. Please try another username. (Username must be at least 3 characters long, not "admin" and cannot contain spaces)');
        return;
    }
    localStorage.setItem('username', username);
    const saveButton = document.querySelector('#save-info');
    saveButton.innerHTML = 'Account information updated successfully!';
    setTimeout(function() {
        saveButton.innerHTML = 'Save Account Information';
        window.location.reload();
    }, 3000);
}

function renewSubscription() {
    const renewSubButton = document.querySelector('#subscription-expiry-msg');
    renewSubButton.innerHTML = 'Subscription renewed successfully!';
    setTimeout(function() {
        renewSubButton.innerHTML = 'Local storage based subscription, expires when browser is closed.';
        window.location.reload();
    }, 3000);
}

function newPwd() {
    const username = localStorage.getItem('username');
    localStorage.removeItem('loggedIn');
    window.location.href = "/pages/signup/index.html?uname=" + encodeURIComponent(username) + "&newpwd=true";
}

function delAcc() {
    const delAccButton = document.querySelector('#del-acc');
    delAccButton.innerHTML = 'Account deleted successfully! Redirecting...';
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    setTimeout(function() {
        window.location.href = "/";
    }, 3000);
}