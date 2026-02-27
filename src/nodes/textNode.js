import { useState, useEffect, useMemo, useRef } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
import { useUpdateNodeInternals } from "reactflow";
const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
export const TextNode = ({ id, data, selected }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const updateNodeInternals = useUpdateNodeInternals();
  const [text, setText] = useState(data?.text ?? "");
  const [width, setWidth] = useState(240);
  const textareaRef = useRef(null);
  const measureRef = useRef(null);
  const variables = useMemo(() => {
    if (!text) return [];
    const matches = [...text.matchAll(VARIABLE_REGEX)];
    return Array.from(new Set(matches.map((m) => m[1])));
  }, [text]);
  useEffect(() => {
    const textarea = textareaRef.current;
    const mirror = measureRef.current;
    if (!textarea || !mirror) return;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    const newWidth = Math.min(520, Math.max(240, mirror.scrollWidth + 40));
    setWidth(newWidth);
  }, [text]);
  useEffect(() => {
    updateNodeField(id, "text", text);
  }, [text, id, updateNodeField]);
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);
  const highlight = (value) =>
    value.replace(
      VARIABLE_REGEX,
      `<span class="bg-indigo-100 text-indigo-700 px-1 rounded font-medium">$&</span>`,
    );
  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables}
      outputs={["output"]}
      selected={selected}
      style={{ width }}
    >
      <div className="relative w-full group">
        <div
          ref={measureRef}
          className="absolute invisible whitespace-pre text-sm px-3 py-2"
        >
          {text || " "}
        </div>
        <div
          className={`
            relative
            rounded-xl
            border
            bg-slate-50/70
            backdrop-blur-sm
            transition-all
            duration-200
            ${
              selected
                ? "border-indigo-400 ring-2 ring-indigo-500/20"
                : "border-slate-200 group-hover:border-slate-300"
            }
          `}
        >
          <div
            className="absolute inset-0 pointer-events-none whitespace-pre-wrap break-words text-sm px-3 py-2 text-slate-800"
            dangerouslySetInnerHTML={{
              __html: highlight(text || ""),
            }}
          />
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or use {{variable}}"
            className="
              relative
              w-full
              bg-transparent
              text-transparent
              caret-slate-800
              resize-none
              overflow-hidden
              text-sm
              px-3
              py-2
              outline-none
            "
          />
        </div>
        <div className="mt-2 text-xs text-slate-400">
          Use{" "}
          <span className="font-mono text-indigo-500">{"{{variable}}"}</span>{" "}
          syntax to inject values
        </div>
      </div>
    </BaseNode>
  );
};
