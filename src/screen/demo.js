import React, { useState } from 'react'

export default function Demo() {
  const [incrementBy, setIncrementBy] = useState('');
  const [subjectNumber, setSubjectNumber] = useState('100');


  var submitHandler = (e) => {
    e.preventDefault();
    setSubjectNumber(Number(subjectNumber) + Number(incrementBy));
  }
  const checker = (e) => {
    if (!e.target.value) {
      setSubjectNumber('100');
    }
  }
  return (
    <div className="container">
      <h1>Subject Number Updation Task</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <form className="form-group" onSubmit={submitHandler}>
                <select className="form-control" onChange={(e) => setIncrementBy(e.target.value)} value={incrementBy}>
                  <option value=""> Please Select Number</option>
                  <option value="1">+1</option>
                  <option value="2">+2</option>
                  <option value="-1">-1</option>
                  <option value="-2">-2</option>
                </select><br></br>
                <input type="number" className="form-control" id="no" value={subjectNumber} onBlur={checker} onChange={(e) => setSubjectNumber(e.target.value)}></input>
                <br />
                <button className="btn btn-primary" onClick={submitHandler}>Execute</button>
              </form>
            </div>
          </div>
        </div>


        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title center align-middle">
                Subject Number =  {subjectNumber};
         </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
