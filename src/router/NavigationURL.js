import React, { Component } from 'react';
import {Route} from "react-router-dom";
import News from './../components/News';
import Home from './../components/Home';
import NewsDetails from './../components/NewsDetails';
import Contact from '../components/Contact';

class NavigationURL extends Component {

    render() {
        return (
           
                <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Route path="/news" component={News} ></Route>  
                <Route path="/details/:slug.:id.html" component={NewsDetails}></Route>
                <Route path="/contact" component={Contact}></Route>  
                </div>
          
        );
    }
}

export default NavigationURL;