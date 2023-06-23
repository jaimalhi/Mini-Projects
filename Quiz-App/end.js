const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//get local storage, or get empty array if localStorage null
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    //save button gets enabled if there is text in username field
    saveScoreBtn.disabled = !username.value;
});

//e = event
saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    //if b.score > a.score, but b before a, has implicit return
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    //update scores in local storage
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("index.html");
};