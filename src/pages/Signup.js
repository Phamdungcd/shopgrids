import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import CustomInput from './CustomInput';

function Signup() {
    return (
        <>
            <Meta title={'Sign Up'} />
            <BreadCrumb title="Sign Up" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center">Sign Up</h3>
                                <form action="" className="d-flex py-3 flex-column gap-20">
                                    <div>
                                        <CustomInput placeholder="Name" type="text" name="name" />
                                    </div>
                                    <div className="mt-1">
                                        <input className="form-control" placeholder="Email" type="text" name="email" />
                                    </div>
                                    <div className="mt-1">
                                        <CustomInput placeholder="Mobile Number" type="tel" name="mobile" />
                                    </div>
                                    <div className="mt-1">
                                        <CustomInput placeholder="Password" type="password" name="password" />
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                            <Link className="button">Create</Link>
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

export default Signup;
