import { useState } from "react";

export default function ContactForm({onSubmission, onExit, initialValues}) {
    const[formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmission(formData);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName" aria-label="full name">Full Name:
                    <input 
                    type="text" 
                    name="fullName" 
                    id="fullName" 
                    value={formData.fullName}
                    onChange={handleChange} />
                </label>
            </div>
            <div>
                <label htmlFor="email" aria-label="email">Email:
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange} />
                </label>
            </div>
            <div>
                <label htmlFor="phoneNumber" aria-label="phone number">Phone Number:
                    <input 
                    type="tel" 
                    name="phoneNumber" 
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange} />
                </label>
            </div>
            <button type="submit" onSubmit={onSubmission}>Save Changes</button>
            <button 
            className="exit" 
            aria-label="exit-form"
            onClick={onExit}>X</button>
        </form>
    )
}