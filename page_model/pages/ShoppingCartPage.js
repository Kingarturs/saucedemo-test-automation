import {Selector} from 'testcafe'

class ShoppingCartPage {
    constructor() {
        this.cartContainer = Selector('#cart_contents_container')
        this.checkoutButton = Selector('.checkout_button')
        this.continueShoppingButton = Selector('.btn_secondary:last-of-type')
        this.cartItems = Selector('.cart_item')
    }
}

export default new ShoppingCartPage()