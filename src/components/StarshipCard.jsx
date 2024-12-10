
const StarshipCard = ({shipInfo}) => {

    return(
        
        <div className="shipCard">
            <h2>{shipInfo.name}</h2>
            <h3>{shipInfo.starship_class}</h3>
            <h3>{shipInfo.manufacturer}</h3>
            <h3>{shipInfo.model}</h3>
        </div>
        
    )
}


export default StarshipCard