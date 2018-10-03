const toggleButton = document.querySelector('.toggle-button');
const mobileMenu = document.querySelector('.mobile-nav');


toggleButton.addEventListener('click', showHideMenu);

function showHideMenu() {
    console.log('Toggle Button Clicked');
    if ( mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        // backdrop.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
        // backdrop.style.display = 'block';
    }
};





