import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
import { NodeInput } from "../components/NodeInput";
export const ConditionNode = ({ id, data, selected }) => {
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
      selected={selected}
    >
      <NodeInput
        label="Expression"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="e.g. score > 50"
        icon="fx"
      />
    </BaseNode>
  );
};
