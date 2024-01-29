import React from 'react'

export default function WithAuth(wrapped) {
  return (
    <div>
      <wrapped/>
    </div>
  )
}