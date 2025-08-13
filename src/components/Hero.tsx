import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Zap, Target, Trophy, BookOpen, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Status Badge */}
        <div className="mb-8 animate-pulse-glow">
          <Badge variant="outline" className="bg-card/20 backdrop-blur-sm border-primary/50 text-primary px-6 py-2 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Plataforma #1 de Preparação para o ENEM
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span className="gradient-text">Prepare-se</span>
          <br />
          <span className="text-foreground">para o</span>
          <br />
          <span className="gradient-text">ENEM 2024</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Simulados realísticos, correção inteligente de redações e gamificação que acelera seu aprendizado.
          <span className="text-primary font-semibold"> Mais de 10.000 questões</span> e 
          <span className="text-accent font-semibold"> análise por IA</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="xl" className="w-full sm:w-auto">
            <GraduationCap className="w-6 h-6 mr-2" />
            Começar Agora Grátis
          </Button>
          <Button variant="outline-neon" size="xl" className="w-full sm:w-auto">
            <BookOpen className="w-6 h-6 mr-2" />
            Ver Demonstração
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <Card className="bg-card/20 backdrop-blur-sm border-primary/20 p-6 text-center card-hover">
            <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Questões</div>
          </Card>
          <Card className="bg-card/20 backdrop-blur-sm border-primary/20 p-6 text-center card-hover">
            <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Estudantes</div>
          </Card>
          <Card className="bg-card/20 backdrop-blur-sm border-primary/20 p-6 text-center card-hover">
            <div className="text-3xl font-bold gradient-text mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Aprovação</div>
          </Card>
          <Card className="bg-card/20 backdrop-blur-sm border-primary/20 p-6 text-center card-hover">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte IA</div>
          </Card>
        </div>
      </div>

      {/* Features Preview */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 card-hover">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4">Simulados Personalizados</h3>
            <p className="text-muted-foreground">
              Simulados adaptados ao seu nível e objetivos. Foque nas áreas que mais precisa melhorar.
            </p>
          </div>
        </Card>

        <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 card-hover">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4">Correção por IA</h3>
            <p className="text-muted-foreground">
              Inteligência artificial avalia suas redações nas 5 competências do ENEM com feedback detalhado.
            </p>
          </div>
        </Card>

        <Card className="bg-card/30 backdrop-blur-sm border-primary/20 p-8 card-hover">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 shadow-glow">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-4">Gamificação</h3>
            <p className="text-muted-foreground">
              Sistema de conquistas, rankings e streak para manter você motivado e engajado nos estudos.
            </p>
          </div>
        </Card>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;