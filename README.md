&nbsp;&nbsp;&nbsp;[![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev) 
 
MY-NOTES
<hr>
Fetching react, react-dom from cdn\***

```javascript
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

rather use npm to install required packages -

```
npm i parcel
npm i react
npm i react-dom
```

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { key: '1' }, [
    React.createElement('h1', { key: '2' }, 'Learning React!'),
    React.createElement('h2', { key: '3' }, 'Heading 2'),
  ]),
  React.createElement('div', { key: '4' }, [
    React.createElement('h3', { key: '5' }, 'Heading 3'),
    React.createElement('h4', { key: '6' }, 'Heading 4'),
  ]),
  React.createElement('div', { key: '7' }, [
    React.createElement('h5', { key: '8' }, 'Heading 5'),
    React.createElement('h6', { key: '9' }, 'Heading 6'),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
```

**package.json**
dependencies : <version>

- ^ : install the minor version automatically (recommended)
- ~ : instal the major version automatically

**package-lock.json** :
keeps track of exact version

> dependencies have dependencies which have other dependencies. these are known as **transitive dependencies**

**Execute a package**

```
npx parcel index.html
```

## Parcel

features of parcel :

- dev build
- local dev server
- HMR - hot module replacement
- uses file watching algorithm (written in c++)
- caching : faster buils
- image optimization
- minification
- bundling
- compressing
- consistent hashing
- code splitting
- differential bundling
- diagnostics
- error handling
- https
- tree shaking ( remove unused code )

```
npx parcel build index.html
```

NOTE : remove `main:App.js;` from package.json when building for production.

## Browserslist

configure compatibility for specific browsers, locations, etc

```javascript
  "browserslist":[
    "last 2 versions"
  ]
```

# JSX

JSX, or JavaScript XML, is an extension of the JavaScript language that lets you write HTML-like markup inside a JavaScript file. It uses an XML-like syntax to create Document Object Model trees, and is intended to be transformed into valid JavaScript. JSX is based on ES6.

```javascript
//before
const heading = React.createElement('h1', { id: 'heading' }, 'hello react');

//after
const jsxheading = <h1 id='heading'>hello react</h1>;
```


```javascript

// React Element
const heading = <h1 className='heading'>hello react</h1>;

// React functional component
const HeadingComponent = () => {
    return <h1>hello react functional component</h1>;
OR
const HeadingComponent = () => (
  <h1>hello react functional component</h1>
);
```

**JSX sanitises the code before running it  - {javascript-code}**
```javascript
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

```

