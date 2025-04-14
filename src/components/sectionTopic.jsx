export default function TopicHeader({ title, date, institution, location }) {
    return (
        <>
            <div className="cv-output-topic-row title">
                <p><strong>{title}</strong></p>
                <p>{date}</p>
            </div>
            <div className="cv-output-topic-row">
                <span><em>{institution}</em></span>
                <span><em>{location}</em></span>
            </div>
        </>
    )
}