import React, { useEffect, useState } from 'react'
import Image from 'next/image'

type Props = {
  id: number
}

const PokeCard = (props: Props) => {
  return (
    <div className="card p-4 m-4 w-56">
      <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id}.svg`} alt='image' width="200" height="200"/>
    </div>
  )
}

export default PokeCard