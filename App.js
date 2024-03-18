import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', { id: 'heading' }, 'hello react');

// JSX - transpiled before it reaches the JS Engine in browser (Parcle->Babel)
// jSX -> React.createElement()
const jsxheading = <h1 className='heading'>hello react</h1>;
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(jsxheading);
