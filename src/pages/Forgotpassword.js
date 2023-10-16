import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import CustomInput from './CustomInput';

function Forgotpassword() {
    return (
        <>
            <Meta title={'Forgot Password'} />
            <BreadCrumb title="Forgot Password" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Reset Your Password</h3>
                                <p className="text-center mt-2 mb-3">
                                    We will send you an email to reset your password
                                </p>
                                <form action="" className="d-flex py-3 flex-column gap-20">
                                    <div>
                                        <CustomInput placeholder="Email" type="email" name="email" />
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex align-items-center justify-content-center flex-column gap-15">
                                            <button className="button" type="submit">
                                                Submit
                                            </button>
                                            <Link to="/login" style={{ fontSize: '15px', textDecoration: 'none' }}>
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Forgotpassword;
