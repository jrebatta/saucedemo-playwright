import { Page } from "@playwright/test";
import {CompleteLocator} from "../locators/complete.locator";

export class CompletePage {

    private locator: CompleteLocator;

    constructor(private page: Page) {
        this.locator = new CompleteLocator(page);
        this.init();
    }

    private async init() {
        await this.page.waitForLoadState('load');
    }

    async ordenFinalizada(mensajeEsperado: string) {
        const mensaje = await this.locator.mensajeConfirmacion.textContent();

        if (mensaje?.trim() !== mensajeEsperado) {
            throw new Error(`Mensaje de confirmación incorrecto. Esperado: "${mensajeEsperado}", pero fue: "${mensaje?.trim()}"`);
        }
    }

}