
import React, { useState, useEffect } from 'react';
import { ReportType, StakeholderRole } from './types';
import WeeklyReport from './components/WeeklyReport';
import MonthlyReport from './components/MonthlyReport';
import CSATPage from './components/CSATPage';
import { OrgOverview, BrandPortfolio } from './components/OrgLevelView';
import { EmployeeDailyReport, EmployeeWeeklyReport, EmployeeMonthlySheet } from './components/EmployeeView';
import { TeamOverview, TeamBrandPortfolio, TeamWeeklyOversight, TeamMonthlyOversight } from './components/TeamLeadView';

const App: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<StakeholderRole>(StakeholderRole.CLIENT);
  const [activeTab, setActiveTab] = useState<ReportType>(ReportType.CSAT);
  const [selectedPeriod, setSelectedPeriod] = useState("Week 24 (Jun 10 - Jun 16, 2024)");

  // Role Configuration
  const roles = {
    [StakeholderRole.CLIENT]: { name: 'Raghu', title: 'Business Owner', color: 'indigo' },
    [StakeholderRole.EMPLOYEE]: { name: 'Topik', title: 'Success Executive', color: 'emerald' },
    [StakeholderRole.TEAM_LEAD]: { name: 'Sumit', title: 'Team Lead', color: 'amber' },
    [StakeholderRole.ORG_HEAD]: { name: 'Jennifer', title: 'Org Head', color: 'rose' },
  };

  const getTabsForRole = (role: StakeholderRole) => {
    switch (role) {
      case StakeholderRole.ORG_HEAD:
        return [
          { id: ReportType.ORG_OVERVIEW, label: 'Org Overview', icon: '🏛️' },
          { id: ReportType.BRAND_PORTFOLIO, label: 'Brand Portfolio', icon: '💎' },
        ];
      case StakeholderRole.CLIENT:
        return [
          { id: ReportType.CSAT, label: 'CSAT & Feedback', icon: '⭐' },
          { id: ReportType.WEEKLY, label: 'Weekly Report', icon: '📊' },
          { id: ReportType.MONTHLY, label: 'Monthly Report', icon: '📅' },
        ];
      case StakeholderRole.EMPLOYEE:
        return [
          { id: ReportType.EMPLOYEE_DAILY, label: 'Daily Logs', icon: '📝' },
          { id: ReportType.EMPLOYEE_WEEKLY, label: 'Weekly Pulse', icon: '📡' },
          { id: ReportType.EMPLOYEE_MONTHLY, label: 'Monthly Summary', icon: '📈' },
        ];
      case StakeholderRole.TEAM_LEAD:
        return [
          { id: ReportType.TEAM_OVERVIEW, label: 'Team Overview', icon: '🏢' },
          { id: ReportType.TEAM_BRANDS, label: 'Team Brands', icon: '🏷️' },
          { id: ReportType.TEAM_WEEKLY, label: 'Team Weekly', icon: '📑' },
          { id: ReportType.TEAM_MONTHLY, label: 'Team Monthly', icon: '📆' },
        ];
      default:
        return [];
    }
  };

  // Handle default tab for different roles when role changes
  useEffect(() => {
    const availableTabs = getTabsForRole(currentRole);
    if (availableTabs.length > 0) {
      setActiveTab(availableTabs[0].id);
    }
  }, [currentRole]);

  const tabs = getTabsForRole(currentRole);
  const isMonthlyView = activeTab === ReportType.MONTHLY || 
                       activeTab === ReportType.ORG_OVERVIEW || 
                       activeTab === ReportType.EMPLOYEE_MONTHLY ||
                       activeTab === ReportType.TEAM_MONTHLY;

  const periods = isMonthlyView 
    ? ["June 2024", "May 2024", "April 2024"] 
    : ["Week 24 (Jun 10 - Jun 16)", "Week 23 (Jun 03 - Jun 09)", "Week 22 (May 27 - Jun 02)"];

  const user = roles[currentRole];

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfe] pb-10">
      {/* Dynamic Background based on role */}
      <div className={`h-[400px] bg-gradient-to-br transition-all duration-700 absolute w-full top-0 left-0 -z-10 ${
        currentRole === StakeholderRole.CLIENT ? 'from-slate-900 via-slate-800 to-indigo-950' :
        currentRole === StakeholderRole.EMPLOYEE ? 'from-slate-900 via-slate-800 to-emerald-950' :
        currentRole === StakeholderRole.TEAM_LEAD ? 'from-slate-900 via-slate-800 to-amber-950' :
        'from-slate-900 via-slate-800 to-rose-950'
      }`} />

      {/* Header */}
      <header className="px-4 h-20 flex items-center justify-between text-white max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
            <span className="text-white font-black text-sm">CH</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            Client<span className="text-white/60">Success</span> Hub
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Role Switcher - Internal Prototype Tool */}
          <div className="flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/10">
            {Object.keys(roles).map((role) => (
                <button
                    key={role}
                    onClick={() => setCurrentRole(role as StakeholderRole)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase transition-all ${
                        currentRole === role ? 'bg-white text-slate-900 shadow-md' : 'text-white/40 hover:text-white/70'
                    }`}
                >
                    {role.split('_')[0]}
                </button>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l border-white/10 pl-4">
            <img src={`https://picsum.photos/40/40?random=${currentRole === StakeholderRole.ORG_HEAD ? 5 : currentRole === StakeholderRole.CLIENT ? 11 : currentRole === StakeholderRole.TEAM_LEAD ? 6 : 7}`} alt="Profile" className="w-9 h-9 rounded-full border-2 border-white/20 shadow-lg" />
            <div className="hidden sm:block">
              <p className="text-xs font-bold">{user.name}</p>
              <p className="text-[10px] text-white/50 font-medium">{user.title}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome & Personalized Area */}
      <section className="max-w-7xl mx-auto w-full px-4 mt-6 mb-10 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-4xl font-black tracking-tight leading-tight">
                {activeTab === ReportType.ORG_OVERVIEW ? 'Organization Health' : 
                 activeTab === ReportType.TEAM_OVERVIEW ? 'Team Alpha Health' :
                 activeTab === ReportType.BRAND_PORTFOLIO ? 'Portfolio Insights' : 
                 activeTab === ReportType.EMPLOYEE_DAILY ? 'Daily Effort Log' :
                 `Welcome, ${user.name}.`}
            </h2>
            <p className="text-white/60 text-lg">
                {currentRole === StakeholderRole.ORG_HEAD ? 'Managing strategic risk and operational excellence.' : 
                 currentRole === StakeholderRole.CLIENT ? 'Direct feedback and performance tracking.' :
                 currentRole === StakeholderRole.TEAM_LEAD ? 'Team Alpha performance and member oversight.' :
                 'Visibility into your contribution and brand portfolio.'}
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-6 shadow-2xl">
            <div className="flex -space-x-3">
              {[5, 6, 7].map(i => (
                <img key={i} src={`https://picsum.photos/40/40?random=${i}`} className="w-10 h-10 rounded-full border-2 border-slate-800 ring-2 ring-white/10" alt="Team member" />
              ))}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-1">Portfolio Oversight Team</p>
              <div className="flex gap-4">
                <div className="text-xs">
                  <span className="block font-bold">Jennifer</span>
                  <span className="text-white/50">Org Head</span>
                </div>
                <div className="text-xs">
                  <span className="block font-bold">Sumit</span>
                  <span className="text-white/50">Lead</span>
                </div>
                <div className="text-xs">
                  <span className="block font-bold">Topik</span>
                  <span className="text-white/50">Exec</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Card */}
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden min-h-[600px]">
          {tabs.length > 0 ? (
            <>
              {/* Tab Navigation & Period Filter */}
              <div className="px-8 pt-8 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-x-auto">
                <nav className="flex gap-8 whitespace-nowrap">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 pb-6 border-b-4 transition-all font-bold text-sm tracking-wide ${
                        activeTab === tab.id
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <span className="text-lg">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </nav>

                <div className="flex items-center gap-3 pb-6">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Select Period</label>
                  <select 
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    {periods.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        {tabs.find(t => t.id === activeTab)?.label}
                      </h3>
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded uppercase">
                        {(activeTab === ReportType.ORG_OVERVIEW || activeTab === ReportType.TEAM_OVERVIEW) ? 'Strategic Level' : selectedPeriod.split('(')[0]}
                      </span>
                    </div>
                    <p className="text-slate-500 font-medium">
                      {activeTab === ReportType.ORG_OVERVIEW && 'Aggregated health metrics across all operating teams and brands.'}
                      {activeTab === ReportType.TEAM_OVERVIEW && 'Operational health metrics scoped to Team Alpha.'}
                      {activeTab === ReportType.BRAND_PORTFOLIO && 'Detailed brand-by-brand risk analysis and performance zones.'}
                      {activeTab === ReportType.TEAM_BRANDS && 'Portfolio health of brands managed by Team Alpha.'}
                      {activeTab === ReportType.WEEKLY && `Performance summary for ${selectedPeriod}`}
                      {activeTab === ReportType.TEAM_WEEKLY && `Consolidated team execution summary for ${selectedPeriod}`}
                      {activeTab === ReportType.MONTHLY && `Aggregated business impact for ${selectedPeriod}`}
                      {activeTab === ReportType.TEAM_MONTHLY && `Consolidated team performance summary for ${selectedPeriod}`}
                      {activeTab === ReportType.CSAT && 'Your direct channel to influence the Org Head and Team Lead.'}
                      {activeTab === ReportType.EMPLOYEE_DAILY && 'Real-time log of hygiene checks, executions, and communications.'}
                      {activeTab === ReportType.EMPLOYEE_WEEKLY && 'Consolidated performance pulse for your entire portfolio.'}
                      {activeTab === ReportType.EMPLOYEE_MONTHLY && 'Strategic ownership recap, CSAT averages, and consistency score.'}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-95">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12 a2 2 0 002-2v-1M16 9l-4-4m0 0l-4 4m4-4v12" /></svg>
                      {activeTab === ReportType.EMPLOYEE_DAILY ? 'Add Log Entry' : 'Export Data'}
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 active:scale-95">
                      {currentRole === StakeholderRole.ORG_HEAD ? 'Strategic Review' : 
                       currentRole === StakeholderRole.TEAM_LEAD ? 'Call Team Sync' :
                       currentRole === StakeholderRole.EMPLOYEE ? 'Request Lead Sync' : 'Contact Success Team'}
                    </button>
                  </div>
                </div>

                {/* Content Switcher */}
                <div className="min-h-[400px]">
                  {activeTab === ReportType.ORG_OVERVIEW && <OrgOverview />}
                  {activeTab === ReportType.TEAM_OVERVIEW && <TeamOverview />}
                  {activeTab === ReportType.BRAND_PORTFOLIO && <BrandPortfolio />}
                  {activeTab === ReportType.TEAM_BRANDS && <TeamBrandPortfolio />}
                  {activeTab === ReportType.WEEKLY && <WeeklyReport />}
                  {activeTab === ReportType.TEAM_WEEKLY && <TeamWeeklyOversight />}
                  {activeTab === ReportType.MONTHLY && <MonthlyReport />}
                  {activeTab === ReportType.TEAM_MONTHLY && <TeamMonthlyOversight />}
                  {activeTab === ReportType.CSAT && <CSATPage />}
                  {activeTab === ReportType.EMPLOYEE_DAILY && <EmployeeDailyReport />}
                  {activeTab === ReportType.EMPLOYEE_WEEKLY && <EmployeeWeeklyReport />}
                  {activeTab === ReportType.EMPLOYEE_MONTHLY && <EmployeeMonthlySheet />}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default App;
