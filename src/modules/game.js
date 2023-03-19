import first from '../images/first.png';
import second from '../images/second.png';
import third from '../images/third.png';

const post = async (user, score) => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/r6JQfcWGULLwITFalzbT/scores/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: user.value,
          score: score.value,
        }),
      },
    );
    user.value = '';
    score.value = '';
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error('Try again!');
  }
//   return 'Leaderboard score created correctly';
};

const get = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/r6JQfcWGULLwITFalzbT/scores/',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error(error);
    throw new Error('Try again!');
  }
};

const update = (scoreTable) => {
  scoreTable.innerHTML = '';
  get().then((res) => {
    const sorted = res.result.sort((a, b) => b.score - a.score);
    sorted.forEach((user, index) => {
      if(index === 0) {   const tr = document.createElement('tr');
      tr.innerHTML = `<td><img width="20px" height="20px" src=${first}>  ${user.user}<td>
                        <td> ${user.score}</td>`;
      scoreTable.appendChild(tr)}
      else if(index === 1) {   const tr = document.createElement('tr');
      tr.innerHTML = `<td><img width="20px" height="20px" src=${second}>  ${user.user}<td>
                        <td> ${user.score}</td>`;
      scoreTable.appendChild(tr)}
      else if(index === 2) {   const tr = document.createElement('tr');
      tr.innerHTML = `<td><img width="20px" height="20px" src=${third}>  ${user.user}<td>
                        <td> ${user.score}</td>`;
      scoreTable.appendChild(tr)}

      else { 
        const tr = document.createElement('tr');
            tr.innerHTML = `<td>${index+1}.   ${user.user}<td>
                              <td> ${user.score}</td>`;
            scoreTable.appendChild(tr);
      }     
    }); 
  });
};

export { post, update };
