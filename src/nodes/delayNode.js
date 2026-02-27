import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
import { NodeInput } from "../components/NodeInput";
export const DelayNode = ({ id, data, selected }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [delay, setDelay] = useState(data?.delay || 1000);
  useEffect(() => {
    updateNodeField(id, "delay", delay);
  }, [delay, id, updateNodeField]);
  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={["input"]}
      outputs={["delayed"]}
      selected={selected}
    >
      <NodeInput
        label="Delay (ms)"
        type="number"
        value={delay}
        onChange={(e) => setDelay(e.target.value)}
      />
    </BaseNode>
  );
};
