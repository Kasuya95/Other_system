"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log(`เร่งความเร็ว ${amount} กิโลเมตรต่อชั่วโมง`);
    }
    brake(amount) {
        this.speed -= Math.max(0, this.speed - amount);
        console.log(`ลดความเร็วลง ${amount} กิโลเมตรต่อชั่วโมง`);
    }
    getSpeed() {
        return this.speed;
    }
    toString() {
        return `Brand: ${this.brand}  ความเร็วปัจจุบัน: ${this.speed} กิโลเมตรต่อชั่วโมง`;
    }
}
exports.Car = Car;
