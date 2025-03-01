"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        this.price = newPrice;
    }
    toString() {
        return `ID: ${this.id}  Name: ${this.name}  Price: ${this.price}`;
    }
}
exports.Product = Product;
class DiscountedProduct {
    constructor(product) {
        this.product = product;
    }
    addDiscount(discount) {
        if (discount < 0 || discount > 100) {
            console.log('ส่วนลดควรมีค่าอยู่ใน 0 ถึง 100');
        }
        else {
            const result = this.product.getPrice() * (100 - discount) / 100;
            this.product.setPrice(result);
            console.log(`ใช้ส่วนลด ${discount}% `);
            console.log(`ราคาสินค้ารวมส่วนลด ${discount}% : ${this.product.getPrice()} บาท`);
        }
    }
}
exports.DiscountedProduct = DiscountedProduct;
