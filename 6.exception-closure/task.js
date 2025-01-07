// Задача 1. Форматтер чисел

function parseCount(amount) {
    let res = Number.parseFloat(amount);
    if (!isNaN(res)) {
        return res;
    } else {
        throw new Error("Невалидное значение");
    }
}

function validateCount(amount) {
    try {
        return parseCount(amount);
    } catch(error) {
        return error;
    }
}

// Задача 2. Треугольник 

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else if (a + c < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else if (b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let semiperimeter = this.perimeter / 2;
        return +Math.sqrt(semiperimeter * (semiperimeter - this.a) * (semiperimeter - this.b) * (semiperimeter - this.c)).toFixed(3);
    }
}

function getTriangle(a,b,c) {
    try {
        if (a + b < c) {
            throw new Error("Ошибка! Треугольник не существует");
        } else if (a + c < b) {
            throw new Error("Ошибка! Треугольник не существует");
        } else if (b + c < a) {
            throw new Error("Ошибка! Треугольник не существует");
        } else {
            return new Triangle(a,b,c);
        }
    } catch {
        return Object.freeze({perimeter: "Ошибка! Треугольник не существует", area: "Ошибка! Треугольник не существует"});
    }
}