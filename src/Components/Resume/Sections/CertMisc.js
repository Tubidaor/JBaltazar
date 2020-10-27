import React from 'react'
import CertMiscItems from '../Components/Misc/Misc.js'

export default function CertMiscSection(props) {

  return (
    <section className="certMiscSection">
      <h3>{props.title}</h3>
      <CertMiscItems cert={props.cert}/>
    </section>
  )
}