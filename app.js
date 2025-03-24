const rootElement = document.getElementById('root');
// const h1 = React.createElement(
//   'h1',
//   { id: '123', abc: 'test' },
//   'Hello World from React'
// );
// console.log(h1);

const root = ReactDOM.createRoot(rootElement);

/**
 * <div id="parent">
 *     <div id="child>">
 *        <h1>Hello World</h1>
 *        <h2>Hello World</h2>
 *    </div>
 *     <div id="child2">
 *        <h1>Hello World</h1>
 *        <h2>Hello World</h2>
 *    </div>
 * </div>
 */

const element = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', null, 'Hello World from React'),
    React.createElement('h2', null, 'I am h2 from React'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', null, 'Hello World from React'),
    React.createElement('h2', null, 'I am h2 from React'),
  ]),
]);

root.render(element);
