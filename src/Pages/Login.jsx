import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import BannerBg from "../../public/img/banner2.jpg";
import { useContext } from "react";
import { context } from "../Mycontext";
import toast from "react-hot-toast";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Login = () => {
  const location = useLocation()
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, [])
  const { SignUpWithGoogle, LogIn } = useContext(context);
  const haldleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    LogIn(email, password)
      .then(() => {
        toast.success("logged successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error?.message?.replace("Firebase: Error (", "")?.replace(")","");
        if(errorMessage.includes("auth/invalid-login-credentials.")){
          toast.error(" Email/Password doesn't match");
        }else{
          toast.error(errorMessage);
        }
      });
  };
  // 
  const haldleClick = () => {
    SignUpWithGoogle()
      .then(() => {
        toast.success("logged successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
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
          <h1 className="text-5xl font-bold text-white pt-28">Login now!</h1>
        </div>
        <div className="card sm:w-96 w-auto shadow-2xl bg-base-100">
          <form
            onSubmit={haldleSubmit}
            className="card-body sm:p-9 p-5  w-full"
          >
            <div className="form-control w-full">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button type="submit" className="btn MyBtn">
                Login
              </button>
            </div>
            <p className="text-sm text-headerColor capitalize">
              if you don&apos;t have account{" "}
              <Link
                to="/registration"
                className="text-borderColor link-hover text-base"
              >
                registrar
              </Link>
            </p>
            <div>
              <div className="flex justify-around items-center px-4">
                <div className="MyGradient h-[2px] w-2/5"></div>
                <p className="text-center">or</p>
                <div className="MyGradient h-0.5 w-2/5"></div>
              </div>
              <button
                onClick={haldleClick}
                type="button"
                className="py-2 mt-2 border-2 border-borderColor hover:MyBtn rounded-xl w-full"
              >
                <div className="flex justify-center items-center text-lg">
                  <FcGoogle className="text-2xl mr-2" />
                  Sign up with google
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
