import React from "react";   // import react from the react package

class CartItem extends React.Component{
    render(){
        return(
            <div className ="cart-item">
                <div className="left-block">
                    <img style={ styles.image}></img>
                </div>

                <div className="right-block">
                    <div style={{fontSize:30}}>Phone</div>                
                    <div style={{fontColor:'#777'}}>Rs. 9999</div>
                    <div style={{fontColor:'#777'}}>Qty:1</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
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