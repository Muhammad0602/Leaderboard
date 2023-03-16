const user = document.querySelector('.name');
const score = document.querySelector('.score');
const scoreTable = document.querySelector('.score-history');

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
            user: user.value, 
            score: score.value
         }),
       });
        user.value = "";
        score.value = "";
        const data =  await response.json();
        return data;  
    } catch(e) {
        console.log("There is an error, please check");
    }
  return "Leaderboard score created correctly"
 }

const get = async () => {
    try{
       const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WXAmyWd8ftkV5nFVGtEc/scores/',
        );
       const data = await response.json();
        return data;  
    } catch (error) {
        console.log(error);
    }
}

const update = () => {
    get().then(res => {
        res.result.forEach(user => {
        const tr = document.createElement('tr');   
        tr.innerHTML = `<td> ${user.user}<td>
                        <td> ${user.score}</td>`;
        scoreTable.appendChild(tr);
        })
    });
}

export {post, update};
