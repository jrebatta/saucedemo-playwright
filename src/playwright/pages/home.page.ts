import { Page } from "@playwright/test";
import { HomeLocator } from "../locators/home.locator";

export class HomePage {

    private locator: HomeLocator;

    constructor(private page: Page) {
        this.locator = new HomeLocator(page);
        this.init();
    }

    private async init() {
        await this.page.waitForLoadState('load');
    }

    async agregarProductos(producto: string, precio: string) {
        const count = await this.locator.items.count();

        for (let i = 0; i < count; i++) {
            const item = this.locator.items.nth(i);

            const nombre = await item.locator(this.locator.nombreProducto).textContent();
            const precioTexto = await item.locator(this.locator.precioProducto).textContent();

            if (
                nombre?.trim() === producto &&
                precioTexto?.replace('$', '').trim() === precio
            ) {
                await item.locator(this.locator.botonAgregarProducto).click();
                break;
            }
        }
    }

    async irAlCarrito() {
        await this.locator.botonCarrito.click();
    }

}
