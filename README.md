# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Reflection

Prompts Used:
1. How do I structure a React color guessing game with state for target color, score, and locked guesses?
2. How can I highlight the correct swatch after a wrong guess in React?
3. Can you improve the CSS to make the swatches feel more interactive and modern?

How AI helped me:
I used AI as a pair programming assistant to help with debugging state flow in React when trying to lock guesses and reset rounds, improving UI feedback for correct vs incorrect swatch highlights, and upgrading CSS for visual hierarchy.

What I figured out myself:
I personally designed the game flow logic which includes when to lock the game after a guess, how score should increment only on correct answers, and how to structure the reset so each round feels independent and clean.
