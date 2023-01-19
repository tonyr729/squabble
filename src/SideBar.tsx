import { ReactElement } from 'react';
import { FaDev, FaReact } from 'react-icons/fa';
import {
  SiEslint,
  SiPrettier,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<SiVite />} text="Vite" />
      <SideBarIcon icon={<FaReact />} text="React" />
      <SideBarIcon icon={<SiTypescript />} text="Typescript" />
      <SideBarIcon icon={<SiTailwindcss />} text="Tailwind" />
      <SideBarIcon icon={<SiEslint />} text="ESLint" />
      <SideBarIcon icon={<SiPrettier />} text="Prettier" />
    </div>
  );
};

const SideBarIcon = ({ icon, text }: { icon: ReactElement; text: string }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBar;
