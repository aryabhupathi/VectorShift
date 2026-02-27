import { BaseNode } from "../components/BaseNode";
export const JSONNode = ({ id, selected }) => {
  return (
    <BaseNode
      id={id}
      title="JSON Parser"
      inputs={["json"]}
      outputs={["parsed"]}
      selected={selected}
    >
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
          <span className="text-indigo-500 font-mono text-xs mt-0.5">
            {"{}"}
          </span>
          <span>Parses a JSON string into a structured object.</span>
        </div>
        <div className="text-xs text-slate-400">Expects valid JSON input</div>
      </div>
    </BaseNode>
  );
};
