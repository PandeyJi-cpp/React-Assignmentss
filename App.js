
import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createElement("h1",{id:"heading"},"Namaste React 🚀");
const jsxheading=<h1 className="head" tabIndex="5">Namaste React using JSX 🚀</h1>
const Heading2=()=><h1 className="heading">Hello Baby!</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
const App=()=>(
  <>  {heading}
<Heading2 /></>
);
root.render(<App />);