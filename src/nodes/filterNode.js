import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
export const FilterNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [condition, setCondition] = useState(data?.condition || "");
  useEffect(() => {
    updateNodeField(id, "condition", condition);
  }, [condition, id, updateNodeField]);
  return (
    <BaseNode id={id} title="Filter" inputs={["input"]} outputs={["filtered"]}>
      <label style={{ fontSize: 12 }}>
        Condition:
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 10"
          style={{ width: "100%" }}
        />
      </label>
    </BaseNode>
  );
};
