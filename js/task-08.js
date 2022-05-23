const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;
   
    if (email === '' || password === '') {
        alert('Please fill in this field!');
        return
    };

    console.log(`Email: ${email}, Password: ${password}`);
    event.currentTarget.reset();
};


