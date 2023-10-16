import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { GrClose } from 'react-icons/gr';
import product1 from '../images/products/product-1.jpg';

function Wishlist() {
    return (
        <>
            <Meta title={'Wishlist'} />
            <BreadCrumb title="Wishlist" />
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <GrClose className="img-fluid cross position-absolute" />
                                <div className="wishlist-card-image">
                                    <img src={product1} alt="" className="w-100" />
                                </div>
                                <div className="bg-white py-3 px-3">
                                    <h5 className="title">Xiaomi Mi Band 5</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <GrClose className="img-fluid cross position-absolute" />
                                <div className="wishlist-card-image">
                                    <img src={product1} alt="" className="w-100" />
                                </div>
                                <div className="bg-white py-3 px-3">
                                    <h5 className="title">Xiaomi Mi Band 5</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <GrClose className="img-fluid cross position-absolute" />
                                <div className="wishlist-card-image">
                                    <img src={product1} alt="" className="w-100" />
                                </div>
                                <div className="bg-white py-3 px-3">
                                    <h5 className="title">Xiaomi Mi Band 5</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <GrClose className="img-fluid cross position-absolute" />
                                <div className="wishlist-card-image">
                                    <img src={product1} alt="" className="w-100" />
                                </div>
                                <div className="bg-white py-3 px-3">
                                    <h5 className="title">Xiaomi Mi Band 5</h5>
                                    <h6 className="price">$ 100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wishlist;
