import React from 'react'

function Sideicons({src,alt, style=""}) {
  return (
    <div className={`${style} rounded-full flex justify-center items-center`}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Sideicons
