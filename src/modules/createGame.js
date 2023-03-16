// Getting the id to create this game

const createGame = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
     {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "My leaderboard game"
    })
    });
    const result = await response.json();
    return result;
};

