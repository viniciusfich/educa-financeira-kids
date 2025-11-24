// Constantes do aplicativo de educação financeira

// Níveis e XP
export const XP_PER_LEVEL = 1000;
export const MAX_LEVEL = 100;

// Recompensas padrão (podem ser customizadas pelos pais)
export const DEFAULT_REWARDS = {
  lessonCompletion: 5.0,
  quizMinimum: 10.0, // 5 acertos
  quizMedium: 20.0, // 7 acertos
  quizMaximum: 50.0, // 10 acertos
  taskCompletion: 15.0,
  goalAchievement: 100.0,
};

// XP padrão por atividade
export const DEFAULT_XP_REWARDS = {
  lessonCompletion: 50,
  quizMinimum: 100,
  quizMedium: 200,
  quizMaximum: 500,
  taskCompletion: 75,
  goalAchievement: 300,
  dailyLogin: 10,
  weeklyStreak: 150,
};

// Limites padrão
export const DEFAULT_LIMITS = {
  maxBalance: 1000.0,
  dailySpending: 50.0,
  perTransaction: 30.0,
  weeklySpending: 200.0,
  appTimeLimit: 120, // 2 horas por dia
};

// Sistema de indicação
export const REFERRAL_DISCOUNT_PERCENTAGE = 0.2; // 20%
export const DEFAULT_SUBSCRIPTION_PRICE = 29.9;

// Badges disponíveis
export const AVAILABLE_BADGES = [
  {
    id: 'first-lesson',
    title: 'Primeira Aula',
    description: 'Complete sua primeira aula',
    icon: 'BookOpen',
    type: 'bronze' as const,
    requirement: 'Complete 1 aula',
  },
  {
    id: 'lesson-master',
    title: 'Mestre das Aulas',
    description: 'Complete 50 aulas',
    icon: 'GraduationCap',
    type: 'gold' as const,
    requirement: 'Complete 50 aulas',
  },
  {
    id: 'quiz-ace',
    title: 'Ás das Provas',
    description: 'Tire nota máxima em 5 provas',
    icon: 'Trophy',
    type: 'gold' as const,
    requirement: 'Tire 10/10 em 5 provas',
  },
  {
    id: 'saver',
    title: 'Poupador',
    description: 'Economize R$ 100',
    icon: 'PiggyBank',
    type: 'silver' as const,
    requirement: 'Tenha R$ 100 na carteira',
  },
  {
    id: 'goal-achiever',
    title: 'Realizador',
    description: 'Complete sua primeira meta',
    icon: 'Target',
    type: 'bronze' as const,
    requirement: 'Complete 1 meta',
  },
  {
    id: 'task-master',
    title: 'Mestre das Tarefas',
    description: 'Complete 20 tarefas',
    icon: 'CheckCircle',
    type: 'silver' as const,
    requirement: 'Complete 20 tarefas',
  },
  {
    id: 'level-10',
    title: 'Nível 10',
    description: 'Alcance o nível 10',
    icon: 'Star',
    type: 'silver' as const,
    requirement: 'Alcance nível 10',
  },
  {
    id: 'level-50',
    title: 'Nível 50',
    description: 'Alcance o nível 50',
    icon: 'Sparkles',
    type: 'platinum' as const,
    requirement: 'Alcance nível 50',
  },
  {
    id: 'streak-7',
    title: 'Sequência de 7 Dias',
    description: 'Estude por 7 dias seguidos',
    icon: 'Flame',
    type: 'bronze' as const,
    requirement: 'Estude 7 dias seguidos',
  },
  {
    id: 'streak-30',
    title: 'Sequência de 30 Dias',
    description: 'Estude por 30 dias seguidos',
    icon: 'Zap',
    type: 'diamond' as const,
    requirement: 'Estude 30 dias seguidos',
  },
];

// Módulos de educação (estrutura básica)
export const EDUCATION_MODULES = [
  {
    id: 'module-1',
    title: 'Introdução ao Dinheiro',
    description: 'Aprenda o que é dinheiro e sua importância',
    order: 1,
    difficulty: 'beginner' as const,
    requiredLevel: 0,
  },
  {
    id: 'module-2',
    title: 'Poupar e Economizar',
    description: 'Descubra como guardar dinheiro para o futuro',
    order: 2,
    difficulty: 'beginner' as const,
    requiredLevel: 5,
  },
  {
    id: 'module-3',
    title: 'Ganhar Dinheiro',
    description: 'Entenda como as pessoas ganham dinheiro',
    order: 3,
    difficulty: 'beginner' as const,
    requiredLevel: 10,
  },
  {
    id: 'module-4',
    title: 'Gastar com Sabedoria',
    description: 'Aprenda a fazer escolhas inteligentes',
    order: 4,
    difficulty: 'intermediate' as const,
    requiredLevel: 15,
  },
  {
    id: 'module-5',
    title: 'Metas Financeiras',
    description: 'Como planejar e alcançar seus objetivos',
    order: 5,
    difficulty: 'intermediate' as const,
    requiredLevel: 20,
  },
  {
    id: 'module-6',
    title: 'Investimentos Básicos',
    description: 'Introdução ao mundo dos investimentos',
    order: 6,
    difficulty: 'advanced' as const,
    requiredLevel: 30,
  },
];

// Cores do tema (gradientes modernos)
export const THEME_COLORS = {
  primary: {
    from: 'from-violet-500',
    to: 'to-purple-600',
    solid: 'bg-violet-500',
    text: 'text-violet-500',
  },
  secondary: {
    from: 'from-cyan-400',
    to: 'to-blue-500',
    solid: 'bg-cyan-400',
    text: 'text-cyan-400',
  },
  success: {
    from: 'from-emerald-400',
    to: 'to-green-500',
    solid: 'bg-emerald-400',
    text: 'text-emerald-400',
  },
  warning: {
    from: 'from-amber-400',
    to: 'to-orange-500',
    solid: 'bg-amber-400',
    text: 'text-amber-400',
  },
  danger: {
    from: 'from-rose-400',
    to: 'to-red-500',
    solid: 'bg-rose-400',
    text: 'text-rose-400',
  },
};

// Categorias de transação
export const TRANSACTION_CATEGORIES = [
  { id: 'education', label: 'Educação', icon: 'BookOpen', color: 'violet' },
  { id: 'tasks', label: 'Tarefas', icon: 'CheckSquare', color: 'blue' },
  { id: 'goals', label: 'Metas', icon: 'Target', color: 'green' },
  { id: 'shopping', label: 'Compras', icon: 'ShoppingBag', color: 'pink' },
  { id: 'food', label: 'Alimentação', icon: 'UtensilsCrossed', color: 'orange' },
  { id: 'entertainment', label: 'Entretenimento', icon: 'Gamepad2', color: 'purple' },
  { id: 'savings', label: 'Poupança', icon: 'PiggyBank', color: 'emerald' },
  { id: 'other', label: 'Outros', icon: 'MoreHorizontal', color: 'gray' },
];

// Mensagens motivacionais
export const MOTIVATIONAL_MESSAGES = [
  'Continue assim! Você está indo muito bem! 🌟',
  'Cada real economizado é um passo para seus sonhos! 💰',
  'Você está aprendendo habilidades valiosas! 🎓',
  'Parabéns pelo seu progresso! 🎉',
  'Seu futuro financeiro agradece! 🚀',
  'Você é um exemplo de disciplina! 💪',
  'Continue estudando e crescendo! 📚',
  'Suas conquistas são incríveis! 🏆',
];

// Configurações de notificação
export const NOTIFICATION_TYPES = {
  LESSON_COMPLETED: 'Aula concluída',
  QUIZ_COMPLETED: 'Prova concluída',
  TASK_COMPLETED: 'Tarefa concluída',
  GOAL_ACHIEVED: 'Meta alcançada',
  REWARD_RECEIVED: 'Recompensa recebida',
  PURCHASE_REQUEST: 'Solicitação de compra',
  PURCHASE_APPROVED: 'Compra aprovada',
  PURCHASE_REJECTED: 'Compra rejeitada',
  LOW_BALANCE: 'Saldo baixo',
  LEVEL_UP: 'Subiu de nível',
  BADGE_EARNED: 'Nova insígnia',
  REFERRAL_BONUS: 'Bônus de indicação',
};
