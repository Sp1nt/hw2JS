//1
function testArray() {
    let questions = [
        "Может ли молния ударить по одному и тому же месту дважды?",
        "Можно ли предсказать землетрясения?",
        "Имеет ли атом ядро?",
        "Земля является самой большой планетой в Солнечной системе?",
        "Черные дыры - это воронки в пространстве?",
        "Вакуум пропускает звук?",
        "Сумма углов в треугольнике равна 180 градусам?",
        "Является ли электрон частицей?"
    ];

    let anw = ["да", "нет", "да", "нет", "нет", "нет", "да", "да"];
    let grades = [6, 4, 1, 2, 6, 2, 4, 5];

    let count = 0;
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let userInput = prompt(questions[i]);
        let isCorrect = anw[i] == userInput;

        count += isCorrect;
        score += isCorrect ? grades[i] : 0;
    }

    alert(`Результаты теста:
    Правильные ответы: ${count} из ${questions.length}
    Общая оценка: ${score}`);
}
//2
function validateName() {
    let validateFormFIO = /[^a-zA-Zа-яА-Я\s.]/;

    let nameInput = prompt("Введите ФИО:");
    
    if (validateFormFIO.test(nameInput)) {
        alert("Недопустимые символы! Недопустимыми символами считаются любые символы, кроме букв, пробелов и точек.");
        return false;
    } else {
        alert("Коректное ФИО!");
        return true;
    }
}
//3
function listAdress(){
    let adress = "http://www.ufa.com.ua/utilites/hdd/out.php?sort=2";
    let protocol = "";
    let host = "";
    let path = "";
    let name = "";
    let query= "";

    for (let i = 0; i < adress.indexOf("/"); i++) {
        protocol += adress[i];
    }

    for (let i = adress.indexOf("/") + 2;  i < adress.indexOf("/", adress.indexOf("//") + 2); i++) {
        host += adress[i];
    }

    for (let i = adress.indexOf("/", adress.indexOf("//") + 2); i < (adress.lastIndexOf("/") + 1); i++) {
        path += adress[i];
    }

    for (let i = adress.lastIndexOf("/") + 1; i < adress.indexOf("?") && i < adress.length; i++) {
        name += adress[i];
    }

    for (let i = adress.indexOf("?") + 1; i < adress.length; i++) {
        query += adress[i];
    }

    alert(`Протокол: ${protocol}\nХост: ${host}\nПуть: ${path}\nИмя файла: ${name}\nСтрока запроса: ${query}`)
}

//1.1
function arrayNoRepetitions(){

    let data1 = [];
    for(let i = 0;i < 12;i++){
        data1[i]=Math.round(Math.random()*25);
    }

    document.write("Первый массив: " + data1 + "<br/><br/>");
    let data2 = [];
    for(let i = 0;i<12;i++){
        data2[i]=Math.round(Math.random()*25);
    }
    document.write("Второй массив: " + data2 + "<br/><br/>");

    let resultData  = [];

    for (let i = 0; i < data1.length; i++) {
        if (!resultData .includes(data1[i])) {
            resultData .push(data1[i]);
        }
    }

    for (let i = 0; i < data2.length; i++) {
        if (!resultData .includes(data2[i])) {
            resultData .push(data2[i]);
        }
    }    
    document.write("Новый массив: " + resultData );
}
//2.1
function commonElementsData(){
    let data1 = [];
    for(let i = 0;i<12;i++){
        data1[i]=Math.round(Math.random()*25);
    }

    document.write("Первый массив: " + data1 + "<br/><br/>");
    let data2 = [];
    for(let i = 0;i<12;i++){
        data2[i]=Math.round(Math.random()*25);
    }
    document.write("Второй массив: " + data2 + "<br/><br/>");
    
    let resultData  = [];

    for (let i = 0; i < data1.length; i++) {
        for (let j = 0; j < data2.length; j++) {
            if (data1[i] == data2[j] && !resultData .includes(data1[i])) {
                resultData .push(data1[i]);
            }
        }
    }

    document.write("Новый массив: " + resultData );
}
//3.1
function elementsToFirst(){
    let data1 = [];
    for(let i = 0;i<12;i++){
        data1[i]=Math.round(Math.random()*25);
    }

    document.write("Первый массив: " + data1 + "<br/><br/>");
    let data2 = [];
    for(let i = 0;i<12;i++){
        data2[i]=Math.round(Math.random()*25);
    }
    document.write("Второй массив: " + data2 + "<br/><br/>");
    
    let resultData  = [];

    for (let i = 0; i < data1.length; i++) {
        if (!data2.includes(data1[i]) && !resultData.includes(data1[i])) {
            resultData.push(data1[i]);
        }
    }

    document.write("Новый массив: " + resultData );
}

//general array
let fruits = ["apple", "orange", "banana", "grape", "kiwi"];

//1.2
function displayFruits() {
    document.write("<ul>");
    for (let i = 0; i < fruits.length; i++) {
        document.write("<li>" + fruits[i] + "</li>");
    }
    document.write("</ul>");
}
//2.2
function findFruit() {
    let fruitName = prompt('Введите название фрукта: ');

    for (let i = 0; i < fruits.length; i++) {

        if (fruits[i].toLowerCase() == fruitName.toLowerCase()) {
            alert('Фрукт найден. Индекс: ' + i);
            return i;
        }
    }
    alert('Фрукт не найден.');
    return -1;
}