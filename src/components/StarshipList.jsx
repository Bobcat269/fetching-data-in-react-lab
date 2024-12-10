import StarshipCard from "./StarshipCard"

const StarshipList = ({shipInfo}) => {
    //return a list of starship cards
    console.log(shipInfo);
    
    return(
        <>
        <ul>
            {shipInfo.map((ship, index) =>
            <StarshipCard key = {index} shipInfo={ship}/>
            )}
        </ul>
        </>
        // <p>shipInfo Placeholder</p>
    )
}

export default StarshipList