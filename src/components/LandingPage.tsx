import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  CheckCircle, 
  Star, 
  Play, 
  X, 
  AlertTriangle, 
  Shield, 
  Users, 
  Clock,
  Target,
  Wrench,
  DollarSign
} from 'lucide-react';
import heroImage from '@/assets/hero-welder.jpg';

const LandingPage = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showVSLModal, setShowVSLModal] = useState(false);

  useEffect(() => {
    const alertDismissed = localStorage.getItem('alertDismissed');
    if (alertDismissed) {
      setShowAlert(false);
    }

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowStickyCTA(scrollPercent > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dismissAlert = () => {
    setShowAlert(false);
    localStorage.setItem('alertDismissed', 'true');
  };

  const scrollToOffer = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Alerta sticky no topo */}
      {showAlert && (
        <div className="sticky top-0 z-50 w-full bg-gradient-brand-accent p-4">
          <div className="container flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-2 text-primary-foreground font-semibold">
              <AlertTriangle className="h-5 w-5" />
              <span>⚠ Vagas limitadas – última chance hoje</span>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={scrollToOffer}
                className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-bold"
              >
                Garanta sua vaga
              </Button>
              <button 
                onClick={dismissAlert}
                className="text-white/80 hover:text-white p-1"
                aria-label="Fechar alerta"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section com múltiplas luzes */}
      <section className="relative overflow-hidden bg-dotgrid bg-dotgrid min-h-screen flex items-center">
        {/* Múltiplos glows e luzes de fundo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Glows principais maiores e mais intensos */}
          <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-brand/40 blur-3xl animate-float" />
          <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full bg-accent/30 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          
          {/* Luzes secundárias */}
          <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-brand/20 blur-2xl animate-glow-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-60 h-60 rounded-full bg-accent/25 blur-2xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Raios de luz */}
          <div className="absolute inset-0 bg-light-rays bg-light-rays opacity-30 animate-spin" style={{ animationDuration: '120s' }} />
          <div className="absolute inset-0 bg-radial-glow bg-radial-glow" />
        </div>
        
        <div className="container relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                  Método{' '}
                  <span className="bg-gradient-text-glow bg-clip-text text-transparent animate-glow-pulse" style={{ textShadow: 'var(--glow-text)' }}>
                    Móveis de Ouro
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted leading-relaxed">
                  Habilidade real, renda própria e tempo com a família.
                </p>
                <p className="text-lg text-muted/80">
                  Aprenda do zero a transformar suas mãos em liberdade — mesmo sem experiência.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setShowVSLModal(true)}
                  className="bg-brand hover:bg-brand-strong text-primary-foreground font-bold text-lg px-8 py-4 shadow-ultra-glow hover:shadow-glow-mixed transition-all hover:-translate-y-1 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Play className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Assistir Apresentação</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToOffer}
                  className="border-accent text-accent hover:bg-accent hover:text-primary-foreground font-bold text-lg px-8 py-4 shadow-glow-accent hover:shadow-glow-border transition-all"
                >
                  Ver Oferta Completa
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-transparent bg-gradient-brand-accent p-1 shadow-ultra-glow">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-graphite relative">
                  <img 
                    src={heroImage} 
                    alt="Soldador profissional trabalhando com equipamentos de alta qualidade"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay de luz sutil */}
                  <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl shadow-glow-mixed pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* VSL Modal */}
      {showVSLModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={() => setShowVSLModal(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2"
              aria-label="Fechar vídeo"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-transparent bg-gradient-brand-accent p-1 shadow-deep">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-graphite flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center mx-auto">
                    <Play className="h-10 w-10 text-brand" />
                  </div>
                  <p className="text-lg text-muted">Vídeo de apresentação será carregado aqui</p>
                  <p className="text-sm text-muted/60">Conteúdo placeholder - substitua pelo VSL real</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Divisor luminoso */}
      <div className="relative w-full h-px my-16">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/60 via-accent/60 to-transparent shadow-glow-text" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/30 via-accent/30 to-transparent blur-sm" />
      </div>

      {/* Copy Emocional com fundo luminoso */}
      <section className="py-20 relative overflow-hidden">
        {/* Luzes de fundo para a seção */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
        </div>
        <div className="container max-w-4xl mx-auto px-6 space-y-8 text-center animate-fade-in relative z-10">
          <p className="text-xl leading-relaxed text-muted">
            Você já se perguntou como seria trabalhar com as próprias mãos, criando algo único e valioso, 
            enquanto constrói uma renda sólida para sua família?
          </p>
          <p className="text-xl leading-relaxed text-muted">
            O Método Móveis de Ouro não é apenas um curso. É a sua ponte entre onde você está agora 
            e a liberdade financeira que sempre sonhou.
          </p>
          <p className="text-xl leading-relaxed text-muted">
            Mesmo que você nunca tenha pegado em uma ferramenta, você pode dominar as técnicas que 
            transformam madeira comum em móveis sob medida de alto valor.
          </p>
          <p className="text-xl leading-relaxed text-muted font-semibold">
            Chegou a hora de transformar suas mãos em sua maior fonte de renda.
          </p>
        </div>
      </section>

      {/* Copy Lógica - Grid 3 colunas com luzes */}
      <section className="py-20 bg-surface/60 relative overflow-hidden">
        {/* Múltiplas luzes de fundo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-brand/15 blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full bg-accent/12 blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-0 right-1/3 w-48 h-48 rounded-full bg-brand/8 blur-2xl" />
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* O que tem */}
            <Card className="p-8 bg-gradient-surface border-stroke shadow-glass hover:shadow-ultra-glow transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              {/* Glow interno no hover */}
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-duotone shadow-glow-border">
                    <Wrench className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ textShadow: '0 0 20px hsl(var(--brand) / 0.3)' }}>O que tem</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Treinamento completo do zero ao profissional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Lista completa de ferramentas necessárias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Modelos de orçamento e precificação</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Estratégias de captação de clientes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Comunidade exclusiva de alunos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Atualizações e novos conteúdos</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* O que faz */}
            <Card className="p-8 bg-gradient-surface border-stroke shadow-glass hover:shadow-ultra-glow transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-duotone shadow-glow-border">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ textShadow: '0 0 20px hsl(var(--accent) / 0.3)' }}>O que faz</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Gera renda extra ou principal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Organiza todo seu processo produtivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Te ensina a vender com confiança</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Ajuda a conquistar primeiros clientes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Desenvolve habilidade valiosa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <span>Proporciona liberdade de horários</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Como funciona */}
            <Card className="p-8 bg-gradient-surface border-stroke shadow-glass hover:shadow-ultra-glow transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-gradient-duotone shadow-glow-border">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ textShadow: '0 0 20px hsl(var(--brand) / 0.3)' }}>Como funciona</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                    <span>Módulos didáticos passo a passo</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                    <span>Prática guiada com projetos reais</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                    <span>Criação dos primeiros móveis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                    <span>Estratégias de precificação</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</div>
                    <span>Conquista dos primeiros clientes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">6</div>
                    <span>Escala e profissionalização</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Autoridade + Provas Sociais */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Autoridade */}
            <div className="space-y-6 animate-fade-in">
              <div className="relative w-64 h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-full bg-gradient-brand-accent p-1">
                  <div className="w-full h-full rounded-full bg-graphite flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-muted/20 flex items-center justify-center">
                      <Users className="h-16 w-16 text-muted" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full shadow-glow-mixed pointer-events-none" />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4">Mestre João Silva</h3>
                <p className="text-lg text-muted leading-relaxed">
                  Com mais de 15 anos criando móveis sob medida, João transformou sua pequena oficina 
                  em um negócio que gera mais de R$ 50.000 por mês. Agora ele quer te ensinar 
                  exatamente como fazer o mesmo.
                </p>
                <p className="text-muted mt-4 font-medium">
                  "Não é sobre ter dom. É sobre ter o método certo."
                </p>
              </div>
            </div>

            {/* Depoimentos */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-center mb-8">O que nossos alunos dizem</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-gradient-surface border-stroke">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted/20 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                        ))}
                      </div>
                      <p className="text-muted mb-2">
                        "Em 3 meses já estava vendendo meus primeiros móveis. 
                        Método realmente funciona!"
                      </p>
                      <p className="text-sm text-muted/70">Maria Santos - São Paulo</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-surface border-stroke">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted/20 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                        ))}
                      </div>
                      <p className="text-muted mb-2">
                        "Nunca pensei que conseguiria. Hoje tenho minha própria marcenaria!"
                      </p>
                      <p className="text-sm text-muted/70">Carlos Lima - Rio de Janeiro</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-surface border-stroke">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-muted/20 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                        ))}
                      </div>
                      <p className="text-muted mb-2">
                        "Conteúdo muito completo. Aprendi desde o básico até como precificar."
                      </p>
                      <p className="text-sm text-muted/70">Ana Costa - Minas Gerais</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta + Preço */}
      <section id="comprar" className="py-20 bg-surface/30">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tudo que você vai receber
            </h2>
            <p className="text-xl text-muted">
              Um método completo para você dominar a arte da marcenaria
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Lista do que vai receber */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Conteúdo Completo:</h3>
              <div className="space-y-3">
                {[
                  "Módulo 1: Fundamentos da Marcenaria",
                  "Módulo 2: Ferramentas e Equipamentos",
                  "Módulo 3: Técnicas de Corte e Medição",
                  "Módulo 4: Montagem e Acabamento",
                  "Módulo 5: Precificação e Orçamentos",
                  "Módulo 6: Captação de Clientes",
                  "Bônus: Comunidade Exclusiva",
                  "Bônus: Templates de Contratos",
                  "Bônus: Lista de Fornecedores"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-brand flex-shrink-0" />
                    <span className="text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card de Preço */}
            <Card className="relative p-8 bg-gradient-surface border-2 border-transparent bg-clip-padding">
              <div className="absolute inset-0 bg-gradient-brand-accent rounded-lg opacity-50 blur-sm pointer-events-none" />
              <div className="relative bg-gradient-surface rounded-lg p-8 border border-stroke">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-brand-accent text-primary-foreground font-bold px-4 py-1">
                  Acesso Imediato
                </Badge>
                
                <div className="text-center space-y-6">
                  <div>
                    <p className="text-muted/60 line-through text-xl">De R$ 497,00</p>
                    <p className="text-5xl font-black text-brand">R$ 47,00</p>
                    <p className="text-muted">Pagamento único</p>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted">
                    <p>✅ Acesso vitalício ao conteúdo</p>
                    <p>✅ Comunidade exclusiva</p>
                    <p>✅ Suporte especializado</p>
                    <p>✅ Atualizações gratuitas</p>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-brand hover:bg-brand-strong text-primary-foreground font-bold text-lg py-4 shadow-ultra-glow hover:shadow-glow-mixed transition-all hover:-translate-y-1 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                    <DollarSign className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">QUERO COMEÇAR AGORA</span>
                  </Button>
                  
                  <p className="text-xs text-muted/60">
                    Pagamento 100% seguro via cartão ou PIX
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-6">
          <Card className="p-8 bg-gradient-surface border-stroke text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-duotone opacity-5 pointer-events-none" />
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-duotone rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Garantia de 7 dias</h3>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
                Experimente o Método Móveis de Ouro por 7 dias. Se não ficar completamente satisfeito, 
                devolvemos 100% do seu investimento. Sem perguntas, sem complicação.
              </p>
              <p className="text-brand font-semibold mt-4">
                Seu risco é zero. Sua oportunidade é única.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface/50">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gradient-surface border-stroke rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-brand">
                Preciso ter experiência prévia em marcenaria?
              </AccordionTrigger>
              <AccordionContent className="text-muted">
                Não! O método foi desenvolvido especificamente para iniciantes. Começamos do absoluto zero 
                e te levamos até o nível profissional, passo a passo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gradient-surface border-stroke rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-brand">
                Quanto tempo leva para ver os primeiros resultados?
              </AccordionTrigger>
              <AccordionContent className="text-muted">
                A maioria dos nossos alunos consegue fazer seus primeiros móveis em 30-60 dias, 
                dependendo da dedicação e prática.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gradient-surface border-stroke rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-brand">
                Quais ferramentas vou precisar?
              </AccordionTrigger>
              <AccordionContent className="text-muted">
                Fornecemos uma lista completa e detalhada de todas as ferramentas necessárias, 
                desde as básicas até as profissionais, com indicações de onde comprar com melhor preço.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gradient-surface border-stroke rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-brand">
                O curso funciona para quem mora em apartamento?
              </AccordionTrigger>
              <AccordionContent className="text-muted">
                Sim! Ensinamos adaptações para diferentes espaços e como montar uma oficina compacta 
                e funcional, mesmo em locais pequenos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gradient-surface border-stroke rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-brand">
                Há suporte durante o aprendizado?
              </AccordionTrigger>
              <AccordionContent className="text-muted">
                Absoluto! Você terá acesso à nossa comunidade exclusiva e suporte direto com especialistas 
                para tirar todas as suas dúvidas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gradient-surface border-stroke rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:text-brand">
                Como funciona a garantia?
              </AccordionTrigger>
              <AccordionContent className="text-muted">
                Simples: você tem 7 dias para experimentar todo o conteúdo. Se não ficar satisfeito, 
                devolvemos 100% do valor investido, sem questionamentos.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Sticky Mobile */}
      {showStickyCTA && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-brand-accent border-t border-stroke lg:hidden">
          <Button 
            className="w-full bg-brand hover:bg-brand-strong text-primary-foreground font-bold py-4 shadow-glow-brand"
            onClick={scrollToOffer}
          >
            COMEÇAR AGORA - R$ 47,00
          </Button>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 bg-graphite border-t border-stroke">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-brand-accent bg-clip-text text-transparent">
              Método Móveis de Ouro
            </h3>
            <p className="text-muted/60">
              Transformando vidas através da marcenaria profissional
            </p>
            <p className="text-sm text-muted/40">
              © 2024 Método Móveis de Ouro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;