import React from 'react'

const UpworkCard = (props) => {

    const {id, image, title, description} = props;

  return (
    <>
        <div key={id}>
            <div className="testimonial_box">
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
                        <div className="user_img"> 
                            <img src={`/whmcs-digital/${image}`} alt="User"/> 
                        </div>
                    </div>
                    <div className="media-body">
                        <h4>{title}</h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UpworkCard