import {Selector} from 'testcafe'

class ProductsPage {
    constructor() {
        this.inventoryContainer = Selector('#inventory_container')
        this.cartButton = Selector('.shopping_cart_link')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.firstCartButton = Selector('.btn_inventory:first-of-type')
        this.addToCartButtons = Selector('.btn_inventory')
        this.productNames = Selector('.inventory_item_name')
    }
}

export default new ProductsPage()