const CardImage = ({img, title, description, style, className, onClick}) => {
    return (
        <div style={{width: "300px", ...style}} className={"shadow cursor-pointer " + className} onClick={onClick}>
            <img src={img} style={{width: 300, height: 200}} />
            <div style={{height: "200px"}} className="p-5">
                <h1 className="text-xl mb-5">{title}</h1>
                <p>{description.slice(0, 130)}</p>
            </div>
        </div>
    )
}

export default CardImage;