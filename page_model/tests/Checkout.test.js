import { CREDENTIALS } from '../data/Constants'
import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import ConfirmationPage from '../pages/ConfirmationPage'

fixture('Checkout page tests')
    .page `https://www.saucedemo.com/`

test('Continue with missing information', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await OverviewPage.addItemToCart()
    await t.click(CheckoutPage.continueButton)

    await t.expect(CheckoutPage.errorMessage.exists).ok()
})

test("Fill user's information", async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await OverviewPage.addItemToCart()
    await OverviewPage.fillUserInformation()
    await t.click(CheckoutPage.continueButton)

    await t.expect(OverviewPage.checkoutSummaryContainer.exists).ok()
})

test("Final order items", async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await OverviewPage.addItemToCart()
    await OverviewPage.fillUserInformation()
    await t.click(CheckoutPage.continueButton)

    await t.expect(ProductsPage.productNames
        .nth(0)
        .textContent
    ).eql("Sauce Labs Backpack")
})

test("Complete a purchase", async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await OverviewPage.addItemToCart()
    await OverviewPage.fillUserInformation()
    await t.click(CheckoutPage.continueButton)
        .click(OverviewPage.finishButton)

    await t.expect(ConfirmationPage.checkoutCompleteContainer.exists).ok()
})
