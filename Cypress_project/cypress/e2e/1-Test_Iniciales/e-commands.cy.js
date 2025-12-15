//Este archivo es para aplicar el uso de comandos personalizados que estan en support/comamand.cy.js

describe('Commandos Personalizados', function(){

   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');
   })

    it('Login', function(){
       //Comando personalizado typeLogin()
       cy.typeLogin("standard_user", "secret_sauce");
       cy.get('.title').should('contain.text', 'Products');

       //Comando personalizado logout()
       cy.logout();
       cy.url().should('eq', 'https://www.saucedemo.com/');
    });

    it('Validar el mensaje de error de login', function(){
        //Comando personalizado typeLogin()
       cy.typeLogin("standard_user", "dummy");
       cy.get('.error').should('contain.text', 'Epic sadface: Username and password do not match any user in this service');

    });

});