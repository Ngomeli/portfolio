var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");

sideNav.style.right = "-250px"; /*the nav is hidden in the webpage*/
menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0"; /*the navbar appears on the web page*/
    } else {
        sideNav.style.right = "-250px";
    }
}