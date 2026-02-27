import { useState } from "react";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import "./styles.css";
import { SquareArrowDown } from "lucide-react";
function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="app-container">
      <header className={`top-bar ${isExpanded ? "expanded" : ""}`}>
        <div
          className="top-bar-header"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <span>Pipeline Toolbar</span>
          <span className="toggle-icon">
            {isExpanded ? (
              <SquareArrowDown className="rotate-180" />
            ) : (
              <SquareArrowDown />
            )}
          </span>
        </div>
        <div className={`top-bar-content ${isExpanded ? "open" : ""}`}>
          <PipelineToolbar />
        </div>
      </header>
      <main className="canvas-container">
        <PipelineUI />
      </main>
      <footer className="bottom-bar">
        <SubmitButton />
      </footer>
    </div>
  );
}
export default App;
