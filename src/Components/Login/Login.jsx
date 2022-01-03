import React from 'react';
import { useForm } from "react-hook-form";
import { Link,useLocation,useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const {googleSignIn} = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useNavigate()
    const redirect_url = location.state?.from || '/home'


    const handleGoogleSign = () => {
        googleSignIn()
        .then(res => {
            history.push(redirect_url)
        })
    }

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="form_container">
            <div className="form_img">
                <img style={{width:'100%'}} src="" alt="" />
            </div>

            <div className="react_form">
                <form style={{width:'90%'}} onSubmit={handleSubmit(onSubmit)}>
                    <h1 style={{textAlign:'center',color:'rgba(247, 63, 30, 0.945)'}}>Please Log in first</h1>
                    <input className="inputGroup" defaultValue="" placeholder="Your Name" {...register("name")} />
                    <input className="inputGroup" defaultValue="" placeholder="Your Email" {...register("email", { required: true })} />
                    {errors.email && <span style={{color:'red',margin: '.7rem'}}>User email is required</span>}
                    <input className="inputBtn" type="submit" />
                    <small style={{margin: '.7rem'}}>First time in this site?</small>
                    <Link to="/register">Register Now</Link><br />
                    <button className="googleBtn" onClick={handleGoogleSign}>Google Sign in</button>
                </form>
                <div className="tik">
                <img style={{width:'100%',height:'100%'}} src="https://phoneky.co.uk/thumbs/screensavers/down/anime/cartoon_xjmfxo3b.gif" alt="" />
            </div>
            </div>
        </div>
    );
};
export default Login;