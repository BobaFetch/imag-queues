export type DailyStats = {
  dailyGoal: number;
  completedJobs: number;
  completedParts: number;
}

export type EmployeeStats = {
  employee: string;
  completedJobs: number;
}

export type Job = {
  partRef: string;
  partNumber: string;
  run: string;
  qty: number;
  customer: string;
  comments: string;
  priority: number;
  schedDate: string;
  queueDiff: number;
}

export type Department = {
  department: {
    name: string;
    number: string;
  };
  parts: Job[];
  stats: DepartmentStats;
  employeeStats: EmployeeStats[];
}

export type DepartmentStats = {
  dailyGoal: number;
  completedJobs: number;
  completedParts: number;
  weeklyStats: WeeklyStats[]
}

export type WeeklyStats = {
  completedJobs: number;
  completionDate: string;
}