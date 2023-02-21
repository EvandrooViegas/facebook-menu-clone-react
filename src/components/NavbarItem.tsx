import { useState } from "react"

interface IProps {
    icon: JSX.Element
    dropDown?: JSX.Element
}
export default function NavbarItem({ icon, dropDown }:IProps) {
  const [isShowDropDown, setIsShowDropDown] = useState(false)
  function toggleIsShowDropDown() {
    setIsShowDropDown(!isShowDropDown)
  }
  return <div className="relative" onClick={(e) => e.stopPropagation()} >
    <button onClick={toggleIsShowDropDown} className=" bg-neutral-600 p-3 transition-all cursor-pointer rounded-full hover:brightness-150">
      {icon}
    </button>
    {isShowDropDown && dropDown &&
      <div className="absolute top-16 left-0 ">
        {dropDown}
      </div>
    }
  </div>
}
