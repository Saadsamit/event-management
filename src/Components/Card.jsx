import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    const {id, image, title, description, price} = data

  return (
    <div className="card bg-base-100 border border-borderColor">
      <figure className='max-h-[250px]'>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-headerColor font-semibold">{title}</h2>
        <p className='text-paraColor'>{description.length < 100 ? description : `${description.slice(0,80)}...`}</p>
        <p className='text-borderColor text-4xl'>$<span className='text-[#ff3e00]'>{price}</span></p>
        <div className="card-actions">
          <Link to={`/even/${id}`}><button className="btn MyBtn w-full">see detail</button></Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
}
export default Card;
