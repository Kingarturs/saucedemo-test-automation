import {Selector, t} from 'testcafe'
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
        await t.typeText(CheckoutPage.firstNameField, "First Name")
            .typeText(CheckoutPage.lastNameField, "Last Name")
            .typeText(CheckoutPage.postalCodeField, "123456")
    }
}

export default new OverviewPage()