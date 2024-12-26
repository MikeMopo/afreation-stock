
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Login.css';
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Stock-Images/home');
    };

    const handleHomeRedirect = () => {
        navigate('/Stock-Images'); // Redirect to home
    };

    return (
        <>
        <Header />
        <div className="login__background">
            <section className="signin__section">
                <div className="signin__wrapper">
                    <div className="signin__content">
                        <h2>Welcome Back</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" className="form__input" placeholder="Email address" />
                            <input type="password" className="form__input" placeholder="Enter password" />
                            <span className="fz-16 fw-500 bodyfont d-block">Or</span>
                            <a href="#0" className="google__box d-flex align-items-center">
                                <img src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg" alt="Google" />
                                Continue with Google
                            </a>
                            <a href="#0" className="google__box d-flex align-items-center">
                                {/*<img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />*/}
                                Continue with Facebook
                            </a>

                            <div className="form-check d-flex align-items-center gap-2 mt-30 mb-40">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="dradio" defaultChecked />
                                <label className="form-check-label" htmlFor="dradio">
                                    I accept your terms & conditions
                                </label>
                            </div>
                            <div className="d-flex justify-content-between mt-4"> {/* Added margin-top for spacing */}
                                <button type="submit" className="cmn--btn">
                                    <span>Sign In</span>
                                </button>
                                <button type="button" className="cmn--btn" onClick={handleHomeRedirect}>
                                    <span>Home</span>
                                </button>
                            </div>
                        </form>
                        <div className="signcreat d-flex justify-content-between">
                            <a href="/Stock-Images/create-account" className="white__btn">Create Account</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            <Footer/>
        </>
    );
};

export default Login;