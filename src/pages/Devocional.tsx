import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Heart, Share, MessageCircle, Plus, Calendar, User, Clock, Star } from "lucide-react";

const Devocional = () => {
  const [novaReflexao, setNovaReflexao] = useState("");

  const reflexoes = [
    {
      id: 1,
      titulo: "A Importância da Adoração em Espírito e Verdade",
      conteudo: "João 4:24 nos ensina que Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade. Como músicos e cantores, somos chamados a ser mais que entertainers - somos adoradores que guiam o povo de Deus à Sua presença...",
      autor: "João Silva",
      avatar: "",
      data: "2024-01-15",
      curtidas: 12,
      comentarios: 8,
      categoria: "Adoração"
    },
    {
      id: 2,
      titulo: "Servindo com Excelência no Reino",
      conteudo: "Colossenses 3:23 diz: 'E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens'. Isso se aplica diretamente ao nosso ministério musical. Cada ensaio, cada apresentação, cada nota tocada deve ser oferecida como sacrifício de louvor...",
      autor: "Maria Santos",
      avatar: "",
      data: "2024-01-12",
      curtidas: 18,
      comentarios: 15,
      categoria: "Ministério"
    },
    {
      id: 3,
      titulo: "Unidos em Um Só Propósito",
      conteudo: "Um grupo de louvor é como um corpo - cada membro tem sua função específica, mas todos trabalham juntos para um mesmo objetivo: glorificar a Deus. Quando há harmonia entre os membros, a unção flui e vidas são transformadas...",
      autor: "Pedro Costa",
      avatar: "",
      data: "2024-01-10",
      curtidas: 9,
      comentarios: 6,
      categoria: "Unidade"
    }
  ];

  const estudos = [
    {
      id: 1,
      titulo: "A Música na Bíblia - Estudo Completo",
      descricao: "Um estudo detalhado sobre como a música é apresentada nas Escrituras",
      capitulos: 8,
      duracao: "45 min",
      categoria: "Estudo Bíblico",
      progresso: 60
    },
    {
      id: 2,
      titulo: "Os Levitas e o Ministério Musical",
      descricao: "Aprendendo com os músicos do Antigo Testamento",
      capitulos: 5,
      duracao: "30 min",
      categoria: "História",
      progresso: 100
    },
    {
      id: 3,
      titulo: "Adoração Profética",
      descricao: "Como permitir que Deus fale através da música",
      capitulos: 6,
      duracao: "40 min",
      categoria: "Ministério",
      progresso: 20
    }
  ];

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'Adoração': return 'bg-primary text-primary-foreground';
      case 'Ministério': return 'bg-info text-info-foreground';
      case 'Unidade': return 'bg-success text-success-foreground';
      case 'Estudo Bíblico': return 'bg-warning text-warning-foreground';
      case 'História': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getInitials = (nome: string) => {
    return nome.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Área Devocional
          </h1>
          <p className="text-muted-foreground mt-1">
            Reflexões, estudos bíblicos e conteúdo espiritual para o grupo
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline">
            <BookOpen className="w-4 h-4 mr-2" />
            Todos os Estudos
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            <Plus className="w-4 h-4 mr-2" />
            Nova Reflexão
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Reflexões</p>
                <p className="text-2xl font-bold text-primary">24</p>
              </div>
              <BookOpen className="w-8 h-8 text-primary opacity-60" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Estudos Bíblicos</p>
                <p className="text-2xl font-bold text-info">8</p>
              </div>
              <Star className="w-8 h-8 text-info opacity-60" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Participação</p>
                <p className="text-2xl font-bold text-success">89%</p>
              </div>
              <User className="w-8 h-8 text-success opacity-60" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Esta Semana</p>
                <p className="text-2xl font-bold text-warning">3</p>
              </div>
              <Calendar className="w-8 h-8 text-warning opacity-60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Nova Reflexão */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-primary" />
            Compartilhar Reflexão
          </CardTitle>
          <CardDescription>Compartilhe uma reflexão ou pensamento com o grupo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea 
            placeholder="Escreva sua reflexão aqui... Compartilhe um versículo, um pensamento ou uma experiência que possa edificar o grupo."
            value={novaReflexao}
            onChange={(e) => setNovaReflexao(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Badge variant="outline">Reflexão</Badge>
              <Badge variant="outline">Adoração</Badge>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Share className="w-4 h-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Estudos Bíblicos */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Estudos Bíblicos
          </CardTitle>
          <CardDescription>Estudos específicos para músicos e ministros de louvor</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {estudos.map((estudo) => (
              <div 
                key={estudo.id}
                className="p-4 rounded-lg bg-gradient-card border hover:shadow-soft transition-smooth cursor-pointer"
              >
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">{estudo.titulo}</h4>
                    <p className="text-sm text-muted-foreground">{estudo.descricao}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{estudo.capitulos} capítulos</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {estudo.duracao}
                    </span>
                  </div>
                  
                  <Badge className={getCategoriaColor(estudo.categoria)} variant="secondary">
                    {estudo.categoria}
                  </Badge>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Progresso</span>
                      <span className="text-sm font-medium">{estudo.progresso}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-primary transition-smooth"
                        style={{ width: `${estudo.progresso}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary-foreground hover:bg-primary">
                    {estudo.progresso === 100 ? 'Revisar' : 'Continuar'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Feed de Reflexões */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            Reflexões Compartilhadas
          </CardTitle>
          <CardDescription>Reflexões e pensamentos dos membros do grupo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {reflexoes.map((reflexao) => (
              <div key={reflexao.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={reflexao.avatar} />
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold text-sm">
                      {getInitials(reflexao.autor)}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-lg">{reflexao.titulo}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{reflexao.autor}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(reflexao.data).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                      </div>
                      <Badge className={getCategoriaColor(reflexao.categoria)} variant="secondary">
                        {reflexao.categoria}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{reflexao.conteudo}</p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-destructive">
                          <Heart className="w-4 h-4 mr-1" />
                          {reflexao.curtidas}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {reflexao.comentarios}
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="text-muted-foreground">
                        <Share className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Devocional;