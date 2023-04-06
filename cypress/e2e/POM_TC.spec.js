import { elements } from "../support/POM/TC_File_Locators"
describe ('Page Object test cases', ()=>{
    beforeEach('Visit Website', ()=>{
        cy.visit('/')
    })
    it ("TC1",()=>{
        elements.signIn('aisha','test123')
    })
    it.only ("TC2",()=>{
        elements.login('aisha','test123')
    })
    it ("TC3",()=>{
        elements.addToCart()
    })
    it ("TC4",()=>{
        elements.placeOrder('aisha','pakistan','lahore','123098','April','2023')
    })
    it ("TC5",()=>{
        elements.videoPlay()
    })

    })
