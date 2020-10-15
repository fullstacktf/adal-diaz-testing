import fs from "fs";

export class RosReader {
    constructor(rosFilePath) {
        this.rosFilePath = rosFilePath;
    }

    read() {
        return fs.readFileSync(this.rosFilePath, "utf-8");
    }
}
