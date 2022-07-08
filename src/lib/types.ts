export interface DailyStats {
  dailyGoal: number;
  completedJobs: number;
  completedParts: number;
}

export interface EmployeeStats {
  employee: string;
  completedJobs: number;
}

export interface Job {
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

export interface Department {
  department: {
    name: string;
    number: string;
  };
  parts: Job[];
  stats: DailyStats;
  employeeStats: EmployeeStats[];
}