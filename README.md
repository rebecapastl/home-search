# Home Search App

## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Deployment](#deployment)
* [Technologies](#technologies)
* [Author](#author)
* [License](#license)
* [Acknowledgements](#acknowledgments)

## Description

The Home Search app is a kanban style app to help the house-hunters manage all the possible properties they have to consider. The user can add properties to the app and manage them between three main boards: "to contact", "to visit" and "to decide".

## Requirements

Requirements:

- Axios
- Babel-loader
- Css-loader
- Dotenv
- Express
- Express-validator
- Mongoose
- Nodemon (package.json -> under scripts: "dev" : "nodemon app.js")
- React
- ReactDOM
- Style-loader 
- Validator
- Webpack (package.json -> under scripts: "watch" : "webpack --watch")
- Webpack-cli 
- @babel/preset-react 
- @babel/preset-env 
- @babel/core

installation express terminal: npm install express nodemon mongoose dotenv validator express-validator axios react react-dom
installation react terminal: npm install webpack webpack-cli css-loader style-loader babel-loader @babel/preset-react @babel/preset-env @babel/core 

## Deployment
This Project can be deployed using Vercel.
It is necessary to create **environment variables** to access Google Sheets:
```
SHEET_CLIENT_EMAIL=service credential’s client email
SHEET_PRIVATE_KEY= service credential’s private key (all \n must be replaced by a new line and the whole key must be encoded in base64)
SHEET_DOC_ID=sheet address/id
```

## Technologies

* [ReactJs](https://reactjs.org/) -The React Framework.
* [Bootstrap](https://getbootstrap.com/) - a CSS framework directed at responsive, mobile-first front-end web development.
* [Figma](https://figma.com/) - Online prototyping tool.
* [Google Sheets](https://drive.google.com) - Googlesheets.
* [React Hook Form](https://react-hook-form.com/) - Form validator.

## Author

* **Rebeca Pastl** - [LinkedIn](https://www.linkedin.com/in/rebeca-pastl/)

## License

MIT License 
Copyright (c) [2020] [Rebeca Pastl].
For more information, read [LICENSE.md](LICENSE.md).
