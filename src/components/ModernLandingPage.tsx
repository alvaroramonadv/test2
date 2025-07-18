import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Scale, Heart, Shield, Users, Clock, FileText, CheckCircle, Star, ArrowRight, Zap } from "lucide-react";

const ModernLandingPage = () => {
  const whatsappLink = "https://wa.me/5585989001212";

  const services = [
    { 
      icon: Shield, 
      title: "Negativa de Tratamento / Procedimento", 
      description: "Reversão de negativas através de liminares ágeis para garantir seu direito ao tratamento necessário.",
      highlight: "Urgente"
    },
    { 
      icon: Heart, 
      title: "Negativa de Medicamento de Alto Custo", 
      description: "Garantimos o fornecimento de medicamentos essenciais pelo plano de saúde ou SUS.",
      highlight: "Especializado",
      slug: "/medicamento-alto-custo"
    },
    { 
      icon: Clock, 
      title: "Internação / Tratamento de Urgência", 
      description: "Autorização judicial imediata para internações e tratamentos de urgência negados.",
      highlight: "24h",
      slug: "/tratamento-urgencia"
    },
    { 
      icon: FileText, 
      title: "Cirurgia Negada (Bariátrica, Oncológica, Reparadora)", 
      description: "Autorização para cirurgias essenciais negadas pelo plano de saúde.",
      highlight: "Vital"
    },
    { 
      icon: Users, 
      title: "Home Care / Internação Domiciliar", 
      description: "Garantia do direito ao atendimento domiciliar quando indicado pelo médico.",
      highlight: "Conforto",
      slug: "/home-care"
    },
    { 
      icon: Scale, 
      title: "Erro Médico / Hospitalar", 
      description: "Defesa em casos de negligência, imperícia ou imprudência médica com indenização.",
      highlight: "Reparação"
    },
    { 
      icon: CheckCircle, 
      title: "Reajuste Abusivo de Plano", 
      description: "Contestação de aumentos irregulares e devolução de valores pagos indevidamente.",
      highlight: "Economia"
    },
    { 
      icon: Heart, 
      title: "Terapias Continuadas (Fono, Fisio, Psico, TEA)", 
      description: "Garantia de continuidade em tratamentos terapêuticos essenciais.",
      highlight: "Continuidade"
    },
    { 
      icon: Star, 
      title: "Doenças Raras e Crônicas", 
      description: "Proteção especializada para portadores de doenças raras com tratamentos específicos.",
      highlight: "Especializado"
    },
    { 
      icon: MapPin, 
      title: "Tratamento Fora do Domicílio", 
      description: "Cobertura para tratamentos em outras cidades quando necessário.",
      highlight: "Deslocamento"
    },
    { 
      icon: Clock, 
      title: "Internações Prolongadas / Alta Prematura", 
      description: "Garantia de internação pelo tempo médico necessário, evitando altas prematuras.",
      highlight: "Segurança"
    },
    { 
      icon: FileText, 
      title: "Reembolso de Despesas Médicas", 
      description: "Recuperação de valores gastos com tratamentos não cobertos indevidamente.",
      highlight: "Reembolso"
    },
    { 
      icon: Shield, 
      title: "Ações contra o SUS (omissão no fornecimento)", 
      description: "Garantia de direitos fundamentais à saúde pública através do sistema judiciário.",
      highlight: "Público"
    }
  ];

  const testimonials = [
    {
      text: "Consegui meu medicamento em 15 dias. Atendimento excepcional e muito profissional.",
      author: "Maria S.",
      location: "Fortaleza-CE"
    },
    {
      text: "Resolveram meu caso de home care rapidamente. Recomendo para todos.",
      author: "João P.", 
      location: "São Paulo-SP"
    },
    {
      text: "Excelente trabalho na contestação do reajuste abusivo. Muito grata!",
      author: "Ana L.",
      location: "Rio de Janeiro-RJ"
    }
  ];

  const faqs = [
    {
      question: "Quando procurar um advogado para plano de saúde?",
      answer: "Sempre que houver negativa de cobertura, demora excessiva na autorização de procedimentos ou reajuste abusivo nas mensalidades."
    },
    {
      question: "Como funciona o atendimento 100% digital?",
      answer: "Todo processo é realizado online, com reuniões por videochamada, assinatura digital de documentos e acompanhamento em tempo real."
    },
    {
      question: "Quanto tempo leva para conseguir uma liminar?",
      answer: "Em casos urgentes, podemos obter liminares em 24 a 48 horas, dependendo da complexidade e urgência médica."
    },
    {
      question: "Vocês atendem em todo o Brasil?",
      answer: "Sim, nossa atuação 100% digital permite atendimento em todo território nacional com a mesma qualidade e agilidade."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-family.avif"
            alt="Família confiante em consulta médica - Direito da Saúde"
            className="w-full h-full object-cover"
            loading="eager"
            style={{ width: '100%', height: '100%' }}
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30"></div>
        
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
              <Zap className="mr-2 h-3 w-3" />
              8 anos de experiência • 100% Digital
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              Plano de Saúde <span className="text-accent">Negado?</span>
              <br />
              <span className="text-3xl lg:text-5xl font-medium opacity-90">
                Entenda Seus Direitos
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto animate-slide-up">
              Especialistas em <strong>Direito da Saúde</strong> com atuação 100% digital. 
              Liminares ágeis e resultados comprovados em todo o Brasil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-full font-semibold shadow-glow animate-glow group"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Fale Agora no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center text-white/80 text-sm">
                <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                Atendimento imediato • Sem compromisso
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "8+", label: "Anos de Experiência" },
              { number: "500+", label: "Casos Resolvidos" },
              { number: "24h", label: "Para Liminares Urgentes" },
              { number: "100%", label: "Atendimento Digital" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Scale className="mr-2 h-3 w-3" />
              OAB/CE • Especialistas Certificados
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-foreground">
              <span className="text-primary">8 anos</span> defendendo pacientes em 
              <br /><span className="text-primary">Fortaleza-CE</span> e todo Brasil
            </h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-card max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Shield className="h-12 w-12 text-primary mr-4" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-foreground">Ramon Araújo Advogados</h3>
                  <p className="text-muted-foreground">Escritório 100% Digital</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Diferencial único:</strong> atuação 100% digital com foco em 
                <strong className="text-primary"> liminares ágeis</strong> para garantir seus direitos de forma 
                rápida, eficiente e com total transparência no processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              <Star className="mr-2 h-3 w-3" />
              Serviços Especializados
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Áreas de Atuação em <span className="text-primary">Direito da Saúde</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expertise comprovada nas principais demandas do Direito da Saúde
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-300 border-0 shadow-card bg-white animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {service.highlight}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/5 transition-colors text-xs">
                    Saiba mais
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              <Star className="mr-2 h-3 w-3" />
              Depoimentos Reais
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              O que nossos <span className="text-primary">clientes</span> dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-luxury transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground italic text-lg leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-semibold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              Dúvidas Frequentes
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Tire suas <span className="text-primary">dúvidas</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border-0 shadow-card hover:shadow-luxury transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                    <CheckCircle className="mr-3 h-5 w-5" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Não deixe seus direitos de saúde 
              <br />serem <span className="text-accent">violados</span>
            </h2>
            
            <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Entre em contato agora e garanta o atendimento médico que você merece. 
              Nossos especialistas estão prontos para ajudar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-10 py-5 rounded-full font-semibold shadow-glow animate-glow group"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <Phone className="mr-3 h-6 w-6" />
                Falar no WhatsApp Agora
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex flex-col text-center text-white/80">
                <span className="text-sm">📞 (85) 98900-1212</span>
                <span className="text-xs">Atendimento imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Ramon Araújo Advogados</h3>
              <p className="text-background/80 mb-4">
                Especialistas em Direito da Saúde com atuação 100% digital em Fortaleza-CE e todo o Brasil.
              </p>
              <div className="flex items-center text-background/80 mb-2">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Fortaleza-CE - Atendimento digital em todo Brasil</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>(85) 98900-1212</span>
                </div>
                <div className="flex items-center">
                  <Scale className="mr-2 h-4 w-4" />
                  <span>OAB/CE</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <div className="space-y-2 text-background/80">
                <div>
                  <a href="https://www.ans.gov.br/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    ANS - Agência Nacional de Saúde
                  </a>
                </div>
                <div>
                  <a href="https://www.stj.jus.br/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    STJ - Superior Tribunal de Justiça
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/60 text-sm mb-4">
              <strong>Aviso Legal:</strong> Este site tem caráter meramente informativo. 
              Não há promessa de resultados específicos. O êxito do processo 
              depende de diversos fatores e será analisado caso a caso.
            </p>
            <p className="text-background/80 text-sm">
              © 2024 Ramon Araújo Advogados. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLandingPage;