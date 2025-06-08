@HappyPath
Feature: Compra de artículos en Swag Labs

  @Producto
  Scenario Outline: Compra exitosa de un artículo
    Given que el usuario "<usuario>" se autentica con "<contrasenia>" en Swag Labs
    When el usuario agrega "<producto>" con precio "<precio>" al carrito
    And verifica que "<producto>" y "<precio>" en el carrito coinciden
    And ingresa datos de envío "<nombre>", "<apellido>", "<codigo_postal>"
    And verifica que "<producto>" y "<precio>" en el checkout coinciden
    And finaliza la compra
    Then recibe una confirmación exitosa "<mensaje>"
    Examples:
      | usuario       | contrasenia   | producto                           | precio | nombre | apellido | codigo_postal | mensaje                   |
      | standard_user | secret_sauce  | Sauce Labs Backpack                | 29.99  | Juan   | Perez    | 12345         | Thank you for your order! |
      | standard_user | secret_sauce  | Sauce Labs Bike Light              | 9.99   | Maria  | Gomez    | 54321         | Thank you for your order! |
      | standard_user | secret_sauce  | Sauce Labs Bolt T-Shirt            | 15.99  | Carlos | Lopez    | 67890         | Thank you for your order! |
      | standard_user | secret_sauce  | Sauce Labs Fleece Jacket           | 49.99  | Ana    | Martinez | 09876         | Thank you for your order! |
      | standard_user | secret_sauce  | Sauce Labs Onesie                  | 7.99   | Sofia  | Ramirez  | 45678         | Thank you for your order! |
      | standard_user | secret_sauce  | Test.allTheThings() T-Shirt (Red)  | 15.99  | Luis   | Torres   | 23456         | Thank you for your order! |

  @Productos
  Scenario: Compra exitosa de múltiples artículos
    Given que el usuario "standard_user" se autentica con "secret_sauce" en Swag Labs
    When el usuario agrega al carrito los siguientes productos:
      | producto                          | precio |
      | Sauce Labs Backpack               | 29.99  |
      | Sauce Labs Bike Light             | 9.99   |
      | Sauce Labs Bolt T-Shirt           | 15.99  |
      | Sauce Labs Fleece Jacket          | 49.99  |
      | Sauce Labs Onesie                 | 7.99   |
      | Test.allTheThings() T-Shirt (Red) | 15.99  |
    And verifica que los productos agregados y sus precios en el carrito coinciden
    And ingresa datos de envío "Juan", "Perez", "12345"
    And verifica que los productos y precios en el checkout coinciden
    And finaliza la compra
    Then recibe una confirmación exitosa "Thank you for your order!"