const colors = ['red'];

function getColor(index) {
    return colors[index % colors.length];
}

let i = 1;
while (i < 1 ) {
    let color = getColor(i); 
    document.write(`<div style="width: 50px; height: 50px; background-color: ${color}; margin: 5px; display: block; text-align: center; line-height: 50px; color: white;">${i}</div>`);
    i++;
}

let prom = prompt("сколько кубиков вам нужно?");
let numberOfSquares = parseInt(prom, 10);

if (!isNaN(numberOfSquares) && numberOfSquares >0) {
    for (let j = 0; j < numberOfSquares; j++) {
        let color = getColor(j); 
        document.write(`<div style="width: 50px; height: 50px; background-color: ${color}; margin: 5px; display: block; text-align: center; line-height: 50px; color: white;">${j + 1}</div>`);
    }
} else {
    alert("пожалуйста введите положительное число.");
}
