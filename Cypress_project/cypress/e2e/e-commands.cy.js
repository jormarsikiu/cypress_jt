//Este archivo es para aplicar el uso de comandos personalizados que estan en support/comamand.cy.js

let username = "standard_user";
let password = "secret_sauce";


describe('Commandos Personalizados', function(){

   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');
    
   })

    it('Login', function(){
       cy.typeLogin("standard_user", "secret_sauce");
       cy.get('.title').should('contain.text', 'Products');
       cy.logout();
       cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('Validar el mensaje de error de login', function(){
       cy.typeLogin("standard_user", "dummy");
       cy.get('.error').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');

    });

});