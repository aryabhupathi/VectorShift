import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import "./styles.css";
function App() {
  return (
    <div className="app-container">
      <header className="top-bar">
        <PipelineToolbar />
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
