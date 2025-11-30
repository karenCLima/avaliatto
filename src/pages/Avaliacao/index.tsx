
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import type { ReactNode } from "react";
import Base from '../Menu';

export interface MenuItem {
  text: string;
  icon: ReactNode;
}

const itens: MenuItem[] = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Criar Nova Avaliação", icon: <NoteAddIcon /> },
  { text: "Funcionários", icon: <PeopleIcon /> },
  { text: "Favoritos", icon: <StarIcon /> },
  { text: "Configurações", icon: <SettingsIcon /> },
];

export default function Avaliacao() {
  

  return (
    <Base 
    menuItems={itens}
    >
      <h1>Olá</h1>
    </Base>
    
  );
}

