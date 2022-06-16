import React from "react";
import ReactDOM from "react-dom";
import Pages from "./pages";
import GlobalStyle from "../final/components/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Pages />
    </div>);
};
ReactDOM.render(<App />, document.getElementById("root"));
