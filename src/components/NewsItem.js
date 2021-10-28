import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card my-3" >
          <img
            src={
              !imgUrl
                ? "https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE="
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
