import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { NodeInput } from "../components/NodeInput";
import { useStore } from "../store";
export const FilterNode = ({ id, data, selected }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [condition, setCondition] = useState(data?.condition || "");
  useEffect(() => {
    updateNodeField(id, "condition", condition);
  }, [condition, id, updateNodeField]);
  return (
    <BaseNode
      id={id}
      title="Filter"
      inputs={["input"]}
      outputs={["filtered"]}
      selected={selected}
    >
      <div className="flex flex-col gap-4">
        <NodeInput
          label="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 10"
          icon="fx"
        />
        <div className="text-xs text-slate-400">
          Only items matching this expression will pass through.
        </div>
      </div>
    </BaseNode>
  );
};
