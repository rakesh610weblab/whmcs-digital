import React from 'react'

const TestimonialCard = (props) => {
    let {id, title, image, description, designation} = props
  return (
    <>
          <div className="testimonial_box" key={id}>
                <div className="review"> 
                    <span className="icon icon-star"></span>  
                    <span className="icon icon-star"></span> 
                    <span className="icon icon-star"></span>  
                    <span className="icon icon-star"></span>    
                    <span className="icon icon-star"></span>
                </div>
                <p className="p_style">{description}</p>
                <div className="media align-items-center">
                    <div className="media-left">
                        <div className="user_img"> <img src={image} alt="User"/> </div>
                    </div>
                    <div className="media-body">
                        <h4>{title}</h4>
                        <p className="p_style">{designation}</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default TestimonialCard