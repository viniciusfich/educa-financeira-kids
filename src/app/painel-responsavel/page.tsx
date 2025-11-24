'use client';

import { useState } from 'react';
import {
  Wallet,
  Users,
  TrendingUp,
  Award,
  Settings,
  Bell,
  DollarSign,
  CheckCircle,
  Clock,
  Target,
  BookOpen,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Gift,
  ShoppingCart,
  AlertCircle,
} from 'lucide-react';

interface Child {
  id: string;
  name: string;
  age: number;
  avatar: string;
  balance: number;
  xp: number;
  level: number;
  tasksCompleted: number;
  lessonsCompleted: number;
}

interface Transaction {
  id: string;
  childId: string;
  type: 'income' | 'expense' | 'reward';
  description: string;
  amount: number;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface Task {
  id: string;
  title: string;
  reward: number;
  frequency: 'daily' | 'weekly' | 'monthly';
  assignedTo: string[];
}

export default function ParentDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'children' | 'transactions' | 'tasks' | 'settings'>('overview');
  const [selectedChild, setSelectedChild] = useState<string | null>(null);

  // Mock data
  const children: Child[] = [
    {
      id: '1',
      name: 'Lucas',
      age: 12,
      avatar: '👦',
      balance: 125.50,
      xp: 2450,
      level: 8,
      tasksCompleted: 45,
      lessonsCompleted: 23,
    },
    {
      id: '2',
      name: 'Maria',
      age: 9,
      avatar: '👧',
      balance: 87.30,
      xp: 1820,
      level: 6,
      tasksCompleted: 38,
      lessonsCompleted: 19,
    },
  ];

  const transactions: Transaction[] = [
    {
      id: '1',
      childId: '1',
      type: 'expense',
      description: 'Compra de livro - Harry Potter',
      amount: 45.90,
      date: '2024-01-15',
      status: 'pending',
    },
    {
      id: '2',
      childId: '2',
      type: 'reward',
      description: 'Tarefa: Arrumar o quarto',
      amount: 10.00,
      date: '2024-01-14',
      status: 'approved',
    },
    {
      id: '3',
      childId: '1',
      type: 'income',
      description: 'Mesada mensal',
      amount: 100.00,
      date: '2024-01-01',
      status: 'approved',
    },
  ];

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Arrumar o quarto',
      reward: 10.00,
      frequency: 'daily',
      assignedTo: ['1', '2'],
    },
    {
      id: '2',
      title: 'Fazer lição de casa',
      reward: 15.00,
      frequency: 'daily',
      assignedTo: ['1', '2'],
    },
    {
      id: '3',
      title: 'Ajudar nas compras',
      reward: 25.00,
      frequency: 'weekly',
      assignedTo: ['1'],
    },
  ];

  const stats = [
    {
      label: 'Total em Carteiras',
      value: `R$ ${children.reduce((acc, child) => acc + child.balance, 0).toFixed(2)}`,
      change: '+12%',
      trend: 'up' as const,
      icon: Wallet,
      color: 'violet',
    },
    {
      label: 'Tarefas Concluídas',
      value: children.reduce((acc, child) => acc + child.tasksCompleted, 0),
      change: '+8',
      trend: 'up' as const,
      icon: CheckCircle,
      color: 'emerald',
    },
    {
      label: 'Aulas Finalizadas',
      value: children.reduce((acc, child) => acc + child.lessonsCompleted, 0),
      change: '+5',
      trend: 'up' as const,
      icon: BookOpen,
      color: 'cyan',
    },
    {
      label: 'Aprovações Pendentes',
      value: transactions.filter(t => t.status === 'pending').length,
      change: '2 novas',
      trend: 'neutral' as const,
      icon: Clock,
      color: 'amber',
    },
  ];

  const handleApproveTransaction = (transactionId: string) => {
    console.log('Aprovar transação:', transactionId);
  };

  const handleRejectTransaction = (transactionId: string) => {
    console.log('Rejeitar transação:', transactionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  FinKids
                </h1>
                <p className="text-xs text-slate-500">Painel do Responsável</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                  P
                </div>
                <span className="text-sm font-medium text-slate-700">Pai/Mãe</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8 bg-white rounded-xl border border-slate-200 p-2 inline-flex gap-2">
          {[
            { id: 'overview', label: 'Visão Geral', icon: TrendingUp },
            { id: 'children', label: 'Filhos', icon: Users },
            { id: 'transactions', label: 'Transações', icon: DollarSign },
            { id: 'tasks', label: 'Tarefas', icon: CheckCircle },
            { id: 'settings', label: 'Configurações', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-500 flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {stat.trend !== 'neutral' && (
                        <div className={`flex items-center gap-1 text-xs font-medium ${
                          stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {stat.trend === 'up' ? (
                            <ArrowUpRight className="w-4 h-4" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4" />
                          )}
                          {stat.change}
                        </div>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Children Cards */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">Seus Filhos</h2>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
                  <Plus className="w-4 h-4" />
                  Adicionar Filho
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {children.map((child) => (
                  <div
                    key={child.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-3xl shadow-lg">
                          {child.avatar}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{child.name}</h3>
                          <p className="text-sm text-slate-600">{child.age} anos • Nível {child.level}</p>
                        </div>
                      </div>
                      <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Balance */}
                      <div className="flex items-center justify-between p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
                        <div>
                          <p className="text-sm text-slate-600 mb-1">Saldo Disponível</p>
                          <p className="text-2xl font-bold text-slate-900">R$ {child.balance.toFixed(2)}</p>
                        </div>
                        <Wallet className="w-8 h-8 text-violet-600" />
                      </div>

                      {/* Progress */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                            <span className="text-xs text-slate-600">Tarefas</span>
                          </div>
                          <p className="text-lg font-bold text-slate-900">{child.tasksCompleted}</p>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4 text-cyan-600" />
                            <span className="text-xs text-slate-600">Aulas</span>
                          </div>
                          <p className="text-lg font-bold text-slate-900">{child.lessonsCompleted}</p>
                        </div>
                      </div>

                      {/* XP Bar */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs text-slate-600">Experiência</span>
                          <span className="text-xs font-medium text-violet-600">{child.xp} XP</span>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
                            style={{ width: `${(child.xp % 1000) / 10}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">Aprovações Pendentes</h2>
                <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
                  Ver todas
                </button>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                {transactions
                  .filter(t => t.status === 'pending')
                  .map((transaction) => {
                    const child = children.find(c => c.id === transaction.childId);
                    return (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xl shadow-lg">
                            {child?.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">{transaction.description}</p>
                            <p className="text-sm text-slate-600">
                              {child?.name} • {new Date(transaction.date).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-lg font-bold ${
                            transaction.type === 'expense' ? 'text-red-600' : 'text-emerald-600'
                          }`}>
                            {transaction.type === 'expense' ? '-' : '+'}R$ {transaction.amount.toFixed(2)}
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleApproveTransaction(transaction.id)}
                              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            >
                              <CheckCircle className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleRejectTransaction(transaction.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* Children Tab */}
        {activeTab === 'children' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Gerenciar Filhos</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Plus className="w-5 h-5" />
                Adicionar Filho
              </button>
            </div>

            <div className="grid gap-6">
              {children.map((child) => (
                <div
                  key={child.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-4xl shadow-lg">
                        {child.avatar}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{child.name}</h3>
                        <p className="text-sm text-slate-600 mb-2">{child.age} anos • Nível {child.level}</p>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                          <span className="text-sm font-medium text-slate-700">{child.xp} XP</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
                      <div className="p-4 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl">
                        <p className="text-xs text-slate-600 mb-1">Saldo</p>
                        <p className="text-lg font-bold text-slate-900">R$ {child.balance.toFixed(2)}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                        <p className="text-xs text-slate-600 mb-1">Tarefas</p>
                        <p className="text-lg font-bold text-slate-900">{child.tasksCompleted}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                        <p className="text-xs text-slate-600 mb-1">Aulas</p>
                        <p className="text-lg font-bold text-slate-900">{child.lessonsCompleted}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl">
                        <p className="text-xs text-slate-600 mb-1">Nível</p>
                        <p className="text-lg font-bold text-slate-900">{child.level}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === 'transactions' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-2xl font-bold text-slate-900">Histórico de Transações</h2>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  Filtrar
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Período
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Filho</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Descrição</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Data</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Valor</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {transactions.map((transaction) => {
                      const child = children.find(c => c.id === transaction.childId);
                      return (
                        <tr key={transaction.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-lg shadow">
                                {child?.avatar}
                              </div>
                              <span className="font-medium text-slate-900">{child?.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              {transaction.type === 'expense' && <ShoppingCart className="w-4 h-4 text-red-600" />}
                              {transaction.type === 'reward' && <Gift className="w-4 h-4 text-emerald-600" />}
                              {transaction.type === 'income' && <DollarSign className="w-4 h-4 text-cyan-600" />}
                              <span className="text-sm text-slate-900">{transaction.description}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-600">
                            {new Date(transaction.date).toLocaleDateString('pt-BR')}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-sm font-bold ${
                              transaction.type === 'expense' ? 'text-red-600' : 'text-emerald-600'
                            }`}>
                              {transaction.type === 'expense' ? '-' : '+'}R$ {transaction.amount.toFixed(2)}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                              transaction.status === 'approved'
                                ? 'bg-emerald-100 text-emerald-700'
                                : transaction.status === 'rejected'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}>
                              {transaction.status === 'approved' && 'Aprovado'}
                              {transaction.status === 'rejected' && 'Rejeitado'}
                              {transaction.status === 'pending' && 'Pendente'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {transaction.status === 'pending' && (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleApproveTransaction(transaction.id)}
                                  className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                                <button
                                  onClick={() => handleRejectTransaction(transaction.id)}
                                  className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">Gerenciar Tarefas</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Plus className="w-5 h-5" />
                Nova Tarefa
              </button>
            </div>

            <div className="grid gap-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{task.title}</h3>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">
                              <DollarSign className="w-3 h-3" />
                              R$ {task.reward.toFixed(2)}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-medium">
                              <Calendar className="w-3 h-3" />
                              {task.frequency === 'daily' && 'Diária'}
                              {task.frequency === 'weekly' && 'Semanal'}
                              {task.frequency === 'monthly' && 'Mensal'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600">Atribuída para:</span>
                        <div className="flex items-center gap-2">
                          {task.assignedTo.map((childId) => {
                            const child = children.find(c => c.id === childId);
                            return (
                              <div
                                key={childId}
                                className="flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-lg"
                              >
                                <span className="text-sm">{child?.avatar}</span>
                                <span className="text-xs font-medium text-slate-700">{child?.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Configurações</h2>

            <div className="grid gap-6">
              {/* Account Settings */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Configurações da Conta</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <div>
                      <p className="font-medium text-slate-900">Notificações por Email</p>
                      <p className="text-sm text-slate-600">Receba atualizações sobre atividades dos seus filhos</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <div>
                      <p className="font-medium text-slate-900">Aprovação Automática</p>
                      <p className="text-sm text-slate-600">Aprovar automaticamente compras abaixo de R$ 20</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium text-slate-900">Relatórios Semanais</p>
                      <p className="text-sm text-slate-600">Receba resumo semanal do progresso</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Segurança</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                    <span className="font-medium text-slate-900">Alterar Senha</span>
                    <Edit className="w-5 h-5 text-slate-600" />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors">
                    <span className="font-medium text-slate-900">Autenticação em Dois Fatores</span>
                    <Edit className="w-5 h-5 text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-white rounded-2xl p-6 border-2 border-red-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-1">Zona de Perigo</h3>
                    <p className="text-sm text-red-700">Ações irreversíveis que afetam sua conta</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors">
                  Excluir Conta
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
