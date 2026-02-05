
export enum ReportType {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  CSAT = 'CSAT',
  ORG_OVERVIEW = 'ORG_OVERVIEW',
  BRAND_PORTFOLIO = 'BRAND_PORTFOLIO',
  EMPLOYEE_DAILY = 'EMPLOYEE_DAILY',
  EMPLOYEE_WEEKLY = 'EMPLOYEE_WEEKLY',
  EMPLOYEE_MONTHLY = 'EMPLOYEE_MONTHLY',
  TEAM_OVERVIEW = 'TEAM_OVERVIEW',
  TEAM_BRANDS = 'TEAM_BRANDS',
  TEAM_WEEKLY = 'TEAM_WEEKLY',
  TEAM_MONTHLY = 'TEAM_MONTHLY'
}

export enum StakeholderRole {
  CLIENT = 'CLIENT',
  EMPLOYEE = 'EMPLOYEE',
  TEAM_LEAD = 'TEAM_LEAD',
  ORG_HEAD = 'ORG_HEAD'
}

export interface MetricRow {
  metric: string;
  planned: string;
  actuals: string;
  remarks: string;
  statusColor?: 'green' | 'amber' | 'red';
}

export interface PerformanceRow {
  metric: string;
  lastPeriod: string;
  thisPeriod: string;
  change: number;
}

export interface CommitmentRow {
  activity: string;
  planned: number;
  actual: number;
  status: 'Okay' | 'Partial' | 'Attention';
}

export interface OrgMetric {
  label: string;
  value: string;
  status: 'okay' | 'high-risk' | 'concern';
  meaning?: string;
}

export interface TeamMetric {
  name: string;
  brands: number;
  revenue: string;
  csat: number;
  stability: number;
  highRiskBrands: number;
}

export interface BrandRiskRow {
  zone: string;
  riskType: string;
  brand: string;
  revenue: string;
  momPerf: string;
  csat: number;
  reason: string;
  category: string;
}

export interface ReportData {
  performance: MetricRow[];
  wowPerformance: PerformanceRow[];
  commitments: CommitmentRow[];
  hygiene: CommitmentRow[];
  highlights: string[];
  escalations: string[];
  nextPeriodPlan: string[];
}

// Employee specific types
export interface DailyLogEntry {
  date: string;
  person: string;
  brand: string;
  type: string;
  status?: string;
  quantity?: number;
  notes: string;
  link?: string;
}

export interface EmployeeMonthlySummary {
  metric: string;
  value: string | number;
  remark: string;
}

export interface IndividualPerformanceRow {
  name: string;
  brands: number;
  avgCsat: number;
  stability: number;
  revenueManaged: string;
  status: 'On track' | 'Support needed';
}
