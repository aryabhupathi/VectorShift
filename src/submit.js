import { useState } from "react";
import { useStore } from "./store";
import { PipelineResultModal } from "./components/AlertModal";
export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [result, setResult] = useState(null);
  const [open, setOpen] = useState(false);
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await response.json();
      console.log("Nodes:", nodes);
      console.log("Edges:", edges);
      setResult(data);
      setOpen(true);
    } catch (error) {
      console.error(error);
      alert("Error parsing pipeline.");
    }
  };
  return (
    <>
      <button
        onClick={handleSubmit}
        className="
          px-8 py-3
          rounded-2xl
          bg-gradient-to-r from-indigo-500 to-purple-500
          text-white
          font-medium
          shadow-[0_10px_25px_rgba(99,102,241,0.4)]
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_15px_35px_rgba(99,102,241,0.5)]
          active:scale-95
        "
      >
        Submit Pipeline
      </button>
      <PipelineResultModal
        isOpen={open}
        result={result}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
