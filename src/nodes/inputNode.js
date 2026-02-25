// // inputNode.js

// import { BaseNode } from "../components/BaseNode";

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const InputNode = ({ id, data }) => {
//   const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
//   const [inputType, setInputType] = useState(data.inputType || 'Text');

//   const handleNameChange = (e) => {
//     setCurrName(e.target.value);
//   };

//   const handleTypeChange = (e) => {
//     setInputType(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Input</span>
//       </div>
//       <div>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={currName}
//             onChange={handleNameChange}
//           />
//         </label>
//         <label>
//           Type:
//           <select value={inputType} onChange={handleTypeChange}>
//             <option value="Text">Text</option>
//             <option value="File">File</option>
//           </select>
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-value`}
//       />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );

  const [inputType, setInputType] = useState(data?.inputType || "Text");

  // -----------------------------
  // Sync to store safely
  // -----------------------------
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