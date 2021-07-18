const refs = {
    inputEl: document.querySelector('#name-input'),
    textEl: document.querySelector('#name-output'),
}
console.log(refs.textEl.textContent);


const changeName = (e) => {
    if (e.currentTarget.value === "") {
        return refs.textEl.textContent = 'незнакомец';
    }
    refs.textEl.textContent = refs.inputEl.value;
}


refs.inputEl.addEventListener('input', changeName)