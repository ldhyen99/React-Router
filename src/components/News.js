import React, { Component } from 'react';
import NewsItem from './NewsItem'
import data from './data.json'

class News extends Component {

    render() {
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

            <div className="container">
  <div className="row mt-3">   
   {
      data.map((value,key) => {
        return (
          <NewsItem key={key}
          NewsID={value.id}
          pic={value.pic}
          title={value.title}
          content={value.content}>
          </NewsItem>
        )         
    })
   }
  </div>
</div>
</div>
        );
    }
}

export default News;