import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import CustomInput from './CustomInput';

function ResetPassword() {
    return (
        <>
            <Meta title={'Reset Password'} />
            <BreadCrumb title="Reset Password" />
            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center">Reset Password</h3>
                                <form action="" className="d-flex py-3 flex-column gap-20">
                                    <div className="mt-1">
                                        <CustomInput placeholder="Email" type="email" name="email" />
                                    </div>
                                    <div className="mt-1">
                                        <CustomInput placeholder="Confirm Password" type="password" name="password" />
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center align-items-center gap-15">
                                            <Link className="button">OK</Link>
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

export default ResetPassword;
