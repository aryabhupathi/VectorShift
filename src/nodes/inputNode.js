import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { NodeInput } from "../components/NodeInput";
import { useStore } from "../store";
export const InputNode = ({ id, data, selected }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");
  useEffect(() => {
    updateNodeField(id, "inputName", currName);
  }, [currName, id, updateNodeField]);
  useEffect(() => {
    updateNodeField(id, "inputType", inputType);
  }, [inputType, id, updateNodeField]);
  return (
    <BaseNode id={id} title="Input" outputs={["value"]} selected={selected}>
      <div className="flex flex-col gap-4">
        <NodeInput
          label="Name"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          placeholder="Enter input name"
        />
        <NodeInput
          label="Type"
          type="select"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          options={[
            { label: "Text", value: "Text" },
            { label: "File", value: "File" },
          ]}
        />
      </div>
    </BaseNode>
  );
};
