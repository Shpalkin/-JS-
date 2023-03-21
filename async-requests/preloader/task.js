const items = document.getElementById('items');
const loader = document.querySelector('.loader');
const xhr = new XMLHttpRequest();

function getCurrencyRates() {
xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        loader.classList.remove('loader_active');        
        const valutes = JSON.parse(e.currentTarget.responseText).response.Valute;
        Object.keys(valutes).forEach((valute) => {
            const code = valutes[valute].CharCode
            const value = valutes[valute].Value
            const divItem = document.createElement('div')
            divItem.classList.add('item')

            const divItemCode = document.createElement('div');
            divItemCode.classList.add('item__code');
            divItemCode.textContent = `${code}`;

            const divItemValue = document.createElement('div');
            divItemValue.classList.add('item__value');
            divItemValue.textContent = `${value}`;
            
            const divItemCurrency = document.createElement('div');
            divItemCurrency.classList.add('item__currency');
            divItemCurrency.textContent = 'руб.';

            divItem.appendChild(divItemCode);
            divItem.appendChild(divItemValue);
            divItem.appendChild(divItemCurrency);
            items.appendChild(divItem);
        });       
    };
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
};
console.log(xhr);

getCurrencyRates();