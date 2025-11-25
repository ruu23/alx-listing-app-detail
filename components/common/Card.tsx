import { CardProps } from '@/interfaces'
import React from 'react'
import Image from "next/image";

const Card: React.FC<CardProps> = ({title, description, imgUrl}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Image src={imgUrl} alt={title} />
    </div>
  )
}

export default Card
