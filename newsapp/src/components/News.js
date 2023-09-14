import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props)=> {

  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }
  
  
  const updateNews = async ()=> {
    props.setProgress(5);
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=03d61486bfa240a98b5130c2f1cfa30e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }
  
  const handlePrevClick = async () => {
    setPage(page-1);
    updateNews();
  };
  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();
  };
  
  useEffect(() => {
    document.title = `NewsApp - ${capitalize(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  },[]);

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin : '70px 0px'}}>Top {capitalize(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <div className="row my-3">
          {!loading && articles.map((element) => {
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
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePrevClick} >
            &larr; Previous
          </button>
          <button
            disabled={
              page+1 > Math.ceil(totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick} >
            Next &rarr;
          </button>
        </div>
        </div>
    );
  }

News.defaultProps = {
  country: "in",
  category: "general",
  title: "Top Headlines",
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
};

export default News;
