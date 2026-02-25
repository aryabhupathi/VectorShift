// jsonNode.js

import { BaseNode } from "../components/BaseNode";

export const JSONNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="JSON Parser"
      inputs={["json"]}
      outputs={["parsed"]}
    >
      <div style={{ fontSize: 12 }}>Parses JSON input into an object.</div>
    </BaseNode>
  );
};
