import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";


export default function Header() {

  return (
    <header className={`px-20 py-2 bg-black/10 fixed w-full top-0`}>
      <nav className={`flex justify-between items-center`}>
        <Link to={`/`} className={`tracking-tighter font-bold text-3xl`}>SWORD<span className={`text-blue-500`}>M</span>ASTER</Link>
        <label className={`flex items-center gap-2`}>
          <FaSearch />
          <input type="text" className={`bg-transparent border-b-2 border-black p-1`}/>
        </label>
        <ul className={`flex gap-5`}>
          <li>
            <Link className={`font-bold hover:text-blue-500 duration-200 underline`} to={`/`}>Store</Link>
          </li>
          <li>
            <Link className={`font-bold hover:text-blue-500 duration-200 underline`} to={`/about`}>About Me</Link>
          </li>
          <li>
            <Link className={`font-bold hover:text-blue-500 duration-200 underline`} to={`/contuct`}>Contuct</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}