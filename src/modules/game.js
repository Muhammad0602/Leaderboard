const post = async () => {
    try{
       const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WXAmyWd8ftkV5nFVGtEc/scores/',
        {
         method: 'POST', 
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            user: "Muhammad", 
            score: "99"
         }),
       });
        const data =  await response.json();
        return data;  
    } catch(e) {
        console.log("There is an error, please check");
    }
  return "Leaderboard score created correctly"
 }

// post().then(result => console.log(result))

const get = async () => {
    const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WXAmyWd8ftkV5nFVGtEc/scores/',
        );
    const data = await response.json();
        return data;
}

// get().then(result => console.log(result));