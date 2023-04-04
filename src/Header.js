import Nav from "./Nav";
export default function Header(props){
    const areaLabel = "Main Navigation"
    const id = "top"
    const links = [
            {href:"...", discription:"Women's"},
            { href:"...", discription: "Men's"},
            {href:"...", discription: "On the Street"},
            {href:"...", discription:"The Catwalk"},
            {href:"...", discription:"AdWatch"},
            {href:"...", discription:"About"}
        ]
    const linksList = links.map((link)=>{
        return (
        <li>
            <a href={link.href}>{link.discription}</a>
        </li>
        );
    });
    return(
        <div className = "header">
            <h1 id="title">Sartre's List</h1>
            <h2>Better-Dressed People</h2>
            <Nav areaLabel={areaLabel}
                id ={id}
                linksList={linksList}
                />

        </div>
    )
}