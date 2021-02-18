import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card my-3">
        <img
          className="card-img-top"
          style={{ height: 300 }}
          src={props.src}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.cardtitle}</h5>
          <p className="card-text">{props.cardtext}</p>
          <a href={props.href} className="btn btn-primary">
            View Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
