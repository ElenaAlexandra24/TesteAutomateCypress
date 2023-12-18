describe('MyTest', () => {

    it('Test the page title', () => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eql','nopCommerce demo store');

    });

    //it('Test Login message', () => {
        //cy.visit('https://demo.nopcommerce.com/');
        //cy.get('.ico-login').type('{enter}');
        //cy.get('#Email').type('elena@gmail.com');
       // cy.get('#Password').type('1002');
       // cy.get('form > .buttons > .button-1').type('{enter}');
       // cy.get('.message-error').should('be.visible');
        
    it('Search', () => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.get('#small-searchterms').click();
        cy.get('#small-searchterms').type('laptop');
        cy.get('#small-searchterms').type('{enter}'); 
        
        
    });


    //it('Test the page title', () => {
        //cy.visit('https://demo.nopcommerce.com/');
       // cy.title().should('eql','nopCommerce de store')

    });
