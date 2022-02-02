import React, { useState } from "react";
import { Form } from "../Form";
import "./main.css";

export const Main: React.FC = (): JSX.Element => {
  let [openForm, setOpenForm] = React.useState<boolean>(false);
  let [menu, setMenu] = React.useState<boolean>(false);
  return (
    <div className="main">
      <div
        className="button_open"
        onClick={() => {
          setOpenForm(!openForm);
          setMenu(!menu);
        }}
      >
        {menu ? "Скрыть форму" : "Показать форму"}
      </div>
      {openForm ? <Form /> : null}
    </div>
  );
};
