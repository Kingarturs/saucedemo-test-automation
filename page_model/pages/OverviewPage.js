import {Selector, t} from 'testcafe'
import { CREDENTIALS } from '../data/Constants'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import CheckoutPage from '../pages/CheckoutPage'

class OverviewPage {
    constructor() {
        this.checkoutSummaryContainer = Selector('#checkout_summary_container')
    }

    async addItemToCart() {
        await t.click(ProductsPage.firstCartButton)
            .click(ProductsPage.cartButton)
            .click(ShoppingCartPage.checkoutButton)
    }

    async fillUserInformation() {
        await t.typeText(CheckoutPage.firstNameField, CREDENTIALS.FIRST_NAME)
            .typeText(CheckoutPage.lastNameField, CREDENTIALS.LAST_NAME)
            .typeText(CheckoutPage.postalCodeField, CREDENTIALS.ZIP_CODE)
    }
}

export default new OverviewPage()