import React, { Component } from 'react';



class AddItem extends Component{

  constructor(props){
    super(props);

    this.onSubmit= this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();

    this.props.onAdd(this.nameInput.value, this.priceInput.value);

    this.nameInput.value = '';
    this.priceInput.value = '';
  }


  render(){

   
        return (
          <form onSubmit={this.onSubmit}>
         <input placeholder="add item here" ref={nameInput => this.nameInput = nameInput}/>
         <input placeholder="add item price" ref = {priceInput => this.priceInput = priceInput}/>
         <button>ADD</button>
         </form>
        );
     
      
  }
}



export default AddItem;