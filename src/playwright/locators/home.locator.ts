import { Page } from "@playwright/test";

export class HomeLocator {

    constructor(private page: Page) {}

    get items() {
        return this.page.locator('.inventory_item');
    }

    get nombreProducto() {
        return this.page.locator('[data-test="inventory-item-name"]');
    }

    get precioProducto() {
        return this.page.locator('[data-test="inventory-item-price"]');
    }

    get botonAgregarProducto() {
        return this.page.locator('button[data-test^="add-to-cart"]');
    }

    get botonCarrito() {
        return this.page.locator('[data-test="shopping-cart-link"]');
    }
}
