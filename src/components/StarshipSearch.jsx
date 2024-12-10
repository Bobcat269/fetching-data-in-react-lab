import { useState } from "react"

const StarshipSearch = (props) => {

    const [search, setSearch] = useState('')

    //handle empty search
    
    //reflect user input
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.mySearch(search);
        setSearch('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="searchInput">Search for Ships: </label>
            <input
                id='searchInput'
                name='search'
                value={search}
                type='text'
                onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
    )


}


export default StarshipSearch

// For the search feature, create a function in the StarshipSearch component that captures user input 
// and updates a local state. You will need to lift this state up to the App component and then pass 
// it as a prop to StarshipList. Inside StarshipList, use this prop to filter and display the relevant 
// starships based on the search query. Be mindful of state changes and ensure your application re-renders
//  the list when the search query is updated.