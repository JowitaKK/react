const table = {
    high: 120,
    width: 20,
}

class Table {
    constructor(high, width){
        this.high = high;
        this.width = width;
    }

    getArea() {
        return this.high * this.width;
    }
}

const Table1 = new Table (110, 40)
Table1.getArea()