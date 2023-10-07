import { Link } from "react-router-dom";
import BannerBg from "../../public/img/banner2.jpg";
const Login = () => {
  const MybgStyle = {
    backgroundImage: `url(${BannerBg})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={MybgStyle} className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white pt-28">Login now!</h1>
        </div>
        <div className="card sm:w-96 w-auto shadow-2xl bg-base-100">
          <form className="card-body sm:p-9 p-5  w-full">
            <div className="form-control w-full">
            <label className="label" htmlFor="email">
                    <span className="label-text">Email <span className="text-red-900">*</span></span>
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
                    <span className="label-text">Password <span className="text-red-900">*</span></span>
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
            <div className="form-control mt-6">
              <button className="btn MyBtn">Login</button>
            </div>
            <p className="text-sm text-headerColor capitalize">if you don&apos;t have account <Link to="/registration" className="text-borderColor link-hover text-base">registrar</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
