import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const ScheduleCard = ({data}) => {
    const navigate = useNavigate()
    const {image,title, scheduleDates} = data
    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className="card bg-base-100 shadow-xl image-full" data-aos="fade-up">
      <figure>
        <img
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body justify-center">
        <h2 className="card-title text-borderColor">{title}</h2>
        <div className='grid sm:grid-cols-2 gap-4'>
            {
                scheduleDates.map((time,idx)=><button onClick={()=>navigate("/contact")} key={idx} className='btn bg-transparent text-white hover:MyBtn hover:border-none'>{time}</button> )
            }
        </div>
      </div>
    </div>
  );
};
ScheduleCard.propTypes = {
    data: PropTypes.object.isRequired
  }
export default ScheduleCard;
