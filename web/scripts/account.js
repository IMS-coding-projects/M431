function saveData() {
    let username = document.querySelector('#username').value;
    username = username.trim();
    const usernameButton = document.querySelector('#save-info');
    if (username === '' || username.length < 3 || username === 'admin' || username.includes(' ')) {
        usernameButton.innerHTML = 'Invalid username. Please try another username. (Username must be at least 3 characters long, not "admin" and cannot contain spaces)';
        setTimeout(function() {
            usernameButton.innerHTML = 'Save Account Information';
        }, 3000);
        return;
    }
    localStorage.setItem('username', username);
    const saveButton = document.querySelector('#save-info');
    saveButton.innerHTML = 'Account information updated successfully!';
    document.querySelector('#username').disabled = true;
    document.querySelector('select').disabled = true;
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
    localStorage.removeItem('loggedIn');
    window.location.href = "/pages/signup/index.html?uname=" + encodeURIComponent(localStorage.getItem('username')) + "&newpwd=true";
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

function changeAccType(){
    const changeAccTypeButton = document.querySelector('#change-acc-type');
    changeAccTypeButton.innerHTML = 'You cannot change your account type. (not Admin)';
    setTimeout(function() {
        changeAccTypeButton.innerHTML = 'Change Account Type';
    }, 3000);
}

window.onload = function() {
    const username = localStorage.getItem('username');
    if (localStorage.getItem('admin') === 'true') {
        window.location.href = "/pages/admin/";
    }
    if (username) {
        document.querySelector('#username').value = username;
        document.querySelector('#username').disabled = false;
        document.querySelector('#subscription-type').value = 'Free subscription (non-editable)';
        document.querySelector('#subscription-expiry').value = 'Local storage based subscription, expires when browser is closed. (non-editable)';
        localStorage.setItem('loggedIn', 'true');
    } else {
        window.location.href = "/";
    }
};