describe('Element interaction', () => {

    it('Thực hiện Login FXON', () => {
        // Open the login form page
       cy.visit('/login/?lang=ja')

       // Nhập email
       cy.get('input[type="text"][placeholder="Email"].c-input-common__textform').type('loanhdt+22@rikkeisoft.com')
       cy.log("Nhập email")

       // Nhập password
       cy.get('input[type="password"][placeholder="Password"].c-input-common__textform.c-input-common__textform').type('123456789aA@')
       cy.log("Nhập pass")

       //Click btn Login
       cy.get('div.c-btn-common--navy.u-margin-top--normal').click()
       cy.log("Click btn Login")

    });

});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
});

