import React from 'react'

export const Grid = ({handleClic,arr}) => {
  return (
    <div className="grid max-width text-center display-0">
      {arr.map((value, i) => (
        <div key={i} className={`item${i} border ${value}`} onClick={() => handleClic(i)} >
          {value}
        </div>
      ))}
    </div>
  )
}
