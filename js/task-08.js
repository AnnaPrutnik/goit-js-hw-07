const numberEl = document.querySelector('input');
const btnRender = document.querySelector('[data-action="render"]')
const btnDestroy = document.querySelector('[data-action="destroy"]')
const containerForElements = document.querySelector('#boxes')

const makeRandomColor = () => {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`
}

const makeBoxesMarkup = (options) => {
    return options.map(({ width, color }) => {
        const boxEl = document.createElement('div');
        boxEl.style.width = width;
        boxEl.style.height = width;
        boxEl.style.margin = '10px';
        boxEl.style.backgroundColor = color;
        return boxEl;
    })
}

const createBoxes = () => {
    let elements = [];
    for (let i = 0; i < numberEl.value; i += 1){
        let width = `${30 + i * 10}px`;
        let color = makeRandomColor();
        let element = {
            width, color
        }
        elements.push(element);
    }
    const boxes = makeBoxesMarkup(elements);
    containerForElements.innerHTML = '';
    containerForElements.append(...boxes);

}

const destroyBoxes = () => {
    numberEl.value = '';
    containerForElements.innerHTML = '';
}


btnRender.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

