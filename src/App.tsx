import Navbar from "./components/Navbar";
import NavbarItem from "./components/NavbarItem";
import { AiOutlineUser } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { MdManageAccounts, MdPassword } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillFilePersonFill, BsFillMoonFill } from "react-icons/bs";
import { TbApiApp } from "react-icons/tb";
import DropDown from "./components/DropDown";
import IDropDownTree from "./types/IDropDownTree";

const settingsTree: IDropDownTree[]= [{
  title: "Account Settings",
  id: 1,
  icon: <MdManageAccounts />,
  childs: [
    { title: "Email", id: 2 , icon: <HiOutlineMail />},
    { title: "Password", id: 3 , icon: <MdPassword />},
    { title: "Personal Info", id: 4 , icon: <BsFillFilePersonFill />},
  ]
}, {
  title: "Application Settings",
  id: 5,
  icon: <TbApiApp />,
  childs: [
    { title: "Theme", id: 7, icon: <BsFillMoonFill />, childs: [{ title: "Use Devide Theme", id:8 }] },
  ]
}];

export default function App() {
  return (
    <Navbar>
      <NavbarItem icon={<AiOutlineUser />} />
      <NavbarItem icon={<BiBell />} />
      <NavbarItem
        icon={<FiSettings />}
        dropDown={<DropDown tree={settingsTree} />}
      />
    </Navbar>
  );
}
