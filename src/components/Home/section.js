import Hr from "../Hr";

const Section = ({children, style, className, title, onClick}) => {
    return (
        <div className={"p-10 " + className } style={style} onClick={onClick}>
            <div className="flex flex-col items-center">
                <h1 className="text-5xl mb-5">{title}</h1>
                <Hr />
            </div>
            {children}
        </div>
    )
}

export default Section;