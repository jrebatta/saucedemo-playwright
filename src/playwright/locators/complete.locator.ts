import { Page } from "@playwright/test";

export class CompleteLocator {

    constructor(private page: Page) {}

    get mensajeConfirmacion() {
        return this.page.locator('[data-test="complete-header"]');
    }

}