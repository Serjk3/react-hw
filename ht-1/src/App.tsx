import React from "react";
import logo from "./logo.svg";
import "./App.css";

const header = (
  <header className="header">
    <span className="header-logo">my</span>
    <ul className="header-menu">
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
      <li>Menu 4</li>
      <li>Menu 5</li>
    </ul>
  </header>
);
const content = (
  <div className="main-content">
    <div className="main-content__left">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
      reprehenderit numquam nam! Hic nam accusantium illum omnis ad ducimus quis
      officia iste nulla doloribus, dicta maxime alias in odit, tenetur natus
      eos vero dignissimos! Fugiat consequatur eligendi dolor? Perspiciatis,
      natus. Voluptatibus quisquam nulla expedita maxime sapiente cupiditate
      eaque exercitationem sit, vero corporis veniam quasi sunt repellendus
      iusto sint quam molestias, in optio fuga culpa et harum! Alias est amet,
      harum repudiandae consequatur nemo ea. Accusamus, quo nesciunt dicta
      consectetur, commodi tenetur voluptatum pariatur expedita ad distinctio
      voluptates! Sequi aperiam non asperiores praesentium quis, pariatur
      possimus? In, obcaecati eius! Incidunt quam nam dolores aperiam
      necessitatibus minima possimus assumenda quisquam nulla vitae
      reprehenderit distinctio, fugit, ipsum vel enim molestias in iure,
      voluptas totam quis! Quae, sit exercitationem deserunt quia ipsum
      obcaecati debitis a dolor dolore voluptatum? Minus molestiae vel
      perferendis voluptatibus, similique aperiam atque molestias placeat
      accusantium consequuntur ex assumenda? Excepturi ex voluptates repellat
      nobis numquam architecto, consectetur ducimus inventore, deserunt ut
      accusamus nulla nesciunt magni eveniet aliquid mollitia nemo modi.
      Laudantium autem consequatur ullam aspernatur earum laboriosam quae
      accusamus placeat ab perspiciatis, rerum libero quos quis officiis ratione
      tempora minima nam sed reprehenderit quod est enim facere debitis!
      Corrupti, iusto. Quasi asperiores atque at! Cumque doloribus voluptates
      esse pariatur facere? Dolorem eveniet cumque ex in sint eaque iusto
      necessitatibus sed voluptatum labore id cum doloremque odit autem quisquam
      itaque eum facere voluptatem expedita blanditiis, molestiae rem tempore
      aperiam. Cupiditate, incidunt doloribus fugiat facere veniam consectetur
      velit, voluptatum cum ratione soluta corporis corrupti sunt. Iusto,
      perspiciatis doloremque molestiae expedita animi corporis maiores
      consequuntur vitae, accusantium deserunt velit quaerat et esse odit
      aliquam id quos eos rem eligendi modi qui? Tenetur, numquam aperiam
      eligendi alias id ea culpa consequuntur hic necessitatibus blanditiis
      molestiae perferendis reprehenderit fugit, ipsum saepe fugiat libero ad ab
      dolorem?
    </div>
    <div className="main-content__right">
      <img src="https://picsum.photos/350/450" alt="" />
    </div>
  </div>
);
const footer = <footer className="footer">It's my Footer React</footer>;

function App() {
  return (
    <div className="App">
      {header}
      {content}
      {footer}
    </div>
  );
}

export default App;
