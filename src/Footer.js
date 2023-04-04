import Nav from "./Nav";
export default function Footer (props){
    const areaLabel = "Bottom Navigation"
    const id = "bottom"
    const links = [
            {href:"...", discription: "Home"},
            {href:"...", discription: "Women's"},
            {href:"...", discription: "Men's"},
            {href:"...", discription: "On the Street"},
            {href:"...", discription: "The Catwalk"},
            {href:"...", discription: "AdWatch"},
            {href:"...", discription: "About"},
            {href:"...", discription: "Tips"}
        ]

        const linksList = links.map((link)=>{
            return (
            <li>
                <a href ="...">{link.discription}</a>
            </li>
            );
        });
    return (
            <div className="footer">
                <Nav 
                linksList ={linksList}
                areaLabel = {areaLabel}
                id = {id}
                />
            <h5>{'\u00a9'} 2013 Valet Industries, Inc</h5>
            </div>
    
    )
}