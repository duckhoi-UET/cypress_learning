describe('Multiple elems matching interaction', () => {
    it('should be able to interact with list of elements', () => {
        cy.visit("/login/?lang=ja")

        cy.get('form.unitFormCommon.contentsLayout .c-input-common__textform').eq(0).type('loanhdt@rikkeisoft.com');

        cy.get('form.unitFormCommon.contentsLayout .c-input-common__textform').eq(1).type('123456789aA@');

        cy.get('form.unitFormCommon.contentsLayout .c-input-common__textform').then(items => {
            cy.wrap(items[0]).clear().type('loanhdt+22@rikkeisoft.com');
            cy.wrap(items[1]).clear().type('123456789aA@');
        });

        cy.get('div.c-btn-common--navy.u-margin-top--normal').click();

    });
    
});