const inputEl = document.querySelector('#validation-input');

const checkedLengthInput = (e) => {
    if (e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
        e.currentTarget.classList = 'valid';
    }
    else {
        e.currentTarget.classList = 'invalid';
    }

    if (!e.currentTarget.value) {
        e.currentTarget.classList = "";
    }
}

inputEl.addEventListener('change', checkedLengthInput)