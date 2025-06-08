import { Page } from "@playwright/test";

export class InformationLocator {

    constructor(private page: Page) {}

    get inputNombre() {
        return this.page.locator('[data-test="firstName"]')
    }

    get inputApellido() {
        return this.page.locator('[data-test="lastName"]')
    }

    get inputCodigoPostal() {
        return this.page.locator('[data-test="postalCode"]')
    }

    get botonContunuar(){
        return this.page.locator('[data-test="continue"]')
    }
}
