let counterValue = 0;

const button = {
    valueEl: document.querySelector('#value'),
    decrementBtnHandler: document.querySelector('[data-action="decrement"]'),
    incrementBtnHandler: document.querySelector('[data-action="increment"]'),
};

const decrementValueButton = () => {
    counterValue--;
    return (button.valueEl.textContent = counterValue);
};

const incrementValueButton = () => {
    counterValue++;
    return (button.valueEl.textContent = counterValue);
};

button.decrementBtnHandler.addEventListener("click", decrementValueButton);
button.incrementBtnHandler.addEventListener("click", incrementValueButton);