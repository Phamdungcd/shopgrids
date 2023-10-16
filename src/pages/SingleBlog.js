import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

function SingleBlog() {
    return (
        <>
            <Meta title={'Single Blog'} />
            <BreadCrumb title="Single Blog" />
            <div className="blog-wrapper stop-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <h2 className="text-center">Mình sẽ hoàn thiện sau :))</h2>
                </div>
            </div>
        </>
    );
}

export default SingleBlog;
