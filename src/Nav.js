export default function Nav(props){
    return(
        <nav  aria-label= {props.areaLabel} role="navigation">
            <ul id = {props.id}>
                {props.linksList}
            </ul>
        </nav>
    )
}