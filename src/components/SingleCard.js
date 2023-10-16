import ReactStars from 'react-rating-stars-component';
import { listCarts } from './DataCart';
import { Link } from 'react-router-dom';
import { BsHandbag } from 'react-icons/bs';
import { GrView } from 'react-icons/gr';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRandom } from 'react-icons/fa';

function SingleCard() {
    return (
        <>
            <div className="container">
                <div className="row">
                    {listCarts.map((cart) => (
                        <Link key={cart.id} to="/product" className="col-3 py-4">
                            <div className="product-card position-relative">
                                <div className="wishlist-icon position-absolute">
                                    <button className="text-dark border-0 bg-transparent">
                                        <AiOutlineHeart />
                                    </button>
                                </div>
                                <div className="product-image">
                                    <img className="img-fluid" src={cart.image} alt="product img" />
                                </div>
                                <div className="product-details">
                                    <h6 className="">{cart.category}</h6>
                                    <h5 className="product-title">{cart.title}</h5>
                                    <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                    <p className="price">{cart.price}</p>
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className="d-flex flex-column gap-15">
                                        <button className="text-dark border-0 bg-transparent">
                                            <AiOutlineHeart />
                                        </button>
                                        <button className="text-dark border-0 bg-transparent">
                                            <FaRandom />
                                        </button>
                                        <button className="text-dark border-0 bg-transparent">
                                            <GrView />
                                        </button>
                                        <button className="text-dark border-0 bg-transparent">
                                            <BsHandbag />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SingleCard;
