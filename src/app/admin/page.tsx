'use client';

import { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  MapPin, 
  Filter,
  Download,
  Search,
  BarChart3,
  PieChart,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

// Dados mockados para demonstração
const mockSubscribers = [
  { id: 1, name: 'João Silva', state: 'SP', income: 'R$ 3.000 - R$ 5.000', age: 35, plan: 'Premium', status: 'Ativo', joinDate: '2024-01-15' },
  { id: 2, name: 'Maria Santos', state: 'RJ', income: 'R$ 5.000 - R$ 8.000', age: 42, plan: 'Premium', status: 'Ativo', joinDate: '2024-01-20' },
  { id: 3, name: 'Pedro Costa', state: 'MG', income: 'R$ 2.000 - R$ 3.000', age: 28, plan: 'Básico', status: 'Ativo', joinDate: '2024-02-01' },
  { id: 4, name: 'Ana Oliveira', state: 'SP', income: 'R$ 8.000+', age: 38, plan: 'Premium', status: 'Ativo', joinDate: '2024-02-10' },
  { id: 5, name: 'Carlos Souza', state: 'RS', income: 'R$ 3.000 - R$ 5.000', age: 45, plan: 'Básico', status: 'Ativo', joinDate: '2024-02-15' },
  { id: 6, name: 'Juliana Lima', state: 'BA', income: 'R$ 5.000 - R$ 8.000', age: 33, plan: 'Premium', status: 'Ativo', joinDate: '2024-03-01' },
  { id: 7, name: 'Roberto Alves', state: 'SP', income: 'R$ 3.000 - R$ 5.000', age: 40, plan: 'Básico', status: 'Ativo', joinDate: '2024-03-05' },
  { id: 8, name: 'Fernanda Rocha', state: 'PR', income: 'R$ 2.000 - R$ 3.000', age: 31, plan: 'Básico', status: 'Ativo', joinDate: '2024-03-10' },
];

const incomeRanges = ['Todos', 'R$ 2.000 - R$ 3.000', 'R$ 3.000 - R$ 5.000', 'R$ 5.000 - R$ 8.000', 'R$ 8.000+'];
const states = ['Todos', 'SP', 'RJ', 'MG', 'RS', 'BA', 'PR', 'SC', 'PE', 'CE'];
const plans = ['Todos', 'Básico', 'Premium'];

export default function AdminDashboard() {
  const [selectedIncome, setSelectedIncome] = useState('Todos');
  const [selectedState, setSelectedState] = useState('Todos');
  const [selectedPlan, setSelectedPlan] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar assinantes
  const filteredSubscribers = mockSubscribers.filter(sub => {
    const matchesIncome = selectedIncome === 'Todos' || sub.income === selectedIncome;
    const matchesState = selectedState === 'Todos' || sub.state === selectedState;
    const matchesPlan = selectedPlan === 'Todos' || sub.plan === selectedPlan;
    const matchesSearch = sub.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIncome && matchesState && matchesPlan && matchesSearch;
  });

  // Estatísticas
  const totalSubscribers = filteredSubscribers.length;
  const premiumCount = filteredSubscribers.filter(s => s.plan === 'Premium').length;
  const basicCount = filteredSubscribers.filter(s => s.plan === 'Básico').length;
  
  // Distribuição por renda
  const incomeDistribution = incomeRanges.slice(1).map(range => ({
    range,
    count: filteredSubscribers.filter(s => s.income === range).length
  }));

  // Distribuição por estado
  const stateDistribution = states.slice(1).map(state => ({
    state,
    count: filteredSubscribers.filter(s => s.state === state).length
  })).filter(s => s.count > 0).sort((a, b) => b.count - a.count);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Painel Administrativo
                </h1>
                <p className="text-xs text-slate-500">Gestão de Assinantes</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-violet-600 hover:bg-violet-50 rounded-lg transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Exportar Dados
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                <ArrowUpRight className="w-4 h-4" />
                12%
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{totalSubscribers}</div>
            <div className="text-sm text-slate-500">Total de Assinantes</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                <ArrowUpRight className="w-4 h-4" />
                8%
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{premiumCount}</div>
            <div className="text-sm text-slate-500">Plano Premium</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                <ArrowUpRight className="w-4 h-4" />
                15%
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{basicCount}</div>
            <div className="text-sm text-slate-500">Plano Básico</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                <ArrowUpRight className="w-4 h-4" />
                20%
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">3</div>
            <div className="text-sm text-slate-500">Novos Este Mês</div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-violet-600" />
            <h3 className="text-lg font-semibold text-slate-900">Filtros de Classificação</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Busca */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Nome do assinante..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Filtro de Renda */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Faixa de Renda</label>
              <select
                value={selectedIncome}
                onChange={(e) => setSelectedIncome(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
              >
                {incomeRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Filtro de Estado */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Estado</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
              >
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Filtro de Plano */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Plano</label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all bg-white"
              >
                {plans.map(plan => (
                  <option key={plan} value={plan}>{plan}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Botão Limpar Filtros */}
          {(selectedIncome !== 'Todos' || selectedState !== 'Todos' || selectedPlan !== 'Todos' || searchTerm) && (
            <button
              onClick={() => {
                setSelectedIncome('Todos');
                setSelectedState('Todos');
                setSelectedPlan('Todos');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 text-sm font-medium text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
            >
              Limpar Filtros
            </button>
          )}
        </div>

        {/* Gráficos de Distribuição */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Distribuição por Renda */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <PieChart className="w-5 h-5 text-violet-600" />
              <h3 className="text-lg font-semibold text-slate-900">Distribuição por Renda</h3>
            </div>
            <div className="space-y-4">
              {incomeDistribution.map((item, index) => {
                const percentage = totalSubscribers > 0 ? (item.count / totalSubscribers * 100).toFixed(1) : 0;
                const colors = ['from-violet-400 to-violet-500', 'from-cyan-400 to-blue-500', 'from-emerald-400 to-teal-500', 'from-purple-400 to-pink-500'];
                
                return (
                  <div key={item.range}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{item.range}</span>
                      <span className="text-sm font-semibold text-slate-900">{item.count} ({percentage}%)</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${colors[index % colors.length]} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Distribuição por Estado */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-violet-600" />
              <h3 className="text-lg font-semibold text-slate-900">Distribuição por Estado</h3>
            </div>
            <div className="space-y-4">
              {stateDistribution.slice(0, 5).map((item, index) => {
                const percentage = totalSubscribers > 0 ? (item.count / totalSubscribers * 100).toFixed(1) : 0;
                const colors = ['from-cyan-400 to-blue-500', 'from-violet-400 to-violet-500', 'from-emerald-400 to-teal-500', 'from-purple-400 to-pink-500', 'from-orange-400 to-red-500'];
                
                return (
                  <div key={item.state}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{item.state}</span>
                      <span className="text-sm font-semibold text-slate-900">{item.count} ({percentage}%)</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${colors[index % colors.length]} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tabela de Assinantes */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Lista de Assinantes ({filteredSubscribers.length})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Nome</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Renda</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Idade</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Plano</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Data de Entrada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredSubscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                          {subscriber.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-slate-900">{subscriber.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-sm text-slate-900">{subscriber.state}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-900">{subscriber.income}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-slate-900">{subscriber.age} anos</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        subscriber.plan === 'Premium' 
                          ? 'bg-violet-100 text-violet-700' 
                          : 'bg-cyan-100 text-cyan-700'
                      }`}>
                        {subscriber.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                        {subscriber.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                      {new Date(subscriber.joinDate).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
