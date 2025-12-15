class home{

        //Mapeo de elementos Atributos
        elements = {

            usernameInput: () => cy.get('#user-name'),
            passwordInput: () => cy.get('#password'),
            loginbutton: () => cy.get('#login-button'),
            errorMessage: ()  => cy.get('h3[data-test="error"]')
        }


        //Metodos
        typeUsername(username){
            this.elements.usernameInput().type(username)
        }

        typePassword(password){
            this.elements.passwordInput().type(password)
        }

        clickLogin(){
            this.elements.loginbutton().click()
        }

}
module.exports = new home();

