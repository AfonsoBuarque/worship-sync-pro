import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, Filter, Phone, Mail, Music, UserCheck, UserX, Edit } from "lucide-react";

const Membros = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const membros = [
    {
      id: 1,
      nome: "João Silva",
      funcao: "Líder de Louvor",
      instrumento: "Vocal, Violão",
      contato: "(11) 99999-1234",
      email: "joao@igreja.com",
      status: "ativo",
      avatar: "",
      dataIngresso: "2020-01-15",
      presencas: 95
    },
    {
      id: 2,
      nome: "Maria Santos",
      funcao: "Pianista",
      instrumento: "Piano, Teclado",
      contato: "(11) 99999-5678",
      email: "maria@igreja.com",
      status: "ativo",
      avatar: "",
      dataIngresso: "2019-03-20",
      presencas: 88
    },
    {
      id: 3,
      nome: "Pedro Costa",
      funcao: "Guitarrista",
      instrumento: "Guitarra",
      contato: "(11) 99999-9012",
      email: "pedro@igreja.com",
      status: "inativo",
      avatar: "",
      dataIngresso: "2021-06-10",
      presencas: 72
    },
    {
      id: 4,
      nome: "Ana Lima",
      funcao: "Vocalista",
      instrumento: "Vocal",
      contato: "(11) 99999-3456",
      email: "ana@igreja.com",
      status: "ativo",
      avatar: "",
      dataIngresso: "2022-02-28",
      presencas: 92
    },
    {
      id: 5,
      nome: "Carlos Oliveira",
      funcao: "Baterista",
      instrumento: "Bateria",
      contato: "(11) 99999-7890",
      email: "carlos@igreja.com",
      status: "ativo",
      avatar: "",
      dataIngresso: "2020-11-05",
      presencas: 85
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo': return 'bg-success text-success-foreground';
      case 'inativo': return 'bg-muted text-muted-foreground';
      case 'afastado': return 'bg-warning text-warning-foreground';
      default: return '';
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
            Gestão de Membros
          </h1>
          <p className="text-muted-foreground mt-1">
            Gerencie músicos, cantores e membros do grupo de louvor
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            <Plus className="w-4 h-4 mr-2" />
            Novo Membro
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Membros</p>
                <p className="text-2xl font-bold text-primary">24</p>
              </div>
              <UserCheck className="w-8 h-8 text-primary opacity-60" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Membros Ativos</p>
                <p className="text-2xl font-bold text-success">20</p>
              </div>
              <UserCheck className="w-8 h-8 text-success opacity-60" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Inativos</p>
                <p className="text-2xl font-bold text-warning">4</p>
              </div>
              <UserX className="w-8 h-8 text-warning opacity-60" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxa de Presença</p>
                <p className="text-2xl font-bold text-info">87%</p>
              </div>
              <Music className="w-8 h-8 text-info opacity-60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="shadow-soft">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Buscar membros por nome, função ou instrumento..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="todos">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="inativo">Inativo</SelectItem>
                <SelectItem value="afastado">Afastado</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="todas">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Função" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas as Funções</SelectItem>
                <SelectItem value="vocal">Vocal</SelectItem>
                <SelectItem value="instrumento">Instrumentista</SelectItem>
                <SelectItem value="lider">Liderança</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {membros.map((membro) => (
          <Card key={membro.id} className="shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={membro.avatar} />
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {getInitials(membro.nome)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{membro.nome}</CardTitle>
                    <CardDescription>{membro.funcao}</CardDescription>
                  </div>
                </div>
                <Badge className={getStatusColor(membro.status)}>
                  {membro.status}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Music className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Instrumento:</span>
                  <span className="font-medium">{membro.instrumento}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Contato:</span>
                  <span className="font-medium">{membro.contato}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{membro.email}</span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Taxa de Presença</span>
                  <span className={`font-bold ${membro.presencas >= 90 ? 'text-success' : membro.presencas >= 75 ? 'text-warning' : 'text-destructive'}`}>
                    {membro.presencas}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div 
                    className={`h-2 rounded-full ${membro.presencas >= 90 ? 'bg-success' : membro.presencas >= 75 ? 'bg-warning' : 'bg-destructive'}`}
                    style={{ width: `${membro.presencas}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Editar
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary">
                  Ver Perfil
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>Gerencie rapidamente seus membros</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
              <Plus className="w-5 h-5 text-primary" />
              <span className="text-sm">Adicionar Membro</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-sm">Enviar Email</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
              <Music className="w-5 h-5 text-primary" />
              <span className="text-sm">Definir Função</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
              <Filter className="w-5 h-5 text-primary" />
              <span className="text-sm">Relatório</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Membros;