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
                <label htmlFor="bullet1">Resume Bullet:
                    <input onChange={handleChange} type="text" value={formData.bullet1} name='bullet1' id="bullet1" required/>
                </label>
                <label htmlFor="bullet2">Resume Bullet:
                    <input onChange={handleChange} type="text" value={formData.bullet2} name='bullet2' id="bullet2" required/>
                </label>
                <label htmlFor="bullet3">Resume Bullet:
                    <input onChange={handleChange} type="text" value={formData.bullet3} name='bullet3' id="bullet3" required/>
                </label>
                <label htmlFor="bullet4">Resume Bullet (optional):
                    <input onChange={handleChange} type="text" value={formData.bullet4} name='bullet4' id="bullet4" />
                </label>
                <label htmlFor="bullet5">Resume Bullet (optional):
                    <input onChange={handleChange} type="text" value={formData.bullet5} name='bullet5' id="bullet5" />
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