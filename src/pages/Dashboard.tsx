import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  Music, 
  TrendingUp, 
  Clock,
  Plus,
  ArrowRight,
  PlayCircle,
  BookOpen,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const nextEvents = [
    { id: 1, title: "Culto Dominical", date: "Domingo, 15:00", type: "Culto", status: "confirmado" },
    { id: 2, title: "Ensaio Geral", date: "Quinta, 19:30", type: "Ensaio", status: "pendente" },
    { id: 3, title: "Culto de Jovens", date: "Sábado, 18:00", type: "Culto", status: "confirmado" },
  ];

  const recentActivity = [
    { id: 1, action: "João adicionou nova música", time: "2h atrás", type: "music" },
    { id: 2, action: "Escala de domingo foi atualizada", time: "4h atrás", type: "schedule" },
    { id: 3, action: "Maria confirmou presença", time: "6h atrás", type: "confirmation" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Bem-vindo ao sistema de gerenciamento do grupo de louvor
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            <Plus className="w-4 h-4 mr-2" />
            Nova Escala
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Membros Ativos</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success font-medium">+2</span> este mês
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Escalas do Mês</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-warning font-medium">3</span> pendentes
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Músicas</CardTitle>
            <Music className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success font-medium">+8</span> novas
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Presença</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">92%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success font-medium">+5%</span> vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Próximos Eventos */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Próximos Eventos
              </CardTitle>
              <CardDescription>Escalas e ensaios programados</CardDescription>
            </div>
            <Link to="/escalas">
              <Button variant="ghost" size="sm">
                Ver todos <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {nextEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    {event.type === "Culto" ? (
                      <PlayCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Clock className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                <Badge 
                  variant={event.status === "confirmado" ? "default" : "secondary"}
                  className={event.status === "confirmado" ? "bg-success text-success-foreground" : ""}
                >
                  {event.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Atividade Recente */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Atividade Recente
            </CardTitle>
            <CardDescription>Últimas atualizações do sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-smooth">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>Acesse as funcionalidades mais utilizadas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/escalas">
              <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
                <Calendar className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Nova Escala</span>
              </Button>
            </Link>
            
            <Link to="/membros">
              <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Adicionar Membro</span>
              </Button>
            </Link>
            
            <Link to="/biblioteca">
              <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
                <Music className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Nova Música</span>
              </Button>
            </Link>
            
            <Link to="/devocional">
              <Button variant="outline" className="h-24 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium">Devocional</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;