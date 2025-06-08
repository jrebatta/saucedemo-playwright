import { Page } from "@playwright/test";

export class CartLocator {

    constructor(private page: Page) {}

    get itemsEnCarrito() {
        return this.page.locator('.cart_item');
    }

    get nombreProducto() {
        return this.page.locator('[data-test="inventory-item-name"]');
    }

    get precioProducto() {
        return this.page.locator('[data-test="inventory-item-price"]');
    }

    get btnCheckout(){
        return this.page.locator('[data-test="checkout"]');
    }
}
