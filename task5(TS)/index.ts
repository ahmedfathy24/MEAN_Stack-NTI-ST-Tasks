class VisitorCounter {
    private static instance: VisitorCounter;
    private count: number;

    private constructor() {
        this.count = 0;
        console.log("Visitor counter created");
    }

    public static getInstance(): VisitorCounter {
        if (!VisitorCounter.instance) {
            VisitorCounter.instance = new VisitorCounter();
        } else {
            console.log("Visitor counter already exists");
        }
        return VisitorCounter.instance;
    }

    public visit(): void {
        this.count++;
        console.log(`Visitor number: ${this.count}`);
    }
}
const counter1 = VisitorCounter.getInstance();
counter1.visit(); 
counter1.visit(); 
const counter2 = VisitorCounter.getInstance();
counter2.visit(); 
