import Content from "./Content";
import ReactDOM from "react-dom";

// Create a container element for the extension UI
const containerId = "my-ext-orel-root";
let container = document.getElementById(containerId);

if (!container) {
  container = document.createElement("div");
  container.id = containerId;
  document.body.appendChild(container);
}

// Render the React component into this container
ReactDOM.render(<Content />, container);
