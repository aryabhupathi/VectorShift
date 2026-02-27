import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import { NodeInput } from "../components/NodeInput";
export const LLMNode = ({ id, selected }) => {
  const [model, setModel] = useState("gpt-4");
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={["system", "prompt"]}
      outputs={["response"]}
      selected={selected}
    >
      <NodeInput
        label="Model"
        type="select"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        options={[
          { label: "GPT-4", value: "gpt-4" },
          { label: "GPT-3.5 Turbo", value: "gpt-3.5-turbo" },
        ]}
      />
    </BaseNode>
  );
};
