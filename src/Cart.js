import React from "react";   // import react from the react package
import CartItem from "./CartItem";

class Cart extends React.Component{

    constructor (){

        super();     //calls the constructor of the parent class, here the Componet class constructor
        this.state = {      //this.state will have an array of products which need to be sent as props to CartItem.js
           products : [
               {
                price : 999,
                title : 'Phone',
                qty : 1,
                img:'',
                id:1
               },
               {
                price : 99,
                title : 'Watch',
                qty : 5,
                img:'',
                id:2
               },
               {
                price : 99999,
                title : 'Laptop',
                qty : 3,
                img:'',
                id:3
               }
           ]
        }

    }
    
    handleIncreaseQuantity = (product) => {  //the variable produt is the product whose quantity needs to be increased
        console.log('Increase the Quantity',product);
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products : products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('Decrease the Quantity,', product);

        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty != 0){
            products[index].qty -=1;
            this.setState({
                products:products
            })
        }
        
    }

    handleDelete = (id) =>{
        console.log('Delete Item',id);
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id)

        this.setState({
            products : items
        })

    }

    render(){

        // const arr = [1, 2, 3 , 4, 5]
        const { products} = this.state;   // products will have the list of products destructured from this.state

        return (
            <div className="cart">
                
                <h1>Cart</h1>
                {/* {arr} */}
                {/* <CartItem qty={1} price={99} title={"Slime"}></CartItem> */}

                { products.map( (product) => {

                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}                                     
                    onIncreaseQuantity={this.handleIncreaseQuantity} 
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDelete={this.handleDelete}  
                    />  
                    );   
                    
                    
                    
                }) }
        
            </div>
            
          );
    }
}

export default Cart;