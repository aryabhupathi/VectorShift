// // llmNode.js

import { BaseNode } from "../components/BaseNode";

// import { Handle, Position } from 'reactflow';

// export const LLMNode = ({ id, data }) => {

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-system`}
//         style={{top: `${100/3}%`}}
//       />
//       <Handle
//         type="target"
//         position={Position.Left}
//         id={`${id}-prompt`}
//         style={{top: `${200/3}%`}}
//       />
//       <div>
//         <span>LLM</span>
//       </div>
//       <div>
//         <span>This is a LLM.</span>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-response`}
//       />
//     </div>
//   );
// }

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