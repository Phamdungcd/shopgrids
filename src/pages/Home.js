import { Link } from 'react-router-dom';
import banner1 from '../images/banner/banner-1-bg.jpg';
import banner2 from '../images/banner/banner-2-bg.jpg';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { MdOutlinePayment } from 'react-icons/md';
import { HiOutlineArrowPath } from 'react-icons/hi2';
import SingleCard from '../components/SingleCard';

function Home() {
    return (
        <>
            <section className="hero-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 custom-padding-right">
                            <div className="slider-head">
                                <div className="hero-slider">
                                    <div className="single-slider">
                                        <div className="content">
                                            <h2>
                                                <span>No restocking fee ($35 savings)</span>
                                                M75 Sport Watch
                                            </h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <h3>
                                                <span>Now Only</span> $320.99
                                            </h3>
                                            <Link className="button">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                                    <div className="hero-small-banner">
                                        <div className="content">
                                            <h2>
                                                <span>New line required</span>
                                                iPhone 12 Pro Max
                                            </h2>
                                            <h3>$259.99</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6 col-12">
                                    <div className="hero-small-banner style2">
                                        <div className="content">
                                            <h2>Weekly Sale!</h2>
                                            <p>Saving up to 50% off all online store items this week.</p>
                                            <Link className="button">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h2>Các sản phẩm tại ShopGrids</h2>
                                <p>Có thể bạn đang quan tâm đến những sản phẩm này </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <SingleCard />
                    </div>
                </div>
            </section>
            <section className="home-banner py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="main-banner position-relative">
                                <img className="" src={banner1} alt="" />
                                <div className="content position-absolute">
                                    <h3>Smart Watch 2.0</h3>
                                    <p>Space Gray Aluminum Case with Black/Volt Real Sport Band</p>
                                    <Link className="button">View Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="main-banner position-relative">
                                <img className="" src={banner2} alt="" />
                                <div className="content position-absolute">
                                    <h3>Smart Watch 2.0</h3>
                                    <p>Space Gray Aluminum Case with Black/Volt Real Sport Band</p>
                                    <Link className="button">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className="text-center px-3 py-3 mt-60 mb-60 border">
                                    <LiaShippingFastSolid
                                        style={{ fontSize: '50px', color: '#0167f3' }}
                                        className="mb-3"
                                    />
                                    <div>
                                        <h6>Free delivery</h6>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
                                        </p>
                                    </div>
                                </div>

                                <div className="text-center px-3 py-3 mt-60 mb-60 border border-start-0">
                                    <MdOutlinePayment style={{ fontSize: '50px', color: '#0167f3' }} className="mb-3" />
                                    <div>
                                        <h6>Online Payment</h6>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
                                        </p>
                                    </div>
                                </div>
                                <div className="text-center px-3 py-3 mt-60 mb-60 border border-start-0">
                                    <HiOutlineArrowPath
                                        style={{ fontSize: '50px', color: '#0167f3' }}
                                        className="mb-3"
                                    />
                                    <div>
                                        <h6>Easy Return.</h6>
                                        <p className="mb-0">
                                            Lorem ipsum dolor sit amet, consect adipiscing eliteget lorem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
