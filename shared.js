const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');


const selectPlanButton = document.querySelectorAll('.plan button');
const closeModalButton = document.querySelector('.modal__action--negative');
const closeBackdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');

selectPlanButton.forEach(button => {
    button.addEventListener( 'click', function() {
        console.log('button was clicked');
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        
    })
    console.log(button);
});

closeModalButton.addEventListener('click', function() {
    console.log('close modal button clicked');
    backdrop.style.display = 'none';
    modal.style.display = 'none'; 
});

closeBackdrop.addEventListener('click', function() {
    console.log('backdrop was clicked');
    backdrop.style.display = 'none';
    modal.style.display = 'none';
});

toggleButton.addEventListener('click', function() {
    console.log('toggle button clicked');
})