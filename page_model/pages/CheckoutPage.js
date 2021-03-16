import {Selector} from 'testcafe'

class CheckoutPage {
    constructor() {
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.postalCodeField = Selector('#postal-code')
        this.continueButton = Selector('.cart_button')
        this.errorMessage = Selector('h3[data-test="error"]')
    }
}

export default new CheckoutPage()