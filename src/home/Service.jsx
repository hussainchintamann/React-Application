import React from 'react'
import { service } from '../components/data/data'
import CommonHeading from '../components/CommonHeading'
import './style.css'
const Service = () => {
  return (
    <div>
       <div className="container-xxl py-5">
        <div className="container">
        <CommonHeading
              heading="Our Services"
              title="Services"
              subtitle="Explore Our"
            />
          <div className="row g-4">
            {
              service.map((el)=>(
               <div className="col-lg-4 col-md-6 ">
                 <a className="service-item rounded " href="">
                 <div className="service-icon bg-transparent border rounded p-1">
                  <div className="h-100 w-100 border rounded align-items-center justify-content-center d-flex">{el.icon}</div>
                 </div>
                 <h5 className="mb-3">{el.name}</h5>
                 <p className="text-body mb-0">{el.description}</p>
                 </a>
                
               </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
