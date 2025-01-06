class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let res = this.books.find((element) => {
            return element[type] === value;
        });
        if (res != undefined) {
            return res;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let res = this.books.find((element) => {
            return element.name === bookName;
        });
        if (res != undefined) {
        this.books.splice(this.books.indexOf(res), 1);
            return res;
        } else {
            return null;
        }
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (!this.marks.hasOwnProperty(subject)) {
                this.marks[subject] = [];
                this.marks[subject].push(mark);
            } else {
                this.marks[subject].push(mark);
            }
        } else {
            return;
        }
    }

    getAverageBySubject(subject) {
        if (this.marks.hasOwnProperty(subject)) {
            return this.marks[subject].reduce((a, b) => (a + b)) / this.marks[subject].length;
        } else {
            return 0;
        }
    }

    getAverage() {
        let subjects = [];
        let average = 0;
        subjects = Object.keys(this.marks);
        if (subjects.length != 0) {
            for (let i = 0; i < subjects.length; i++) {
                average += this.getAverageBySubject(subjects[i]);
            }
            return average / subjects.length;
        } else {
            return 0;
        }
    }
}