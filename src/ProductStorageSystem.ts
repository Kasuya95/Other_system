class Product {
    readonly id: number;
    protected name: string;
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    public getPrice(): number {
        return this.price;
    }
    public setPrice(newPrice: number): void {
        this.price = newPrice;
    }
    public toString(): string {
        return `ID: ${this.id}  Name: ${this.name}  Price: ${this.price}`
    }
}

class DiscountedProduct {
    private product: Product;

    constructor( product: Product) {
        this.product = product;
    }
    public addDiscount(discount: number): void {
        if (discount < 0 || discount > 100) {
            console.log('ส่วนลดควรมีค่าอยู่ใน 0 ถึง 100')
        } else {
            const result = this.product.getPrice() * (100 - discount) / 100
            this.product.setPrice(result)
            console.log(`ใช้ส่วนลด ${discount}% `)
            console.log(`ราคาสินค้ารวมส่วนลด ${discount}% : ${this.product.getPrice()} บาท`)
        }   
    }
}
export { Product, DiscountedProduct }