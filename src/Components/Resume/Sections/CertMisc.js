import React from 'react'
import CertMiscItems from '../Components/Misc/Misc.js'

export default function CertMiscSection(props) {

  return (
    <section className="certMiscSection">
      <header>
        <h2>{props.title}</h2>
      </header>
      <CertMiscItems cert={props.cert}/>
    </section>
  )
}