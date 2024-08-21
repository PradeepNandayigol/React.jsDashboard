import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"

export const AdminContact = () =>{
    const [contactdata, setContactdata] = useState([]) 
    const {authorizationToken} = useAuth();

    const getcontextData = async() =>{
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken
                }
            });
            const data = await response.json();
            console.log("contact data", data);

            if(response.ok) {
                setContactdata(data)
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    const deleteContactById = async (id) => {
        try {
           
            const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
                method:"PATCH",
                headers:{
                    Authorization:authorizationToken,
                },
            });
            if(response.ok){
                getcontextData();
                toast.success("delete successfully")
            }else{
                toast.error("not delete")
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }

    useEffect(() => {
        getcontextData();

    },[])
    return (
        <>
        <section className="admin-contacts-section">
            <h1>Admin Contact Data</h1>

            <div className="container admin-users">
            {contactdata.map((curElm, index) =>{
                const {username, email, message,_id} = curElm
            return(
                <div key={index} >
                    <p>{username}</p>
                    <p>{email}</p>
                    <p>{message}</p>
                    <button className="btn" onClick={() => deleteContactById(_id)}>delete</button>
                </div>
            )
        })
        }

            </div>
        </section>
       
      
        </>

    )
}