import React from 'react'


function Pricing() {
  return (
    <>
      <div>
        <h2 className='text-center mb-3 mt-5'>Pricing</h2>
        <p className='text-center mb-5'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
     
      <div className="card-body">
        <h5 className="card-title">Free Plan</h5>
        <h5 className="card-title">$0/month</h5>
           
        <p className="card-text">Quam adipiscing vitae</p>
        <p className="card-text">Nec feugiat nisl pretium</p>
        <p className="card-text">Nulla at volutpat diam uteera</p>
        <p className="card-text">Nec feugiat nisl pretium</p>
        <p className="card-text">Nulla at volutpat diam uteera</p>
        
           <button type="button " className="btn btn btn-rounded-pill bg-primary">Buy Now</button>
      </div>
     
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      
      <div className="card-body">
        <h5 className="card-title">Business Plan</h5>
        <p className="card-text">$29/month</p>
        <p className="card-text">Quam adipiscing vitae</p>
        <p className="card-text">Nec feugiat nisl pretium</p>
        <p className="card-text">Nulla at volutpat diam uteera</p>
        <p className="card-text">Nulla at volutpat diam uteera</p>
            <button type="button " className="btn btn btn-rounded-pill bg-primary">Buy Now</button>
      </div>
      
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
     
      <div className="card-body">
        <h5 className="card-title">Developer Plan</h5>
        <p className="card-text">$49/month</p>
        <p className="card-text">Quam adipiscing vitae</p>
        <p className="card-text">Nec feugiat nisl pretium</p>
        <p className="card-text">Nulla at volutpat diam uteera</p>
        <p className="card-text">Nulla at volutpat diam uteera</p>
            <button type="button " className="btn btn btn-rounded-pill bg-primary">Buy Now</button>
      </div>
    
    </div>
  </div>
</div>
      </div>

    </>
  )
}

export default Pricing
