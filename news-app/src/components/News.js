import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 21,
    category: "general",
    title: "Top Headlines",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
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
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `NewsApp - ${this.capitalize(this.props.category)}`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=03d61486bfa240a98b5130c2f1cfa30e&page=${this.state.page}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchData = async () =>{
    this.setState({page: this.state.page + 1});
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=03d61486bfa240a98b5130c2f1cfa30e&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  render() {
    return (
      <>
        <h1 className="text-center">Top {this.capitalize(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        <div className="container">
        <div className="row my-3">
          {this.state.articles.map((element) => {
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
        </div>
        </InfiniteScroll>
        </>
    );
  }
}

export default News;
