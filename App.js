import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
const heading = <h3 className='heading'>hello react</h3>;

// React functional component
const Title = () => (
    <h2 className='title'>this is a title</h2>
);
// component composition
const HeadingComponent = () => (
    <div id='container'>
        {Title()}
        {heading}
        <h1 className='heading'>hello react functional component</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
