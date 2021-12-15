import React from "react";   // import react from the react package
import CartItem from "./CartItem";

const Cart = (props) =>{

    
        // const arr = [1, 2, 3 , 4, 5]
        const { products} = props;   // products will have the list of products destructured from this.state

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
                    onIncreaseQuantity={props.onIncreaseQuantity} 
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDelete={props.onDelete}  
                    />  
                    );   
                    
                    
                    
                }) }
        
            </div>
            
          );
    }


export default Cart;