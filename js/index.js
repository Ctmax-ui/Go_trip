


let navMenu = document.querySelector('.navigation-menu');
let toggleBtn = document.getElementById('nav-toggler-btn');
toggleBtn.addEventListener("click", function (e) {
    navMenu.classList.toggle('nav-show')

});

function printScreenSize() {
    const width = window.innerWidth;
    if (width > 990) {
        navMenu.classList.remove('nav-show')
    }
}
// Initial call to print the screen size
//   printScreenSize();
// Event listener for the resize event
window.addEventListener('resize', printScreenSize);