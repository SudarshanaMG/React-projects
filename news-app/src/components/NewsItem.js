import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source, } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{backgroundColor: '#EAF1FB',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
          <img
            src={
              !imageUrl
                ? "https://www.livemint.com/lm-img/img/2023/09/07/600x338/Delhi-G20-Bharat-mandapam-24_1694074726952_1694074762949.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-body-emphasis">{title}</h5>
            <span className="badge text-bg-danger">{source}</span>
            <hr />
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By: {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="__blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
