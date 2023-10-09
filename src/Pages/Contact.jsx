import Banner2 from "../Components/Banner2";

const Contact = () => {
  return (
    <div>
      <Banner2 />
      <div className="mt-10 container mx-auto">
        <h3 className="text-center sm:text-5xl text-4xl font-bold text-headerColor capitalize pb-5">
            contact us
        </h3>
        <form className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <input type="text" className="input border-borderColor focus:outline-borderColor input-bordered" placeholder="Your Name" required/>
            <input type="email" className="input border-borderColor focus:outline-borderColor input-bordered" placeholder="Email Address" required/>
            <input type="text" className="input border-borderColor focus:outline-borderColor input-bordered" placeholder="Your Country" required/>
            <input type="tel" className="input border-borderColor focus:outline-borderColor input-bordered" placeholder="Phone Number" required/>
            <textarea className="md:col-span-2 pt-1 input border-borderColor focus:outline-borderColor input-bordered min-h-[120px]" placeholder="Your Message" required></textarea>
            <div className="md:col-span-2 text-center">
            <button type="submit" className="btn MyBtn">send mail</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
