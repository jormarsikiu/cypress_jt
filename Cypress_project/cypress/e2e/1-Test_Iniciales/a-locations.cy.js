/*Este metodo permite realizar login con diferentes formas de localizadores se desloguea y se vuelve a loguear
Id, data-test, first, eq, last, filter, find*/ 

let username = "standard_user";
let password = "secret_sauce";


describe('Localizadores en cypress', function(){

   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');
   })

    ///Busqueda de elementos por ID or data=test
    it('Metodo GET', function(){
        cy.get("#user-name").type(username);
        cy.get("input#password").type(password);
        cy.get('[data-test="login-button"]', {timeout:200000}).click();   
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        
    });

    //Busqueda de elementos por posicion
    it('Metodos EQ|First|Last', function(){
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    //Busqueda de elementos por input
    it('Metodo Filter', function(){
        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="submit"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    //Busqueda de elementos por nodos hijos
    it('Metodo Find', function(){
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').last().click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    //Busqueda de elementos que cambien mucho
    it('Metodo Parent', function(){
        cy.get('form').parent().should('have.class', 'login-box'); 
        cy.get('form').parent().find('.input_error.form_input').first().type(username);
        cy.get('form').parent().find('.input_error.form_input').eq(1).type(password);
        cy.get('form').parent().find('.submit-button.btn_action').last().click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

});