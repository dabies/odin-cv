export default function AppButton({children, onClick}) {
    return <button className='cv-input-button' onClick={onClick}>{children}</button>
}