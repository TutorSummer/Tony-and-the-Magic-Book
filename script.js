body {
    font-family: 'Segoe UI', sans-serif;
    background: #f0f6ff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    margin: 0;
    overflow-x: hidden;
}

.container {
    max-width: 600px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

h1 {
    text-align: center;
    color: #0066cc;
    margin-bottom: 20px;
    font-size: 1.8em;
}

p {
    text-align: center;
    color: #555;
    margin-bottom: 25px;
}

ul#story-list {
    list-style: none;
    padding: 0;
    min-height: 200px;
    border-radius: 8px;
}

ul#story-list li {
    background: #e9f3ff;
    border: 1px solid #bcdfff;
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 6px;
    display: flex; /* Flexbox for aligning input and text */
    align-items: center; /* Vertically align items */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

    /* Item Entrance Animation */
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn 0.5s forwards;
}

ul#story-list li:nth-child(1) { animation-delay: 0.1s; }
ul#story-list li:nth-child(2) { animation-delay: 0.2s; }
ul#story-list li:nth-child(3) { animation-delay: 0.3s; }
ul#story-list li:nth-child(4) { animation-delay: 0.4s; }
ul#story-list li:nth-child(5) { animation-delay: 0.5s; }
ul#story-list li:nth-child(6) { animation-delay: 0.6s; }
ul#story-list li:nth-child(7) { animation-delay: 0.7s; }
ul#story-list li:nth-child(8) { animation-delay: 0.8s; }

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

ul#story-list li:hover {
    background: #d8edff;
}

ul#story-list li input[type="number"] {
    width: 50px; /* Adjust width as needed */
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #a0c4ff;
    border-radius: 4px;
    font-size: 1em;
    text-align: center;
    -moz-appearance: textfield; /* Hide arrows in Firefox */
}

/* Hide arrows for Chrome, Safari, Edge */
ul#story-list li input[type="number"]::-webkit-outer-spin-button,
ul#story-list li input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

ul#story-list li .story-text {
    flex-grow: 1; /* Allow text to take remaining space */
}

button {
    background: #007acc;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    margin-top: 10px;
    cursor: pointer;
    display: block;
    width: 100%;
    transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

button:active {
    background: #005f99;
    transform: translateY(1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

button#step-hint-btn {
    background: #6c757d;
}

button#step-hint-btn:active {
    background: #5a6268;
}

button#show-answer-btn {
    background: #28a745;
}

button#show-answer-btn:active {
    background: #218838;
}


#result {
    margin-top: 15px;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
}

#result.correct {
    color: #1a7a28;
    background-color: #d4edda;
    border: 1px solid #28a745;
    font-size: 1.1em;
    animation: fadeInOut 3s forwards;
}

#result.wrong {
    color: #880b1e;
    background-color: #f8d7da;
    border: 1px solid #dc3545;
    font-size: 1.1em;
    animation: shake 0.5s, pulseRed 0.5s;
}

@keyframes fadeInOut {
    0% { opacity: 0; transform: translateY(10px); }
    10% { opacity: 1; transform: translateY(0); }
    90% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-10px); }
}

@keyframes shake {
    0% { transform: translateX(0); }
    15% { transform: translateX(-8px) rotate(-1deg); }
    30% { transform: translateX(8px) rotate(1deg); }
    45% { transform: translateX(-8px) rotate(-1deg); }
    60% { transform: translateX(8px) rotate(1deg); }
    75% { transform: translateX(-5px) rotate(-0.5deg); }
    90% { transform: translateX(5px) rotate(0.5deg); }
    100% { transform: translateX(0); }
}

@keyframes pulseRed {
    0% { background-color: #f8d7da; border-color: #dc3545; }
    50% { background-color: #ffcccc; border-color: #ff0000; }
    100% { background-color: #f8d7da; border-color: #dc3545; }
}

/* Confetti styles (optional, but kept for fun) */
.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background-color: #f0c;
    opacity: 0;
    animation: fall 2s ease-out forwards;
    border-radius: 50%;
    z-index: 1000;
}

.confetti:nth-child(2n) { background-color: #0cf; }
.confetti:nth-child(3n) { background-color: #fc0; }
.confetti:nth-child(4n) { background-color: #0c0; }
.confetti:nth-child(5n) { background-color: #c0f; }
.confetti:nth-child(6n) { background-color: #f60; }

@keyframes fall {
    0% {
        transform: translate(0, 0) rotate(0deg) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(var(--x), var(--y)) rotate(720deg) scale(0.5);
        opacity: 0;
    }
}

/* Hint highlight animation */
ul#story-list li.hinted {
    animation: hintGlow 1.5s ease-out forwards;
}

@keyframes hintGlow {
    0% {
        box-shadow: 0 0 10px rgba(255, 200, 0, 0.5);
        background-color: #fffae6;
        transform: scale(1);
    }
    50% {
        box-shadow: 0 0 25px rgba(255, 200, 0, 0.8);
        background-color: #fff0b3;
        transform: scale(1.01);
    }
    100% {
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        background-color: #e9f3ff;
        transform: scale(1);
    }
}
