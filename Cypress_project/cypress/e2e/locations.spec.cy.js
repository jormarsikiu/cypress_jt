/*Este metodo permite realizar login con diferentes formas de localizadores se desloguea y se vuelve a loguear
Id, data-test, first, eq, last, filter, find*/ 

let username = "standard_user";
let password = "secret_sauce";


describe('Locations in cypress', function(){

   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');
   })

    ///Busqueda de elementos por ID or data=test
    it('GET method', function(){
        cy.get("#user-name").type(username);
        cy.get("input#password").type(password);
        cy.get('[data-test="login-button"]').click();   
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        
    });

    //Busqueda de elementos por posicion
    it('EQ|First|Last Method', function(){
        cy.get('input').first().type(username);
        cy.get('input').eq(1).type(password);
        cy.get('input').last().click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    //Busqueda de elementos por input
    it('Filter Method', function(){
        cy.get('input').filter('[type="text"]').type(username);
        cy.get('input').filter('[type="password"]').type(password);
        cy.get('input').filter('[type="submit"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    //Busqueda de elementos por nodos hijos
    it('Find Method', function(){
        cy.get('form').find('input').eq(0).type(username);
        cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').last().click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

    });

    //Busqueda de elementos que cambien mucho
    it('Parent Method', function(){
        cy.get('form').parent().should('have.class', 'login-box'); 
        cy.get('form').parent().find('.input_error.form_input').type(username);

        /*cy.get('form').find('input').eq(1).type(password);
        cy.get('form').find('input').last().click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();*/

    });

});