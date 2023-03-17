const post = async (user, score) => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7V2yrQIuAs7LkN5UVZuE/scores/',
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
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7V2yrQIuAs7LkN5UVZuE/scores/',
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error(error);
    throw new Error('Try again!');
  }
};

const update = (scoreTable) => {
  scoreTable.innerHTML="";
  get().then((res) => {
    const sorted = res.result.sort((a,b) => b.score-a.score);
    sorted.forEach((user) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td> ${user.user}<td>
                        <td> ${user.score}</td>`;
      scoreTable.appendChild(tr);
    });
  });
};

export { post, update };
