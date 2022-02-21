import React from 'react'

const WhmcsdigitalBox = (props) => {
  return (
    <>
        <div class="col-md-6 col-lg-3">
            <div class={`bussiness_box ${props.digitalclass}`}> 
                <span class={`icon icon-${props.digitalicon}`}></span>
                <h3>{props.digitaltitle}</h3>
                <p class="p_style">{props.digitaldescription}</p>
            </div>
        </div>
    </>
  )
}

export default WhmcsdigitalBox