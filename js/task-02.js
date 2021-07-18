const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const listEl = document.querySelector('#ingredients');
const makeListMarkup = (options) => {
    return options.map(option => {
        const itemEl = document.createElement('li');
        itemEl.textContent = option;
        return itemEl;
    });

};
const elements = makeListMarkup(ingredients);
listEl.append(...elements);
