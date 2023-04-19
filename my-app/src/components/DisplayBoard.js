const DisplayBoard = ({ Category, numberOfBooks, getAllBook }) => {
  return (
    <div className="display-wrapper">
      <div className="display-box">
        <div className="display-board">
          <h4>생성된 수</h4>
          <div className="number">{numberOfBooks}</div>
        </div>
        <div className="get-button">
          <button onClick={() => getAllBook()}>{Category}</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
