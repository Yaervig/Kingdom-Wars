console.log(`Stupid`);

const loginButton = document.getElementById("do_login");

loginButton.addEventListener("click", () => {
    window.location.assign(`../overview.html`)
});











//david- adding server check  to index.js

fetch("/api/status")
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error("Server connection failed:", error);
    });