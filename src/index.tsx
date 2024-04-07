import "./style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root") as Element);

root.render(<h1>Hello React</h1>);
