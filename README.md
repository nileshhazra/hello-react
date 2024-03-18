# my-notes

**Fetching react, react-dom from cdn\***

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
NOTE : remove ```main:App.js;``` from package.json when building for production.

## Browserslist

configure compatibility for specific browsers, locations, etc
```javascript
  "browserslist":[
    "last 2 versions"
  ]
  ```
