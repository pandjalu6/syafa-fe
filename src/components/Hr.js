import {mainColor} from '../global';

const Hr = () => {
    return (
        <div className="flex flex-row mb-5 items-end" style={{height: "20px"}}>
            <div style={{height: "10px", width: "60px", background: "black"}}></div>
            <div style={{width: "10px"}}></div>
            <div style={{height: "20px", width: "40px", background: mainColor}}></div>
            <div style={{width: "10px"}}></div>
            <div style={{height: "10px", width: "60px", background: "black"}}></div>
        </div>
    )
}

export default Hr;