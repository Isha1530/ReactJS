import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// function HelloWorld() {
//   return <h1>Hello, World!</h1>;
// }

// function Button() {
//   return <button>Click me</button>;
// }

// function MyComponent() {
//   const name = "Isha Prajapati";
//   return <h2>Hello, {name}!</h2>;
// }

// function addNumbers(a, b) {
//   return a + b;
// }

// function MyComponent() {
//   return <h2>The sum of 5 and 10 is {addNumbers(5,10)}.</h2>;
// }

function MyComponent() {
  const link = "https://www.google.com/";
  const image = "https://tinypng.com/images/social/website.jpg";
  return (
    <div>
      <h2>Click the button to open Google:</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">google</a>
      <h2>Image:</h2>
      <img src={image} alt="Placeholder Image" />
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // <HelloWorld />
  // <Button />
  <MyComponent />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
