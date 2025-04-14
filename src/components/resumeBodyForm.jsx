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
            <div>
                <label htmlFor="bullet1">Resume Bullet:
                    <textarea onChange={handleChange} type="text" value={formData.bullet1} name='bullet1' id="bullet1" required/>
                </label>
                <label htmlFor="bullet2">Resume Bullet:
                    <textarea onChange={handleChange} type="text" value={formData.bullet2} name='bullet2' id="bullet2" required/>
                </label>
                <label htmlFor="bullet3">Resume Bullet:
                    <textarea onChange={handleChange} type="text" value={formData.bullet3} name='bullet3' id="bullet3" required/>
                </label>
                <label htmlFor="bullet4">Resume Bullet (optional):
                    <textarea onChange={handleChange} type="text" value={formData.bullet4} name='bullet4' id="bullet4" />
                </label>
                <label htmlFor="bullet5">Resume Bullet (optional):
                    <textarea onChange={handleChange} type="text" value={formData.bullet5} name='bullet5' id="bullet5" />
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