import home from "../../POM-pageObjects/home";
import inventory from "../../POM-pageObjects/inventory";

const tests = require('../../fixtures/data_driven/scenarios_data.json');

describe('Implementacion Data Driven', function(){

   beforeEach(function(){
    cy.visit('https://www.saucedemo.com/');
   });

   tests.forEach(test => {

    it(test.name, () => {

        home.typeUsername(test.username);
        home.typePassword(test.password);
        home.clickLogin();

        if(test.name === "Usuario Valido"){
            inventory.elements.titleSpan().should('have.text', test.expected);
        }
        else {
            home.elements.errorMessage().should('have.text', test.expected);
        }

    });

   });
});

