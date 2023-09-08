import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/09/07/600x338/Delhi-G20-Bharat-mandapam-24_1694074726952_1694074762949.jpg":imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5><hr />
                <p className="card-text">{description}</p>
                <a href={newsUrl} target='__blank' className="btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
