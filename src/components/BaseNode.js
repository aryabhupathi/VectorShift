// import { Handle, Position } from "reactflow";

// export const BaseNode = ({
//   id,
//   title,
//   inputs = [],
//   outputs = [],
//   children,
// }) => {
//   return (
//     <div className="node-container">
//       <div className="node-header">{title}</div>

//       {inputs.map((input, index) => (
//         <Handle
//           key={input}
//           type="target"
//           position={Position.Left}
//           id={`${id}-${input}`}
//           style={{ top: 50 + index * 22 }}
//         />
//       ))}

//       {outputs.map((output, index) => (
//         <Handle
//           key={output}
//           type="source"
//           position={Position.Right}
//           id={`${id}-${output}`}
//           style={{ top: 50 + index * 22 }}
//         />
//       ))}

//       <div className="node-body">{children}</div>
//     </div>
//   );
// };

import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  selected,
}) => {
  return (
    <div
      className={`
        relative
        bg-card
        border border-border
        rounded-2xl
        shadow-node
        px-4 py-3
        min-w-[220px]
        transition-all duration-200
        hover:shadow-nodeHover
        ${selected ? "ring-2 ring-accent border-accent" : ""}
      `}
    >
      {/* Header */}
      <div className="text-sm font-semibold mb-3 text-slate-700">{title}</div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          style={{ top: 60 + index * 24 }}
          className="
            w-3 h-3
            bg-accent
            border-2 border-white
            rounded-full
            shadow
            hover:scale-110
            transition-transform
          "
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          style={{ top: 60 + index * 24 }}
          className="
            w-3 h-3
            bg-accent
            border-2 border-white
            rounded-full
            shadow
            hover:scale-110
            transition-transform
          "
        />
      ))}

      {/* Body */}
      <div className="text-sm text-slate-600">{children}</div>
    </div>
  );
};