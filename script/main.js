function checkInput() {
    var output = document.getElementById('userResult');
    output.textContent = "";
    var n = + document.getElementById('userInput').value;
    if (n < 0 || n > 999) {
        output.innerHTML = 'ОШИБКА!<br>Введите число в диапазоне от 0 до 999.'
        setStyle(false)
        
    } else {
        console.log(pars(n))
        
        output.innerHTML = writeRus(pars(n));
        setStyle(true)
    }
    showHide('resultField');
}

function pars(params) {
    let p = {
        hundred: Math.floor(params / 100),
        decade: Math.floor(params % 100 / 10),
        unit: (params % 100 % 10)
    }
    return p

}

function writeRus(params) {
    return "Сотни: " +
        params.hundred +
        "<br>Десятки: " +
        params.decade +
        "<br>Единицы: " +
        params.unit 
}

function showHide(element_id) {
    if (document.getElementById(element_id)) { 
        var obj = document.getElementById(element_id); 
        if (obj.style.display != "block") { 
            obj.style.display = "block";
        }
    }
}   

function setStyle(params) {
    let resultField = document.getElementById('resultField');
    if (params) {
        resultField.classList.replace("alert-danger", "alert-success");
    } else {
        resultField.classList.replace("alert-success", "alert-danger");
    }
}

