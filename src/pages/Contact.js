import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { GiRotaryPhone } from 'react-icons/gi';
import { CiLocationOn } from 'react-icons/ci';

function Contact() {
    return (
        <>
            <Meta title={'Contact Us'} />
            <BreadCrumb title="Contact Us" />
            <div className="contact-wrapper py-5 home-wrapper-2 border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex align-items-center">
                            <div className="col-4">
                                <div className="contact-info text-center">
                                    <div className="contact-icon">
                                        <FiMail />
                                    </div>
                                    <h3>Email Address</h3>
                                    <p>
                                        info@example.com <span className="d-block">support@example.com</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="contact-info text-center">
                                    <div className="contact-icon">
                                        <GiRotaryPhone />
                                    </div>
                                    <h3>Phone Number</h3>
                                    <p>
                                        +88 (800) 123 4567
                                        <span className="d-block">+99 094 5445 433</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="contact-info text-center">
                                    <div className="contact-icon">
                                        <CiLocationOn />
                                    </div>
                                    <h3>Our Address</h3>
                                    <p>
                                        82 12th Street, Office 14, <span className="d-block">Edinburgh, UK</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-inner-wrapper py-120 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-title text-center mb-60">
                                <h2 className="mb-3">How Can We Help You?</h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available <br /> but the
                                    majority have suffered alteration in some form.
                                </p>
                            </div>
                            <form action="">
                                <div className="d-flex">
                                    <div className="w-100 p-2">
                                        <label style={{ fontSize: '18px' }} htmlFor="name" className="mb-3">
                                            Your Name
                                        </label>
                                        <input type="text" className="form-control p-3" />
                                    </div>
                                    <div className="w-100 p-2">
                                        <label style={{ fontSize: '18px' }} htmlFor="email" className="mb-3">
                                            Your Email
                                        </label>
                                        <input type="text" className="form-control p-3" />
                                    </div>
                                </div>
                                <div className="p-2 mt-3">
                                    <label style={{ fontSize: '18px' }} htmlFor="message" className="mb-3">
                                        Your Message
                                    </label>
                                    <textarea
                                        name=""
                                        id=""
                                        style={{ resize: 'none' }}
                                        className="w-100 form-control p-3"
                                        cols="30"
                                        rows="10"
                                    ></textarea>
                                </div>
                                <div className="p-2 mb-5 d-flex align-items-center">
                                    <input
                                        style={{ width: '20px', height: '20px' }}
                                        type="checkbox"
                                        value="data"
                                        name="rules"
                                        id="rules"
                                    />
                                    <label
                                        style={{ fontSize: '18px', color: '#737683' }}
                                        className="px-2"
                                        htmlFor="rules"
                                    >
                                        I agree that my submitted data is being collected and stored.
                                    </label>
                                </div>
                                <Link className="d-flex align-items-center justify-content-center button">
                                    Send Message
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
