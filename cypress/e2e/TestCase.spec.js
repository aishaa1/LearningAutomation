/// <reference types="cypress"/>
describe('My First Test', () => {
it("first_TC1",()=>{

    cy.visit("/")
    cy.get('#signin2').click()
    cy.get('#sign-username').wait(5000).type('aishaa')
    cy.get('#sign-password').type('a@23445')
    // cy.get('.btn btn-primary').click()
    cy.get('modal-footer')
        cy.find('Sign up')
        .click()

}

)
it("Second_TC2",()=>{

    cy.visit("/")
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).type('aishaa')
    cy.get('#loginpassword').type('a@23445')
    // cy.get('.btn btn-primary').click()
    cy.get('[type="button"]').eq(1).click({force:true})

})
it("Third_TC3",()=>{

    cy.visit("/")
    //cy.get('#cat').click()
    //cy.get('#itemc').click()
    cy.contains('Phones').click()
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()

})
it("Forth_TC4",()=>{

    cy.visit("/")

    cy.contains('Laptops').click()
    cy.contains('Sony vaio i5').click()
    cy.contains('Add to cart').click()

})
it("Five_TC5",()=>{

    cy.visit("/")

    cy.contains('Monitors').click()
    cy.contains('ASUS Full HD').click()
    cy.contains('Add to cart').click()

})
it("six_TC6",()=>{

    cy.visit("/")

    cy.contains('Cart').click()
    cy.contains('Place Order').click()
    cy.get('#name').type('aisha')
    cy.get('#country').type('Pakistan')
    cy.get('#city').type('Lahore')
    cy.get('#card').type('1234567')
    cy.get('#month').type('March')
    cy.get('#year').type('2023')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.confirm').click()


})
it("Seven_TC7",()=>{

    cy.visit("/")

    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.vjs-play-control > .vjs-icon-placeholder').click({force: true})
    cy.get('.vjs-fullscreen-control > .vjs-icon-placeholder').click({force: true})
    cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click({force: true})


})
it("Eight_TC8",()=>{

    cy.visit("/")

    cy.get('#next2').click()
    cy.get('#prev2').click()


})
})