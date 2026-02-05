
import React from 'react';
import { ORG_SUMMARY_METRICS, TEAM_PERFORMANCE, BRAND_RISK_REGISTER } from '../constants';
import { ReportTable } from './ReportTable';

export const OrgOverview: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Executive Summary Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {ORG_SUMMARY_METRICS.map((m, i) => (
          <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">{m.label}</p>
            <p className={`text-2xl font-black ${m.status === 'high-risk' ? 'text-rose-600' : 'text-slate-900'}`}>{m.value}</p>
            {m.meaning && <p className="text-[10px] text-slate-500 font-bold mt-1">→ {m.meaning}</p>}
          </div>
        ))}
      </div>

      {/* Team Level View */}
      <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
        <div className="px-8 py-5 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">Team Performance Distribution</h4>
          <span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-1 rounded font-black">LIVE ORG DATA</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Team Name</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Brands</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Monthly Revenue</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg CSAT</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Stability</th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">At-Risk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {TEAM_PERFORMANCE.map((team, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-4 font-bold text-slate-900">{team.name}</td>
                  <td className="px-8 py-4 text-slate-600 font-medium">{team.brands}</td>
                  <td className="px-8 py-4 text-slate-600 font-medium">{team.revenue}</td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">{team.csat}</span>
                      <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: `${(team.csat/5)*100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4 font-bold text-green-600">{team.stability}%</td>
                  <td className="px-8 py-4">
                    {team.highRiskBrands > 0 ? (
                      <span className="px-2 py-0.5 bg-rose-50 text-rose-600 text-[10px] font-black rounded">{team.highRiskBrands} BRANDS</span>
                    ) : (
                      <span className="text-slate-300 font-black text-[10px]">CLEAN</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Operational Stability Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100">
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Operations Stability Index</h4>
          <div className="space-y-6">
            {[
              { label: 'Daily hygiene adherence', val: '91%', trend: 'Okay' },
              { label: 'Weekly optimization adherence', val: '94%', trend: 'Okay' },
              { label: 'Unexplained drops', val: '6%', trend: 'Concern' },
              { label: 'MOM compliance', val: '73%', trend: 'High Risk' },
            ].map((sig, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-600">{sig.label}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black text-slate-900">{sig.val}</span>
                  <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
                    sig.trend === 'Okay' ? 'bg-green-50 text-green-600' : 
                    sig.trend === 'Concern' ? 'bg-amber-50 text-amber-600' : 'bg-rose-50 text-rose-600'
                  }`}>{sig.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl -mr-10 -mt-10" />
          <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Org Capability signals</h4>
          <div className="space-y-6 relative">
            {[
              { label: 'Fellows showing growth signals', val: '62%', status: 'Moderate' },
              { label: 'Fellows retention-safe', val: '81%', status: 'Good' },
              { label: 'Emerging leaders identified', val: '9', status: 'Good' },
              { label: 'Teams with system gaps', val: '2', status: 'Concern' },
            ].map((sig, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-300">{sig.label}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black">{sig.val}</span>
                  <span className={`text-[10px] font-black uppercase ${
                    sig.status === 'Good' ? 'text-green-400' : 
                    sig.status === 'Moderate' ? 'text-amber-400' : 'text-rose-400'
                  }`}>{sig.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const BrandPortfolio: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Risk Quadrant Visual */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { zone: 'ZONE 1', label: 'HIGH RISK', sub: 'Low perf + Low CSAT', color: 'bg-rose-50 border-rose-100 text-rose-700' },
          { zone: 'ZONE 2', label: 'DELIVERY RISK', sub: 'Low perf + High CSAT', color: 'bg-amber-50 border-amber-100 text-amber-700' },
          { zone: 'ZONE 3', label: 'PEOPLE RISK', sub: 'High perf + Low CSAT', color: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
          { zone: 'ZONE 4', label: 'STABLE', sub: 'High perf + High CSAT', color: 'bg-emerald-50 border-emerald-100 text-emerald-700' },
        ].map((z, i) => (
          <div key={i} className={`p-6 rounded-[1.5rem] border ${z.color} transition-all hover:scale-[1.02] shadow-sm`}>
            <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">{z.zone}</p>
            <p className="text-lg font-black mb-1">{z.label}</p>
            <p className="text-[10px] font-bold uppercase tracking-tight opacity-70">{z.sub}</p>
          </div>
        ))}
      </div>

      {/* Brand Risk Table */}
      <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/40">
        <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">Portfolio Risk Register</h4>
            <div className="flex gap-2">
                <span className="text-[10px] font-black bg-slate-100 px-2 py-1 rounded text-slate-500">SORT BY REVENUE</span>
                <span className="text-[10px] font-black bg-slate-100 px-2 py-1 rounded text-slate-500">FILTER BY ZONE</span>
            </div>
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
              {BRAND_RISK_REGISTER.map((b, idx) => (
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
