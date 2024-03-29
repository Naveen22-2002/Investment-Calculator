import { useState } from "react";
import Header from "./components/header/Header";
import Result from "./components/result/Result";
import UserInput from "./components/userinput/UserInput";

function App() {
  const [result, setResult] = useState(null);

  const calculateHandler = (userInput) => {
    const yearlyData = [];  

    let currentSavings = parseFloat(userInput['current-savings']);
    const yearlyContribution = parseFloat(userInput['yearly-contribution']);
    const expectedReturn = parseFloat(userInput['expected-return']) / 100;
    const duration = parseInt(userInput['duration']);

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setResult(yearlyData);
  }

  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />
      {result ? <Result data={result} /> : <p>No investment yet...</p>}
    </div>
  );
}

export default App;
