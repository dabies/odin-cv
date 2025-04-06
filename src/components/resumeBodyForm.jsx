import { useState } from "react";

export default function ResumeBodyForm({onSubmission, onExit, initialValues, formLocation}) {
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
                <label htmlFor="title" aria-label="Title">Title:
                    <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    value={formData.title}
                    onChange={handleChange} />
                </label>
            </div>
            <div>
                <label htmlFor="date" aria-label="Date">Date:
                    <input 
                    type="text" 
                    name="date" 
                    id="date" 
                    value={formData.date}
                    onChange={handleChange} />
                </label>
            </div>
            <div>
                <label htmlFor="institution" aria-label="institution">Institution:
                    <input 
                    type="text" 
                    name="institution" 
                    id="institution"
                    value={formData.institution}
                    onChange={handleChange} />
                </label>
            </div>
            <div>
                <label htmlFor="location" aria-label="Location">Location:
                    <input 
                    type="text" 
                    name="location" 
                    id="location"
                    value={formData.location}
                    onChange={handleChange} />
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