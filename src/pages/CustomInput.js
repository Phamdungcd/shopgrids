function CustomInput(props) {
    const { type, name, placeholder, className } = props;
    return (
        <>
            <div>
                <input className={`form-control ${className}`} placeholder={placeholder} type={type} name={name} />
            </div>
        </>
    );
}

export default CustomInput;
