
import React from 'react';
import { ReportTable, ListSection } from './ReportTable';
import { MOCK_WEEKLY_DATA } from '../constants';

const WeeklyReport: React.FC = () => {
  const data = MOCK_WEEKLY_DATA;

  return (
    <div className="animate-fade-in space-y-6">
      <ReportTable
        title="Weekly Performance"
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

      <ReportTable
        title="Week on Week Performance"
        headers={['Metric', 'Last week', 'This week', '%']}
        rows={data.wowPerformance}
        renderRow={(row, idx) => (
          <tr key={idx} className={row.change < 0 ? 'bg-red-50/30' : 'bg-green-50/30'}>
            <td className="px-4 py-3 font-medium text-slate-900">{row.metric}</td>
            <td className="px-4 py-3 text-slate-600">{row.lastPeriod}</td>
            <td className="px-4 py-3 text-slate-600">{row.thisPeriod}</td>
            <td className={`px-4 py-3 font-semibold ${row.change < 0 ? 'text-red-600' : 'text-green-600'}`}>
              {row.change > 0 ? '+' : ''}{row.change}%
            </td>
          </tr>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ReportTable
          title="Execution Commitments"
          headers={['Activity', 'Activities', 'Remarks']}
          rows={data.commitments}
          renderRow={(row, idx) => (
            <tr key={idx}>
              <td className="px-4 py-3 font-medium text-slate-900">{row.activity}</td>
              <td className="px-4 py-3 text-slate-600 text-center">{row.actual}</td>
              <td className="px-4 py-3 text-slate-400">—</td>
            </tr>
          )}
        />
        <ReportTable
          title="Hygiene & Control"
          headers={['Check', 'Activities', 'Remarks']}
          rows={data.hygiene}
          renderRow={(row, idx) => (
            <tr key={idx}>
              <td className="px-4 py-3 font-medium text-slate-900">{row.activity}</td>
              <td className="px-4 py-3 text-slate-600 text-center">{row.actual}</td>
              <td className="px-4 py-3 text-slate-400">—</td>
            </tr>
          )}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ListSection title="Highlights" items={data.highlights} />
        <ListSection title="Escalations" items={data.escalations} colorClass="bg-red-900" />
        <ListSection title="Plan for Next Week" items={data.nextPeriodPlan} colorClass="bg-blue-900" />
      </div>
    </div>
  );
};

export default WeeklyReport;
