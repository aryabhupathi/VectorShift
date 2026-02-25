import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
export const ConditionNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [expression, setExpression] = useState(data?.expression || "");
  useEffect(() => {
    updateNodeField(id, "expression", expression);
  }, [expression, id, updateNodeField]);
  return (
    <BaseNode
      id={id}
      title="Condition"
      inputs={["condition"]}
      outputs={["true", "false"]}
    >
      <label style={{ fontSize: 12 }}>
        Expression:
        <input
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="e.g. score > 50"
          style={{ width: "100%" }}
        />
      </label>
    </BaseNode>
  );
};
