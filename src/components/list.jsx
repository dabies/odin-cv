export default function List({ bullets }) {
    return (
        <ul className="cv-output-list">
            {bullets.map(bullet => <li>{bullet}</li>)}
        </ul>
    )
}