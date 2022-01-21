import react from "react";
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; //notice the space after "card", wont work w/out it

  return <div className={classes}>{props.children} </div>;
}

export default Card;
