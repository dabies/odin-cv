export default function SkillsList({ 
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6,
    skill7,
    skill8,
    skill9,
    skill10
  }) {

    function displaySkill(skill) {
        if(skill !== '') {
            return <li>{skill}</li>
        }
    }

    return (
        <ul className="cv-output-skills-list">
            {displaySkill(skill1)}
            {displaySkill(skill2)}
            {displaySkill(skill3)}
            {displaySkill(skill4)}
            {displaySkill(skill5)}
            {displaySkill(skill6)}
            {displaySkill(skill7)}
            {displaySkill(skill8)}
            {displaySkill(skill9)}
            {displaySkill(skill10)}
        </ul>
    )
}