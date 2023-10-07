import Banner2 from "./../Components/Banner2";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const EventDetail = () => {
    const evenData = useOutletContext()
    const {id} = useParams()
    const findObj = evenData.find((data)=> data.id == id)
    const {image, title, description, price} = findObj
    const notify = ()=>{
        toast.success(`you pay $${price} for join`, {
            position: toast.POSITION.TOP_CENTER
          })
          console.log('kjdhi')
    }
  return (
    <div>
      <Banner2></Banner2>
      <div className="pt-10 container mx-auto">
        <div className="flex justify-center items-center">
            <img src={image} alt=""  className="w-1/2 max-h-[70vh]"/>
            <div className="p-5 w-1/2 space-y-6">
                <h2 className="text-4xl text-headerColor">{title}</h2>
                <p className="text-paraColor">{description}</p>
                <p className='text-borderColor text-4xl'>$<span className='text-[#ff3e00]'>{price}</span></p>
                <button onClick={notify} className="btn MyBtn w-full">join Now</button>
            </div>
        </div>
      </div>
      <div className="text-center pt-7">
      <Link to="/" className="btn MyBtn text-center">go back to hone</Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EventDetail;
