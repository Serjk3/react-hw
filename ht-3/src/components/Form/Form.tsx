import React, { useState, SyntheticEvent } from "react";
import "./form.css";
import "font-awesome/css/font-awesome.min.css";

export const Form: React.FC = (): JSX.Element => {
  const [form, setForm] = useState({
    name: "",
    surName: "",
    email: "",
    phone: "",
    age: "",
    sex: "",
    region: "",
    city: "",
    message: "",
  });

  const handleForm = (e: any) => {
    const { name, value } = e.currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(form);
    alert(
      `\t\t\t\t\tДанные из формы\nОт: ${form.name} ${form.surName}\nТелефон: ${form.phone} Email: ${form.email}\nВозраст: ${form.age}, Пол: ${form.sex}, Область: ${form.region}, Город: ${form.city}\nСообщение: ${form.message}`
    );
  };

  const handleFormClean = () => {
    setForm({
      ...form,
      name: "",
      surName: "",
      email: "",
      phone: "",
      age: "",
      sex: "",
      region: "",
      city: "",
      message: "",
    });
  };

  return (
    <form action="submit" className="main_form" onSubmit={handleSubmit}>
      <h1 className="form_title">Форма</h1>
      <div className="form_control">
        <label htmlFor="name" className="form_label">
          Имя
        </label>
        <input
          required
          className="form_input"
          id="name"
          name="name"
          value={form.name}
          type="text"
          placeholder="Введите имя"
          onChange={handleForm}
        />
      </div>
      <div className="form_control">
        <label htmlFor="surName" className="form_label">
          Фамилия
        </label>
        <input
          required
          className="form_input"
          id="surName"
          name="surName"
          value={form.surName}
          type="text"
          placeholder="Введите фамилию"
          onChange={handleForm}
        />
      </div>
      <div className="form_control">
        <label htmlFor="email" className="form_label">
          Email
        </label>
        <input
          required
          className="form_input"
          id="email"
          name="email"
          value={form.email}
          type="email"
          placeholder="Ваш email"
          onChange={handleForm}
        />
      </div>
      <div className="form_control">
        <label htmlFor="phone" className="form_label">
          Телефон
        </label>
        <input
          required
          className="form_input"
          id="phone"
          name="phone"
          value={form.phone}
          type="text"
          placeholder="Введите ваш номер"
          onChange={handleForm}
        />
      </div>
      <div className="form_control">
        <label htmlFor="age" className="form_label">
          Возраст
        </label>
        <input
          required
          className="form_input"
          id="age"
          name="age"
          value={form.age}
          type="number"
          placeholder="Ваш возраст"
          onChange={handleForm}
        />
      </div>
      <div className="form_control">
        <label className="form_label">Пол</label>
        <div className="form_control-sex">
          <label htmlFor="sexM" className="">
            Мужской
          </label>
          <input
            required
            className=""
            id="sexM"
            name="sex"
            value="Мужской"
            type="radio"
            onChange={handleForm}
          />
          <label htmlFor="sexF" className="">
            Женский
          </label>
          <input
            required
            className=""
            id="sexF"
            name="sex"
            value="Женский"
            type="radio"
            onChange={handleForm}
          />
        </div>
      </div>
      <div className="form_control">
        <label htmlFor="region" className="form_label">
          Область
        </label>
        <select name="region" id="region" onChange={handleForm}>
          <option value="" disabled selected>
            Выберите вашу область
          </option>
          <option value="Брестская">Брестская</option>
          <option value="Витебская">Витебская</option>
          <option value="Гомельская">Гомельская</option>
          <option value="Гродненская">Гродненская</option>
          <option value="Минская">Минская</option>
          <option value="Могилёвская">Могилёвская</option>
        </select>
      </div>
      <div className="form_control">
        <label htmlFor="city" className="form_label">
          Город
        </label>
        <input
          required
          className="form_input"
          id="city"
          name="city"
          value={form.city}
          type="text"
          placeholder="Введите ваш город"
          onChange={handleForm}
        />
      </div>
      <div className="form_control">
        <label htmlFor="message" className="form_label">
          Сообщение
        </label>
        <textarea
          required
          className="form_input"
          id="message"
          name="message"
          value={form.message}
          placeholder="Введите ваше сообщение"
          onChange={handleForm}
        />
      </div>
      <div className="form_control">
        <button className="btn_submit">Отправить</button>
        <button className="btn_clear" onClick={handleFormClean}>
          Очистить
        </button>
      </div>
    </form>
  );
};

// commit
