import React from 'react'

const TrustpilotCard = (props) => {
    const {id, image, title, description, author, reviewreadmore, usereadmore} = props;

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
                <h5>
                    <a href={reviewreadmore} rel="noreferrer" target="_blank">{title}</a>
                </h5>
                <p className="p_style">{description}</p>
                <div className="media align-items-center">
                    <div className="media-left">
                        <div className="user_img"> <img src={`/whmcs-digital/${image}`} alt="User"/> </div>
                    </div>
                    <div className="media-body">
                        <h4>
                            <a href={usereadmore} rel="noreferrer" target="_blank">{author}</a>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TrustpilotCard