const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    };
};