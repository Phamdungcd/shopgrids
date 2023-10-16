import { Link } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import logo from '../images/logo/logo.svg';

function Footer() {
    return (
        <>
            <footer className="py-8 p-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <div>
                                <img className="footer-img mb-4" src={logo} alt="" />
                                <address className="text-white fs-6">
                                    <CiLocationOn />
                                    Hanoi Vietnamese
                                </address>
                                <a href="tel: +100 123 456 7890" className="mt-3 d-block mb-1 text-white">
                                    (+100) 123 456 7890
                                </a>
                                <a href="mailto: shopgrid@gmail.com" className="mt-2 d-block mb-1 text-white">
                                    shopgrid@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-15 mt-4">
                                    <Link to="" className="text-white">
                                        <BsFacebook className="fs-3" />
                                    </Link>
                                    <Link to="" className="text-white">
                                        <BsInstagram className="fs-3" />
                                    </Link>
                                    <Link to="" className="text-white">
                                        <BsTwitter className="fs-3" />
                                    </Link>
                                    <Link to="" className="text-white">
                                        <BsLinkedin className="fs-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Infomation</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Privacy</Link>
                                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                                <Link className="text-white py-2 mb-1">Terms Of Service</Link>
                                <Link className="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Search</Link>
                                <Link className="text-white py-2 mb-1">About Us</Link>
                                <Link className="text-white py-2 mb-1">Faq</Link>
                                <Link className="text-white py-2 mb-1">Contact</Link>
                                <Link className="text-white py-2 mb-1">Size Chart</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptops</Link>
                                <Link className="text-white py-2 mb-1">Headphones</Link>
                                <Link className="text-white py-2 mb-1">Tablet</Link>
                                <Link className="text-white py-2 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-white text-center mb-0">
                                &copy; {new Date().getFullYear()} Power by Developer's Corner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
