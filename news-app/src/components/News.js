import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 21,
    category: 'general',
    title: 'Top Headlines'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
  }

  constructor(){
    super();
    // console.log('This is constructor from news component');
    this.state = {
      articles: [],
      loading:false,
      page:1
    }
  }

  async componentDidMount(){
    // console.log("componentDidMount");
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=03d61486bfa240a98b5130c2f1cfa30e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles : parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async() =>{
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=03d61486bfa240a98b5130c2f1cfa30e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page: this.state.page -1,
      loading: false
    })
  }
  handleNextClick = async() =>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=03d61486bfa240a98b5130c2f1cfa30e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles : parsedData.articles,
        page: this.state.page + 1,
        loading: false
      })    
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>{this.props.title}</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} newsUrl={element.url} imageUrl={element.urlToImage} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-around">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
     
    )
  }
}

export default News
