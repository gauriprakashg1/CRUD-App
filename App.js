import React, { Component } from 'react';
import './App.css';
import AddItem from './AddItem';
import ProductItem from './ProductItem';
// import MyComponent from './MyComponent';

const products = [
                  { name:"ipad",
                    price:200,
                  },
                  { name:"iphone",
                    price:300,
                  }
];


localStorage.setItem('products', JSON.stringify(products));




class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      products:JSON.parse(localStorage.getItem('products')),
    }

    this.onAdd= this.onAdd.bind(this);

    this.onDelete=this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){

    const products = this.getProducts();

  this.setState({ products }); 

    
    
  }

getProducts(){

  return this.state.products;



}

onDelete(name){

  const products = this.getProducts();

  const productFilter = products.filter(item=>{
    return item.name !== name;
  });

  this.setState({products:productFilter});
}


onAdd(name,price){

  const products = this.getProducts();

  products.push({
    name,
    price
  });

  this.setState({ products });

}

onEditSubmit(name, price, originalName){
    let products = this.getProducts();
 
    products = products.map(item=>{
      if(item.name===originalName){
        item.name = name;
        item.price = price;

      }

      return item;
    }
      );


    this.setState({ products });


}

  render(){
    return(
      <div className="App">
      <h1>Hello</h1>
            <AddItem 

            onAdd={this.onAdd}

            />
            <h1>Add Item up here</h1>

      {this.state.products.map(item=>{
        return (
        <ProductItem 
        key={item.name}

        {...item}
        onDelete={this.onDelete}
        onEditSubmit = {this.onEditSubmit}
        />
        );
      })}
      </div>

      )
  }
}



export default App;
























































































































































































// function App(){

//   const x = [1,2,3,4];

//   const z = x.map(iteam=>{
//     return <button> {iteam} </button>
//   });
// return(
//   <div className= "App">
//     <h1>Hi gauri coader</h1>
//     <h1>{z}</h1>
//     <h3>{Math.random()}</h3>
//     </div>
//   )

// }

// export default App;

// class App extends React.Component{
//   render(){
//     return(
//         <h1>Hiiiiiiiiiii Gauri Coder</h1>
//       );
//   }
// }

// export default App;






















































// function App() {
//   // const arr= [' hi ', ' whats up ', ' how you doing '];
//   const arr =[
//             {"name":"Gauri", "car":"BMW" },
//             {"name":"Nina", "car":"Toyota" },
//             {"name":"Meena", "car":"Nano" },


//   ]
//   const newArr = arr.map(iteam=>{
//     return <h1>{iteam}</h1>
//   });


  // return(

  //     <div className="App-header">
  //        <div className="App">
  //           <h1>Box1</h1>
  //           <p>{iteam.map(iteam=>{

  //           })}</p>
  //        </div>
  //        <div className="App">
  //           <h1>Box2</h1>
  //           <p>{arr}</p>
  //        </div>
  //        <div className="App">
  //           <h1>Box3</h1>
  //           <p>{arr}</p>
  //        </div>
  //     </div>
  //   )



//   return(

//         <ul>
//           {iteam.map(iteam=>{
//             <li key= iteam.id>{iteam.name}</li>
//           })}
//         </ul>
//     )
// }













// function App() {

//   const arr = ['eat', 'sleep', 'code'];

//   const data = arr.map(iteam=>{
//     return <h1>{iteam}</h1>
//   })


//   return (
//     <div className="App">
//       <h1>Coders never quit</h1>
//       <h2>{data}</h2>
//     </div>
//   );
// }

// export default App;


// function App(){

//   const todoList = ['wake up at 5.am', 'exercise for 2 hours', 'study for 2 hours'];

//   const execute = todoList.map(type=>{
//     return <h1>{type}</h1>
//   })

//   return(
//     <div className= 'App'>
//       <h1>Hi Gauri! Welcome to The Accenture>></h1>
//       <h1>{execute}</h1>

//     </div>  

//     );


// }

// export default App;


// class App extends React.Component{

//   render(){

//     const todoList =['eat', 'sleep', 'code'];
//     const execute = todoList.map(iteam=>{
//       return <h1>{iteam}</h1>;
//     });

//     return(
//       <div className="App">
//         <h1>Coaders never quit.</h1>
//         <h2>{execute}</h2>
//       </div>


//       );
//   }

// }


// function App(){
//   return(

//       <div className="App">
//         <h2>Hello</h2>
//         <h3>{Math.random()}</h3>
//       </div>

//     );
// }


// class App extends React.Component{

//   render(){

//     const arr = [1,2,3,4,5];

     
//     return(
//       <div className="App">
//         <h2>Coaders never quit</h2>
//         <h3>{arr.map(iteam=>{
//       return <h1>{iteam}</h1>
//     })}</h3>
//       </div>




//       );
//   }



// }

// export default App;



// class App extends Component{

//   constructor(props){
//       super(props);

//       this.state  ={
//         shouldRenderTitle:true
//       };

    
//   }

// renderTitle(){
//   if(!this.state.shouldRenderTitle) {return null;}

//     return <h1>Title</h1>
// }
//   render(){

  
//     return(

//       <div className="App">
        
//        <h1>{

//         this.state.shouldRenderTitle ? <h1>title is here</h1> :

//         null


//        }</h1>
         
//       </div>

        
//       );
//   }
// }

// export default App;






// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }




