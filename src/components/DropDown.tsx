import IDropDownTree from "../types/IDropDownTree"
import { IoIosArrowForward } from "react-icons/io"
import { BsArrowLeftShort } from "react-icons/bs"
import { useRef, useState } from "react"
interface IProps {
    tree: IDropDownTree[]
}

export default function DropDown({ tree }:IProps) {
   const [selectedTree, setSelectedTree] = useState(tree)
   const dropDownRef = useRef<HTMLDivElement | null>(null)


   function setNewSelectedTree(newTree:IDropDownTree[]) {
       if(newTree === tree) {
        dropDownRef.current?.classList.add("back-slide")
        setTimeout(() => {
            dropDownRef.current?.classList.remove("back-slide")
        }, 200)

    } else {

        dropDownRef.current?.classList.add("slide-left")
        dropDownRef.current?.classList.add("new-slide-left")
        setTimeout(() => {
            dropDownRef.current?.classList.remove("slide-left")
        }, 200)
        setTimeout(() => {
            dropDownRef.current?.classList.remove("new-slide-left")
        }, 300)
        
        
    }
        setSelectedTree(newTree)
    }
  return (

    
        <div className="flex cursor-pointer flex-col gap-2 text-[23px] bg-neutral-700 rounded-md p-3 min-w-[400px] overflow-hidden">
            <div ref={dropDownRef}>
                {!(selectedTree === tree) && (
                    <div className="flex items-center font-semibold border-[1px] border-neutral-500 p-2 rounded-md mb-2" 
                    onClick={() => setNewSelectedTree(tree)}
                    >
                        <BsArrowLeftShort className="text-[30px]" />
                        Go Back
                    </div>
                )}
                {selectedTree.map(({ title, childs, icon }) => (
                    <div 
                    className="p-2 transition-all hover:bg-neutral-600 rounded-md"
                    onClick={() => {
                        if(!childs) return
                        setNewSelectedTree(childs)
                    }}>
                        <span className="flex items-center gap-1">{icon && icon}{title}{childs && <IoIosArrowForward />}</span>
                    </div>
                ))}
            </div>
        </div>
 
 
  )
  
}




