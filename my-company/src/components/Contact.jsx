import { useState } from "react"

function Contact() {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''  
})

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form Submitted!')
}


    return(
        <div style={{ padding: '20px' }}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Please enter your name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ display: 'block', margin: '10px' }}
                />

                <input type="email" 
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ display: 'block', margin: '10px 0' }} 
                />

                <textarea name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange} 
                style={{ display:'block', margin:'10px 0' }}               
                >
                </textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default Contact