import React from "react";
export const NodeInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  options = [],
  error = false,
  icon = null,
}) => {
  const baseStyles = `
    w-full
    h-9
    px-3
    text-sm
    rounded-lg
    bg-white
    border
    outline-none
    transition-all duration-200
    shadow-sm
  `;
  const stateStyles = error
    ? "border-red-400 focus:ring-2 focus:ring-red-400/30"
    : "border-slate-200 hover:border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30";
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-medium text-slate-600">{label}</label>
      )}
      <div className="relative">
        {type === "select" ? (
          <div className="relative">
            <select
              value={value}
              onChange={onChange}
              className={`
        w-full
        h-9
        px-3 pr-10
        text-sm font-medium
        rounded-xl
        bg-gradient-to-br from-indigo-50 to-white
        border border-indigo-200
        text-indigo-700
        outline-none
        transition-all duration-200
        shadow-sm
        hover:border-indigo-300
        focus:ring-2 focus:ring-indigo-500/30
        focus:border-indigo-400
        appearance-none
      `}
            >
              {options.map((opt) => (
                <option key={opt.value || opt} value={opt.value || opt}>
                  {opt.label || opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-indigo-400 text-xs">
              ▼
            </div>
          </div>
        ) : type === "textarea" ? (
          <textarea
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${baseStyles} ${stateStyles} h-20 resize-none`}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${baseStyles} ${stateStyles} ${icon ? "pl-8" : ""}`}
          />
        )}
        {icon && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};
