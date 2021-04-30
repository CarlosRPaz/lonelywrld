import React from 'react'
import './styles/Products.css'
import Product from './Product';
import { Link } from "react-router-dom";


function Products() {
    return (
        <div className="products">
            <h5>* Girls' t-shirts run a size smaller</h5>
            <h1>Products</h1>
            <div className="products__productContainer">
                <Product
                    id="98237983"
                    img="https://images.unsplash.com/photo-1599423843165-2ba2078858f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80"
                    title="Smiley Sweater"
                    price={34.99}
                />
                <Product
                    id="98237984"
                    img="https://images.unsplash.com/photo-1570392896435-66d1abcce20d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0cmVldHdlYXIlMjBtb2RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Flower Sweats"
                    price={19.99}
                />
                <Product
                    id="98237985"
                    img="https://images.unsplash.com/photo-1576790807856-b9205fb5703f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN0cmVldHdlYXIlMjBtb2RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Sunflower Shirt"
                    price={24.99}
                />
                <Product
                    id="98237986"
                    img="https://images.unsplash.com/photo-1614975059251-992f11792b9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    title="Long Sleeve Tee"
                    price={30.00}
                />
                <Product
                    id="98237987"
                    img="https://images.unsplash.com/photo-1553227138-bff31be43f47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN0cmVldHdlYXIlMjBtb2RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Smiley Sweater"
                    price={34.99}
                />
                <Product
                    id="98237988"
                    img="https://images.unsplash.com/photo-1600871150008-50b6f73dacdc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHN0cmVldHdlYXIlMjBtb2RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Smiley Sweater"
                    price={34.99}
                />
                <Product
                    id="98237989"
                    img="https://images.unsplash.com/photo-1552925870-fc8a8ddf769e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHN0cmVldHdlYXIlMjBtb2RlbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    title="Smiley Sweater"
                    price={34.99}
                />
            </div>
        </div>
    )
}

export default Products
