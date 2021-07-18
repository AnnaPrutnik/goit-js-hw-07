const counterEl = document.querySelector('#value')
const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')

let counterValue = Number(counterEl.textContent);

const onIncrementClick = () => {
    counterEl.textContent = counterValue += 1;
};

const onDecrementClick = () => {
    counterEl.textContent = counterValue -= 1;
};

btnIncrement.addEventListener('click', onIncrementClick);
btnDecrement.addEventListener('click', onDecrementClick)




