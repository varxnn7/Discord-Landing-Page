const buttons = document.querySelectorAll(
'.primary-btn, .secondary-btn, .nav-btn'
);

buttons.forEach(button => {

    button.addEventListener('click', () => {

        button.style.transform = 'scale(0.95)';

        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);

    });

});