import React from 'react';
import './Misc.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function CertMiscItems(props) {

  const cert = props.cert
  const displayCert = cert.map(item => {

    return (
      <li key={item.id} className="liMisc">
        <p className="miscP">
          <FontAwesomeIcon icon={item.icon}/>
          {' '}
          {item.type} {item.licNum}
        </p>
      </li>
    )
  })

  return (
    <ul className="ulMisc">
      {displayCert}
    </ul>
  )
}