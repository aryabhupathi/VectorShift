import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
export const MathNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [operation, setOperation] = useState(data?.operation || "add");
  useEffect(() => {
    updateNodeField(id, "operation", operation);
  }, [operation, id, updateNodeField]);
  return (
    <BaseNode id={id} title="Math" inputs={["a", "b"]} outputs={["result"]}>
      <label style={{ fontSize: 12 }}>
        Operation:
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={{ width: "100%" }}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </label>
    </BaseNode>
  );
};
