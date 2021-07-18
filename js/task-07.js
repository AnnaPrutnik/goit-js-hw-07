const inputEl = document.querySelector('#font-size-control');
const rangeEl = document.querySelector('#text');

const changeTextFontSize = (e) => {
    rangeEl.style.fontSize = `${e.currentTarget.value}px`;
   
}

inputEl.addEventListener('input', changeTextFontSize)
