import { BaseNode } from "../components/BaseNode";
export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={["system", "prompt"]}
      outputs={["response"]}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12 }}>
          Model:
          <select style={{ width: "100%" }}>
            <option>gpt-4</option>
            <option>gpt-3.5-turbo</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};