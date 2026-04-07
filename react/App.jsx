import { useState } from 'react';
import './App.css';

function App() {
  var [userChoice, setUserChoice] = useState('');
  var [compChoice, setCompChoice] = useState('');
  var [result, setResult] = useState('');
  var [rounds, setRounds] = useState(0);
  var [streak, setStreak] = useState(0);
  var [history, setHistory] = useState([]);

  function getEmoji(choice) {
    if (choice === 'rock') return '🪨';
    if (choice === 'paper') return '📄';
    if (choice === 'scissors') return '✂️';
    return '-';
  }

  function play(choice) {
    var options = ['rock', 'paper', 'scissors'];
    var comp = options[Math.floor(Math.random() * 3)];

    var res;

    if (choice === comp) {
      res = 'Draw';
      setStreak(0);
    } else if (
      (choice === 'rock' && comp === 'scissors') ||
      (choice === 'paper' && comp === 'rock') ||
      (choice === 'scissors' && comp === 'paper')
    ) {
      res = 'You Win!';
      setStreak(streak + 1);
    } else {
      res = 'You Lose!';
      setStreak(0);
    }

    var newRound = rounds + 1;
    setRounds(newRound);
    setUserChoice(choice);
    setCompChoice(comp);
    setResult(res);

    var entry = 'Round ' + newRound + ': ' + getEmoji(comp) + ' : ' + getEmoji(choice) + ' — ' + res;
    setHistory([...history, entry]);
  }

  function resetGame() {
    setUserChoice('');
    setCompChoice('');
    setResult('');
    setRounds(0);
    setStreak(0);
    setHistory([]);
  }

  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>

      <div className="buttons">
        <button onClick={() => play('rock')}>Rock</button>
        <button onClick={() => play('paper')}>Paper</button>
        <button onClick={() => play('scissors')}>Scissors</button>
        <button onClick={resetGame}>Reset</button>
      </div>

      <div className="result-area">
        <p>Computer : You</p>
        <p>{getEmoji(compChoice)} : {getEmoji(userChoice)}</p>
        <p>Result: {result || '-'}</p>
        <p>Rounds played: {rounds}</p>
        <p>Win streak: {streak}</p>
      </div>

      <div className="history">
        <h3>Move History</h3>
        <ul>
          {history.map(function(item, index) {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
