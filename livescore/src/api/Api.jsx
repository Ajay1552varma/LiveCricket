//const API_key="4b3af51c-1b77-4ac8-b989-5675d197a774";

// It will get all the upcoming matches;

export const Api=()=>{
    const url="https://api.cricapi.com/v1/matches?apikey=4b3af51c-1b77-4ac8-b989-5675d197a774&offset=0";
    return fetch(url)
    .then((responce)=>{
        return responce.json();
    })
    .catch((error)=>{
        console.log("The Error is:",error);
    })
}
