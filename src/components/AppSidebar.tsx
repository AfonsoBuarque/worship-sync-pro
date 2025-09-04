import { 
  Calendar, 
  Users, 
  Music, 
  BookOpen, 
  LayoutDashboard, 
  Settings,
  Bell,
  Play,
  Crown
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import louvorLogo from "@/assets/louvor-logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Escalas", url: "/escalas", icon: Calendar },
  { title: "Membros", url: "/membros", icon: Users },
  { title: "Biblioteca Musical", url: "/biblioteca", icon: Music },
  { title: "Área Devocional", url: "/devocional", icon: BookOpen },
];

const configItems = [
  { title: "Notificações", url: "/notificacoes", icon: Bell },
  { title: "Configurações", url: "/configuracoes", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-smooth ${
      isActive 
        ? "bg-primary text-primary-foreground shadow-soft" 
        : "hover:bg-muted/60 text-muted-foreground hover:text-foreground"
    }`;

  return (
    <Sidebar className={`${open ? "w-64" : "w-16"} border-r transition-smooth`}>
      <SidebarContent className="bg-gradient-subtle">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <img 
              src={louvorLogo} 
              alt="LouvorApp Logo" 
              className="w-8 h-8 rounded-lg object-cover"
            />
            {open && (
              <div>
                <h2 className="font-bold text-lg">LouvorApp</h2>
                <p className="text-xs text-muted-foreground">Igreja Batista Central</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className={!open ? "sr-only" : ""}>
            Navegação Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {open && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Pro Section */}
        {open && (
          <div className="mx-3 mb-4">
            <div className="bg-gradient-primary p-4 rounded-lg text-white">
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-4 h-4" />
                <span className="font-semibold">Plano PRO</span>
              </div>
              <p className="text-xs opacity-90 mb-3">
                Acesse videoaulas exclusivas e recursos avançados
              </p>
              <button className="w-full bg-white/20 hover:bg-white/30 px-3 py-2 rounded-md text-sm font-medium transition-smooth">
                Fazer Upgrade
              </button>
            </div>
          </div>
        )}

        {/* Settings */}
        <SidebarGroup className="px-3 pb-4 mt-auto">
          <SidebarGroupLabel className={!open ? "sr-only" : ""}>
            Configurações
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {configItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {open && <span className="font-medium">{item.title}</span>}
                      {item.title === "Notificações" && open && (
                        <Badge variant="destructive" className="ml-auto text-xs">3</Badge>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}