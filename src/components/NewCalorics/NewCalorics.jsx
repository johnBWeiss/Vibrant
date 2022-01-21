import React from "react";
import "./NewCalorics.css";
import CaloricForm from "./CaloricForm";
function NewCalorics(props) {
  function saveCaloricDataHandler(enteredformData) {
    const formData = { ...enteredformData, id: Math.random().toString() };
    console.log(formData);
    props.onAdd(formData);
  }

  return (
    <div className="new-caloric">
      <CaloricForm onSaveCaloricData={saveCaloricDataHandler} />
    </div>
  );
}

export default NewCalorics;
