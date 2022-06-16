function Button({ children, onClose, Class}) {
    return (
        <button onClick={onClose} className={' bg-sky-400 w-full p-2 rounded-md ' + Class}>{children}</button>
    )
}

export default Button