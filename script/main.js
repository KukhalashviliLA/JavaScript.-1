function butt() {
    let tmp = document.getElementById('hello');
    if (tmp.innerText == 'Привет!')
        tmp.innerText = "Hello"
    else
        tmp.innerText = 'Привет!'
}

function task2() {
    let p = document.getElementById('tagHello');
    if (p.tagName == 'B') {
        p.outerHTML = '<h3 id="tagHello">' + p.innerText + '&#128526;' + '</h3>';
    } else {
        p.outerHTML = '<b id="tagHello">' + p.innerText + '</b>'
    }
}

function task3() {
    let t = document.getElementsByTagName('li');
    for (let i = 0; i < t.length; i++) {
        t[i].innerHTML = 'list ' + (i + 1);
    }
}


function calculate(sign) {
    let input1 = + document.getElementById('userInput1').value;
    let input2 = + document.getElementById('userInput2').value;
    let result = document.getElementById('result');
    switch (sign) {
        case '+':
            result.innerText = input1 + input2;
            break;
        case '-':
            result.innerText = input1 - input2;
            break;
        case '*':
            result.innerText = input1 * input2;
            break;
        case '/':
            result.innerText = input1 / input2;
            break;
    }

}

function chessGo() {
    let root = document.getElementsByClassName('chessDesk')[0];
    //Создание элемента

    let empty = document.createElement('div');
    root.append(empty);


    //Первая строка с буквами
    for (let i = 65; i < 73; i++) {
        let letter = document.createElement('div');
        letter.textContent = String.fromCharCode(i);
        letter.className = 'letter';
        root.appendChild(letter)
    }

    //Тело
    for (let rowNum = 1; rowNum < 9; rowNum++) {

        let number = document.createElement('div');
        number.textContent = rowNum;
        number.className = 'number';
        root.appendChild(number);

        for (let colNum = 1; colNum < 9; colNum++) {
            var item = document.createElement('div');
            if (rowNum % 2 == 0) {
                if (colNum % 2 == 0)
                    item.className = 'item'
                else
                    item.className = 'black'
            }
            else {
                if (colNum % 2 == 0)
                    item.className = 'black'
                else
                    item.className = 'item'
            }
            root.appendChild(item);
        }
    }

}
function li() {
    let ui = document.getElementById('newLi');

    if (ui.children[0].innerText == 'Первый элемент списка') {
        alert('Элемент уже существует')
    } else {
        let before = document.getElementById('before');
        let newLi = document.createElement('li');
        newLi.innerHTML = 'Первый элемент списка';
        ui.insertBefore(newLi, before)[1];
    }

}
