

class Car {
    readonly brand: string;
    private speed: number;
    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }
    public accelerate(amount: number): void {
        this.speed += amount;
        console.log(`เร่งความเร็ว ${amount} กิโลเมตรต่อชั่วโมง`);
    }
    public brake(amount: number): void {
        this.speed -= Math.max(0,this.speed - amount);
        console.log(`ลดความเร็วลง ${amount} กิโลเมตรต่อชั่วโมง`);
    }
    public getSpeed(): number {
        return this.speed;
    }
    public toString(): string {
        return `Brand: ${this.brand}  ความเร็วปัจจุบัน: ${this.speed} กิโลเมตรต่อชั่วโมง`;
    }
}
export { Car }