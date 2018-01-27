import React, {Component} from "react";

class Product extends Component {

    constructor(){
        super();
        this.state = {
            qty: 0,
        };
    }



    buy() {
        this.setState((pervState, prop) => {
            return { qty: pervState.qty + 1 }
        });

        this.props.handelTotal(this.props.price);
    }

    show(){
        this.props.handleShow(this.props.name);
    }

    render(){

        return(
            <div>
                     <p>{this.props.name} - ${this.props.price}</p>
                     <button onClick={() => this.buy()}>Buy</button>
                     <button onClick={() => this.show()}>Show</button>
                     <h3>Quantity: {this.state.qty} {this.props.name} mobile selected</h3>
                     <hr/>
                </div>


        );

    }

}

export default Product;