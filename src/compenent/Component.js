import React from 'react'
import { useContext } from 'react'
import { shacontext } from '../App'

function Component() {
    const yoo = useContext(shacontext)
    const {state,dispatch}=yoo
  return (
    <div>
        <button onClick={()=>dispatch('change red')}> red</button>
        <button style={{margin:'5px'}} onClick={()=>dispatch('change blue')}> blue</button>
        <button onClick={()=>dispatch('change yellow')}>yellow</button>
    </div>
  )
}

export default Component