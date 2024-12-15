import {MdKeyboardDoubleArrowRight} from "react-icons/md";


export default function SectionHeader ({children}: {children: string}) {

  return <h2 className={`uppercase font-extrabold tracking-tighter text-5xl cursor-default`}><MdKeyboardDoubleArrowRight className={`inline text-7xl text-blue-500 duration-200`} /> {children}</h2>
}