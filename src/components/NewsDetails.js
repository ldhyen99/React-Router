import React, { Component } from 'react';
import data from './data.json'
import NewsOthers from './NewsOthers.js';
class NewsDetails extends Component {

    render() {
    console.log(this.props.match.params.id)
    console.log(typeof(this.props.match.params.id))

    var count = 1; // count the news others want to prints
        return (
            <div>
  <header className="masthead NewsList">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center">News - List</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/*End header*/}
  {/*News*/}
 {
   //Connect with NewsItem.js
  //take value in file data to print into the web if value's id coincide id of the news
  data.map( (value,key) => {
      if(value.id === parseInt(this.props.match.params.id,20)) {
        return(
          <div className="jumbotron jumbotron-fluid" key={key}>
          <div className="container">
            <img src={value.pic} alt="" className="img-fluid weight-100" />
            <h3 className="lead text-center mt-3">{value.title}</h3>
            <hr className="my-2" />
            {value.content}
          </div>
        </div>
        )
      }else return true;
    })
}

  <div className="container">
    <h4 className="card-title text-center">Others</h4>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
          {
            //Connect with NewsOthers.js
            data.map((value,key) => {
              // Check value id in data & id in the link web, not coincide => print 4 news others
              if(value.id !== parseInt(this.props.match.params.id,20)) {
              if(count <= 4 ) {
                count++
              return (
               
                  <NewsOthers key={key}
                      NewsID={value.id}
                      pic={value.pic}
                      title={value.title}
                      content={value.content}/>
               
              )
            }else return true;
          } else return true;
            })
          }
          
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default NewsDetails;