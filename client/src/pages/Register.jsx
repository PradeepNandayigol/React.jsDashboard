import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const Register = () => {
    // const [user, setUser] = useState();
    // const [email, setEmail] = useState();
    // const [phone, setPhone] = useState();
    // const [password,setPassword] = useState();

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data = await response.json();
            console.log("response from server", res_data.message);

            if (response.ok) {
                storeTokenInLS(res_data.token)
                // localStorage.setItem("token", res_data.token);
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                })
                navigate("/")
                toast.success("Registration succesfull")
            }else{
                toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
            }
            console.log(response)
        } catch (error) {
            console.log("register", error);
        }
    }


    return (
        <>
            <section className='main'>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img
                                    src='/image/abac.jpg'
                                    alt='a girl is try to registration'
                                    width="500"
                                    height="500" />
                            </div>
                            <div className="registration-form">
                                <h1 className='main-heading mb-3'>Registration form</h1>
                                <br />

                                <form onSubmit={handleSubmit}>
                                    <div className='inla'>
                                        <label htmlFor='username'>username</label>
                                        <input
                                            type='text'
                                            name='username'
                                            placeholder='username'
                                            id='username'
                                            required
                                            autoComplete='off'
                                            value={user.username}
                                            // onChange={(e) => setUser(e.target.value)} value={user}
                                            onChange={handleInput}
                                        />

                                        <label htmlFor='enter your email'>email</label>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='email'
                                            id='email'
                                            required
                                            autoComplete='off'
                                            value={user.email}
                                            onChange={handleInput}
                                        // onChange={(e) => setEmail(e.target.value)} value={email}
                                        />

                                        <label htmlFor='username'>phone</label>
                                        <input
                                            type='text'
                                            name='phone'
                                            placeholder='phone'
                                            id='phone'
                                            required
                                            autoComplete='off'
                                            value={user.phone}
                                            onChange={handleInput}
                                        // onChange={(e) => setPhone(e.target.value)} value={phone}
                                        />

                                        <label htmlFor='username'>password</label>
                                        <input
                                            type='text'
                                            name='password'
                                            placeholder='password'
                                            id='password'
                                            required
                                            autoComplete='off'
                                            value={user.password}
                                            onChange={handleInput}
                                        // onChange={(e) => setPassword(e.target.value)} value={password}
                                        />
                                    </div>
                                    <br />

                                    <button type='submit' className='btn btn-submit'>
                                        register now

                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Register
