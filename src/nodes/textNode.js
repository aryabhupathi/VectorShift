// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input
//             type="text"
//             value={currText}
//             onChange={handleTextChange}
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }


import { useState, useEffect, useMemo, useRef } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const textareaRef = useRef(null);

  // ----------------------------------
  // Extract variables from {{ var }}
  // ----------------------------------
  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(regex)].map((m) => m[1]);
    return [...new Set(matches)];
  }, [currText]);

  // ----------------------------------
  // Auto-resize textarea
  // ----------------------------------
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [currText]);

  // ----------------------------------
  // Sync text to Zustand store
  // ----------------------------------
  useEffect(() => {
    updateNodeField(id, "text", currText);
  }, [currText, id, updateNodeField]);

  return (
    <BaseNode id={id} title="Text" inputs={variables} outputs={["output"]}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label style={{ fontSize: 12 }}>
          Text:
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            style={{
              width: "100%",
              resize: "none",
              overflow: "hidden",
              fontSize: 12,
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};