import SectionHeader from "../../components/elements/section-header.tsx";
import SectionShell from "../../components/shells/section-shell.tsx";


export default function LandingPage () {

  return (
    <section>
      <SectionHeader>
        Swords
      </SectionHeader>

      <SectionShell>
        <LandingPageSegment name={"Finiter"} picture={"/swords/sword1.jpg"} />
      </SectionShell>
    </section>
  )
}


interface LandingPageSegmentInterface {
  picture: string,
  name: string
}
export function LandingPageSegment (props: LandingPageSegmentInterface) {

  return (
    <div className={`h-[500px] w-[25%]`}>
      <div style={{backgroundImage: `url("${props.picture}")`}} className={`h-[500px] bg-cover`}>
        <div className={`bg-black/50 relative w-full h-full text-gray-200`}>
          <h3 className={`absolute right-10 top-10 text-5xl`}>
            {props.name}
          </h3>
        </div>
      </div>
      <div>Element 2</div>
    </div>
  )
}