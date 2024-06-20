window.onload = function() {
    if (localStorage.getItem('admin') === 'true' && localStorage.getItem('loggedIn') === 'true' && localStorage.getItem('username') === 'admin') {
        document.getElementById('edit-playlist').style.display = 'block';
    } else {
        document.getElementById('edit-playlist').style.display = 'none';
    }
};

function edit() {
    alert('Editing playlist');
}