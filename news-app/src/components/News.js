import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "Pakistan vs Bangladesh Live Score, Asia Cup 2023 Super 4: Haris Rauf Takes 2 Wickets, Bangladesh Go 4 Down vs Pakistan - NDTV Sports",
      "description": "PAK Vs BAN Asia Live Cricket Score: Bangladesh are four wickets down against Pakistan in their Asia Cup Super Four clash at the Gaddafi Stadium in Lahore.",
      "url": "https://sports.ndtv.com/asia-cup-2023/pakistan-vs-bangladesh-live-score-asia-cup-2023-super-4-today-match-live-pak-vs-ban-latest-updates-4364069",
      "urlToImage": "https://c.ndtvimg.com/2023-09/quoiom4g_mohammad-naim-afp_625x300_06_September_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2023-09-06T10:15:55Z",
      "content": "PAK Vs BAN Asia Live Cricket Score: Bangladesh are four wickets down against Pakistan in their Asia Cup Super Four clash at the Gaddafi Stadium in Lahore. Currently, Shakib Al Hasan and Mushfiqur Rah… [+387 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TOI Sports Desk",
      "title": "India's 2023 ODI World Cup squad: Did selectors decide to play it safe? - Times of India",
      "description": "Cricket News: Captain Rohit Sharma and Chief selector Ajit Agarkar's press conference on Tuesday in Sri Lanka where they announced the 15 member provisional squad f",
      "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/indias-2023-odi-world-cup-squad-did-selectors-decide-to-play-it-safe/articleshow/103428865.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-103428865,width-1070,height-580,imgsize-109264,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-09-06T09:47:00Z",
      "content": "World Cup 2023 | India Names 15-Member Squad For ODI World Cup, Tilak And Prasidh Dropped"
    }
  ]

  constructor(){
    super();
    console.log('This is constructor from news component');
    this.state = {
      articles: this.articles,
      loading:false
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row my-3">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0,50)} description={element.description.slice(0,100)} newsUrl={element.url} imageUrl={element.urlToImage} />
            </div>
          })}
        </div>
      </div>
     
    )
  }
}

export default News
