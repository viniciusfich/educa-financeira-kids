'use client';

import { useState } from 'react';
import { Wallet, Users, Sparkles, TrendingUp, Award, Target, BookOpen, Zap } from 'lucide-react';

type ProfileType = 'parent' | 'child' | null;

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType>(null);

  const profiles = [
    {
      type: 'parent' as const,
      title: 'Responsável',
      description: 'Controle total sobre a educação financeira dos seus filhos',
      icon: Users,
      gradient: 'from-violet-500 to-purple-600',
      features: ['Painel de controle', 'Configurar recompensas', 'Aprovar compras', 'Relatórios completos'],
    },
    {
      type: 'child' as const,
      title: 'Criança/Adolescente',
      description: 'Aprenda, ganhe recompensas e gerencie sua carteira digital',
      icon: Sparkles,
      gradient: 'from-cyan-400 to-blue-500',
      features: ['Aulas diárias', 'Provas remuneradas', 'Carteira digital', 'Gamificação'],
    },
  ];

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
                <p className="text-xs text-slate-500">Educação Financeira Gamificada</p>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-violet-600 hover:bg-violet-50 rounded-lg transition-colors">
              Entrar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Educação financeira desde cedo</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Ensine finanças de forma
            <span className="block bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              divertida e eficaz
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Plataforma completa com carteira digital, gamificação, aulas diárias e controle parental.
            Prepare seus filhos para um futuro financeiro brilhante.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { icon: BookOpen, label: 'Aulas Diárias', color: 'violet' },
            { icon: Award, label: 'Recompensas', color: 'cyan' },
            { icon: Target, label: 'Metas', color: 'emerald' },
            { icon: TrendingUp, label: 'Progresso', color: 'purple' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-500 flex items-center justify-center mb-3`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm font-semibold text-slate-900">{feature.label}</p>
            </div>
          ))}
        </div>

        {/* Info Banner - Gamificação */}
        <div className="mb-12 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Gamificação com Tarefas Diárias
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                Complete tarefas do dia a dia, ganhe XP, suba de nível e desbloqueie conquistas! 
                Cada tarefa concluída aproxima você das suas metas financeiras e traz recompensas reais. 
                Transforme responsabilidades em diversão e aprendizado.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Escolha seu perfil para começar
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {profiles.map((profile) => {
              const Icon = profile.icon;
              const isSelected = selectedProfile === profile.type;
              
              return (
                <button
                  key={profile.type}
                  onClick={() => setSelectedProfile(profile.type)}
                  className={`group relative bg-white rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                    isSelected
                      ? 'border-violet-500 shadow-2xl shadow-violet-200'
                      : 'border-slate-200 hover:border-violet-300 hover:shadow-xl'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{profile.title}</h4>
                  <p className="text-sm text-slate-600 mb-6">{profile.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 text-left">
                    {profile.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${profile.gradient}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${profile.gradient} flex items-center justify-center`}>
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        {selectedProfile && (
          <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
              Continuar como {profiles.find(p => p.type === selectedProfile)?.title}
            </button>
            <p className="text-sm text-slate-500 mt-4">
              Teste grátis por 7 dias • Cancele quando quiser
            </p>
          </div>
        )}
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10k+', label: 'Famílias' },
              { value: '50k+', label: 'Aulas Concluídas' },
              { value: 'R$ 2M+', label: 'Economizados' },
              { value: '4.9★', label: 'Avaliação' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-violet-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-slate-900">FinKids</span>
            </div>
            <p className="text-sm text-slate-500">
              © 2024 FinKids. Educação financeira para o futuro.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
