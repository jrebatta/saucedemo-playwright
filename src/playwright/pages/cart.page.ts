import { Page } from "@playwright/test";
import { CartLocator } from "../locators/cart.locator";

export class CartPage {

    private locator: CartLocator;

    constructor(private page: Page) {
        this.locator = new CartLocator(page);
        this.init();
    }

    private async init() {
        await this.page.waitForLoadState('load');
    }

    async validarProductosCarrito(producto: string, precio: string) {
        const count = await this.locator.itemsEnCarrito.count();

        for (let i = 0; i < count; i++) {
            const item = this.locator.itemsEnCarrito.nth(i);

            const nombre = await item.locator(this.locator.nombreProducto).textContent();
            const precioTexto = await item.locator(this.locator.precioProducto).textContent();

            if (
                nombre?.trim() === producto &&
                precioTexto?.replace('$', '').trim() === precio
            ) {
                return true;
            }
        }

        throw new Error(`Producto "${producto}" con precio "${precio}" no encontrado en el carrito.`);
    }

    async IrACheckout() {
        await this.locator.btnCheckout.click();
    }
}