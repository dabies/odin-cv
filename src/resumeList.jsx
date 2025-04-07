export default function BulletsList({ 
    bullet1,
    bullet2,
    bullet3,
    bullet4,
    bullet5
  }) {

    function displayBullet(bullet) {
        if(bullet !== '') {
            return <li>{bullet}</li>
        }
    }

    return (
        <ul className="cv-output-list">
            {displayBullet(bullet1)}
            {displayBullet(bullet2)}
            {displayBullet(bullet3)}
            {displayBullet(bullet4)}
            {displayBullet(bullet5)}
        </ul>
    )
}