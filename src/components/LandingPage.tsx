import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Scale, Heart, Shield, Users, Clock, FileText } from "lucide-react";

const LandingPage = () => {
  const whatsappLink = "https://wa.me/5585989001212";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              **Seu Direito à Saúde Negado?** <br />
              <span className="text-accent-foreground">Nós Lutamos por Você</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              **Especialistas em Direito da Saúde.** Atuação 100% digital em todo o Brasil.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-full font-semibold"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <Phone className="mr-2 h-5 w-5" />
              **Fale agora no WhatsApp**
            </Button>
          </div>
        </div>
      </section>

      {/* Bloco de Autoridade */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              **Há 8 anos defendendo pacientes em Fortaleza-CE**
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              **Diferencial único:** atuação 100% digital com liminares ágeis para garantir seus direitos de forma rápida e eficiente.
            </p>
            <div className="flex justify-center items-center gap-4 text-primary">
              <Shield className="h-8 w-8" />
              <span className="text-lg font-semibold">Escritório 100% Digital</span>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            **Nossos Serviços Especializados**
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: "Medicamento de Alto Custo", desc: "Garantia de fornecimento pelo plano de saúde ou SUS" },
              { icon: FileText, title: "Erro Médico", desc: "Defesa de direitos em casos de negligência médica" },
              { icon: Users, title: "Home Care", desc: "Autorização para tratamento domiciliar" },
              { icon: Scale, title: "Reajuste Abusivo", desc: "Contestação de aumentos irregulares" },
              { icon: Shield, title: "Ações contra o SUS", desc: "Direitos de saúde pública" }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            **O que nossos clientes dizem**
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              "Consegui meu medicamento em 15 dias. Atendimento excepcional e muito profissional.",
              "Resolveram meu caso de home care rapidamente. Recomendo para todos.",
              "Excelente trabalho na contestação do reajuste abusivo. Muito grata!"
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic">"{testimonial}"</p>
                  <div className="mt-4 font-semibold">Cliente Satisfeito</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            **Perguntas Frequentes**
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Quando procurar um advogado para plano de saúde?",
                a: "Sempre que houver negativa de cobertura, demora excessiva ou reajuste abusivo."
              },
              {
                q: "Como funciona o atendimento 100% digital?",
                a: "Todo processo é realizado online, com reuniões por videochamada e documentos digitais."
              },
              {
                q: "Quanto tempo leva para conseguir uma liminar?",
                a: "Casos urgentes podem ter liminares em 24 a 48 horas, dependendo da complexidade."
              },
              {
                q: "Vocês atendem em todo o Brasil?",
                a: "Sim, nossa atuação digital permite atendimento em território nacional."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2 text-primary">**{faq.q}**</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada Final + CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            **Não deixe seus direitos de saúde serem violados**
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato agora e garanta o atendimento que você merece.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-4 rounded-full font-semibold"
            onClick={() => window.open(whatsappLink, '_blank')}
          >
            <Phone className="mr-2 h-5 w-5" />
            **Falar no WhatsApp**
          </Button>
        </div>
      </section>

      {/* Rodapé Ético */}
      <footer className="bg-muted py-8 text-sm">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="mb-4">
            <p className="font-semibold">**Ramon Araújo Advogados**</p>
            <p>Escritório digital (atendimento remoto em todo o Brasil)</p>
            <p>Tel./WhatsApp: (85) 98900-1212</p>
            <p>Inscrito na OAB/CE</p>
          </div>
          <div className="border-t pt-4 text-xs">
            <p>
              **Aviso Legal:** Este site tem caráter meramente informativo. 
              Não há promessa de resultados específicos. O êxito do processo 
              depende de diversos fatores e será analisado caso a caso.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;