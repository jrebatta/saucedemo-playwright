# 🧪 Plan de Pruebas – Compra de artículos en Swag Labs

## ✅ Objetivo
Validar el flujo de compra en el portal Swag Labs mediante pruebas automatizadas con enfoque BDD, verificando la consistencia de datos (producto, precio, confirmación) en todo el proceso: carrito, checkout y confirmación.

---

## 🔍 Alcance

### Incluye:
- Autenticación del usuario con credenciales válidas.
- Agregado de uno o varios productos al carrito.
- Validación de productos y precios en el carrito.
- Ingreso de datos de envío.
- Validación de datos en el resumen de compra.
- Confirmación de compra exitosa.

---

## 📌 Escenarios Cubiertos

### @Producto – Compra de un solo artículo (Scenario Outline)
Se prueba la compra individual de 6 productos distintos, incluyendo validación de:
- Agregado al carrito
- Coincidencia de nombre y precio
- Envío exitoso
- Confirmación con mensaje: `"Thank you for your order!"`

### @Productos – Compra de múltiples artículos
Simulación de la compra de todos los productos juntos en un solo flujo.  
Se valida que:
- Todos los productos se agreguen correctamente
- Los precios coincidan en carrito y checkout
- El flujo finalice con confirmación exitosa

---

## ⚙️ Técnicas de Prueba Aplicadas

| Técnica                  | Aplicación en los escenarios                                                                 |
|--------------------------|-----------------------------------------------------------------------------------------------|
| Partición de equivalencia | Se prueba una partición con un solo producto y otra con varios productos, cubriendo ambos casos. |
| Valores límite            | Se validan precios mínimo (7.99) y máximo (49.99) en los datos de prueba.                    |
| Pruebas de caso de uso    | Se ejecuta todo el flujo: login → carrito → checkout → confirmación.                         |
| BDD                       | Se usan features con Gherkin y Examples para automatizar distintos escenarios de compra.     |

---

## 🧪 Datos de prueba utilizados

| Usuario        | Contraseña    |
|----------------|---------------|
| standard_user  | secret_sauce  |

| Productos incluidos                                     | Precios   |
|---------------------------------------------------------|-----------|
| Sauce Labs Backpack                                     | 29.99     |
| Sauce Labs Bike Light                                   | 9.99      |
| Sauce Labs Bolt T-Shirt                                 | 15.99     |
| Sauce Labs Fleece Jacket                                | 49.99     |
| Sauce Labs Onesie                                       | 7.99      |
| Test.allTheThings() T-Shirt (Red)                       | 15.99     |

---

## 📎 Evidencias esperadas
- Capturas o reportes que verifiquen que:
  - El producto aparece correctamente en el carrito.
  - El precio se mantiene igual en todas las etapas.
  - Se muestra el mensaje `"Thank you for your order!"` al finalizar.

---

## 📄 Reporte
Los resultados de la ejecución de pruebas se publicarán en formato HTML y serán accesibles dentro del repositorio (`/target/playwright-reports/index.html`).

---

## 👤 Autor
Juan Ernesto Rebatta Atoche  
Reto técnico – QA Automation Engineer  
