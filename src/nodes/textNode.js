import { useState, useEffect, useMemo, useRef } from "react";
import { BaseNode } from "../components/BaseNode";
import { useStore } from "../store";
import { useUpdateNodeInternals } from "reactflow";
const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
export const TextNode = ({ id, data, selected }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const updateNodeInternals = useUpdateNodeInternals();
  const [text, setText] = useState(data?.text ?? "");
  const [width, setWidth] = useState(220);
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
    const newWidth = Math.min(500, Math.max(220, mirror.scrollWidth + 32));
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
      '<span class="text-indigo-600 font-semibold">$&</span>',
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
      <div className="relative w-full">
        <div
          ref={measureRef}
          className="absolute invisible whitespace-pre text-sm p-2"
        >
          {text || " "}
        </div>
        <div
          className="absolute inset-0 pointer-events-none whitespace-pre-wrap break-words text-sm p-2"
          dangerouslySetInnerHTML={{ __html: highlight(text) }}
        />
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or use {{variable}}"
          className="relative w-full bg-transparent text-transparent caret-black resize-none overflow-hidden text-sm p-2"
        />
      </div>
    </BaseNode>
  );
};
