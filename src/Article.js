//import picture from "./blog-image-1.jpg"
export default function Article(props){
    return(
        <div className="article">
            <time className="time">{props.time}</time>
            <h2>{props.subheading}</h2>
        <img src={props.image} alt= {props.alt}/>
            <p>{props.paragraph}<br/><a class= "continues" href="...">Continues...</a>
            </p>
        </div>
    )
}