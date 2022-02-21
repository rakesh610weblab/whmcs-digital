import React from 'react'

const FeatureBox = (props) => {
  return (
    <>
        <div className="col-md-6 col-lg-4">
        <div class="services_box add_border"> 
            <span class={`icon ${props.featureicon}`}></span>
            <h3>{props.featuretitle}</h3>
            <p class="p_style">{props.featuredescription}</p>
        </div>
        </div>
    </>
  )
}

export default FeatureBox