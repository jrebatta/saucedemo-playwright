import { Page } from "@playwright/test";

export class LoginLocator {

    constructor(private page: Page) {}

    get inputUsername() {
        return this.page.locator('[data-test="username"]');
    }

    get inputPassword() {
        return this.page.locator('[data-test="password"]');
    }

    get btnLogin() {
        return this.page.locator('[data-test="login-button"]');
    }

    get txtUsuarioBloqueado() {
        return this.page.locator('[data-test="error"]');
    }
}
