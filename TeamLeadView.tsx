
import React from 'react';
import { 
  TEAM_ALPHA_SUMMARY_METRICS, 
  INDIVIDUAL_PERFORMANCE, 
  TEAM_ALPHA_BRANDS 
} from '../constants';
import { ReportTable } from './ReportTable';
import WeeklyReport from './WeeklyReport';
// Fixed casing: MonthlyReport.tsx file starts with a capital 'M'
import MonthlyReport from './MonthlyReport';

export const TeamOverview: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Team Summary Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TEAM_ALPHA_SUMMARY_METRICS.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">{m.label}</p>
            <p className={`text-2xl font-black ${m.status === 'high-risk' ? 'text-rose-600' : 'text-slate-900'}`}>{m.value}</p>
            {m.meaning && <p className="text-[10px] text-slate-500 font-bold mt-1">→ {m.meaning}</p>}
          </div>
        ))}
      </div>

      {/* Individual Level View */}
      <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
        <div className="px-8 py-5 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">Individual Level View (Team Alpha)</h4>
          <span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-1 rounded font-black">ACTIVE TEAM PERFORMANCE</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Name</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Brands</th>
                <th className="px-8 py-4 text-[10px) font-black text-slate-400 uppercase tracking-widest">Avg CSAT</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stability</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Revenue Managed</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {INDIVIDUAL_PERFORMANCE.map((person, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-4 font-bold text-slate-900">{person.name}</td>
                  <td className="px-8 py-4 text-slate-600 font-medium">{person.brands}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">{person.avgCsat}</span>
                      <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${person.avgCsat > 4.2 ? 'bg-indigo-500' : 'bg-amber-500'}`} style={{ width: `${(person.avgCsat/5)*100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 font-bold text-green-600">{person.stability}%</td>
                  <td className="px-8 py-4 text-slate-600 font-medium">{person.revenueManaged}</td>
                  <td className="px-8 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                      person.status === 'On track' ? 'bg-green-50 text-green-600' : 'bg-rose-50 text-rose-600 animate-pulse'
                    }`}>{person.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scoped Ops Stability Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Team Alpha Stability Index</h4>
          <div className="space-y-6">
            {[
              { label: 'Daily hygiene adherence', val: '94%', trend: 'Okay' },
              { label: 'Weekly optimization adherence', val: '97%', trend: 'Okay' },
              { label: 'Unexplained drops', val: '4%', trend: 'Okay' },
              { label: 'MOM compliance', val: '88%', trend: 'Okay' },
            ].map((sig, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-600">{sig.label}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black text-slate-900">{sig.val}</span>
                  <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-[10px] font-black uppercase">{sig.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100">
          <h4 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-6">Team Alpha CSAT Distribution</h4>
          <div className="space-y-4">
             {[
               { label: 'Extremely Happy (4.5-5.0)', count: 8, percentage: '44%' },
               { label: 'Happy (4.0-4.4)', count: 6, percentage: '33%' },
               { label: 'Moderate (3.5-3.9)', count: 3, percentage: '17%' },
               { label: 'Strained (< 3.5)', count: 1, percentage: '6%' },
             ].map((csat, i) => (
               <div key={i} className="flex items-center gap-4">
                 <div className="flex-1">
                   <div className="flex justify-between mb-1">
                      <span className="text-xs font-bold text-slate-700">{csat.label}</span>
                      <span className="text-xs font-black text-indigo-600">{csat.count} Brands</span>
                   </div>
                   <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                     <div className="h-full bg-indigo-600" style={{ width: csat.percentage }} />
                   </div>
                 </div>
                 <span className="text-[10px] font-black text-slate-400 w-8">{csat.percentage}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamBrandPortfolio: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40">
        <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between bg-indigo-900">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/70">Brands Mapped to Team Alpha</h4>
            <span className="text-[10px] font-black text-white/50 bg-white/10 px-2 py-1 rounded">18 TOTAL BRANDS</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Zone</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Brand</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Revenue</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">MoM Perf</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">CSAT</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk Reason</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {TEAM_ALPHA_BRANDS.map((b, idx) => (
                <tr key={idx} className={`hover:bg-slate-50/50 transition-colors ${b.category === 'High Risk' ? 'bg-rose-50/20' : ''}`}>
                  <td className="px-8 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-black ${
                        b.zone === 'Zone 1' ? 'bg-rose-100 text-rose-700' : 
                        b.zone === 'Zone 2' ? 'bg-amber-100 text-amber-700' :
                        b.zone === 'Zone 3' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>{b.zone}</span>
                  </td>
                  <td className="px-8 py-4 font-bold text-slate-900">{b.brand}</td>
                  <td className="px-8 py-4 font-medium text-slate-600">{b.revenue}</td>
                  <td className={`px-8 py-4 font-black ${b.momPerf.startsWith('-') ? 'text-rose-600' : 'text-emerald-600'}`}>{b.momPerf}</td>
                  <td className="px-8 py-4 font-bold text-slate-800">{b.csat}</td>
                  <td className="px-8 py-4 text-slate-500 italic text-xs">{b.reason}</td>
                  <td className="px-8 py-4">
                    <span className={`text-[10px] font-black uppercase ${
                        b.category === 'High Risk' ? 'text-rose-600' : 
                        b.category === 'Stable' ? 'text-emerald-600' : 'text-slate-500'
                    }`}>{b.category}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const TeamWeeklyOversight: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="bg-amber-900 text-white p-6 rounded-[2rem] mb-6 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-black tracking-tight">Team Alpha: Weekly Aggregation</h4>
          <p className="text-amber-300 text-xs font-medium">Consolidated execution report for 18 brands and 4 Success Executives.</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Team Lead</p>
          <p className="text-2xl font-black">Sumit</p>
        </div>
      </div>
      <WeeklyReport />
    </div>
  );
};

export const TeamMonthlyOversight: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="bg-slate-900 text-white p-6 rounded-[2rem] mb-6 flex items-center justify-between">
        <div>
          <h4 className="text-lg font-black tracking-tight">Team Alpha: Monthly Performance</h4>
          <p className="text-slate-400 text-xs font-medium">Strategic rollup for the period ending June 2024.</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Owner</p>
          <p className="text-2xl font-black">Sumit</p>
        </div>
      </div>
      <MonthlyReport />
    </div>
  );
};
