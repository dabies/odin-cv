import { useState } from "react";

export default function SkillsForm({initialValues, onSubmission, onExit, formLocation}) {
    const[formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmission(formData, formLocation);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="skills-form">
                <label htmlFor="skill1">Skill:
                    <input onChange={handleChange} type="text" value={formData.skill1} name='skill1' id="skill1" required/>
                </label>
                <label htmlFor="skill2">Skill:
                    <input onChange={handleChange} type="text" value={formData.skill2} name='skill2' id="skill2" required/>
                </label>
                <label htmlFor="skill3">Skill:
                    <input onChange={handleChange} type="text" value={formData.skill3} name='skill3' id="skill3" required/>
                </label>
                <label htmlFor="skill4">Skill:
                    <input onChange={handleChange} type="text" value={formData.skill4} name='skill4' id="skill4" required/>
                </label>
                <label htmlFor="skill5">Skill:
                    <input onChange={handleChange} type="text" value={formData.skill5} name='skill5' id="skill5" required/>
                </label>
                <label htmlFor="skill6">Skill:
                    <input onChange={handleChange} type="text" value={formData.skill6} name='skill6' id="skill6" required/>
                </label>
                <label htmlFor="skill7">Skill (optional):
                    <input onChange={handleChange} type="text" value={formData.skill7} name='skill7' id="skill7" />
                </label>
                <label htmlFor="skill8">Skill (optional):
                    <input onChange={handleChange} type="text" value={formData.skill8} name='skill8' id="skill8" />
                </label>
                <label htmlFor="skill9">Skill (optional):
                    <input onChange={handleChange} type="text" value={formData.skill9} name='skill9' id="skill9" />
                </label>
                <label htmlFor="skill10">Skill (optional):
                    <input onChange={handleChange} type="text" value={formData.skill10} name='skill10' id="skill10" />
                </label>
            </div>
            <button 
            className='submit' 
            type='submit' 
            onClick={onSubmission}>Save Changes</button>
            <button 
            className="exit" 
            aria-label='exit-form' 
            onClick={onExit}>X</button>
        </form>
    )
}