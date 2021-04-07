import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';
import Orderinfo from './screens/Orderinfo';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Editproduct from './screens/Editproduct';

function App() {
  return (
    <div className="App">

        <Navbar/>

        <BrowserRouter>

           <Route path='/' component={Homescreen} exact/>

           <Route path='/product/:id' component={Productdescscreen}/>

           <Route path='/cart' component={Cartscreen}/>

           <Route path='/register' component={Registerscreen} />

           <Route path='/login' component={Loginscreen} />

           <Route path='/orders'component={Ordersscreen}/>

           <Route path='/orderinfo/:orderid' component={Orderinfo} />

           <Route path='/profile' component={Profilescreen} />

           <Route path='/admin' component={Adminscreen}/>
           

        </BrowserRouter>

       
        
    </div>
  );
}

export default App;
