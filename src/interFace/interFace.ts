// context api data type

import { StaticImageData } from "next/image";
import { URL } from "url";

export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  searchOpen?: boolean;
  toggleSearchMenu?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
}
// id type
export interface idType {
  id?: number;
}

// project type
export interface projectType {
  id?: number;
  img?: StaticImageData;
  title?: string;
  tag?: string;
  graphic?: boolean;
  design?: boolean;
  development?: boolean;
  networking?: boolean;
  link?: string;
}


// hero type
export interface heroType {
  id?: number;
  slideBg: StaticImageData;
  title?: React.JSX.Element;
  subTitle?: string;
  btn?: string;
  shapeA?: StaticImageData;
  shapeB?: StaticImageData;
  classx: string;
  classy: string;
}

// menus type
export interface menusType {
  id?: number;
  hasDropdown?: boolean;
  title?: string | undefined;
  link?: any;
  submenus?: any;
}
