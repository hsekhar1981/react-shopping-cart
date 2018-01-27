import React, {Component} from 'react';

import Product from './product';
import Total from './total';
import ProductForm from './productform';

class ProductList extends Component {

    constructor(){
        super();
        this.state = {
            total: 0,
            productList:[
                {name: "Android", price: 121},
                {name: "Apple", price: 222},
                {name: "Nokia", price: 333}
            ]
        };
    }

    createProduct(product) {
        this.setState((prevState, prpp) => {
            return {productList: prevState.productList.concat(product)}
        });
    }

    calculateTotal(price){
        this.setState((prevState, prop) => {
            return {total: prevState.total + price }
        });
        //alert(this.state.total);
    }

    showProduct(name){
        //alert("You have selected "+ name);
    }

   render(){

        const products = this.state.productList.map(product => {
            return(
                <Product name={product.name} price={product.price} handleShow={this.showProduct} 
                handelTotal={ price => this.calculateTotal(price)}/>
            );
        });


    return(
        <div>
            {/* <Product name="Android" price={121} handleShow={this.showProduct} 
            handelTotal={ price => this.calculateTotal(price)}/>
            <Product name="Apple" price={333} handleShow={this.showProduct} 
            handelTotal={ price => this.calculateTotal(price)}/>
            <Product name="Nokia" price={564} handleShow={this.showProduct} 
            handelTotal={ price => this.calculateTotal(price)}/> */}
            <ProductForm handleCreateProduct={product => this.createProduct(product)}/>
            {products}
            <Total total={this.state.total}/>
        </div>
    );
   }

}

export default ProductList;