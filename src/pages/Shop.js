import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import product5 from '../images/products/product-5.jpg';
import { BsLayoutThreeColumns, BsLayoutTextWindowReverse } from 'react-icons/bs';
import { useState } from 'react';
import ProductCart from '../components/ProductCart';

function Shop() {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={'Shop'} />
            <BreadCrumb title="Shop" />
            <div className="stop-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Shop by Categories</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>Tv</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <div className="filter-title">
                                    Filter By
                                    <div>
                                        <h5 className="sub-title">Availablity</h5>
                                        <div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" />
                                                <label htmlFor="">In Stock (1)</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" />
                                                <label htmlFor="">Out of Stock (0)</label>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control py-1"
                                                id="floatingInput"
                                                placeholder="From"
                                                style={{ fontSize: '14px', color: '#000' }}
                                            />
                                            <label style={{ fontSize: '13px' }} htmlFor="floatingInput">
                                                From
                                            </label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control py-1"
                                                id="floatingInput1"
                                                placeholder="To"
                                                style={{ fontSize: '14px', color: '#000' }}
                                            />
                                            <label style={{ fontSize: '13px' }} htmlFor="floatingInput1">
                                                To
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Colors</h5>
                                    <div>
                                        <ul className="colors ps-0">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="color-1" />
                                            <label className="form-check-label" htmlFor="color-1">
                                                S (2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="color-1" />
                                            <label className="form-check-label" htmlFor="color-1">
                                                M (2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Product Tags
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10 py-4">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Headphone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Oppo</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Speaker
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Tablet
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Vivo</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                                    </div>
                                </h3>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Random Product
                                    <div>
                                        <div className="random-products mb-3 mt-3 d-flex">
                                            <div className="w-50">
                                                <img src={product5} className="img-fluid" alt="" />
                                            </div>
                                            <div className="w-50 ps-3">
                                                <h5>Wireless Headphones</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p>$199.00</p>
                                            </div>
                                        </div>
                                        <div className="random-products mb-3 d-flex">
                                            <div className="w-50">
                                                <img src={product5} className="img-fluid" alt="" />
                                            </div>
                                            <div className="w-50 ps-3">
                                                <h5>Wireless Headphones</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p>$199.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </h3>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center gap-10">
                                        <select
                                            name=""
                                            defaultValue={'best-selling'}
                                            className="form-control form-select"
                                            id=""
                                        >
                                            <option value="best-selling">Best selling</option>
                                            <option value="newest-products">Newest Products</option>
                                            <option value="title-ascending">Aldest Product</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="d-flex align-items-center gap-10">
                                            <button
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                className="layout-icon"
                                            >
                                                <BsLayoutThreeColumns />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                className="layout-icon"
                                            >
                                                <BsLayoutTextWindowReverse />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCart grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
