const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', {key: "1"}, [
    React.createElement('h1', {key: "2"}, 'Heading 1'),
    React.createElement('h2', {key: "3"}, 'Heading 2'),
  ]),
  React.createElement('div', {key: "4"}, [
    React.createElement('h3', {key: "5"}, 'Heading 3'),
    React.createElement('h4', {key: "6"}, 'Heading 4'),
  ]),
  React.createElement('div', {key: "7"}, [
    React.createElement('h5', {key: "8"}, 'Heading 5'),
    React.createElement('h6', {key: "9"}, 'Heading 6'),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
