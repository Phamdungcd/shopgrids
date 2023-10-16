import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo/logo.svg';
import { BsSearch, BsHeart, BsCart } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';

function Header() {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline:{' '}
                                <a className="text-white" href="tel:+100 123 456 7890">
                                    (+100) 123 456 7890
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container xxl">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <Link className="logo">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link to="/wishlist" className="d-flex align-items-center gap-10">
                                        <BsHeart className="text-dark" />
                                        <p className="mb-0 text-dark">
                                            Favourite <br /> Wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/login" className="d-flex align-items-center gap-10">
                                        <AiOutlineUser className="text-dark" />
                                        <p className="mb-0 text-dark">
                                            Login <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/cart" className="d-flex align-items-center gap-10">
                                        <BsCart className="text-dark" />
                                        <div className="d-flex flex-column">
                                            <span className="badge bg-dark text-white">0</span>
                                            <p className="mb-0 text-dark">$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div className="border-end">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <AiOutlineMenu />
                                            <span className="me-5 d-inline-block">All Categories</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link className="dropdown-item text-dark" to="/">
                                                    Electronics
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-dark" to="/">
                                                    accessories
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-dark" to="/">
                                                    Televisions
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-item-center gap-30">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/product">Shop</NavLink>
                                        <NavLink to="/blogs">Blogs</NavLink>
                                        <NavLink to="/contact">Contact Us</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
