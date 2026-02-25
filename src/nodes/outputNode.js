import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");
  useEffect(() => {
    updateNodeField(id, "outputName", currName);
  }, [currName, id, updateNodeField]);
  useEffect(() => {
    updateNodeField(id, "outputType", outputType);
  }, [outputType, id, updateNodeField]);
  return (
    <BaseNode id={id} title="Output" inputs={["value"]}>
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
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={{ width: "100%" }}
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};