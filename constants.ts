
import { ReportData, OrgMetric, TeamMetric, BrandRiskRow, DailyLogEntry, EmployeeMonthlySummary, IndividualPerformanceRow } from './types';

export const ORG_SUMMARY_METRICS: OrgMetric[] = [
  { label: 'Total active brands', value: '68', status: 'okay' },
  { label: 'Teams operating', value: '4', status: 'okay' },
  { label: 'Revenue under management', value: '₹18.6 Cr', status: 'okay' },
  { label: 'High-risk revenue', value: '₹2.4 Cr', status: 'high-risk', meaning: 'Churn exposure' },
  { label: 'Stable revenue', value: '₹13.1 Cr', status: 'okay', meaning: 'On track' },
  { label: 'Upsell-ready revenue', value: '₹3.1 Cr', status: 'okay', meaning: 'Growth opportunity' },
  { label: 'Avg org CSAT', value: '4.28', status: 'okay' },
  { label: 'Org delivery stability index', value: '86%', status: 'okay' },
];

export const TEAM_ALPHA_SUMMARY_METRICS: OrgMetric[] = [
  { label: 'Active brands (Team Alpha)', value: '18', status: 'okay' },
  { label: 'Revenue managed', value: '₹5.2 Cr', status: 'okay' },
  { label: 'Avg Team CSAT', value: '4.4', status: 'okay', meaning: 'Strong pulse' },
  { label: 'At-risk revenue', value: '₹42L', status: 'high-risk', meaning: 'Immediate attention' },
];

export const TEAM_PERFORMANCE: TeamMetric[] = [
  { name: 'Team Alpha', brands: 18, revenue: '₹5.2 Cr', csat: 4.4, stability: 90, highRiskBrands: 1 },
  { name: 'Team Beta', brands: 16, revenue: '₹4.6 Cr', csat: 4.1, stability: 84, highRiskBrands: 3 },
  { name: 'Team Gamma', brands: 17, revenue: '₹4.1 Cr', csat: 4.3, stability: 88, highRiskBrands: 2 },
  { name: 'Team Delta', brands: 17, revenue: '₹4.7 Cr', csat: 4.2, stability: 82, highRiskBrands: 1 },
];

export const INDIVIDUAL_PERFORMANCE: IndividualPerformanceRow[] = [
  { name: 'Topik', brands: 6, avgCsat: 4.3, stability: 92, revenueManaged: '₹1.8 Cr', status: 'On track' },
  { name: 'Nikhil', brands: 4, avgCsat: 4.6, stability: 95, revenueManaged: '₹1.2 Cr', status: 'On track' },
  { name: 'Sneha', brands: 5, avgCsat: 4.1, stability: 84, revenueManaged: '₹1.1 Cr', status: 'Support needed' },
  { name: 'Rahul', brands: 3, avgCsat: 4.5, stability: 89, revenueManaged: '₹1.1 Cr', status: 'On track' },
];

export const BRAND_RISK_REGISTER: BrandRiskRow[] = [
  { zone: 'Zone 1', riskType: 'Churn Risk', brand: 'Brand C', revenue: '₹42L', momPerf: '-18%', csat: 3.1, reason: 'Drop + dissatisfaction', category: 'High Risk' },
  { zone: 'Zone 1', riskType: 'Churn Risk', brand: 'Brand K', revenue: '₹28L', momPerf: '-11%', csat: 3.4, reason: 'ROAS fall, poor comms', category: 'High Risk' },
  { zone: 'Zone 1', riskType: 'Churn Risk', brand: 'Brand P', revenue: '₹19L', momPerf: '-9%', csat: 3.2, reason: 'Unexplained volatility', category: 'High Risk' },
  { zone: 'Zone 2', riskType: 'Performance Risk', brand: 'Brand B', revenue: '₹51L', momPerf: '-12%', csat: 4.4, reason: 'Inventory & Buy Box', category: 'System/Delivery gap' },
  { zone: 'Zone 2', riskType: 'Performance Risk', brand: 'Brand H', revenue: '₹34L', momPerf: '-7%', csat: 4.2, reason: 'Budget volatility', category: 'System/Delivery gap' },
  { zone: 'Zone 3', riskType: 'Relationship Risk', brand: 'Brand F', revenue: '₹47L', momPerf: '+9%', csat: 3.5, reason: 'Poor communication', category: 'People/process risk' },
  { zone: 'Zone 3', riskType: 'Relationship Risk', brand: 'Brand M', revenue: '₹23L', momPerf: '+6%', csat: 3.6, reason: 'Expectation gaps', category: 'People/process risk' },
  { zone: 'Zone 4', riskType: 'Growth', brand: 'Brand A', revenue: '₹58L', momPerf: '+11%', csat: 4.6, reason: 'Consistent growth', category: 'Stable' },
  { zone: 'Zone 4', riskType: 'Growth', brand: 'Brand D', revenue: '₹36L', momPerf: '+8%', csat: 4.4, reason: 'Stable & clean', category: 'Stable' },
];

export const TEAM_ALPHA_BRANDS: BrandRiskRow[] = [
  { zone: 'Zone 1', riskType: 'Churn Risk', brand: 'Brand C', revenue: '₹42L', momPerf: '-18%', csat: 3.1, reason: 'Drop + dissatisfaction', category: 'High Risk' },
  { zone: 'Zone 2', riskType: 'Performance Risk', brand: 'Brand B', revenue: '₹51L', momPerf: '-12%', csat: 4.4, reason: 'Inventory & Buy Box', category: 'System/Delivery gap' },
  { zone: 'Zone 4', riskType: 'Growth', brand: 'Brand A', revenue: '₹58L', momPerf: '+11%', csat: 4.6, reason: 'Consistent growth', category: 'Stable' },
  { zone: 'Zone 4', riskType: 'Growth', brand: 'Brand D', revenue: '₹36L', momPerf: '+8%', csat: 4.4, reason: 'Stable & clean', category: 'Stable' },
  { zone: 'Zone 3', riskType: 'Relationship Risk', brand: 'Brand M', revenue: '₹23L', momPerf: '+6%', csat: 3.6, reason: 'Expectation gaps', category: 'People/process risk' },
];

// EMPLOYEE DATA
export const EMPLOYEE_HYGIENE_LOG: DailyLogEntry[] = [
  { date: '08-Jan', person: 'Topik', brand: 'Alpha Naturals', type: 'Daily hygiene', status: 'OK', notes: 'All campaigns live' },
  { date: '08-Jan', person: 'Topik', brand: 'ZenLabs', type: 'Daily hygiene', status: 'Issue', notes: 'Buy Box lost on 2 SKUs' },
  { date: '07-Jan', person: 'Topik', brand: 'Green Earth', type: 'Daily hygiene', status: 'OK', notes: 'Hygiene audit complete' },
];

export const EMPLOYEE_EXECUTION_LOG: DailyLogEntry[] = [
  { date: '08-Jan', person: 'Topik', brand: 'Alpha Naturals', type: 'Keyword migration', quantity: 11, notes: 'Auto → manual' },
  { date: '08-Jan', person: 'Topik', brand: 'Alpha Naturals', type: 'Negative keyword', quantity: 4, notes: 'Waste cleanup' },
  { date: '08-Jan', person: 'Topik', brand: 'ZenLabs', type: 'Campaign optimiz.', quantity: 1, notes: 'CVR issue' },
];

export const EMPLOYEE_COMMUNICATION_LOG: DailyLogEntry[] = [
  { date: '08-Jan', person: 'Topik', brand: 'Alpha Naturals', type: 'Call', status: 'Client team', link: 'Link', notes: 'Weekly review' },
  { date: '08-Jan', person: 'Topik', brand: 'ZenLabs', type: 'Email', status: 'Brand team', link: '-', notes: 'CVR drop explained' },
];

export const EMPLOYEE_RISK_LOG: DailyLogEntry[] = [
  { date: '08-Jan', person: 'Topik', brand: 'Alpha Naturals', type: 'Highlight', notes: 'Highest weekly sales' },
  { date: '08-Jan', person: 'Topik', brand: 'ZenLabs', type: 'Escalation', notes: 'Buy Box instability' },
];

export const EMPLOYEE_MONTHLY_PERFORMANCE: EmployeeMonthlySummary[] = [
  { metric: 'Brands handled', value: 6, remark: '—' },
  { metric: 'Avg brand hygiene score', value: '92%', remark: 'Higher than expected' },
  { metric: 'Unexplained performance drops', value: 0, remark: 'Within range' },
  { metric: 'Avg CSAT', value: 4.3, remark: 'Within range' },
  { metric: 'High-risk brands', value: 1, remark: 'Attention needed' },
];

export const EMPLOYEE_BRAND_OWNERSHIP = [
  { brand: 'Brand A', performance: '+11%', csat: 4.6, hygiene: '95%', risk: 'Low' },
  { brand: 'Brand B', performance: '-5%', csat: 4.2, hygiene: '88%', risk: 'Medium' },
  { brand: 'Brand C', performance: '-15%', csat: 3.4, hygiene: '62%', risk: 'High' },
  { brand: 'Brand D', performance: '+8%', csat: 4.4, hygiene: '93%', risk: 'Low' },
];

export const MOCK_WEEKLY_DATA: ReportData = {
  performance: [
    { metric: 'Revenue', planned: '₹40.0L', actuals: '₹31.2L', remarks: 'lower than expected', statusColor: 'amber' },
    { metric: 'ROAS', planned: '4', actuals: '4.1', remarks: 'more than expected', statusColor: 'green' },
    { metric: 'Spend', planned: '₹10.0L', actuals: '₹10.1L', remarks: 'close to the budget', statusColor: 'green' },
  ],
  wowPerformance: [
    { metric: 'Revenue', lastPeriod: '₹38.4L', thisPeriod: '₹31.2L', change: -18.75 },
    { metric: 'ROAS', lastPeriod: '3.9', thisPeriod: '4.1', change: 5.13 },
    { metric: 'Spend', lastPeriod: '₹12.0L', thisPeriod: '₹10.0L', change: -16.67 },
  ],
  commitments: [
    { activity: 'Keyword migrations', planned: 30, actual: 30, status: 'Okay' },
    { activity: 'Negative keywords', planned: 10, actual: 10, status: 'Okay' },
    { activity: 'Campaign optimizations', planned: 6, actual: 6, status: 'Okay' },
    { activity: 'Budget reallocations', planned: 3, actual: 3, status: 'Okay' },
    { activity: 'Performance review calls', planned: 1, actual: 1, status: 'Okay' },
  ],
  hygiene: [
    { activity: 'Daily hygiene checks', planned: 5, actual: 5, status: 'Okay' },
    { activity: 'Weekly optimization cycle', planned: 1, actual: 1, status: 'Okay' },
    { activity: 'MOMs shared', planned: 1, actual: 1, status: 'Okay' },
  ],
  highlights: [
    'Hero SKU achieved highest weekly sales',
    'SB video CTR +18%',
    'Budget pacing maintained all 5 days'
  ],
  escalations: [
    'Buy Box instability on 2 SKUs',
    'Delivery ETA increase affecting CVR'
  ],
  nextPeriodPlan: [
    'Target revenue: ₹43L',
    'Improve CVR to 10.2%',
    'Launch 2 new manual campaigns',
    'Stabilize Buy Box on top 3 SKUs',
    'Creative test for SB video'
  ]
};

export const MOCK_MONTHLY_DATA: ReportData = {
  performance: [
    { metric: 'Revenue', planned: '₹40.0L', actuals: '₹31.2L', remarks: 'lower than expected', statusColor: 'amber' },
    { metric: 'ROAS', planned: '4', actuals: '4.1', remarks: 'more than expected', statusColor: 'green' },
    { metric: 'Spend', planned: '₹10.0L', actuals: '₹10.1L', remarks: 'close to the budget', statusColor: 'green' },
  ],
  wowPerformance: [
    { metric: 'Revenue', lastPeriod: '₹38.4L', thisPeriod: '₹31.2L', change: -18.75 },
    { metric: 'ROAS', lastPeriod: '3.9', thisPeriod: '4.1', change: 5.13 },
    { metric: 'Spend', lastPeriod: '₹12.0L', thisPeriod: '₹10.0L', change: -16.67 },
  ],
  commitments: [
    { activity: 'Major optimization cycles', planned: 4, actual: 4, status: 'Okay' },
    { activity: 'Structural changes', planned: 3, actual: 2, status: 'Partial' },
    { activity: 'Keyword migrations', planned: 120, actual: 138, status: 'Okay' },
    { activity: 'New campaign launches', planned: 6, actual: 5, status: 'Partial' },
    { activity: 'Performance review calls', planned: 4, actual: 4, status: 'Okay' },
  ],
  hygiene: [
    { activity: 'Daily hygiene checks', planned: 22, actual: 21, status: 'Okay' },
    { activity: 'Weekly optimization cycles', planned: 4, actual: 4, status: 'Okay' },
    { activity: 'MOMs shared', planned: 4, actual: 3, status: 'Attention' },
  ],
  highlights: [
    'Entered highest ever monthly revenue band',
    'DSP + Sponsored Brands scaling unlocked',
    'Hero SKUs stabilized Buy Box after mid-month dip',
    'Creative refresh improved top-of-funnel CTR'
  ],
  escalations: [
    'Mid-month Buy Box instability impacted CVR',
    'Inventory pressure on top SKU in Week 3',
    'ROAS softening due to aggressive scaling'
  ],
  nextPeriodPlan: [
    'Revenue target: ₹1.85 Cr',
    'Improve ROAS back to 4.1',
    'Scale DSP for 2 hero SKUs',
    'Creative A/B testing system',
    'Strengthen Buy Box & inventory monitoring'
  ]
};
