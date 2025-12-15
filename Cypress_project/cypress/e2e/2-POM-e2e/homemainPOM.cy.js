/*Se creo dos elementos POM-pageObjects/home y POM-pageObjects/home
1- Estos dos archivos tienen atributos y metodos los cuales se instancian en este archivo para tener metodos personalizados
*/

import home from "../../POM-pageObjects/home";
import inventory from "../../POM-pageObjects/inventory";

describe('Implementacion POM', function(){

   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');
   });

   it('Login y redireccion a pagina del inventario', () => {
        home.typeUsername('standard_user');
        home.typePassword('secret_sauce');
        home.clickLogin();

        inventory.elements.titleSpan().should('have.text', 'Products');
   });

    it('Usuario bloqueado', () => {
        home.typeUsername('locked_out_user');
        home.typePassword('secret_sauce');
        home.clickLogin();
        home.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
   });

    it('Usuario incorrecto', () => {
        home.typeUsername('standard_user2');
        home.typePassword('secret_sauce');
        home.clickLogin();
        home.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
   });

    it('Password incorrecto', () => {
        home.typeUsername('standard_user');
        home.typePassword('secret_sauce2');
        home.clickLogin();
        home.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
   });

});