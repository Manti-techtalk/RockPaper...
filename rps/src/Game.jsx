import React, { useState } from 'react';
import style from './Game.module.css';

function Game() {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const words = ['Rock', 'Paper', 'Scissors'];

    const randomIndex = () => {
        const rand = Math.floor(Math.random() * words.length);
        return words[rand];
    };

    const handleClick = (choice) => {
        const userSelected = words[choice];
        const computerSelected = randomIndex();
        
        setUserChoice(userSelected);
        setComputerChoice(computerSelected);
        
        handleLogic(userSelected, computerSelected);
    };

    const handleLogic = (userSelected, computerSelected) => {
        if (computerSelected === 'Rock' && userSelected === 'Scissors') {
            setComputerScore(computerScore + 1);
        } else if (computerSelected === 'Rock' && userSelected === 'Paper') {
            setUserScore(userScore + 1);
        } else if (userSelected === computerSelected) {
            // It's a tie; no score update needed
        } else if (userSelected === 'Rock' && computerSelected === 'Scissors') {
            setUserScore(userScore + 1);
        } else if (userSelected === 'Rock' && computerSelected === 'Paper') {
            setComputerScore(computerScore + 1);
        } else if (userSelected === 'Paper' && computerSelected === 'Rock') {
            setUserScore(userScore + 1);
        } else if (userSelected === 'Paper' && computerSelected === 'Scissors') {
            setComputerScore(computerScore + 1);
        } else if (userSelected === 'Scissors' && computerSelected === 'Paper') {
            setUserScore(userScore + 1);
        } else if (userSelected === 'Scissors' && computerSelected === 'Rock') {
            setComputerScore(computerScore + 1);
        }
    };

    return (
        <div className={style.div}>
            <h1 className={style.h1}>Welcome to Rock, Paper, Scissors Game</h1>
            <div className={style.inp}>
                <div className={style.inpp}>
                    <button className={style.btn} onClick={() => handleClick(0)}>Rock</button>
                    <button className={style.btn} onClick={() => handleClick(1)}>Paper</button>
                    <button className={style.btn} onClick={() => handleClick(2)}>Scissors</button>
                </div>
                <p>Your Choice: <br />{userChoice}</p>
                <p>Computer's Choice: <br />{computerChoice}</p>
                <p>Your Score: <br /> {userScore}</p>
                <p>Computer Score: <br /> {computerScore}</p>
            </div>
        </div>
    );
}

export default Game;
