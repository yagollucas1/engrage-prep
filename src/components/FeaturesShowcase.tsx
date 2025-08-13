import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  Trophy, 
  BarChart3, 
  Clock, 
  Users, 
  Lightbulb,
  Shield,
  Smartphone,
  CheckCircle,
  Star,
  Zap
} from "lucide-react";

const FeaturesShowcase = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Avançada",
      description: "Correção automática de redações com feedback detalhado em todas as 5 competências do ENEM",
      benefits: ["Análise em tempo real", "Feedback personalizado", "Sugestões de melhoria"],
      color: "from-neon-cyan to-neon-blue"
    },
    {
      icon: Target,
      title: "Simulados Adaptativos",
      description: "Questões selecionadas com base no seu desempenho e dificuldades específicas",
      benefits: ["Dificuldade personalizada", "Foco nas suas lacunas", "Evolução constante"],
      color: "from-neon-teal to-neon-cyan"
    },
    {
      icon: BarChart3,
      title: "Analytics Detalhado",
      description: "Acompanhe sua evolução com gráficos e métricas detalhadas por área de conhecimento",
      benefits: ["Dashboard completo", "Relatórios semanais", "Comparação temporal"],
      color: "from-purple-500 to-neon-blue"
    },
    {
      icon: Trophy,
      title: "Gamificação",
      description: "Sistema de conquistas, rankings e desafios para manter você motivado",
      benefits: ["Badges exclusivos", "Ranking social", "Streak de estudos"],
      color: "from-neon-cyan to-neon-teal"
    }
  ];

  const stats = [
    { value: "98%", label: "Precisão da IA", icon: CheckCircle },
    { value: "24/7", label: "Disponibilidade", icon: Clock },
    { value: "50k+", label: "Estudantes Ativos", icon: Users },
    { value: "4.9★", label: "Avaliação", icon: Star }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-card/20 backdrop-blur-sm border-primary/50 text-primary px-6 py-2 mb-6">
            <Lightbulb className="w-4 h-4 mr-2" />
            Tecnologia de Ponta
          </Badge>
          <h2 className="text-5xl font-black mb-6">
            <span className="text-foreground">Recursos que fazem a</span>
            <br />
            <span className="gradient-text">Diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma combina inteligência artificial avançada com metodologia comprovada 
            para acelerar sua preparação para o ENEM.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/20 p-6 text-center card-hover">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 card-hover">
                <div className="flex items-start gap-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl shadow-glow flex-shrink-0`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl shadow-glow mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Multiplataforma</h3>
            <p className="text-muted-foreground">
              Estude onde quiser: web, mobile ou tablet. Sincronização automática em todos os dispositivos.
            </p>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl shadow-glow mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Seguro & Confiável</h3>
            <p className="text-muted-foreground">
              Seus dados estão protegidos com criptografia de ponta. Confiança de milhares de estudantes.
            </p>
          </Card>

          <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 text-center card-hover">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-xl shadow-glow mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Super Rápido</h3>
            <p className="text-muted-foreground">
              Interface otimizada para velocidade. Carregamento instantâneo e navegação fluida.
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-secondary border-primary/20 p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold mb-6">
              Pronto para revolucionar
              <br />
              <span className="gradient-text">seus estudos?</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se a milhares de estudantes que já estão usando nossa plataforma 
              para conquistar a aprovação dos sonhos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                <Trophy className="w-6 h-6 mr-2" />
                Começar Gratuitamente
              </Button>
              <Button variant="outline-neon" size="xl">
                Ver Planos Premium
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesShowcase;