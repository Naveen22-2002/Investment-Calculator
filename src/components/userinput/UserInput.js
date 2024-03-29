import { useState } from 'react';

const init = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 10,
  'duration': 2
};

function UserInput(props) {
  const [userAllData, setUserAllData] = useState(init);

  function Submit(event) {
    event.preventDefault();
    props.onCalculate(userAllData);
  }

  function Reset() {
    setUserAllData(init);
  }

  function userData(input, value) {
    setUserAllData(prevItem => {
      return {
        ...prevItem,
        [input]: value,
      };
    });
  }

  return (
    <form onSubmit={Submit} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(event) => { userData('current-savings', event.target.value) }} value={userAllData['current-savings']} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={(event) => { userData('yearly-contribution', event.target.value) }} value={userAllData['yearly-contribution']} type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(event) => { userData('expected-return', event.target.value) }} value={userAllData['expected-return']} type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) => { userData('duration', event.target.value) }} value={userAllData['duration']} type="number" id="duration" />
        </p>
      </div>
      <p className="actions">
        <button onClick={Reset} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default UserInput;
