
let username = "standard_user";
let password = "secret_sauce";


describe('URL', function(){

   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');
   });

    ///Busqueda de elementos por ID or data=test
    it('Titulo', function(){
        cy.title().should('eq', 'Swag Labs');  
    });

    it('URL debe ser https://www.saucedemo.com/', function(){
        cy.url().should('eq', 'https://www.saucedemo.com/');

    });

    //Solo ejecuta este test Only
    /*
    it.only('URL should be https://www.saucedemo.com/', function(){
        cy.url().should('eq', 'https://www.saucedemo.com/');

    });*/

    it('Validacion del Https', function(){
        cy.location('protocol').should('contains', 'https');

    });

    it('Validacion del Hostname', function(){
        cy.location('hostname').should('eq', 'www.saucedemo.com');

    });

    it('Redireccionar a inventory', function(){
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').last().click();
        cy.location('pathname').should('eq', '/inventory.html');

    });

});