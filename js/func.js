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
        let isCorrect = anw[i] === userInput;

        count += isCorrect;
        score += isCorrect ? grades[i] : 0;
    }

    alert(`Результаты теста:
    Правильные ответы: ${count} из ${questions.length}
    Общая оценка: ${score}`);
}

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

