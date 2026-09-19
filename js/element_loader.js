document.addEventListener("DOMContentLoaded", () =>
{
    fetch('../html_elements/main_sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('main_sidebar_placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading sidebar:', error));

    fetch('../html_elements/user_info.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('user_info_placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading user info:', error));
});