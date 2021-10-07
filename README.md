How integrate Form builder in your React (create-react-app) app:

1. [Create React App](https://github.com/facebook/create-react-app).
2. Copy folders: ```css```, ```images```, ```scripts``` to folder ```public``` in your react app, and folder ```src/optimajet-builder.js``` to ```src```
3. Copy .eslintrc.json to root your react app:
4. Include these imports to <body> of "public/index.html":
```html
    <script src="scripts/jquery.js" type="text/javascript"></script>
    <script src="scripts/Chart.min.js" type="text/javascript"></script>
    <link href="css/semantic.min.css" rel="stylesheet" type="text/css" />
    <link href="css/optimajet-formbuilder.css" rel="stylesheet" type="text/css" />
```
5. Include these packages in package.json:
```json
    "chart.js": "^3.5.1",
    "clone": "2.1.2",
    "draft-convert": "2.1.8",
    "draft-js": "0.11.3",
    "jquery": "^3.4.1",
    "json5": "2.1.3",
    "moment": "2.25.3",
    "numeral": "2.0.6",
    "react": "^17.0.2",
    "react-data-grid": "4.0.9",
    "react-datepicker": "1.6.0",
    "react-dom": "^17.0.2",
    "react-dropzone-component": "3.2.0",
    "react-fast-compare": "3.0.2",
    "react-grid-layout": "0.16.6",
    "react-html5-camera-photo": "^1.5.4",
    "react-number-format": "4.3.1",
    "react-scripts": "4.0.3",
    "react-signature-canvas": "^1.0.3",
    "react-slick": "0.25.2",
    "react-split": "2.0.7",
    "reflux": "6.4.1",
    "semantic-ui-react": "0.87.3",
    "uuid": "3.3.2"
```
6. Run ```npm i --legacy-peer-deps```
7. Import { DWKitFormBuilder, DWKitFormViewer } from  "optimajet-builder.js" and use it in your app with props from "builder-viewer-props.js" (example in App.jsx)
8. Run ``` npm start```

Done.
