const toggleButton = document.querySelector('.toggle-button');
const mobileMenu = document.querySelector('.mobile-nav');


toggleButton.addEventListener('click', showHideMenu);

function showHideMenu() {
    console.log('Toggle Button Clicked');
    if ( mobileMenu.style.transform === 'translateX(0rem)') {
        mobileMenu.style.transform = 'translateX(48rem)';
        // backdrop.style.display = 'none';
    } else {
        mobileMenu.style.transform = 'translateX(0rem)';
        // backdrop.style.display = 'block';
    }
};





