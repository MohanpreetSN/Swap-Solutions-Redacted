import { menusType } from "@/interFace/interFace";

const menu_data: menusType[] = [
  {
    id: 1,
    hasDropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    hasDropdown: false,
    title: "Services",
    link: "/service-details",
    // submenus: [
    //   { title: "Our Services", link: "/service" },
    //   { title: "Service Details", link: "/service-details" },
    // ],
  },
  {
    id: 7,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;
