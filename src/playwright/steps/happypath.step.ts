import { Given, When, Then } from "../util/playwright-bdd";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { CartPage } from "../pages/cart.page";
import { InformationPage } from "../pages/information.page";
import { CheckoutPage } from "../pages/checkout.page";
import { CompletePage } from "../pages/complete.page";

let loginPage: LoginPage;
let homePage: HomePage;
let cartPage: CartPage;
let informationPage: InformationPage;
let checkoutPage: CheckoutPage;
let completePage: CompletePage;

let productosSeleccionados: { producto: string; precio: string }[] = [];

Given('que el usuario {string} se autentica con {string} en Swag Labs', async ({ page }, usuario, contrasenia) => {
    loginPage = new LoginPage(page);
    await loginPage.navegar();
    await loginPage.ingresarUsername(usuario);
    await loginPage.ingresarPassword(contrasenia);
    await loginPage.login();
});

When('el usuario agrega {string} con precio {string} al carrito', async ({ page }, producto, precio) => {
    homePage = new HomePage(page);
    await homePage.agregarProductos(producto, precio);
    await homePage.irAlCarrito();
    productosSeleccionados = [{ producto, precio }];
});

When('el usuario agrega al carrito los siguientes productos:', async ({ page }, dataTable) => {
    homePage = new HomePage(page);
    productosSeleccionados = dataTable.hashes();

    for (const item of productosSeleccionados) {
        await homePage.agregarProductos(item.producto, item.precio);
    }

    await homePage.irAlCarrito();
});

When('verifica que los productos agregados y sus precios en el carrito coinciden', async ({ page }) => {
    cartPage = new CartPage(page);

    for (const item of productosSeleccionados) {
        await cartPage.validarProductosCarrito(item.producto, item.precio);
    }

    await cartPage.IrACheckout();
});

When('verifica que {string} y {string} en el carrito coinciden', async ({ page }, producto, precio) => {
    cartPage = new CartPage(page);
    await cartPage.validarProductosCarrito(producto, precio);
    await cartPage.IrACheckout();
});

When('ingresa datos de envío {string}, {string}, {string}', async ({ page }, nombre, apellido, codigo_postal) => {
    informationPage = new InformationPage(page);
    await informationPage.ingresarNombres(nombre);
    await informationPage.ingresarApellidos(apellido);
    await informationPage.ingresarCodigoPostal(codigo_postal);
    await informationPage.continuar();
});

When('verifica que los productos y precios en el checkout coinciden', async ({ page }) => {
    checkoutPage = new CheckoutPage(page);

    for (const item of productosSeleccionados) {
        await checkoutPage.validarProductosCheckout(item.producto, item.precio);
    }
});

When('verifica que {string} y {string} en el checkout coinciden', async ({ page }, producto, precio) => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.validarProductosCheckout(producto, precio);
});

When('finaliza la compra', async ({ page }) => {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.finalizarOrden();
});

Then('recibe una confirmación exitosa {string}', async ({ page }, mensaje) => {
    completePage = new CompletePage(page);
    await completePage.ordenFinalizada(mensaje);
});