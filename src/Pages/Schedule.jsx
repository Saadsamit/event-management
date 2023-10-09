import { useOutletContext } from "react-router-dom";
import Banner2 from "../Components/Banner2";
import ScheduleCard from "../Components/ScheduleCard";

const Schedule = () => {
  const datas = useOutletContext();
  return (
    <div>
      <Banner2 />
      <div className="mt-10 container mx-auto">
        <h3 className="text-center sm:text-5xl text-4xl font-bold text-headerColor capitalize pb-5">Schedule of booking</h3>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
          {datas.map((data, idx) => (
            <ScheduleCard key={idx} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
