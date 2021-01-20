
import shopify_ecommerce from '../Assets/shopify_ecommerce.jpg'
import { ButtonPrimary } from "../Primitives/Button/ButtonPrimary"


function ECommerceShop() {
    return (
        <div>
            <h1>Shopify e-commerce</h1>
            <p>Shopify is our go-to e-commerce system to build small online stores. This is a great solution for a business which starts small and begins to scale. On reaching the limits of Shopify we provide other solutions.</p>
            <img src={shopify_ecommerce} alt="" />
            <ButtonPrimary>See case →</ButtonPrimary>
        </div>
    );
}


export default ECommerceShop;