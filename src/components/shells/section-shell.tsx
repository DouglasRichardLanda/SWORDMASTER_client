import React from "react";


interface SectionShellInterface {
  children: React.ReactNode
}

export default function SectionShell (props: SectionShellInterface) {

  return (
    <section className={`my-20 flex`}>
      {props.children}
    </section>
  )
}