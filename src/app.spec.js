import { RosCalculator } from "./app";
import { RosReader } from "./RosReader";
import { TotalAmountLogger } from "./TotalAmountLogger";

class RosReaderFake extends RosReader {
    constructor(rosReaderFake) {
        super()
        this.rosReaderFake = rosReaderFake;
    }

    read() {
        return this.rosReaderFake;
    }
}

class TotalAmountLoggerFake extends TotalAmountLogger {
    write(totalAmount) {
        this.totalAmount = totalAmount;
    }
}



describe("Ros List", () => {
    it("Total amount of ros list (bread, tomate)", () => {
        const str = `bread, 1, 2
                     tomate, 4, 2`
        const totalAmountLoggerFake = new TotalAmountLoggerFake();
        const rosReaderFake = new RosReaderFake(str);
        const rosCalculator = new RosCalculator(rosReaderFake, totalAmountLoggerFake).calculate();
        expect(totalAmountLoggerFake.totalAmount).toEqual(10);
    })
    it("Total amount of ros list Garimba", () => {
        const str = `cervezaDoradaBotella, 3, 2
                     cervezaHacendadoLata, 22, 1`
        const totalAmountLoggerFake = new TotalAmountLoggerFake();
        const rosReaderFake = new RosReaderFake(str);
        const rosCalculator = new RosCalculator(rosReaderFake, totalAmountLoggerFake).calculate();
        expect(totalAmountLoggerFake.totalAmount).toEqual(28);
    })
})

