import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
export const DelayNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [delay, setDelay] = useState(data?.delay || 1000);
  useEffect(() => {
    updateNodeField(id, "delay", delay);
  }, [delay, id, updateNodeField]);
  return (
    <BaseNode id={id} title="Delay" inputs={["input"]} outputs={["delayed"]}>
      <label style={{ fontSize: 12 }}>
        Delay (ms):
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </label>
    </BaseNode>
  );
};
