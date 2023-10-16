import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function CheckOut() {
    return (
        <>
            <div className="checkout-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3>Check Out</h3>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Library
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title">Contact Infomation</h4>
                                <p className="user-details">(user@gmail.com)</p>
                                <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                                    <div className="w-100">
                                        <select name="" className="form-control form-select" id="">
                                            <option value="" selected disabled>
                                                Select coumtry
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="First Name" className="form-control" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Last Name" className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Address" className="form-control" />
                                    </div>
                                    <div className="w-100">
                                        <input
                                            type="text"
                                            placeholder="Apartment, Suit, etc"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <input type="text" className="form-control flex-grow-1" />
                                    </div>
                                    <div>
                                        <select name="" className="form-control flex-grow-1 form-select" id="">
                                            <option value="" selected disabled>
                                                Select State
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Zipcode" className="form-control " />
                                    </div>
                                    <div className="w-100">
                                        <div class="d-flex check-btn align-items-center justify-content-between">
                                            <Link to="/cart" className="text-dark">
                                                <AiOutlineArrowLeft /> Return to Cart
                                            </Link>
                                            <Link to="/cart" className="button">
                                                Continue to Shopping
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckOut;
