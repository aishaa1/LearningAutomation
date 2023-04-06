export class tcObject {
    signIn(name,password){
        cy.get('#signin2').click()
        cy.get('#sign-username').wait(5000).type(name)
        cy.get('#sign-password').type(password)
        // cy.get('.btn btn-primary').click()
        cy.contains('Sign up').click()

    }
    login(name,pass){
        cy.get('#login2').click()
        cy.get('#loginusername').wait(5000).type(name)
        cy.get('#loginpassword').type(pass)
        // cy.get('.modal-content').contains('.modal-footer').then(login=>{
        //     cy.wrap(login).find('[onclick="logIn()"]').click()
        // })
        cy.get('form')
            .should('contain', 'Username')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }
    addToCart(){
        cy.contains('Phones').click()
        cy.contains('Samsung galaxy s6').click()
        cy.contains('Add to cart').click()
            
        }
    placeOrder(name,coutry,city,card_no,month,year){
        cy.contains('Cart').click()
        cy.contains('Place Order').click()
        cy.get('#name').type(name)
        cy.get('#country').type(coutry)
        cy.get('#city').type(city)
        cy.get('#card').type(card_no)
        cy.get('#month').type(month)
        cy.get('#year').type(year)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.confirm').click()
    }
    videoPlay(){
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.vjs-play-control > .vjs-icon-placeholder').click({force: true})
        cy.get('.vjs-fullscreen-control > .vjs-icon-placeholder').click({force: true})
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click({force: true})
    }
} 
export const elements= new tcObject()