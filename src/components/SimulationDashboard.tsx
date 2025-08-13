import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Globe, 
  Atom, 
  Calculator, 
  PenTool, 
  Zap, 
  Clock, 
  Target,
  TrendingUp,
  Award,
  Play,
  BarChart3,
  Settings
} from "lucide-react";

const SimulationDashboard = () => {
  const simulationTypes = [
    {
      id: 'complete',
      title: 'Simulado Completo',
      description: '180 questões + Redação',
      icon: Target,
      duration: '5h 30min',
      questions: 180,
      color: 'from-neon-cyan to-neon-teal',
      popular: true
    },
    {
      id: 'linguagens',
      title: 'Linguagens',
      description: '45 questões + Redação',
      icon: BookOpen,
      duration: '1h 30min',
      questions: 45,
      color: 'from-neon-blue to-neon-cyan'
    },
    {
      id: 'humanas',
      title: 'Ciências Humanas',
      description: '45 questões + Redação',
      icon: Globe,
      duration: '1h 30min',
      questions: 45,
      color: 'from-neon-teal to-neon-blue'
    },
    {
      id: 'natureza',
      title: 'Ciências da Natureza',
      description: '45 questões + Redação',
      icon: Atom,
      duration: '1h 30min',
      questions: 45,
      color: 'from-neon-cyan to-purple-500'
    },
    {
      id: 'matematica',
      title: 'Matemática',
      description: '45 questões + Redação',
      icon: Calculator,
      duration: '1h 30min',
      questions: 45,
      color: 'from-purple-500 to-neon-cyan'
    },
    {
      id: 'redacao',
      title: 'Só Redação',
      description: 'Foco em escrita',
      icon: PenTool,
      duration: '1h 30min',
      questions: 0,
      color: 'from-neon-teal to-neon-cyan-bright'
    }
  ];

  const recentStats = {
    totalSimulations: 12,
    averageScore: 720,
    bestScore: 850,
    streak: 7,
    totalTime: 48,
    improvement: 15
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="gradient-text">Escolha seu</span>
            <br />
            <span className="text-foreground">Simulado</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simulados baseados no formato oficial do ENEM. Escolha entre simulado completo ou por área específica.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          <Card className="bg-card/30 backdrop-blur-sm border-success/20 p-4 text-center">
            <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-success">{recentStats.totalSimulations}</div>
            <div className="text-xs text-muted-foreground">Simulados</div>
          </Card>
          
          <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-4 text-center">
            <Target className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold gradient-text">{recentStats.averageScore}</div>
            <div className="text-xs text-muted-foreground">Média</div>
          </Card>
          
          <Card className="bg-card/30 backdrop-blur-sm border-warning/20 p-4 text-center">
            <Award className="w-8 h-8 text-warning mx-auto mb-2" />
            <div className="text-2xl font-bold text-warning">{recentStats.bestScore}</div>
            <div className="text-xs text-muted-foreground">Melhor</div>
          </Card>
          
          <Card className="bg-card/30 backdrop-blur-sm border-neon-cyan/20 p-4 text-center">
            <Zap className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
            <div className="text-2xl font-bold text-neon-cyan">{recentStats.streak}</div>
            <div className="text-xs text-muted-foreground">Sequência</div>
          </Card>
          
          <Card className="bg-card/30 backdrop-blur-sm border-accent/20 p-4 text-center">
            <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-accent">{recentStats.totalTime}h</div>
            <div className="text-xs text-muted-foreground">Estudadas</div>
          </Card>
          
          <Card className="bg-card/30 backdrop-blur-sm border-success/20 p-4 text-center">
            <BarChart3 className="w-8 h-8 text-success mx-auto mb-2" />
            <div className="text-2xl font-bold text-success">+{recentStats.improvement}%</div>
            <div className="text-xs text-muted-foreground">Melhoria</div>
          </Card>
        </div>

        {/* Simulation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {simulationTypes.map((simulation) => {
            const Icon = simulation.icon;
            return (
              <Card key={simulation.id} className="bg-card/30 backdrop-blur-sm border-primary/20 overflow-hidden card-hover group">
                {simulation.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-primary text-primary-foreground animate-pulse-glow">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                
                <div className={`h-2 bg-gradient-to-r ${simulation.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${simulation.color} rounded-xl shadow-glow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Duração</div>
                      <div className="text-lg font-bold text-primary">{simulation.duration}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{simulation.title}</h3>
                  <p className="text-muted-foreground mb-6">{simulation.description}</p>
                  
                  {simulation.questions > 0 && (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Questões</span>
                        <span className="font-medium">{simulation.questions}</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  )}
                  
                  <div className="flex gap-3">
                    <Button variant="neon" className="flex-1 group-hover:scale-105 transition-transform">
                      <Play className="w-4 h-4 mr-2" />
                      Iniciar
                    </Button>
                    <Button variant="outline-neon" size="icon">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Start */}
        <Card className="bg-gradient-secondary border-primary/20 p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Não sabe por onde começar?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Nossa IA analisa seu histórico e recomenda o melhor simulado para o seu nível atual.
            </p>
            <Button variant="hero" size="xl">
              <Zap className="w-6 h-6 mr-2" />
              Simulado Inteligente
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SimulationDashboard;