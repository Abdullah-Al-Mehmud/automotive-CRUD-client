const Footer = () => {
  return (
    <footer className="footer  p-10 mt-10 text-base-content">
      <aside className="lg:ml-20">
        <img className="h-36" src="/images/logo.png" alt="" />
      </aside>
      <nav>
        <header className="font-bold text-lg text-[#ff7232]">Services</header>
        <a className="link link-hover font-bold">Branding</a>
        <a className="link link-hover font-bold">Design</a>
        <a className="link link-hover font-bold">Marketing</a>
        <a className="link link-hover font-bold">Advertisement</a>
      </nav>
      <nav>
        <header className="text-lg font-bold text-[#ff7232]">Company</header>
        <a className="link link-hover font-bold">About us</a>
        <a className="link link-hover font-bold">Contact</a>
        <a className="link link-hover font-bold">Jobs</a>
        <a className="link link-hover font-bold">Press kit</a>
      </nav>
      <nav>
        <header className="text-lg font-bold text-[#ff7232]">Legal</header>
        <a className="link link-hover font-bold">Terms of use</a>
        <a className="link link-hover font-bold">Privacy policy</a>
        <a className="link link-hover font-bold">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
