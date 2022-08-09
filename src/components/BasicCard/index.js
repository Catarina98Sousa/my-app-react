import "./basic-card.css";
import ImgAlt from "../../image/kawaiicat.png";


function BasicCard(props) {
    
    const myDate = new Date(props.date).toLocaleDateString("en-US",{
    day:'numeric',
    month:'long',
    year: 'numeric'
});
    return (
        <div className="basic-card" id={props.id}>
            {props.imgPath? (<img
                src={props.imgPath } 
                className="basic-card__img"
                alt={props.alt}
            /> ):
            (<img
            src={ImgAlt} alt="" className="basic-card__img"/>)}
            <div className="basic-card__body">
                {props.date && <span>{myDate}</span>}
                <h5>{props.title}</h5>
                <p className="basic-card__description">{props.description}</p>
                <a href={props.url}>{props.link}</a>
            </div>
        </div>
    );
}

export default BasicCard;
