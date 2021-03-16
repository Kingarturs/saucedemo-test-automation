import LoginPage from '../pages/LoginPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Products page tests')
    .page `https://www.saucedemo.com/`

test('Logout from products page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.menuButton)
        .click(ProductsPage.logoutButton)

    await t.expect(LoginPage.loginButton.exists).ok()
})

test('Navigate to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.cartButton)
    
    await t.expect(ShoppingCartPage.cartContainer.exists).ok()
})

test('Add a single item to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.firstCartButton)
        .click(ProductsPage.cartButton)

    await t.expect(ShoppingCartPage.cartItems.count).eql(1)
})

test('Add multiple items to the shopping cart', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(ProductsPage.addToCartButtons.nth(0))
        .click(ProductsPage.addToCartButtons.nth(1))
        .click(ProductsPage.addToCartButtons.nth(2))
        .click(ProductsPage.addToCartButtons.nth(3))
        .click(ProductsPage.cartButton)

    await t.expect(ShoppingCartPage.cartItems.count).eql(4)
})