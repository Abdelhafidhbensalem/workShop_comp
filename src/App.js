import './App.css';
import logo from "./th.jpg"
import React from "react"
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';

//functional component :rfce
function App() {
  const style = { color: "red", marginTop: 20 }
  
  return (
    <div style={style} className="App">
      <NavBar/>
      <ProductList /> 
  </div>

  );
}

export default App;




//component based claas
/*class App extends React.Component {
  state = {  } 
  render() { 
    return (<div  className="App">
    
    </div>);
  }
}

export default App;*/