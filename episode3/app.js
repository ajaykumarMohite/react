import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement(
  'h1',
  { id: 'test' },
  'Hello World from React'
);

const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX
const newElement = <h1 tabIndex="test2">React element using JSX</h1>;

const Component1 = () => <h1>Component1</h1>;

const HeadlingComponent = () => {
  return (
    <div id="test">
      {Component1()}
      <h1>Hello there</h1>
    </div>
  );
};

// Assignment

const elementWithCreateElement = React.createElement(
  'div',
  { class: 'title' },
  [
    React.createElement('h1', null, 'H1 here'),
    React.createElement('h2', null, 'H2 here'),
    React.createElement('h3', null, 'H3 here'),
  ]
);

const elementWithJSX = (
  <div className="title">
    <h1>H1 here</h1>
    <h2>H2 here</h2>
    <h3>H3 here</h3>
  </div>
);

const ComponentWithJSX = () => {
  return (
    <div className="title">
      <h1> H1 here</h1>
      <h2> H2 here</h2>
      <h3> H3 here</h3>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div>
      <img alt="no image" src=""></img>
      <input type="search" placeholder="search"></input>
      <h1>Header component</h1>;<img alt="userIcon" src=""></img>
    </div>
  );
};

root.render(<HeaderComponent />);
