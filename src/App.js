import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor (){

    super();     //calls the constructor of the parent class, here the Componet class constructor
    this.state = {      //this.state will have an array of products which need to be sent as props to CartItem.js
       products : [
           {
            price : 999,
            title : 'Phone',
            qty : 1,
            img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id:1
           },
           {
            price : 99,
            title : 'Watch',
            qty : 5,
            img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id:2
           },
           {
            price : 99999,
            title : 'Laptop',
            qty : 3,
            img:'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
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

  getCartCount = () =>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product) =>{
      count += product.qty;
    })
    return count;
  }
  
  getCartTotal = () =>{
    const {products} = this.state;
    let total = 0;
    products.forEach((product) => {
      total = total + product.qty * product.price;
    })
    return total;
  }
  render() {

    const {products} = this.state;
    

    return (
      <div className="App">
  
          <Navbar
          count = { this.getCartCount()}
          />
  
          <Cart   
           products = {products}                                
           onIncreaseQuantity={this.handleIncreaseQuantity} 
           onDecreaseQuantity={this.handleDecreaseQuantity}
           onDelete={this.handleDelete} 
           />

          <div style={ {padding : 10 , fontSize : 20 } }>
            TOTAL : {this.getCartTotal()}
          </div>
      </div>
      
    );

  }
  
}

export default App;
