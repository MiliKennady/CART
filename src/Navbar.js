import React from "react";   // import react from the react package

const Navbar = (props) => {

   
    

        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/128/2211/premium/2211008.png?token=exp=1639481912~hmac=0d510a42a15e3c971f5107dbc65e44e5" alt="cart icon"></img>
                    <span style={styles.cartCount}>{props.count}</span>
                </div>

            </div>
        );

        
    }


//array that specifies the style

const styles = {
    cartIcon : {
        height : 35,
        marginRight : 15,
        marginTop: 10
    }, 
    nav : {
        height : 70,
        background : '#4267b2', 
        display : 'flex',
        justifyContent : 'flex-end',
        allignItems : 'center'
    },
    cartIconContainer : {
        marginRight:10,
        marginTop:10,
        position : 'relative'
    },
    cartCount : {
        background : 'yellow',
        borderRadius : '50%',
        padding : '4px 8px',
        position: 'absolute',
        right : 0,
        top: -8
    }
}

export default Navbar;