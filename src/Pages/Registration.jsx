import { Link, useNavigate } from "react-router-dom";
import BannerBg from "../../public/img/banner2.jpg";
import { useContext } from "react";
import { context } from "../Mycontext";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Registration = () => {
  const navigate = useNavigate();
  const { registrar } = useContext(context);
  useEffect(() => {
    AOS.init();
  }, [])
  const haldleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }else if(!/[A-Z]/.test(password)){
      toast.error("Password must be at least 1 capital letter");
      return;
    }else if(!/[!\@\#\$\%\^\&\*\)\(\+\=\.\_\-]/.test(password)){
      toast.error("Password must be at least 1 special character");
      return;
    }else{
      registrar(email, password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        })
      )
      .then(() => {
        toast.success("registrar successfull");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error?.message?.replace("Firebase: Error (", "")?.replace(")","");
        toast.error(errorMessage);
      });
    }
    
  };
  const MybgStyle = {
    backgroundImage: `url(${BannerBg})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={MybgStyle} className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col" data-aos="zoom-in">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white pt-20">
            Registrar now!
          </h1>
        </div>
        <div className="card sm:w-96 w-auto shadow-2xl bg-base-100">
          <form
            onSubmit={haldleSubmit}
            className="card-body sm:p-9 p-5  w-full"
          >
            <div className="form-control w-full">
              <label className="label" htmlFor="name">
                <span className="label-text">
                  Name <span className="text-red-900">*</span>
                </span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                className="input border-borderColor focus:outline-borderColor input-bordered"
                required
              />
              <label className="label" htmlFor="image">
                <span className="label-text">
                  Image <span>(optional)</span>
                </span>
              </label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="your image url"
                className="input border-borderColor focus:outline-borderColor input-bordered"
              />
              <label className="label" htmlFor="email">
                <span className="label-text">
                  Email <span className="text-red-900">*</span>
                </span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className="input border-borderColor focus:outline-borderColor input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">
                  Password <span className="text-red-900">*</span>
                </span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                className="input border-borderColor focus:outline-borderColor input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn MyBtn">registrar</button>
            </div>
            <p className="text-sm text-headerColor capitalize">
              if you have a account{" "}
              <Link
                to="/login"
                className="text-borderColor link-hover text-base"
              >
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
