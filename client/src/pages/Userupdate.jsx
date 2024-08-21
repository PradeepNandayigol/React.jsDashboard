import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";



const Userupdate = () => {

  const [user, setUser] = useState({
    email: "",
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
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        console.log("response from server", res_data);
        storeTokenInLS(res_data.token)
        // localStorage.setItem("token", res_data.token);
        setUser({
          email: "",
          password: "",
        })
        navigate("/")
        toast.success("login succesfull");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message);
      }
      console.log(response)
    } catch (error) {
      console.log("login", error);
    }
  }

  return (
    <>
      <section className="main">
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              
              <div className="registration-form">
                <h1 className='main-heading mb-3'>Registration form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div className="inla">


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
                    Login

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

export default Userupdate;
