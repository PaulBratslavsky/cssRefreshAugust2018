const selectPlanButton = document.querySelectorAll('.plan button');

const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal__action--negative');

const backdrop = document.querySelector('.backdrop');
const closeBackdrop = document.querySelector('.backdrop');

selectPlanButton.forEach(button => {
    button.addEventListener( 'click', function() {
        console.log('button was clicked');
        backdrop.style.display = 'block';
        modal.classList.add("open");
    });
    console.log(button);
});

closeModalButton.addEventListener('click', closeModal);
closeBackdrop.addEventListener('click', closeModal);

function closeModal() {
    console.log('close modal clicked');
    backdrop.style.display = 'none';
    modal.classList.remove("open");
}

backdrop.addEventListener('click', function() {
    closeModal();
});