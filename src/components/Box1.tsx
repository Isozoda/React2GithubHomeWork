import React, { useContext, useState } from 'react'
import { counterContext } from '../main';

const Box1 = () => {
    let count = useContext(counterContext)
  return (
    <div>
      {count}
    </div>
  )
}

export default Box1
