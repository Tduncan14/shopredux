import Header from  './containers/Header';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';
import './App.css'


function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
       <Switch>
         <Route  exact path="/" component = {ProductListing} />
          <Route path="/product/:id" component={ProductDetails}/> 
          <Route>404 Not Found!</Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
