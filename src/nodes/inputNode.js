import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
export const InputNode = ({ id, data }) => {
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
    <BaseNode id={id} title="Input" outputs={["value"]}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={{ fontSize: 12 }}>
          Name:
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>
        <label style={{ fontSize: 12 }}>
          Type:
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
