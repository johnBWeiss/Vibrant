import logo from './logo.svg';
import './App.css';
// import CaloricItem from './components/CaloricItem';
import CaloricIntake from './components/Calorics/CaloricIntake';
import NewCalorics from './components/NewCalorics/NewCalorics';
import CaloricsFilter from './components/Calorics/CaloricsFilter';
import { x } from './components/dataTester'
import react, { useState } from 'react';


function App() {
  console.log(x);

  const CaloricItems = [
    {
      id: "c1",
      title: "Hamburger",
      amount: "327.6",
      date: new Date(3, 6, 2021)
    }, {
      id: "c2",
      title: "eggs",
      amount: "107",
      date: new Date(3, 6, 2021)
    }, {
      id: "c3",
      title: "coffee",
      amount: "80.9",
      date: new Date(3, 6, 2021)
    }, {
      id: "c4",
      title: "ice cream",
      amount: "188.2",
      date: new Date(3, 8, 2021)
    },

  ]
  const [calorics, setCalorics] = useState(CaloricItems)


  // let inputer = "asd"


  function addCaloricHandler(add) {
    console.log(add);
    setCalorics(prevCalorics => {
      return [add, ...prevCalorics]
    }

    )
  }
  return (


    <div className="App">
      <NewCalorics onAdd={addCaloricHandler} />
      {/* <CaloricsFilter /> */}
      <CaloricIntake items={calorics} />


      {/* <CaloricItem
        title={CaloricItems[0].title}
        amount={CaloricItems[0].amount}
        date={CaloricItems[0].date}
      />
      <CaloricItem
        title={CaloricItems[1].title}
        amount={CaloricItems[1].amount}
        date={CaloricItems[1].date} />

      <CaloricItem
        title={CaloricItems[2].title}
        amount={CaloricItems[2].amount}
        date={CaloricItems[2].date} />

      <CaloricItem
        title={CaloricItems[3].title}
        amount={CaloricItems[3].amount}
        date={CaloricItems[3].date}
      /> */}

    </div>
  );
}

export default App;
