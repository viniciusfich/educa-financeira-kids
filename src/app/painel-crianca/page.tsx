'use client';

import { useState } from 'react';
import {
  Wallet,
  Trophy,
  BookOpen,
  Target,
  Star,
  Zap,
  Gift,
  TrendingUp,
  Award,
  CheckCircle,
  Clock,
  Sparkles,
  Coins,
  ShoppingBag,
  Lock,
  Unlock,
  ChevronRight,
  Calendar,
  Flame,
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  total: number;
}

interface Task {
  id: string;
  title: string;
  reward: number;
  xp: number;
  completed: boolean;
  type: 'daily' | 'weekly';
}

interface Lesson {
  id: string;
  title: string;
  category: string;
  duration: string;
  xp: number;
  completed: boolean;
  locked: boolean;
}

interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  icon: string;
}

export default function ChildDashboard() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'lessons' | 'shop' | 'goals'>('home');

  // Mock user data
  const userData = {
    name: 'Lucas',
    avatar: '👦',
    level: 8,
    xp: 2450,
    xpToNextLevel: 3000,
    balance: 125.50,
    streak: 7,
    totalTasks: 45,
    totalLessons: 23,
  };

  const achievements: Achievement[] = [
    {
      id: '1',
      title: 'Primeira Economia',
      description: 'Economize R$ 10',
      icon: '💰',
      unlocked: true,
      progress: 10,
      total: 10,
    },
    {
      id: '2',
      title: 'Estudante Dedicado',
      description: 'Complete 10 aulas',
      icon: '📚',
      unlocked: true,
      progress: 10,
      total: 10,
    },
    {
      id: '3',
      title: 'Mestre das Tarefas',
      description: 'Complete 50 tarefas',
      icon: '⭐',
      unlocked: false,
      progress: 45,
      total: 50,
    },
    {
      id: '4',
      title: 'Sequência de Fogo',
      description: 'Mantenha 30 dias de sequência',
      icon: '🔥',
      unlocked: false,
      progress: 7,
      total: 30,
    },
  ];

  const dailyTasks: Task[] = [
    {
      id: '1',
      title: 'Arrumar o quarto',
      reward: 10.00,
      xp: 50,
      completed: true,
      type: 'daily',
    },
    {
      id: '2',
      title: 'Fazer lição de casa',
      reward: 15.00,
      xp: 75,
      completed: false,
      type: 'daily',
    },
    {
      id: '3',
      title: 'Ler por 30 minutos',
      reward: 12.00,
      xp: 60,
      completed: false,
      type: 'daily',
    },
  ];

  const weeklyTasks: Task[] = [
    {
      id: '4',
      title: 'Ajudar nas compras',
      reward: 25.00,
      xp: 150,
      completed: false,
      type: 'weekly',
    },
    {
      id: '5',
      title: 'Organizar brinquedos',
      reward: 20.00,
      xp: 100,
      completed: true,
      type: 'weekly',
    },
  ];

  const lessons: Lesson[] = [
    {
      id: '1',
      title: 'O que é dinheiro?',
      category: 'Básico',
      duration: '10 min',
      xp: 100,
      completed: true,
      locked: false,
    },
    {
      id: '2',
      title: 'Economizar vs Gastar',
      category: 'Básico',
      duration: '15 min',
      xp: 150,
      completed: true,
      locked: false,
    },
    {
      id: '3',
      title: 'Definindo Metas',
      category: 'Intermediário',
      duration: '20 min',
      xp: 200,
      completed: false,
      locked: false,
    },
    {
      id: '4',
      title: 'Investimentos Simples',
      category: 'Avançado',
      duration: '25 min',
      xp: 300,
      completed: false,
      locked: true,
    },
  ];

  const goals: Goal[] = [
    {
      id: '1',
      title: 'Novo Videogame',
      targetAmount: 500.00,
      currentAmount: 125.50,
      icon: '🎮',
    },
    {
      id: '2',
      title: 'Bicicleta Nova',
      targetAmount: 800.00,
      currentAmount: 125.50,
      icon: '🚲',
    },
  ];

  const shopItems = [
    {
      id: '1',
      name: 'Avatar Especial',
      price: 50.00,
      icon: '🦸',
      category: 'Personalização',
    },
    {
      id: '2',
      name: 'Tema Escuro',
      price: 30.00,
      icon: '🌙',
      category: 'Personalização',
    },
    {
      id: '3',
      name: 'Dobro de XP (1 dia)',
      price: 40.00,
      icon: '⚡',
      category: 'Power-ups',
    },
    {
      id: '4',
      name: 'Emblema Dourado',
      price: 100.00,
      icon: '🏆',
      category: 'Conquistas',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  FinKids
                </h1>
                <p className="text-xs text-slate-500">Olá, {userData.name}!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg">
                <Flame className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-bold text-orange-700">{userData.streak} dias</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-2xl shadow-lg">
                {userData.avatar}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8 bg-white rounded-xl border border-slate-200 p-2 inline-flex gap-2 overflow-x-auto">
          {[
            { id: 'home', label: 'Início', icon: Sparkles },
            { id: 'tasks', label: 'Tarefas', icon: CheckCircle },
            { id: 'lessons', label: 'Aulas', icon: BookOpen },
            { id: 'shop', label: 'Loja', icon: ShoppingBag },
            { id: 'goals', label: 'Metas', icon: Target },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Home Tab */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Balance */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">R$ {userData.balance.toFixed(2)}</div>
                <div className="text-sm text-slate-600">Saldo Disponível</div>
              </div>

              {/* Level */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">Nível {userData.level}</div>
                <div className="text-sm text-slate-600">{userData.xp} / {userData.xpToNextLevel} XP</div>
              </div>

              {/* Tasks */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <Zap className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{userData.totalTasks}</div>
                <div className="text-sm text-slate-600">Tarefas Concluídas</div>
              </div>

              {/* Lessons */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <Award className="w-5 h-5 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{userData.totalLessons}</div>
                <div className="text-sm text-slate-600">Aulas Finalizadas</div>
              </div>
            </div>

            {/* XP Progress Bar */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-900">Progresso para o Nível {userData.level + 1}</h3>
                <span className="text-sm font-medium text-violet-600">{Math.round((userData.xp / userData.xpToNextLevel) * 100)}%</span>
              </div>
              <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${(userData.xp / userData.xpToNextLevel) * 100}%` }}
                />
              </div>
              <p className="text-sm text-slate-600 mt-2">Faltam {userData.xpToNextLevel - userData.xp} XP para o próximo nível!</p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Today's Tasks */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">Tarefas de Hoje</h3>
                  <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
                    Ver todas
                  </button>
                </div>
                <div className="space-y-3">
                  {dailyTasks.slice(0, 3).map((task) => (
                    <div
                      key={task.id}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        task.completed
                          ? 'bg-emerald-50 border-emerald-200'
                          : 'bg-slate-50 border-slate-200 hover:border-cyan-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          task.completed
                            ? 'bg-emerald-500 border-emerald-500'
                            : 'border-slate-300'
                        }`}>
                          {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                          <p className={`font-medium ${task.completed ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                            {task.title}
                          </p>
                          <p className="text-xs text-slate-600">+{task.xp} XP • R$ {task.reward.toFixed(2)}</p>
                        </div>
                      </div>
                      {!task.completed && (
                        <button className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all">
                          Fazer
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">Conquistas</h3>
                  <button className="text-sm font-medium text-cyan-600 hover:text-cyan-700">
                    Ver todas
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-xl border-2 text-center transition-all ${
                        achievement.unlocked
                          ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200'
                          : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <p className="text-xs font-semibold text-slate-900 mb-1">{achievement.title}</p>
                      {!achievement.unlocked && (
                        <div className="mt-2">
                          <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                              style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-slate-600 mt-1">{achievement.progress}/{achievement.total}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Goals Preview */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">Minhas Metas</h3>
                <button
                  onClick={() => setActiveTab('goals')}
                  className="text-sm font-medium text-cyan-600 hover:text-cyan-700 flex items-center gap-1"
                >
                  Ver todas
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {goals.map((goal) => {
                  const progress = (goal.currentAmount / goal.targetAmount) * 100;
                  return (
                    <div key={goal.id} className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl border border-violet-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-3xl">{goal.icon}</div>
                        <div className="flex-1">
                          <p className="font-bold text-slate-900">{goal.title}</p>
                          <p className="text-sm text-slate-600">
                            R$ {goal.currentAmount.toFixed(2)} / R$ {goal.targetAmount.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-600 mt-2">{Math.round(progress)}% completo</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Minhas Tarefas</h2>

            {/* Daily Tasks */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-cyan-600" />
                <h3 className="text-lg font-bold text-slate-900">Tarefas Diárias</h3>
              </div>
              <div className="space-y-3">
                {dailyTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      task.completed
                        ? 'bg-emerald-50 border-emerald-200'
                        : 'bg-slate-50 border-slate-200 hover:border-cyan-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'border-slate-300'
                      }`}>
                        {task.completed && <CheckCircle className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <p className={`font-semibold ${task.completed ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-emerald-600 font-medium">+{task.xp} XP</span>
                          <span className="text-sm text-slate-400">•</span>
                          <span className="text-sm text-violet-600 font-medium">R$ {task.reward.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    {!task.completed && (
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                        Completar
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Tasks */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-violet-600" />
                <h3 className="text-lg font-bold text-slate-900">Tarefas Semanais</h3>
              </div>
              <div className="space-y-3">
                {weeklyTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      task.completed
                        ? 'bg-emerald-50 border-emerald-200'
                        : 'bg-slate-50 border-slate-200 hover:border-violet-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        task.completed
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'border-slate-300'
                      }`}>
                        {task.completed && <CheckCircle className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <p className={`font-semibold ${task.completed ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm text-emerald-600 font-medium">+{task.xp} XP</span>
                          <span className="text-sm text-slate-400">•</span>
                          <span className="text-sm text-violet-600 font-medium">R$ {task.reward.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    {!task.completed && (
                      <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                        Completar
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Lessons Tab */}
        {activeTab === 'lessons' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Aulas de Educação Financeira</h2>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-bold text-orange-700">{userData.totalLessons} concluídas</span>
              </div>
            </div>

            <div className="grid gap-4">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`bg-white rounded-2xl p-6 border-2 transition-all ${
                    lesson.locked
                      ? 'border-slate-200 opacity-60'
                      : lesson.completed
                      ? 'border-emerald-200 bg-emerald-50'
                      : 'border-slate-200 hover:border-cyan-300 hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        lesson.locked
                          ? 'bg-slate-200'
                          : lesson.completed
                          ? 'bg-gradient-to-br from-emerald-400 to-teal-500'
                          : 'bg-gradient-to-br from-cyan-400 to-blue-500'
                      }`}>
                        {lesson.locked ? (
                          <Lock className="w-8 h-8 text-slate-400" />
                        ) : lesson.completed ? (
                          <CheckCircle className="w-8 h-8 text-white" />
                        ) : (
                          <BookOpen className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-bold text-slate-900">{lesson.title}</h3>
                          {lesson.completed && (
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                              Concluída
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <span className="px-2 py-1 bg-violet-100 text-violet-700 rounded-lg font-medium">
                            {lesson.category}
                          </span>
                          <span>•</span>
                          <span>{lesson.duration}</span>
                          <span>•</span>
                          <span className="text-emerald-600 font-medium">+{lesson.xp} XP</span>
                        </div>
                      </div>
                    </div>
                    {!lesson.locked && !lesson.completed && (
                      <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2">
                        Começar
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    )}
                    {lesson.locked && (
                      <div className="text-sm text-slate-500 flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Bloqueada
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Shop Tab */}
        {activeTab === 'shop' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Loja de Recompensas</h2>
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg">
                <Coins className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-emerald-700">R$ {userData.balance.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shopItems.map((item) => {
                const canAfford = userData.balance >= item.price;
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl p-6 border-2 transition-all ${
                      canAfford
                        ? 'border-slate-200 hover:border-violet-300 hover:shadow-lg'
                        : 'border-slate-200 opacity-60'
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-4xl">
                        {item.icon}
                      </div>
                      <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Coins className="w-5 h-5 text-emerald-600" />
                        <span className="text-xl font-bold text-slate-900">R$ {item.price.toFixed(2)}</span>
                      </div>
                      <button
                        disabled={!canAfford}
                        className={`w-full px-4 py-3 font-semibold rounded-lg transition-all ${
                          canAfford
                            ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        {canAfford ? 'Comprar' : 'Saldo Insuficiente'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Minhas Metas de Economia</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Target className="w-5 h-5" />
                Nova Meta
              </button>
            </div>

            <div className="grid gap-6">
              {goals.map((goal) => {
                const progress = (goal.currentAmount / goal.targetAmount) * 100;
                const remaining = goal.targetAmount - goal.currentAmount;
                return (
                  <div key={goal.id} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-4xl">
                          {goal.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{goal.title}</h3>
                          <p className="text-sm text-slate-600">
                            Faltam R$ {remaining.toFixed(2)} para alcançar sua meta
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm font-bold rounded-full">
                        {Math.round(progress)}%
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">Progresso</span>
                        <span className="font-bold text-slate-900">
                          R$ {goal.currentAmount.toFixed(2)} / R$ {goal.targetAmount.toFixed(2)}
                        </span>
                      </div>
                      <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mt-6">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all">
                        Adicionar Dinheiro
                      </button>
                      <button className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        Editar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
