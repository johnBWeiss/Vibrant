import react, { useState } from "react";
import CaloricItem from "./CaloricItem";
import "./CaloricIntake.css";
import Card from "../UI/Card";
import CaloricsFilter from "./CaloricsFilter";
import "./CaloricsFilter.css";

function CaloricIntake(props) {
  const [year, setYear] = useState("2022");
  function changeYearHandler(selectedYear) {
    setYear(selectedYear);
    console.log(selectedYear);
  }
  const filteredByYear = props.items.filter((item) => {
    return item.date.getFullYear().toString() == year;
  });
  return (
    <Card className="CaloricIntake">
      <CaloricsFilter selected={year} onChangeYear={changeYearHandler} />
      {filteredByYear.length == 0 && (
        <p className="emptyDisplay">no meals found</p>
      )}
      {filteredByYear.length > 0 &&
        filteredByYear.map((item) => (
          <CaloricItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </Card>
  );
}

export default CaloricIntake;
