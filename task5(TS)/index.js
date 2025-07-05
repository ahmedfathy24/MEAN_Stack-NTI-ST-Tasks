"use strict";
class VisitorCounter {
    constructor() {
        this.count = 0;
        console.log("Visitor counter created");
    }
    static getInstance() {
        if (!VisitorCounter.instance) {
            VisitorCounter.instance = new VisitorCounter();
        }
        else {
            console.log("Visitor counter already exists");
        }
        return VisitorCounter.instance;
    }
    visit() {
        this.count++;
        console.log(`Visitor number: ${this.count}`);
    }
}
const counter1 = VisitorCounter.getInstance();
counter1.visit();
counter1.visit();
const counter2 = VisitorCounter.getInstance();
counter2.visit();
