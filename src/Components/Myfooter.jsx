const Myfooter = () => {
  return (
    <div className="pt-24">
      <footer className="footer md:justify-items-center p-10 bg-headerColor text-base-content">
  <nav>
    <header className="footer-title text-white opacity-100">Services</header> 
    <a className="link link-hover text-paraColor">Branding</a> 
    <a className="link link-hover text-paraColor">Design</a> 
    <a className="link link-hover text-paraColor">Marketing</a> 
    <a className="link link-hover text-paraColor">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-white opacity-100">Company</header> 
    <a className="link link-hover text-paraColor">About us</a> 
    <a className="link link-hover text-paraColor">Contact</a> 
    <a className="link link-hover text-paraColor">Jobs</a> 
    <a className="link link-hover text-paraColor">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-white opacity-100">Legal</header> 
    <a className="link link-hover text-paraColor">Terms of use</a> 
    <a className="link link-hover text-paraColor">Privacy policy</a> 
    <a className="link link-hover text-paraColor">Cookie policy</a>
  </nav>
</footer> 
<footer className="footer footer-center p-4 bg-headerColor border-t border-white text-paraColor">
  <aside>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
    </div>
  );
};

export default Myfooter;
