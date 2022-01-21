import React from "react";

import CaloricItemDate from "./CaloricItemDate";
import "./CaloricItem.css";
import Card from "../UI/Card";

function CaloricItem(props) {
  return (
    <Card className="Caloric-item">
      <CaloricItemDate date={props.date} />
      <h2 className="Caloric-item__description">{props.title}</h2>
      <div className="Caloric-item__price">{props.amount}</div>
    </Card>
  );
}

export default CaloricItem;
