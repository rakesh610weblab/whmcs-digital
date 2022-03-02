import React from 'react'
import { Link } from "react-router-dom";

const SquareCard = (props) => {
    let { id, image, title, description, readmorelink } = props;

  return (
    <>
        <div class="col-md-6 col-lg-4" key={id}>
            <Link to={readmorelink}>
                <div class="services_box"> <span class={`icon ${image}`}></span>
                    <h3>{title}</h3>
                    <p class="p_style">{description}</p>
                    <h6 class="read_more">Read More <span class="icon icon-long-arrow"></span></h6>
                </div>
            </Link>
        </div>
    </>
  )
}

export default SquareCard