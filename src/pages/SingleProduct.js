import { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import SingleCard from '../components/SingleCard';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import Colors from '../components/Colors';
import watch from '../images/products/product-5.jpg';

function SingleProduct() {
    const [orderedProduct, setOrderedProduct] = useState(true);
    // react-image-zoom
    // const props = {
    //     width: 400,
    //     height: 250,
    //     zoomWidth: 500,
    //     img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    // };
    return (
        <>
            <Meta title={'Product Name'} />
            <BreadCrumb title="Product Name" />
            <div className="main-single-product">
                <div className="main-product-wrapper py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="main-product-image">
                                    <div>
                                        <img src={watch} alt="" />
                                    </div>
                                </div>
                                <div className="other-product-images d-flex justify-content-between gap-15">
                                    <div>
                                        <img src={watch} alt="" />
                                    </div>
                                    <div>
                                        <img src={watch} alt="" />
                                    </div>
                                    <div>
                                        <img src={watch} alt="" />
                                    </div>
                                    <div>
                                        <img src={watch} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="main-product-details">
                                    <div className="border-bottom">
                                        <h3 className="title">GoPro Karma Camera Drone</h3>
                                    </div>
                                    <div className="border-bottom py-3">
                                        <p className="price">$850</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center gap-10">
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="mb-0 t-review">(2 reviews)</p>
                                            </div>
                                            <a className="review-btn" href="#review">
                                                Write a Review
                                            </a>
                                        </div>
                                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                            <p className="product-data">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ipsam
                                                tempora. Libero alias veniam nihil nesciunt voluptate ducimus cumque,
                                                nulla similique, assumenda expedita asperiores quos accusantium
                                                temporibus quia, praesentium ipsa!
                                            </p>
                                        </div>
                                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                            <h3 className="product-heading">Color: </h3>
                                            <Colors />
                                        </div>
                                        <div className="d-flex gap-10 flex-row align-items-center mt-2 mb-3">
                                            <h3 className="product-heading">Quantity: </h3>
                                            <div className="">
                                                <input
                                                    type="number"
                                                    style={{ width: '50px' }}
                                                    name="number"
                                                    min={1}
                                                    max={10}
                                                    className="form-control"
                                                    id=""
                                                />
                                            </div>
                                            <div className="d-flex align-items-center gap-30 ms-5">
                                                <button className="button">Add To Cart</button>
                                                <button className="button buynow">Buy It Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-wrapper home-wrapper-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="py-2">Description</h4>
                                <p className="bg-white p-3">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit asperiores nobis a
                                    ratione atque aperiam illum, mollitia fugiat facere iure, dolorum similique rem
                                    consequuntur placeat eligendi assumenda. Animi, odit praesentium.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="reviews-wrapper py-5 home-wrapper-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h4 id="review">Reviews</h4>
                                <div className="review-inner-wrapper">
                                    <div className="review-head d-flex justify-content-between align-items-end border-bottom">
                                        <div>
                                            <h4 className="mb-2">Customer Reviews</h4>
                                            <div className="d-flex align-items-center gap-10">
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="mb-0">Based on 2 reviews</p>
                                            </div>
                                        </div>
                                        {orderedProduct && (
                                            <div>
                                                <a href="#review" className="text-dark text-decoration-underline">
                                                    Write a Review
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                    <div className="review-form py-4">
                                        <h4>Write a Review</h4>
                                        <form action="">
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={true}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <div className="p-2 mt-2">
                                                <textarea
                                                    name="comments"
                                                    id=""
                                                    style={{ resize: 'none' }}
                                                    className="w-100 form-control p-3"
                                                    cols="30"
                                                    rows="10"
                                                    placeholder="Comments"
                                                ></textarea>
                                            </div>

                                            <div className="button d-flex justify-content-end mt-2">
                                                <Link>Submit</Link>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="reviews py-4">
                                        <div className="review">
                                            <div className="d-flex gap-10 align-items-center">
                                                <h6 className="mb-0">Navdeep</h6>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <p className="mt-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
                                                dignissimos officiis aspernatur, qui maxime eius velit dolore sunt
                                                laborum, obcaecati autem et molestiae commodi mollitia veniam voluptas,
                                                molestias fugit in!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <SingleCard />
            </div>
        </>
    );
}

export default SingleProduct;
