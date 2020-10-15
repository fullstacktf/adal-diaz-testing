// TODO!

import { RosReader } from "./RosReader";
import { TotalAmountLogger } from "./TotalAmountLogger";


export class RosCalculator {
    constructor(rosReader, totalAmountLogger) {
        this.rosReader = rosReader;
        this.totalAmountLogger = totalAmountLogger;
    }
    calculate() {
        const textInCalculator = this.rosReader.read();
        const rows = textInCalculator.trim().split("\n");

        const products = rows.map((row) => {
            return row.trim().split(",");
        })

        const money = products.map((product) => {
            return parseInt(product[1]) * parseInt(product[2])
        })

        const totalAmount = money.reduce((previousValue, currentValue) => {
            return previousValue + currentValue;
        }, 0);

        const amount = this.totalAmountLogger.write(totalAmount);
    }
}

// const rosReader = new RosReader("./src/text.txt")
// const totalAmountLogger = new TotalAmountLogger();

// const ros = new RosCalculator(rosReader, totalAmountLogger);
// ros.calculate();


