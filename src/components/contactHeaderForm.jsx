import { useState } from "react";

export default function ContactForm({onSubmission, onExit, initialValues, formLocation}) {
    const[formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmission(formData, formLocation);
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
                    onChange={handleChange}
                    required />
                </label>
            </div>
            <div>
                <label htmlFor="email" aria-label="email">Email:
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required />
                </label>
            </div>
            <div>
                <label htmlFor="phoneNumber" aria-label="phone number">Phone Number:
                    <input 
                    type="tel" 
                    name="phoneNumber" 
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required />
                </label>
            </div>
            <div>
                <label htmlFor="website" aria-label="Website">Website:
                    <input 
                    type="text" 
                    name="website" 
                    id="website" 
                    value={formData.website}
                    onChange={handleChange}
                    required />
                </label>
            </div>
            <div>
                <label htmlFor="linkedIn" aria-label="Linked In">LinkedIn:
                    <input 
                    type="text" 
                    name="linkedIn" 
                    id="linkedIn" 
                    value={formData.linkedIn}
                    onChange={handleChange}
                    required />
                </label>
            </div>
            <button className='submit' type="submit" onSubmit={onSubmission}>Save Changes</button>
            <button 
            className="exit" 
            aria-label="exit-form"
            onClick={onExit}>X</button>
        </form>
    )
}