import { Page } from "@playwright/test";
import { InformationLocator } from "../locators/information.locator";

export class InformationPage {

    private locator: InformationLocator;

    constructor(private page: Page) {
        this.locator = new InformationLocator(page);
        this.init();
    }

    private async init() {
        await this.page.waitForLoadState('load');
    }

    async ingresarNombres(nombre:string) {
        await this.locator.inputNombre.fill(nombre);
    }

    async ingresarApellidos(apellido:string) {
        await this.locator.inputApellido.fill(apellido);
    }

    async ingresarCodigoPostal(codigo_postal:string) {
        await this.locator.inputCodigoPostal.fill(codigo_postal);
    }

    async continuar(){
        await this.locator.botonContunuar.click();
    }

}