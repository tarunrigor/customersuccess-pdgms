
import React from 'react';
import { ReportTable, ListSection } from './ReportTable';
import { MOCK_MONTHLY_DATA } from '../constants';

const MonthlyReport: React.FC = () => {
  const data = MOCK_MONTHLY_DATA;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Okay': return 'bg-green-100 text-green-700';
      case 'Partial': return 'bg-amber-100 text-amber-700';
      case 'Attention': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      <ReportTable
        title="Monthly Performance"
        headers={['Metric', 'Planned', 'Actuals', 'Remarks']}
        rows={data.performance}
        renderRow={(row, idx) => (
          <tr key={idx} className={row.statusColor === 'amber' ? 'bg-amber-50/50' : ''}>
            <td className="px-4 py-3 font-medium text-slate-900">{row.metric}</td>
            <td className="px-4 py-3 text-slate-600">{row.planned}</td>
            <td className="px-4 py-3 text-slate-600">{row.actuals}</td>
            <td className="px-4 py-3 text-slate-500 italic">{row.remarks}</td>
          </tr>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReportTable
          title="Execution Commitments"
          headers={['Activity', 'Planned', 'Actual', 'Status']}
          rows={data.commitments}
          renderRow={(row, idx) => (
            <tr key={idx}>
              <td className="px-4 py-3 font-medium text-slate-900">{row.activity}</td>
              <td className="px-4 py-3 text-slate-600">{row.planned}</td>
              <td className="px-4 py-3 text-slate-600">{row.actual}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusStyle(row.status)}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          )}
        />
        <ReportTable
          title="Hygiene & Control"
          headers={['Check', 'Planned', 'Actual', 'Status']}
          rows={data.hygiene}
          renderRow={(row, idx) => (
            <tr key={idx}>
              <td className="px-4 py-3 font-medium text-slate-900">{row.activity}</td>
              <td className="px-4 py-3 text-slate-600">{row.planned}</td>
              <td className="px-4 py-3 text-slate-600">{row.actual}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusStyle(row.status)}`}>
                  {row.status}
                </span>
              </td>
            </tr>
          )}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ListSection title="Highlights" items={data.highlights} />
        <ListSection title="Escalations" items={data.escalations} colorClass="bg-red-900" />
        <ListSection title="Plan for Next Month" items={data.nextPeriodPlan} colorClass="bg-blue-900" />
      </div>
    </div>
  );
};

export default MonthlyReport;
