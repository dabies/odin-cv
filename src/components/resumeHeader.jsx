export default function ResumeHeader({ fullName, email, phoneNumber }) {
    return (
        <div className="cv-output-header">
            <h1>{fullName}</h1>
            <div className="cv-output-header-contacts">
                <p>{email}</p>
                <p>{phoneNumber}</p>
            </div>
        </div>
    )
}