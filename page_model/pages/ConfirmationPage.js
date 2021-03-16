import {Selector} from 'testcafe'

class ConfirmationPage {
    constructor() {
        this.checkoutCompleteContainer = Selector('#checkout_complete_container')
    }
}

export default new ConfirmationPage()