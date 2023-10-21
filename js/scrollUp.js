const scrollButton = document.getElementById('scroll-up');
const whatsappButton = document.getElementById('whatsapp');
function toggleScrollButton() {
    scrollButton.classList.toggle('showScrollUp', window.scrollY > 300);
    whatsappButton.classList.toggle('showScrollUp', window.scrollY > 300);
}

window.addEventListener('scroll', toggleScrollButton);
toggleScrollButton();
