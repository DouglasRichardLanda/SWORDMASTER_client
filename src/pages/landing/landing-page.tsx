import SectionHeader from "../../components/elements/section-header.tsx";
import SectionShell from "../../components/shells/section-shell.tsx";
import {useState} from "react";


export default function LandingPage() {

  return (
    <section>
      <SectionHeader>
        Swords
      </SectionHeader>

      <SectionShell>
        <LandingPageSegment name={"Finiter"} picture={"/swords/sword1.jpg"}/>
      </SectionShell>
    </section>
  )
}


interface LandingPageSegmentInterface {
  picture: string,
  name: string
}
export function LandingPageSegment(props: LandingPageSegmentInterface) {

  const [open, setOpen] = useState<boolean>(false)

  return (
    <div
      className={"card-container w-[25%] h-[500px] cursor-pointer"}
      onClick={() => setOpen((prev) => !prev)}>
      <div style={{backgroundImage: `url("${props.picture}")`}} className={`card ${open ? 'is-flipped' : ''} w-full h-full relative bg-cover`}>
        <div className={"card-front text-gray-200"}>
          <div className={`w-full h-full bg-black/40`}>
            <h3 className={`absolute top-10 right-10 text-5xl`}>{props.name}</h3>
          </div>
        </div>

        <div className={"card-back text-gray-800 p-5"}>
          <ul>
            <li>Name:</li>
            <li>Metal:</li>
            <li>Origin:</li>
            <li>Master:</li>
            <li>Prise:</li>
            <li>Description:</li>
          </ul>
        </div>
      </div>
    </div>
  )
}