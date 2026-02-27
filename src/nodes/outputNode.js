import { BaseNode } from "../components/BaseNode";
import { NodeInput } from "../components/NodeInput";
import { useStore } from "../store";
export const OutputNode = ({ id, data, selected }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const outputName = data?.outputName || id.replace("customOutput-", "output_");
  const outputType = data?.outputType || "Text";
  return (
    <BaseNode id={id} title="Output" inputs={["value"]} selected={selected}>
      <div className="flex flex-col gap-4">
        <NodeInput
          label="Name"
          value={outputName}
          onChange={(e) => updateNodeField(id, "outputName", e.target.value)}
          placeholder="Enter output name"
        />
        <NodeInput
          label="Type"
          type="select"
          value={outputType}
          onChange={(e) => updateNodeField(id, "outputType", e.target.value)}
          options={[
            { label: "Text", value: "Text" },
            { label: "Image", value: "Image" },
          ]}
        />
      </div>
    </BaseNode>
  );
};
