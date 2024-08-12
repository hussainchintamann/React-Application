import React from 'react'


const CheckOut = () => {
  return (
    <div>
       
    <div className="mt-5">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius:'15px'}}>
                <div className="card-body p-5">
                  <h2>Enter your details</h2>
                  <form >
                    <div className="form-outline ">
                    <label className="form-lable mb-2" htmlFor="form3ExampleLog">Your Name</label>
                      <input 
                      name="name"
                      
                      type="text" 
                      id="form3ExampleLog"
                      className="form-control" />
                      
                    </div>
                    <div>
                    <label className="form-lable mb-2" htmlFor="form3ExampleLog"> Your Email</label>
                      <input 
                      name="email"
                     
                      type="email"
                      className="form-control"
                      id="form3ExampleLog" />
                      
                      
                    </div>
                    <label className="form-lable mb-2" htmlFor="form3ExampleLog">Contact No</label>
                    <input 
                   
                   
                    type="number"
                    className="form-control"
                    id="form3ExampleLog" />
                     <label className="form-lable mb-2" htmlFor="form3ExampleLog">Address</label>
                    <input 
                    type="text"
                    className="form-control"
                    id="form3ExampleLog" />


                    <label className="form-lable mb-2" htmlFor="form3ExampleLog">Card Detailed</label>
                    <input 
                    name="password"
                   
                    type="password"
                    className="form-control"
                    id="form3ExampleLog" />
                    
                    <div>
                      <button type="submit" className="btn btn-light mt-3 mb-2 border border-warning">
                     Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default CheckOut
