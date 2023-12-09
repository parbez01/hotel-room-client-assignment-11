import { Link } from "react-router-dom";


const SingleService = ({service}) => {
    const {_id,image,description} = service;
    return (
        <div>
            
 <Link to={`/details/${_id}`}>
 
 <div className="card card-compact  bg-base-100 shadow-xl mb-10">
  <figure><img className="lg:h-[400px]" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{description}</h2>



    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>

   
  
  </div>
</div>

 
 </Link>
 

        </div>
    );
};

export default SingleService;