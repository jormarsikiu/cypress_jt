/*El archivo permite cargar los datos de un archivo json de data estatica para realizar un login*/ 
//Llama al json fixtures/credentials.json


describe('Cargar datos', function(){

   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');
    cy.fixture('credentials') //Llama al json fixtures/credentials.json
    .then(data => {
        this.credentials = data
    });
   });

    it('Abrir con credenciales', function(){
        cy.get("#user-name").type(this.credentials.standard_user);
        cy.get("input#password").type(this.credentials.system_password);
        cy.get('[data-test="login-button"]').click();  
        cy.get('.title').should('contain.text', 'Products');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    it('Abrir con credenciales incorrectas', function(){
        cy.get("#user-name").type(this.credentials.dummy_user);
        cy.get("input#password").type(this.credentials.dummy_password);
        cy.get('[data-test="login-button"]').click();  
        cy.get('.title').should('contain.text', 'Products');
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });
   });