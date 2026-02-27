import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
import { NodeInput } from "../components/NodeInput";
export const MathNode = ({ id, data, selected }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [operation, setOperation] = useState(data?.operation || "add");
  useEffect(() => {
    updateNodeField(id, "operation", operation);
  }, [operation, id, updateNodeField]);
  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={["a", "b"]}
      outputs={["result"]}
      selected={selected}
    >
      <NodeInput
        label="Operation"
        type="select"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        options={[
          { label: "Add", value: "add" },
          { label: "Subtract", value: "subtract" },
          { label: "Multiply", value: "multiply" },
          { label: "Divide", value: "divide" },
        ]}
      />
    </BaseNode>
  );
};
