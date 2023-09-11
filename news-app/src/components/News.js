import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    title: "Top Headlines",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  };

  capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    // console.log('This is constructor from news component');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsApp - ${this.capitalize(this.props.category)}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top {this.capitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-around">
        <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick} >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick} >
            Next &rarr;
          </button>
        </div>
        </div>
    );
  }
}

export default News;
