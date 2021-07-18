const itemEl = document.querySelectorAll('li.item');

const countCategory = (items) => {
    console.log(`В списке  ${items.length} категории`);
};


const consoleDescription = (items) => {
    items.forEach(item => {
        console.log("Категория: ", item.querySelector('h2').textContent);
        console.log("Количество элементов: ", item.querySelectorAll('li').length);

    })
}

countCategory(itemEl);
consoleDescription(itemEl);

