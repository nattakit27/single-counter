const counter = document.querySelector(".counter");

const cat = document.querySelector('.cat');

const dog = document.querySelector('.dog');

const pig = document.querySelector('.pig');

const numbers = document.querySelector('.number');

function getNumber() {
    let number = parseInt(numbers.textContent);
    return number;
}

function increase() {
    let number = getNumber();
    number++;
    numbers.innerText = number;
}

function decrease() {
    let number = getNumber();
    if (number > 0) {
        number--;
        numbers.innerText = number;
    }
    else {
        alert('จำนวนต่ำสุดคือ : 0')
    }
}

function clearCounter() {
    numbers.innerText = '0';
}

cat.addEventListener('click', increase);
dog.addEventListener('click', decrease);
pig.addEventListener('click', clearCounter);

