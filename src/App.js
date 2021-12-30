
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import Details from './Pages/Details/Details';
import AuthProvider from './contexts/AuthProvider';
import Login from './Login/Login/Login';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';

import AddProduct from './Pages/AddProduct/AddProduct';
import Registration from './Login/Registration/Registration';
import MoreBikes from './Pages/MoreBikes/MoreBikes';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import AddReview from './Pages/AddReview/AddReview';
import Pay from './Pages/Pay/Pay';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import AdminRoute from './Login/AdminRoute/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';





function App() {




  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">

          <AuthProvider>

            <Router>

              <Header></Header>


              <Switch>

                <Route exact path="/">
                  <Home></Home>

                </Route>

                <Route path="/home">
                  <Home></Home>
                </Route>
                {/* test */}
                {/* <Route path="/test">
                  <Test></Test>
                </Route> */}

                <Route path="/about">
                  <About></About>
                </Route>

                {/* <PrivateRoute path="/career">
                  <Career></Career>
                </PrivateRoute> */}

                <Route path="/login">
                  <Login></Login>
                </Route>

                <Route path="/moreBikes">
                  <MoreBikes></MoreBikes>
                </Route>

                <Route path="/register">
                  <Registration></Registration>
                </Route>

                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>

                <PrivateRoute path="/details/:productId">
                  <Details></Details>
                </PrivateRoute>

                {/* user menu routes declared to link from outside Dashboard pages*/}
                <PrivateRoute path="/dashboard/myOrders">
                  <MyOrders></MyOrders>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/addReview">
                  <AddReview></AddReview>
                </PrivateRoute>
                <PrivateRoute path="/dashboard/pay">
                  <Pay></Pay>
                </PrivateRoute>

                {/* admin menu routes declared to link from outside Dashboard pages*/}
                <AdminRoute path="/dashboard/manageOrders">
                  <ManageOrders></ManageOrders>
                </AdminRoute>
                <AdminRoute path="/dashboard/addProduct">
                  <AddProduct></AddProduct>
                </AdminRoute>
                <AdminRoute path="/dashboard/manageProduct">
                  <ManageProducts></ManageProducts>
                </AdminRoute>
                <AdminRoute path="/dashboard/makeAdmin">
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>


                <Route path="*">
                  <NotFound></NotFound>
                </Route>

              </Switch>
            </Router>

          </AuthProvider>

        </div>
        <Footer></Footer>
      </div>

    </div>
  );
}

export default App;
