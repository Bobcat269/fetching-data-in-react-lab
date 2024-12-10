import { useState, useEffect } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import {lookupStarships, search} from "./services/starshipService"


const App = () => {


  const doSearch = async (search) => {
    // console.log(search);
    let response = await lookupStarships(search)
    // console.log(response);
    setStarships(response)
    
  }

  //use state
  const [starships, setStarships] = useState([])

  //use effect to call api on page load
   useEffect(() => {
    const loadStarships = async () => {
      let response = await search()
      // console.log(response);   
      setStarships(response)

    }
  loadStarships()
   },[])//need [] at the end to only run the first time the page finishes loading
   //otherwise we cause a loop by running it each time the object changes

  //  setStarships()
   //let's try passing this to the StarshipList

   

  return (
    <>
    <h1>Welcome to the Shipyard!</h1>
    <StarshipSearch mySearch={doSearch}/>
    <StarshipList shipInfo={starships}/>
    </>
  );
}

export default App