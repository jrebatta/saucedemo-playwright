import { Page } from "@playwright/test";
import { LoginLocator } from "../locators/login.locator";

export class LoginPage {

    private locator: LoginLocator;

    constructor(private page: Page) {
        this.locator = new LoginLocator(page);
        this.init();
    }

    private async init() {
        await this.page.waitForLoadState('load');
    }

    async navegar() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async ingresarUsername(username: string) {
        await this.locator.inputUsername.waitFor({state: 'attached', timeout: 3000});
        await this.locator.inputUsername.fill(username)
    }

    async ingresarPassword(password: string) {
        await this.locator.inputPassword.fill(password)
    }

    async login() {
        await this.locator.btnLogin.click();
    }

}
