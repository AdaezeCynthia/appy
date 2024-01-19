class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    displayInfo() {
      console.log(`${this.name} - $${this.price} - Quantity: ${this.quantity}`);
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    calculateTotal() {
      let total = 0;
      this.products.forEach((product) => {
        total += product.price * product.quantity;
      });
      return total;
    }
  
    checkout() {
      console.log("\n--- Order Summary ---");
      this.products.forEach((product) => {
        product.displayInfo();
      });
      console.log("---------------------");
      console.log(`Total: $${this.calculateTotal()}`);
      console.log("Thank you for shopping with us!");
    }
  }
  
  // Example Usage
  const laptop = new Product("Laptop", 1200, 2);
  const headphones = new Product("Headphones", 80, 3);
  
  const shoppingCart = new ShoppingCart();
  shoppingCart.addProduct(laptop);
  shoppingCart.addProduct(headphones);
  
  shoppingCart.checkout();
  