import { Page } from "@playwright/test";

export class CheckoutLocator {

    constructor(private page: Page) {}

    get itemsEnCheckout() {
        return this.page.locator('.cart_item');
    }

    get nombreProducto() {
        return this.page.locator('[data-test="inventory-item-name"]');
    }

    get precioProducto() {
        return this.page.locator('[data-test="inventory-item-price"]');
    }

    get btnFinalizar() {
        return this.page.locator('[data-test="finish"]')
    }


}