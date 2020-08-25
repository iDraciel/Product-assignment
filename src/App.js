import React from 'react';
import Products from './Products/Product';
import ProductDetail from './Products/ProductDetail';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Switch>
       
        <Route exact path='/' component={Products}/>
        <Route exact path='/products/:id' component={ProductDetail}/>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
