import React from 'react'
import { useParams } from 'react-router-dom'

export default function Asteroid() {
    const { id } = useParams();

  return (
    <div>Asteroid {id}</div>
  )
}
