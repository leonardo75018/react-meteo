import React from 'react'

export default function Time({location}) {
  return (
    <div>
        <p><strong>Time : {location? location.localtime : ""}</strong> </p>
    </div>
  )
}
