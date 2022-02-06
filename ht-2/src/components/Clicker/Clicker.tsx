import React from "react";
import "./clicker.css";
import "font-awesome/css/font-awesome.min.css";

export const Clicker: React.FC = (): JSX.Element => {
  let [stateNumber, setStateNumber] = React.useState<number>(0);
  return (
    <div className="main_clicker">
      <div className="display_clicker">
        <span className="number">{stateNumber}</span>
      </div>
      <div className="buttons">
        <div
          className="plus_button buttons_all"
          title="Прибавить 1"
          onClick={() => setStateNumber(stateNumber + 1)}
        >
          <i className="fa fa-plus"></i>
        </div>
        <div
          className="null_button buttons_all"
          title="Обнулить счётчик"
          onClick={() => setStateNumber((stateNumber = 0))}
        >
          <i className="fa fa-refresh"></i>
        </div>
        <div
          className="minus_button buttons_all"
          title="Отнять 1"
          onClick={() => setStateNumber(stateNumber - 1)}
        >
          <i className="fa fa-minus"></i>
        </div>
      </div>
    </div>
  );
};
