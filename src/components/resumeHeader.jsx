
export default function ResumeHeader({ fullName, email, phoneNumber, website, linkedIn }) {
    return (
        <div className="cv-output-header">
            <h1>{fullName}</h1>
            <div className="cv-output-header-contacts">
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Phone: </strong>{phoneNumber}</p>
                <p><strong>Website: </strong>{website}</p>
                <p><strong>LinkedIn: </strong>{linkedIn}</p>
            </div>
        </div>
    )
}