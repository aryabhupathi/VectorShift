import React from "react";
export const PipelineResultModal = ({ isOpen, onClose, result }) => {
  if (!isOpen || !result) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-[360px] p-6 animate-scaleIn">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Pipeline Analysis
        </h2>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="flex justify-between">
            <span>Nodes</span>
            <span className="font-medium">{result.num_nodes}</span>
          </div>
          <div className="flex justify-between">
            <span>Edges</span>
            <span className="font-medium">{result.num_edges}</span>
          </div>
          <div className="flex justify-between">
            <span>Is DAG</span>
            <span
              className={`font-medium ${
                result.is_dag ? "text-green-600" : "text-red-600"
              }`}
            >
              {result.is_dag ? "Yes" : "No"}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="
            mt-6 w-full
            py-2
            rounded-xl
            bg-gradient-to-r from-indigo-500 to-purple-500
            text-white
            font-medium
            shadow-md
            hover:scale-105
            transition
          "
        >
          Close
        </button>
      </div>
    </div>
  );
};
