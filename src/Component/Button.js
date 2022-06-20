function Button({ children, onClose, Class}) {
    return (
        <button type="submit" onClick={onClose} className={' bg-sky-400 p-2 rounded-md ' + Class}>{children}</button>
    )
}

export default Button