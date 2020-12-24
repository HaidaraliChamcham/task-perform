import React, { useState } from 'react'

export default function Demo() {
  const [incrementBy, setIncrementBy] = useState('');
  const [subjectNumber, setSubjectNumber] = useState(100);
  

  var submitHandler = (e) => {
    e.preventDefault();
    setSubjectNumber(Number(subjectNumber) + Number(incrementBy));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col box-background">
          <form className="form" onSubmit={submitHandler}>
            <select onChange={(e) => setIncrementBy(e.target.value)} value={incrementBy}>
              <option > select</option>
              <option value="1">+1</option>
              <option value="2">+2</option>
              <option value="-1">-1</option>
              <option value="-2">-2</option>
            </select><br></br>
            <input type="number" value={subjectNumber} onChange={(e) => setSubjectNumber(e.target.value)}></input><br />

            <button onClick={submitHandler}>Execute</button>
          </form>
        </div>
        <div className="col box-background">
          Subject Number =  {subjectNumber};
    </div>
      </div>
    </div>
  )
}
