/*
Before, After, skip y only en Cypress

1-before() - Una vez al principio
2-beforeEach() - Antes de cada test
3-Test executions
4-afterEach() - despues de cada test
5-beforeEach()
6 Text executions
7-afterEach()
8-after() - Una vez al final
*/

describe('Demo de hooks', function(){

    //Una vez al principio
    before(function(){
        cy.log('Before');
    })

    //Antes de cada test
    beforeEach(function(){
        cy.log('Before Each');
    })


    it('Test 1', function(){
        console.log('T1')

    })

    //Skip omite el test
    it.skip('Test 2', function(){
        console.log('T2')

    })
    //Only solo ejecuta el test 3
    it.only('Test 3', function(){
        console.log('T3')

    })

    //Despues de cada test
    afterEach(function(){
        cy.log('After Each');
    })

    //Una vez al final
    after(function(){
        cy.log('After');
    })

})