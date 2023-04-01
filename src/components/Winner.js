import React from "react";

const Winner = ({ ganador, handleReset }) => {
  return (
    <div>
      <div className="opacidad"></div>
      <div className="position">
        <div className="card text-center">
          <h5 className="card-header">Congratulations !!!!!</h5>
          <div className="card-body">
            <h5 className="card-title">{ganador}</h5>
            <button className="btn btn-primary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winner;
