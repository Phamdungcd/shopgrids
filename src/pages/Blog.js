import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import blog1 from '../images/blogs/image-01.jpg';
import blog2 from '../images/blogs/image-02.jpg';
import blog3 from '../images/blogs/image-03.jpg';
import blog4 from '../images/blogs/image-04.jpg';

function Blog() {
    return (
        <>
            <Meta title={'Blogs'} />
            <BreadCrumb title={'Blogs'} />
            <div className="blog-wrapper stop-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3 p-2">
                            <div className="blog-card">
                                <div className="card-image">
                                    <img src={blog1} alt="blog" className="img-fluid" />
                                </div>
                                <div className="blog-content">
                                    <p className="date">1 Dec, 2022</p>
                                    <h5 className="title">Meet AutoManage, the best AI management tools</h5>
                                    <p className="desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/single-blog" className="button">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-2">
                            <div className="blog-card">
                                <div className="card-image">
                                    <img src={blog2} alt="blog" className="img-fluid" />
                                </div>
                                <div className="blog-content">
                                    <p className="date">1 Dec, 2022</p>
                                    <h5 className="title">Meet AutoManage, the best AI management tools</h5>
                                    <p className="desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/single-blog" className="button">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-2">
                            <div className="blog-card">
                                <div className="card-image">
                                    <img src={blog3} alt="blog" className="img-fluid" />
                                </div>
                                <div className="blog-content">
                                    <p className="date">1 Dec, 2022</p>
                                    <h5 className="title">Meet AutoManage, the best AI management tools</h5>
                                    <p className="desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/single-blog" className="button">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 p-2">
                            <div className="blog-card">
                                <div className="card-image">
                                    <img src={blog4} alt="blog" className="img-fluid" />
                                </div>
                                <div className="blog-content">
                                    <p className="date">1 Dec, 2022</p>
                                    <h5 className="title">Meet AutoManage, the best AI management tools</h5>
                                    <p className="desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                    <Link to="/single-blog" className="button">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
