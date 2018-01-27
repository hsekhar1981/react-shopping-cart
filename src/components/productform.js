import React, {Component} from 'react';

class ProductForm extends Component {

    submit(e){
       e.preventDefault();
       const product = {
           name: this.refs.name.value,
           price: parseInt(this.refs.price.value)
       }

       this.props.handleCreateProduct(product);

        this.refs.name.value="";
        this.refs.price.value="";
    }

    render(){

        return(
            
            <form>
                <input type ="text" ref="name"/> -  
                <input type ="text" ref="price"/>
                <br/><br/>
                <button onClick={e => this.submit(e)}>Create Product</button>
                <hr/>
            </form> 

        );


    }

}

export default ProductForm;