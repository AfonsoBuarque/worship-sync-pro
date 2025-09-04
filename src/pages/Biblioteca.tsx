import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search, Play, Heart, Share, Download, ExternalLink, Music, Filter, Star } from "lucide-react";

const Biblioteca = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const musicas = [
    {
      id: 1,
      titulo: "Como Zaqueu",
      artista: "Bruna Karla",
      genero: "Adoração",
      tom: "G",
      bpm: 78,
      link: "https://youtube.com/watch?v=example1",
      letra: "Como Zaqueu eu quero subir...",
      categoria: "Louvor",
      adicionadoEm: "2024-01-10",
      favorita: true,
      vezes_tocada: 15
    },
    {
      id: 2,
      titulo: "Oceanos",
      artista: "Hillsong United",
      genero: "Adoração",
      tom: "D",
      bpm: 65,
      link: "https://youtube.com/watch?v=example2",
      letra: "Tu me chamas sobre as águas...",
      categoria: "Adoração",
      adicionadoEm: "2024-01-08",
      favorita: false,
      vezes_tocada: 23
    },
    {
      id: 3,
      titulo: "Reckless Love",
      artista: "Cory Asbury",
      genero: "Contemporâneo",
      tom: "C",
      bpm: 82,
      link: "https://youtube.com/watch?v=example3",
      letra: "Before I spoke a word...",
      categoria: "Louvor",
      adicionadoEm: "2024-01-05",
      favorita: true,
      vezes_tocada: 12
    },
    {
      id: 4,
      titulo: "Quão Grande é o Meu Deus",
      artista: "Chris Tomlin",
      genero: "Adoração",
      tom: "A",
      bpm: 74,
      link: "https://youtube.com/watch?v=example4",
      letra: "Quão grande é o meu Deus...",
      categoria: "Adoração",
      adicionadoEm: "2024-01-03",
      favorita: false,
      vezes_tocada: 31
    },
    {
      id: 5,
      titulo: "Bondade de Deus",
      artista: "Preto no Branco",
      genero: "Gospel",
      tom: "F",
      bpm: 88,
      link: "https://youtube.com/watch?v=example5",
      letra: "Eu cantarei da bondade de Deus...",
      categoria: "Louvor",
      adicionadoEm: "2023-12-28",
      favorita: true,
      vezes_tocada: 28
    }
  ];

  const repertorios = [
    {
      id: 1,
      nome: "Culto Dominical - Janeiro",
      descricao: "Repertório para os cultos de domingo",
      musicas: 8,
      dataCriacao: "2024-01-01",
      ativo: true
    },
    {
      id: 2,
      nome: "Especial Natal 2023",
      descricao: "Músicas natalinas para dezembro",
      musicas: 12,
      dataCriacao: "2023-12-01",
      ativo: false
    },
    {
      id: 3,
      nome: "Juventude - Fevereiro",
      descricao: "Repertório para cultos de jovens",
      musicas: 6,
      dataCriacao: "2024-02-01",
      ativo: true
    }
  ];

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case 'Louvor': return 'bg-primary text-primary-foreground';
      case 'Adoração': return 'bg-info text-info-foreground';
      case 'Especial': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Biblioteca Musical
          </h1>
          <p className="text-muted-foreground mt-1">
            Gerencie músicas, letras e repertórios do grupo de louvor
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            <Plus className="w-4 h-4 mr-2" />
            Nova Música
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Músicas</p>
                <p className="text-2xl font-bold text-primary">156</p>
              </div>
              <Music className="w-8 h-8 text-primary opacity-60" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Repertórios</p>
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
                <p className="text-sm text-muted-foreground">Favoritas</p>
                <p className="text-2xl font-bold text-destructive">23</p>
              </div>
              <Heart className="w-8 h-8 text-destructive opacity-60" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Mais Tocada</p>
                <p className="text-xl font-bold text-success">31x</p>
              </div>
              <Play className="w-8 h-8 text-success opacity-60" />
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
                placeholder="Buscar por título, artista ou tom..."
                className="pl-10"
              />
            </div>
            <Select defaultValue="todas">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas</SelectItem>
                <SelectItem value="louvor">Louvor</SelectItem>
                <SelectItem value="adoracao">Adoração</SelectItem>
                <SelectItem value="especial">Especial</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="todos">
              <SelectTrigger className="w-full sm:w-32">
                <SelectValue placeholder="Tom" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="C">C</SelectItem>
                <SelectItem value="D">D</SelectItem>
                <SelectItem value="E">E</SelectItem>
                <SelectItem value="F">F</SelectItem>
                <SelectItem value="G">G</SelectItem>
                <SelectItem value="A">A</SelectItem>
                <SelectItem value="B">B</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Repertórios */}
      <Card className="shadow-soft">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Repertórios Ativos
              </CardTitle>
              <CardDescription>Organize suas músicas por evento ou período</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Novo Repertório
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {repertorios.filter(r => r.ativo).map((repertorio) => (
              <div 
                key={repertorio.id}
                className="p-4 rounded-lg bg-gradient-card border hover:shadow-soft transition-smooth cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold">{repertorio.nome}</h4>
                  <Badge variant="outline" className="text-xs">{repertorio.musicas} músicas</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{repertorio.descricao}</p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Play className="w-3 h-3 mr-1" />
                    Abrir
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lista de Músicas */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Music className="w-5 h-5 text-primary" />
            Biblioteca de Músicas
          </CardTitle>
          <CardDescription>Todas as músicas disponíveis</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {musicas.map((musica) => (
              <div 
                key={musica.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-smooth"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold truncate">{musica.titulo}</h4>
                      {musica.favorita && <Heart className="w-4 h-4 text-destructive fill-current" />}
                    </div>
                    <p className="text-sm text-muted-foreground">{musica.artista}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <Badge className={getCategoriaColor(musica.categoria)} variant="secondary">
                        {musica.categoria}
                      </Badge>
                      <span className="text-xs text-muted-foreground">Tom: {musica.tom}</span>
                      <span className="text-xs text-muted-foreground">{musica.bpm} BPM</span>
                      <span className="text-xs text-muted-foreground">{musica.vezes_tocada}x tocada</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Button variant="ghost" size="sm" className="text-primary">
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className={`w-4 h-4 ${musica.favorita ? 'text-destructive fill-current' : ''}`} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>Gerencie rapidamente sua biblioteca</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
              <Plus className="w-5 h-5 text-primary" />
              <span className="text-sm">Adicionar Música</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm">Criar Repertório</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
              <Download className="w-5 h-5 text-primary" />
              <span className="text-sm">Exportar Lista</span>
            </Button>
            
            <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5 hover:border-primary/30 transition-smooth">
              <Share className="w-5 h-5 text-primary" />
              <span className="text-sm">Compartilhar</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Biblioteca;