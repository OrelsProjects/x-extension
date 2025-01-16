import Content from "@/content/content";
import ReactDOM from "react-dom";

// Create a container element for the extension UI
const containerId = "my-root";
let container = document.getElementById(containerId);

if (!container) {
  container = document.createElement("div");
  container.id = containerId;
  document.body.appendChild(container);
}

// Render the React component into this container
ReactDOM.render(<Content />, container);
