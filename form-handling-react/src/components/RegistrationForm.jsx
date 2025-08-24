import { useState } from 'react';
import { useFormik } from 'formik';

function RegistrationForm(){
    const[formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange = (event) =>{
        const{name, value}= event.target;
        setFormData(prevState=>({...prevState, [name]: value}))
    }


    const handleSubmit = (event)=>{
        event.preventDefault();

        if(!formData.name || !formData.email || !formData.password){
            alert("All fields required!")
            return;
        }
    console.log("Form Submitted!", formData)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> User Name
                    <input
                    name='name'
                    type='text'
                    onChange={handleChange}
                    value={formData.name}
                    
                    />
                </label>

                <label> Email Address
                    <input 
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={formData.email}
                    />
                </label>

                <label> Password
                    <input 
                    type='password'
                    name='password'
                    onChange={handleChange}
                    value={formData.password}
                    />
                </label>
                <button>Register</button>
            </form>
        </div>

    )
}

export default RegistrationForm;