import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Eye, Edit, Users, Clock, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Escalas = () => {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');

  const escalas = [
    {
      id: 1,
      title: "Culto Dominical - Manhã",
      date: "2024-01-15",
      time: "09:00",
      location: "Santuário Principal",
      status: "confirmado",
      membros: [
        { nome: "João Silva", funcao: "Vocal", confirmado: true },
        { nome: "Maria Santos", funcao: "Piano", confirmado: true },
        { nome: "Pedro Costa", funcao: "Guitarra", confirmado: false },
        { nome: "Ana Lima", funcao: "Vocal", confirmado: true },
      ]
    },
    {
      id: 2,
      title: "Culto da Juventude",
      date: "2024-01-20",
      time: "19:30",
      location: "Auditório Jovens",
      status: "pendente",
      membros: [
        { nome: "Carlos Oliveira", funcao: "Bateria", confirmado: true },
        { nome: "Julia Ferreira", funcao: "Vocal", confirmado: false },
        { nome: "Lucas Rodrigues", funcao: "Baixo", confirmado: true },
      ]
    },
    {
      id: 3,
      title: "Ensaio Geral",
      date: "2024-01-18",
      time: "19:00",
      location: "Sala de Ensaio",
      status: "confirmado",
      membros: [
        { nome: "João Silva", funcao: "Vocal", confirmado: true },
        { nome: "Maria Santos", funcao: "Piano", confirmado: true },
        { nome: "Pedro Costa", funcao: "Guitarra", confirmado: true },
        { nome: "Ana Lima", funcao: "Vocal", confirmado: true },
        { nome: "Carlos Oliveira", funcao: "Bateria", confirmado: true },
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmado': return 'bg-success text-success-foreground';
      case 'pendente': return 'bg-warning text-warning-foreground';
      case 'cancelado': return 'bg-destructive text-destructive-foreground';
      default: return '';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Sistema de Escalas
          </h1>
          <p className="text-muted-foreground mt-1">
            Gerencie as escalas de músicos e cantores do grupo
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setViewMode(viewMode === 'list' ? 'calendar' : 'list')}>
            <Calendar className="w-4 h-4 mr-2" />
            {viewMode === 'list' ? 'Calendário' : 'Lista'}
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            <Plus className="w-4 h-4 mr-2" />
            Nova Escala
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="shadow-soft">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              placeholder="Buscar escalas..."
              className="flex-1"
            />
            <Select defaultValue="todos">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Status</SelectItem>
                <SelectItem value="confirmado">Confirmado</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
                <SelectItem value="cancelado">Cancelado</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="mes">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semana">Esta Semana</SelectItem>
                <SelectItem value="mes">Este Mês</SelectItem>
                <SelectItem value="trimestre">Próximos 3 Meses</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Escalas List */}
      <div className="grid gap-6">
        {escalas.map((escala) => (
          <Card key={escala.id} className="shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-xl">{escala.title}</CardTitle>
                    <Badge className={getStatusColor(escala.status)}>
                      {escala.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(escala.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {escala.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {escala.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    Ver
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-1" />
                    Editar
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-medium">Membros Escalados ({escala.membros.length})</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {escala.membros.map((membro, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth"
                    >
                      <div>
                        <p className="font-medium text-sm">{membro.nome}</p>
                        <p className="text-xs text-muted-foreground">{membro.funcao}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${membro.confirmado ? 'bg-success' : 'bg-warning'}`}></div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      Confirmados: <span className="text-success font-medium">
                        {escala.membros.filter(m => m.confirmado).length}
                      </span>
                    </span>
                    <span className="text-muted-foreground">
                      Pendentes: <span className="text-warning font-medium">
                        {escala.membros.filter(m => !m.confirmado).length}
                      </span>
                    </span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                    Enviar Lembretes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">8</div>
              <p className="text-sm text-muted-foreground">Escalas este mês</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">92%</div>
              <p className="text-sm text-muted-foreground">Taxa de confirmação</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-info">24</div>
              <p className="text-sm text-muted-foreground">Membros ativos</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Escalas;