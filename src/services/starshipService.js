
const getStarships = async () => {

    let response = await fetch(`https://swapi.dev/api/starships/`);
    // return response.json();

    //returning an array instead of an object
    const data = await response.json()
    return data.results

        
}

const lookupStarships = async (props) => {

    let response = await fetch(`https://swapi.dev/api/starships/?search=${props}`)
    const data = await response.json()
    return data.results //once again making an object containing an array into an array
}

export {getStarships as search, lookupStarships}
