import React from 'react'

function CommanCard({children ,classes="mt-4 rounded-3xl bg-[#FFFFFF]"}) {
  return (
    <div className={`p-4  ${classes}`}>{children}</div>
  )
}

export default CommanCard