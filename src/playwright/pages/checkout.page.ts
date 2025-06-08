import { Page } from "@playwright/test";
import { CheckoutLocator } from "../locators/checkout.locator";

export class CheckoutPage {

    private locator: CheckoutLocator;

    constructor(private page: Page) {
        this.locator = new CheckoutLocator(page);
        this.init();
    }

    private async init() {
        await this.page.waitForLoadState('load');
    }

    async validarProductosCheckout(producto: string, precio: string) {
        const count = await this.locator.itemsEnCheckout.count();

        for (let i = 0; i < count; i++) {
            const item = this.locator.itemsEnCheckout.nth(i);

            const nombre = await item.locator(this.locator.nombreProducto).textContent();
            const precioTexto = await item.locator(this.locator.precioProducto).textContent();

            if (
                nombre?.trim() === producto &&
                precioTexto?.replace('$', '').trim() === precio
            ) {
                return true;
            }
        }

        throw new Error(`Producto "${producto}" con precio "${precio}" no encontrado en el checkout.`);
    }

    async finalizarOrden(){
        await this.locator.btnFinalizar.click();
    }

}