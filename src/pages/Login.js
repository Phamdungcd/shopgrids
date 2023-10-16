import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import CustomInput from './CustomInput';

function Login() {
    return (
        <>
            <Meta title={'Login'} />
            <BreadCrumb title="Login" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center">Login</h3>
                                <form action="" className="d-flex py-3 flex-column gap-20">
                                    <div>
                                        <CustomInput placeholder="Email" type="email" name="email" />
                                    </div>
                                    <div className="mt-1">
                                        <CustomInput placeholder="Password" type="password" name="password" />
                                    </div>
                                    <div>
                                        <Link className="forgot-password" to="/forgot-password">
                                            Forgot Password?
                                        </Link>
                                        <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                            <button className="button">Login</button>
                                            <Link to="/signup" className="button signup">
                                                Sign Up
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

export default Login;
