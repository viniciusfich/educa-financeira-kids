// Tipos principais do aplicativo de educação financeira

export type UserRole = 'admin' | 'parent' | 'child';

export type TransactionType = 'reward' | 'task' | 'lesson' | 'quiz' | 'purchase' | 'transfer' | 'goal' | 'referral';

export type TransactionStatus = 'pending' | 'approved' | 'rejected' | 'completed';

export type BadgeType = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';

// Usuário base
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Perfil de Pai/Responsável
export interface Parent extends User {
  role: 'parent';
  children: string[]; // IDs dos filhos
  referralCode: string;
  referralEarnings: number;
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  subscriptionPrice: number;
  referredBy?: string;
}

// Perfil de Criança/Adolescente
export interface Child extends User {
  role: 'child';
  parentId: string;
  dateOfBirth: Date;
  balance: number;
  maxBalance: number;
  xp: number;
  level: number;
  badges: Badge[];
  currentModule: number;
  lessonsCompleted: number;
  quizzesCompleted: number;
  tasksCompleted: number;
  cardStatus: {
    virtual: boolean;
    physical: boolean;
    blocked: boolean;
  };
  limits: {
    dailySpending: number;
    perTransaction: number;
    weeklySpending: number;
  };
  appTimeLimit: number; // minutos por dia
}

// Perfil de Administrador
export interface Admin extends User {
  role: 'admin';
  permissions: string[];
}

// Carteira Digital
export interface Wallet {
  id: string;
  childId: string;
  balance: number;
  pendingBalance: number;
  totalEarned: number;
  totalSpent: number;
  transactions: Transaction[];
  goals: Goal[];
}

// Transação
export interface Transaction {
  id: string;
  walletId: string;
  type: TransactionType;
  amount: number;
  description: string;
  status: TransactionStatus;
  metadata?: {
    lessonId?: string;
    taskId?: string;
    quizId?: string;
    goalId?: string;
    merchantName?: string;
    referralId?: string;
  };
  createdAt: Date;
  approvedAt?: Date;
  approvedBy?: string;
}

// Meta Financeira
export interface Goal {
  id: string;
  childId: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  imageUrl?: string;
  deadline?: Date;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
}

// Módulo de Educação
export interface EducationModule {
  id: string;
  title: string;
  description: string;
  order: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  quiz: Quiz;
  requiredLevel: number;
  xpReward: number;
  unlocked: boolean;
}

// Aula
export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  content: string;
  videoUrl?: string;
  duration: number; // minutos
  order: number;
  xpReward: number;
  moneyReward: number;
  completed: boolean;
  completedAt?: Date;
}

// Prova/Quiz
export interface Quiz {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  questions: Question[];
  rewards: {
    minimum: number; // 5 acertos
    medium: number; // 7 acertos
    maximum: number; // 10 acertos
  };
  xpRewards: {
    minimum: number;
    medium: number;
    maximum: number;
  };
  attempts: QuizAttempt[];
}

// Questão
export interface Question {
  id: string;
  quizId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Tentativa de Prova
export interface QuizAttempt {
  id: string;
  quizId: string;
  childId: string;
  score: number;
  totalQuestions: number;
  answers: number[];
  moneyEarned: number;
  xpEarned: number;
  completedAt: Date;
}

// Tarefa
export interface Task {
  id: string;
  parentId: string;
  childId: string;
  title: string;
  description: string;
  reward: number;
  xpReward: number;
  deadline?: Date;
  status: 'pending' | 'in_progress' | 'completed' | 'approved' | 'rejected';
  createdAt: Date;
  completedAt?: Date;
  approvedAt?: Date;
}

// Badge/Insígnia
export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: BadgeType;
  requirement: string;
  earnedAt?: Date;
}

// Configurações Parentais
export interface ParentalSettings {
  childId: string;
  rewards: {
    lessonCompletion: number;
    quizMinimum: number;
    quizMedium: number;
    quizMaximum: number;
    taskCompletion: number;
    goalAchievement: number;
  };
  limits: {
    maxBalance: number;
    dailySpending: number;
    perTransaction: number;
    weeklySpending: number;
    appTimeLimit: number;
  };
  permissions: {
    virtualCard: boolean;
    physicalCard: boolean;
    autoApproveSmallPurchases: boolean;
    smallPurchaseThreshold: number;
  };
  notifications: {
    allTransactions: boolean;
    largeTransactions: boolean;
    lessonCompleted: boolean;
    quizCompleted: boolean;
    taskCompleted: boolean;
    goalAchieved: boolean;
  };
}

// Sistema de Indicação
export interface Referral {
  id: string;
  referrerId: string; // Quem indicou
  referredId: string; // Quem foi indicado
  code: string;
  status: 'pending' | 'active' | 'inactive';
  discount: number; // 20% do valor da mensalidade
  totalEarned: number;
  createdAt: Date;
  activatedAt?: Date;
}

// Ranking
export interface Ranking {
  childId: string;
  name: string;
  avatar?: string;
  level: number;
  xp: number;
  badges: number;
  position: number;
}

// Notificação
export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

// Estatísticas do Dashboard
export interface DashboardStats {
  totalBalance: number;
  totalEarned: number;
  totalSpent: number;
  lessonsCompleted: number;
  quizzesCompleted: number;
  tasksCompleted: number;
  currentLevel: number;
  currentXP: number;
  nextLevelXP: number;
  badges: number;
  goalsAchieved: number;
  activeGoals: number;
}

// Relatório Financeiro (para pais)
export interface FinancialReport {
  childId: string;
  period: {
    start: Date;
    end: Date;
  };
  totalEarned: number;
  totalSpent: number;
  balance: number;
  transactions: Transaction[];
  topCategories: {
    category: string;
    amount: number;
    percentage: number;
  }[];
  savingsRate: number;
  comparisonToPreviousPeriod: {
    earned: number;
    spent: number;
    saved: number;
  };
}
