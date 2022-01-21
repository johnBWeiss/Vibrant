import React from "react";

import "./CaloricsFilter.css";

const CaloricsFilter = (props) => {
  function dropDownHandler(event) {
    props.onChangeYear(event.target.value);
  }

  return (
    <div className="calorics-filter">
      <div className="calorics-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default CaloricsFilter;
