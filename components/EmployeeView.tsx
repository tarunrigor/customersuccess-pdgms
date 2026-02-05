
import React from 'react';
import { 
  EMPLOYEE_HYGIENE_LOG, 
  EMPLOYEE_EXECUTION_LOG, 
  EMPLOYEE_COMMUNICATION_LOG, 
  EMPLOYEE_RISK_LOG,
  EMPLOYEE_MONTHLY_PERFORMANCE,
  EMPLOYEE_BRAND_OWNERSHIP
} from '../constants';
import { ReportTable } from './ReportTable';
import WeeklyReport from './WeeklyReport';

export const EmployeeDailyReport: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      <ReportTable
        title="Daily Hygiene Log"
        headers={['Date', 'Person', 'Brand', 'Check Type', 'Status', 'Notes']}
        rows={EMPLOYEE_HYGIENE_LOG}
        renderRow={(row, idx) => (
          <tr key={idx}>
            <td className="px-6 py-4 font-bold text-slate-400 text-xs">{row.date}</td>
            <td className="px-6 py-4 font-medium text-slate-900">{row.person}</td>
            <td className="px-6 py-4 font-bold text-indigo-600">{row.brand}</td>
            <td className="px-6 py-4 text-slate-600">{row.type}</td>
            <td className="px-6 py-4">
              <span className={`px-2 py-0.5 rounded text-[10px] font-black ${row.status === 'OK' ? 'bg-green-100 text-green-700' : 'bg-rose-100 text-rose-700'}`}>
                {row.status}
              </span>
            </td>
            <td className="px-6 py-4 text-slate-500 italic text-xs">{row.notes}</td>
          </tr>
        )}
      />

      <ReportTable
        title="Daily Execution Log"
        headers={['Date', 'Person', 'Brand', 'Action Type', 'Quantity', 'Notes']}
        rows={EMPLOYEE_EXECUTION_LOG}
        renderRow={(row, idx) => (
          <tr key={idx}>
            <td className="px-6 py-4 font-bold text-slate-400 text-xs">{row.date}</td>
            <td className="px-6 py-4 font-medium text-slate-900">{row.person}</td>
            <td className="px-6 py-4 font-bold text-indigo-600">{row.brand}</td>
            <td className="px-6 py-4 text-slate-600">{row.type}</td>
            <td className="px-6 py-4 font-black text-slate-900">{row.quantity || '-'}</td>
            <td className="px-6 py-4 text-slate-500 text-xs">{row.notes}</td>
          </tr>
        )}
      />

      <ReportTable
        title="Daily Communication Log"
        headers={['Date', 'Person', 'Brand', 'Communication', 'With Whom', 'MOM Link', 'Notes']}
        rows={EMPLOYEE_COMMUNICATION_LOG}
        renderRow={(row, idx) => (
          <tr key={idx}>
            <td className="px-6 py-4 font-bold text-slate-400 text-xs">{row.date}</td>
            <td className="px-6 py-4 font-medium text-slate-900">{row.person}</td>
            <td className="px-6 py-4 font-bold text-indigo-600">{row.brand}</td>
            <td className="px-6 py-4 text-slate-600">{row.type}</td>
            <td className="px-6 py-4 text-slate-600">{row.status}</td>
            <td className="px-6 py-4">
                {row.link !== '-' ? <a href="#" className="text-indigo-500 underline font-bold text-xs">Link</a> : <span className="text-slate-300">-</span>}
            </td>
            <td className="px-6 py-4 text-slate-500 text-xs">{row.notes}</td>
          </tr>
        )}
      />

      <ReportTable
        title="Daily Risk & Highlight Log"
        headers={['Date', 'Person', 'Brand', 'Type', 'Description']}
        rows={EMPLOYEE_RISK_LOG}
        renderRow={(row, idx) => (
          <tr key={idx}>
            <td className="px-6 py-4 font-bold text-slate-400 text-xs">{row.date}</td>
            <td className="px-6 py-4 font-medium text-slate-900">{row.person}</td>
            <td className="px-6 py-4 font-bold text-indigo-600">{row.brand}</td>
            <td className="px-6 py-4">
              <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${row.type === 'Highlight' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                {row.type}
              </span>
            </td>
            <td className="px-6 py-4 text-slate-600 font-medium">{row.notes}</td>
          </tr>
        )}
      />
    </div>
  );
};

export const EmployeeWeeklyReport: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="bg-indigo-900 text-white p-6 rounded-[2rem] mb-6 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-black tracking-tight">Portfolio Aggregation</h4>
          <p className="text-indigo-300 text-xs font-medium">Combined weekly performance for all 6 assigned brands.</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Ownership</p>
          <p className="text-2xl font-black">Topik</p>
        </div>
      </div>
      <WeeklyReport />
    </div>
  );
};

export const EmployeeMonthlySheet: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      <ReportTable
        title="Monthly Performance Summary"
        headers={['Metric', 'This Month', 'Remark']}
        rows={EMPLOYEE_MONTHLY_PERFORMANCE}
        renderRow={(row, idx) => (
          <tr key={idx} className={row.remark === 'Attention needed' ? 'bg-rose-50' : row.remark === 'Higher than expected' ? 'bg-emerald-50' : ''}>
            <td className="px-8 py-4 font-bold text-slate-700">{row.metric}</td>
            <td className="px-8 py-4 font-black text-slate-900">{row.value}</td>
            <td className="px-8 py-4 text-slate-500 italic text-xs">{row.remark}</td>
          </tr>
        )}
      />

      <ReportTable
        title="Brand-Wise Ownership View"
        headers={['Brand', 'Performance', 'CSAT', 'Hygiene', 'Risk']}
        rows={EMPLOYEE_BRAND_OWNERSHIP}
        renderRow={(row, idx) => (
          <tr key={idx}>
            <td className="px-8 py-4 font-black text-slate-900">{row.brand}</td>
            <td className={`px-8 py-4 font-bold ${row.performance.startsWith('-') ? 'text-rose-600' : 'text-emerald-600'}`}>
              {row.performance}
            </td>
            <td className="px-8 py-4 font-bold text-slate-700">{row.csat}</td>
            <td className="px-8 py-4 font-bold text-slate-700">{row.hygiene}</td>
            <td className="px-8 py-4">
              <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                row.risk === 'Low' ? 'bg-green-100 text-green-700' : 
                row.risk === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'
              }`}>{row.risk}</span>
            </td>
          </tr>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ReportTable
          title="Execution Consistency"
          headers={['Area', 'Planned', 'Actuals', 'Remarks']}
          rows={[
            { area: 'Daily hygiene checks', p: 22, a: 21, r: 'Within range' },
            { area: 'Weekly optimizations', p: 4, a: 4, r: 'Within range' },
            { area: 'Performance drops diagnosed', p: '100%', a: 2, r: 'Within range' },
            { area: 'MOMs logged', p: 4, a: 3, r: 'Lower than expected' },
            { area: 'Weekly reports', p: 4, a: 4, r: 'Within range' },
          ]}
          renderRow={(row, idx) => (
            <tr key={idx}>
              <td className="px-6 py-4 font-medium text-slate-700">{row.area}</td>
              <td className="px-6 py-4 font-bold text-slate-400">{row.p}</td>
              <td className="px-6 py-4 font-black text-slate-900">{row.a}</td>
              <td className="px-6 py-4 text-slate-500 text-xs">{row.r}</td>
            </tr>
          )}
        />

        <div className="space-y-6">
          <ReportTable
            title="Performance Intelligence"
            headers={['Signal', 'This Month']}
            rows={[
              { s: 'Drops explained with root cause', v: '100%' },
              { s: 'Non-ad causes identified', v: '2 times' },
              { s: 'Proactive issue flags', v: '3 times' },
              { s: 'Client-ready explanations', v: '2 instances' },
            ]}
            renderRow={(row, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 font-medium text-slate-700">{row.s}</td>
                <td className="px-6 py-4 font-black text-indigo-600">{row.v}</td>
              </tr>
            )}
          />

          <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Client Confidence</h4>
            <div className="space-y-4">
              {[
                { b: 'Brand A', c: 4.7, f: '"Very proactive and clear."' },
                { b: 'Brand B', c: 4.2, f: '"Good results, need more updates."' },
                { b: 'Brand C', c: 3.3, f: '"Delays in response, unclear plan."' },
              ].map((fb, i) => (
                <div key={i} className="border-b border-white/5 pb-4 last:border-0">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold">{fb.b}</span>
                    <span className="text-xs font-black text-indigo-400">{fb.c}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 italic">{fb.f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
