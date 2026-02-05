
import React from 'react';

interface ReportTableProps {
  title: string;
  headers: string[];
  rows: any[];
  renderRow: (row: any, index: number) => React.ReactNode;
}

export const ReportTable: React.FC<ReportTableProps> = ({ title, headers, rows, renderRow }) => {
  return (
    <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md hover:border-slate-200">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="text-xs font-black uppercase tracking-[0.15em] text-slate-500">{title}</h3>
        <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-sm shadow-indigo-200" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              {headers.map((header) => (
                <th key={header} className="px-6 py-4 font-black text-[10px] text-slate-400 uppercase tracking-widest">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {rows.map((row, idx) => renderRow(row, idx))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ListSection: React.FC<{ title: string; items: string[]; colorClass?: string }> = ({ title, items, colorClass = "bg-slate-900" }) => (
  <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all hover:shadow-md hover:border-slate-200">
    <div className={`${colorClass} px-6 py-4 border-b border-white/10`}>
      <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white">{title}</h3>
    </div>
    <ul className="p-6 space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-4 text-slate-600 group">
          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
          <span className="text-sm font-medium leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
