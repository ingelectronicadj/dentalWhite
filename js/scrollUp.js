const scrollButton = document.getElementById('scroll-up');
function toggleScrollButton() {
    scrollButton.classList.toggle('showScrollUp', window.scrollY > 300);
}

window.addEventListener('scroll', toggleScrollButton);
toggleScrollButton();
