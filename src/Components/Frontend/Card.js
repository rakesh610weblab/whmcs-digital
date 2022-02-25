import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = (props) => {

  let { id, image, title, description, readmorelink, price, category } = props;

  const Colors = ["#ed4c78", "#00c9a7", "#377dff", "#e97b57"];
  const [color, setColor] = useState('#377dff');

  useEffect(() => {
    setColor(Colors[Math.floor(Math.random() * Colors.length)]);
  });

  const style = {
    backgroundColor: color,
  };
  
  return (
    <>
      <div className={`slider_box slider_box_${id}`} key={id}>
        <div className="software_img" style={style}>
          <span className={`icon ${image}`}></span>
        </div>
        <div className="rating_box">
          <p>{price}</p>
          <div className="review">
            <span className="icon icon-star"></span>
            <span className="icon icon-star"></span>
            <span className="icon icon-star"></span>
            <span className="icon icon-star"></span>
            <span className="icon icon-star"></span>
          </div>
        </div>
        <div className="software_text">
          <h3>{title}</h3>
          <p className="p_style">{description}</p>
          <div className="software_btns">
            <Link to={readmorelink} className="read_more">
              Read More
            </Link>
            <Link to="/" className="buy_now">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
