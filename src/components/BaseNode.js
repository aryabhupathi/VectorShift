import { Handle, Position } from "reactflow";
import { useStore } from "../store";
import { Trash2 } from "lucide-react";
export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  selected,
  style = {},
}) => {
  const deleteNode = useStore((state) => state.deleteNode);
  return (
    <div
      style={style}
      className={`
        relative overflow-visible
        bg-red-50
        border border-slate-200
        rounded-2xl
        shadow-xl
        px-3 py-3
        min-w-[260px]
        transition
        hover:-translate-y-1 hover:shadow-2xl
        ${selected ? "ring-2 ring-indigo-500" : ""}
      `}
    >
      <button
        onClick={() => deleteNode(id)}
        className={`
          absolute -top-3 -right-3
          bg-white
          border border-red-200
          rounded-full
          p-2
          shadow-md
          transition-all duration-200 ease-out
          hover:bg-red-50 hover:scale-110
          ${
            selected
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75 pointer-events-none"
          }
        `}
      >
        <Trash2 />
      </button>
      <div className="text-sm font-semibold text-slate-800 text-center mb-3">
        {title}
      </div>
      {inputs.map((input) => (
        <Handle
          key={input}
          type="target"
          position={Position.Left}
          id={`${id}-${input}`}
          className="w-3.5 h-3.5 bg-indigo-500 border-2 border-white rounded-full shadow-sm"
        />
      ))}
      {outputs.map((output) => (
        <Handle
          key={output}
          type="source"
          position={Position.Right}
          id={`${id}-${output}`}
          className="w-3.5 h-3.5 bg-indigo-500 border-2 border-white rounded-full shadow-sm"
        />
      ))}
      <div className="text-xs text-slate-600 mt-2 space-y-2">{children}</div>
    </div>
  );
};
