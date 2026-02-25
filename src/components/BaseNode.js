import { Handle, Position } from "reactflow";
export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  selected,
  style = {},
}) => {
  return (
    <div
      style={style}
      className={`
        relative
        bg-white
        border border-slate-200
        rounded-2xl
        shadow-md
        px-4 py-4
        min-w-[240px]
        transition-all duration-200 ease-out
        hover:-translate-y-1
        hover:shadow-lg
        ${selected ? "ring-2 ring-indigo-500 border-indigo-500 shadow-lg" : ""}
      `}
    >
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
