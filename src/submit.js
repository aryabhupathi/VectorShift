import { useStore } from "./store";
export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
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
      alert(
        `Pipeline Analysis:\n\n` +
          `Nodes: ${data.num_nodes}\n` +
          `Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag ? "Yes" : "No"}`,
      );
    } catch (error) {
      console.error(error);
      alert("Error parsing pipeline.");
    }
  };
  return (
    <button className="submit-button" onClick={handleSubmit}>
      Submit Pipeline
    </button>
  );
};
