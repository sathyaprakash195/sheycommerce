import React , {useState, useEffect} from 'react'
import { Link , Switch , Route} from 'react-router-dom'
import Userslist from './Userslist'
import Orderslist from './Orderslist'
import Addproduct from './Addproduct'
import Productslist from './Productslist'
import Editproduct from './Editproduct'
import {useSelector , useDispatch} from 'react-redux'
export default function Adminscreen() {

    const userstate = useSelector(state=>state.loginReducer)

    const currentUser = userstate.currentUser
    useEffect(() => {

        if(currentUser)
        {
            if(!currentUser.isAdmin){

                window.location.href='/'
            }
        }
        else{
            window.location.href='/'

        }

        
       
    }, [])


    return (
        <div>
            
            <div className="row justify-content-center mt-2">
                <div className="col-md-10">
                       <h2>Admin Panel</h2>
                       <ul className='admin p-2'>
                           <li><Link to='/admin/userslist' style={{color:'black'}}>UsersList</Link></li>
                           <li><Link to='/admin/productslist' style={{color:'black'}}>Products List</Link></li>
                           <li><Link to='/admin/addnewproduct' style={{color:'black'}}>Add New Product</Link></li>
                           <li><Link to='/admin/orderslist' style={{color:'black'}}>Orderslist</Link></li>
                       </ul>


                       <Switch>
                       <Route path='/admin/' component={Userslist} exact />
                          <Route path='/admin/userslist' component={Userslist} />
                          <Route path='/admin/orderslist' component={Orderslist} />
                          <Route path='/admin/addnewproduct' component={Addproduct} />
                          <Route path='/admin/productslist' component={Productslist} />
                          <Route path='/admin/editproduct/:productid' component={Editproduct} />
                         

                       </Switch>

                </div>
            </div>

        </div>
    )
}
