import React from "react";   // import react from the react package

class CartItem extends React.Component{

    constructor (){
        super(); //calls the constructor of the parent class, here the Componet class constructor
        this.state = {
            price : 999,
            title : 'Phone',
            qty : 1
        }
        {/*this.increaseQuantity = this.increaseQuantity.bind(this);* another way of binding in the constructor, another way is by changing the increaseQuantity function into an arrow function */}
    }

    increaseQuantity = () => {    //arrow functions will automatically bind the value of 'this' to the instance of this class
        // this.state.qty+=1; this wont work since the page willl not be re-rendered and hence the initial qty value displayed will not change 
        // this.setState({   // this is one way of using Set State, generally used where you can change the value independently of current state
        //     qty : this.state.qty + 1
        // });

        this.setState((prevState)=>{   //this type of setState is used when your value depends on the previous state which is available in this callback function
            return{
                qty : prevState.qty+1
            }
        }, ()=>{
            console.log('this inside increaseQuantitys setState callback', this.state.qty);
        });
        console.log('this inside increaseQuantity', this.state.qty);
    }

    decreaseQuantity = () => {
        this.setState((prevState)=>{
            const {qty} = this.state;

            if(qty == 0){
                return;
            }
            return {
                qty : prevState.qty-1
            }
        });
    }

    render(){

        {/*Object Destructuring */}
        const {price, title, qty} = this.state;

        return(
            <div className ="cart-item"> 
                <div className="left-block">
                    <img style={ styles.image}></img>
                </div>

                <div className="right-block">
                    <div style={{fontSize:30}}>{title}</div>      {/*adding styles using class directly over here */}           
                    <div style={{fontColor:'#777'}}>Rs. {price}</div>
                    <div style={{fontColor:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img 
                            alt="Increase Item" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/3024/premium/3024515.png?token=exp=1638939676~hmac=8079798c1ed47d9bd9ec89163bd693b6 "
                            onClick={this.increaseQuantity}>
                            {/*onClick={this.increaseQuantity.bind(this)} binding 'this' instance to the function*/}
                        </img>
                            
                        <img 
                            alt="Decrease Item" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/2985/premium/2985073.png?token=exp=1638939594~hmac=5e978cbf6cee9bfa05e670efa485ec80"
                            onClick={this.decreaseQuantity}>
                        </img>
                        <img 
                            alt="Delete Item" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1638939643~hmac=6c2349ddf82dd0ff7c0b2aace4180742"></img>
                            {/* onClick={this.deleteCartItem} */}
                    </div>

                </div>

            </div>

        );
    }
}

//adding styles using class

const styles = {
    image: {
        height : 110,
        width : 110,
        borderRadius : 4,
        background: '#CCC'
    }
}
export default CartItem;