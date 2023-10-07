import { PropTypes } from 'prop-types';
const EsportCard = ({data}) => {
    const {image, title} = data
  return (
    <div className="card bg-base-100 image-full">
      <figure>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center pt-10 text-center">{title}</h2>
        <div className="card-actions justify-center">
          <button className="btn MyBtn border-none">join Now</button>
        </div>
      </div>
    </div>
  );
};
EsportCard.propTypes = {
    data: PropTypes.object.isRequired
  }
export default EsportCard;
