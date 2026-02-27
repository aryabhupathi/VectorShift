import { DraggableNode } from "./draggableNode";
export const PipelineToolbar = () => {
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="filter" label="Filter" />
      <DraggableNode type="json" label="JSON" />
      <DraggableNode type="delay" label="Delay" />
      <DraggableNode type="condition" label="Condition" />
    </div>
  );
};
