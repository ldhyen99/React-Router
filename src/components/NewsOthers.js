import React, { Component } from 'react';
import {Link} from "react-router-dom";

class NewsOthers extends Component {

    render() {
        return (
            <div className="card">
           <Link to={"/details/" + this.props.title + "." + this.props.NewsID + ".html"}> <img className="card-img-top img-fluid" src={this.props.pic} alt="" /> </Link>
            <div className="card-body">
              <h4 className="card-title">{this.props.title}</h4>
              <p className="card-text">{this.props.content}</p>
            </div>
         </div>
        );
    }
}

export default NewsOthers;