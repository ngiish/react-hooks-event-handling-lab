// Code EyesOnMe Component Here
import React from 'react'

function EyesOnMe() {

    function eyesOnTheBallFocus(event){
        console.log('Good!')
    }

    function eyesOnTheBallBlur(event){
        console.log('Hey! Eyes on me!')
    }
  return (
    <div className='buttons'>
        <button onFocus={eyesOnTheBallFocus} onBlur={eyesOnTheBallBlur}>Eyes on me</button>
    </div>
  )
}

export default EyesOnMe