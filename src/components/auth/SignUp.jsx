import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/Login.css';

const Signup = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signup logic here
        navigate('/Stock-Images/Login'); // Redirect after signup
    };

    const handleHomeRedirect = () => {
        navigate('/Stock-Images'); // Redirect to home
    };

    return (
        <div>
            <div class="login__background">
                <section className="signin__section">
                    <div class="signin__wrapper">
                        <div class="signin__content">
                            <h2>Create Account</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" class="form__input" placeholder="User Name" required/>
                                <input type="email" class="form__input" placeholder="Email Address" required/>
                                <input type="password" class="form__input" placeholder="Enter Password" required/>
                                <input type="password" class="form__input" placeholder="Confirm Password" required/>
                                {/**/}
                                <p>
                                    <input type="checkbox" required/> I accept your terms & conditions
                                </p>
                                <div className="signcreat d-flex justify-content-between">
                                    <button className="white__btn">Create Account</button>
                                </div>
                            </form>
                            <div className="d-flex justify-content-between mt-4"> {/* Added margin-top for spacing */}
                                <button type="submit" className="cmn--btn">
                                    <span>Sign In</span>
                                </button>
                                <button type="button" className="cmn--btn" onClick={handleHomeRedirect}>
                                    <span>Home</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Signup;