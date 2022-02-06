import React, { useState } from "react";
import { Clicker } from "../Clicker";
import "./main.css";

export const Main: React.FC = (): JSX.Element => {
  let [openClicker, setOpenClicker] = React.useState<boolean>(false);
  let [menu, setMenu] = React.useState<boolean>(false);
  return (
    <div className="main">
      <div
        className="button_open"
        onClick={() => {
          setOpenClicker(!openClicker);
          setMenu(!menu);
        }}
      >
        {menu ? "Скрыть счётчик" : "Показать счётчик"}
      </div>
      {openClicker ? <Clicker /> : null}
    </div>
  );
};

// commit
