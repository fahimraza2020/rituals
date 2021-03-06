import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Home from '../Containers/Home'
import BathBody from '../Containers/Bath-Body'
import CollectionStory from '../Containers/Collection-Story'
import Cart from '../Containers/Cart'
import Account from '../Containers/Account'
import EditProfile from '../Containers/Edit Profile'
import ProductDetail from '../Containers/Product-Detail'
import HomeDuplicate from '../Containers/Home-Duplicate'
import CollectionStoryJing from '../Containers/CollectionStoryJing'
import Orders from '../Containers/Orders'
import Addresses from '../Containers/Addresses'
import Newsletter from '../Containers/Newsletter'
import Checkout from '../Containers/Checkout'
import Payment from '../Containers/Payment'
import Login from '../Containers/Login'
import Delivery from '../Containers/Delivery'
import OrderConfirmation from '../Containers/Confirmation'
import Footer from '../Components/Footer'
import Angeli from '../Containers/angeli'

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

export class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route exact path="/" component={Home} />
                    <Route path="/bath-body" component={BathBody} />
                    <Route path="/collection-story" component={CollectionStory} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/account" component={Account} />
                    <Route path="/account-edit-profile" component={EditProfile} />
                    <Route path="/product-detail" component={ProductDetail} />
                    <Route path="/duplicate-home" component={HomeDuplicate} />
                    <Route path="/collection-story-jing" component={CollectionStoryJing} />
                    <Route path="/order-history" component={Orders} />
                    <Route path="/address-list" component={Addresses} />
                    <Route path="/newsletter-subscription" component={Newsletter} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/payment" component={Payment} />
                    <Route path="/login" component={Login} />
                    <Route path="/delivery" component={Delivery} />
                    <Route path="/order-confirmation" component={OrderConfirmation} />
                    <Route path="/angeli-di-bosca" component={Angeli} />
                </Router>
                <Footer />
            </div>
        )
    }
}

export default Routes
