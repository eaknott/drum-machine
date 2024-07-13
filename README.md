# React Drum Kit

This simple drum kit is built with React, and it plays 9 different sounds through unique keys or by clicking the designated buttons.

## Table of contents

- [Overview](#overview)
  - [What it does](#what-it-does)
  - [Links](#links)
- [Usage](#usage)
  - [Built with](#built-with)
  - [How to use](#how-to-use)
  - [What I learned](#what-i-learned)
- [Acknowledgments](#acknowledgments)

## Overview

### What it does

With a simple interface, this displays drum pads with a button for each keyboard letter which plays a different sound in the drum kit.

A display on the top shows the most recently played sound, whether played by hitting the corresponding key or by clicking on the corresponding button labeled with the key letter.

### Links

- Live Site URL: [Github Pages](https://eaknott.github.io/faq-accordion/)

## Usage

### Built with

- React JSX
- React Hooks: useEffect, useState
- CSS custom properties
- Flexbox

### How to use

Initial load display shown below:

<img src="/public/initialDisplayDrumPads.png">

#### Keys and their corresponding sounds

- Q - Heater 1
- W - Heater 2
- E - Heater 3
- A - Heater 4
- S - Clap
- D - Open-HH
- Z - Kick-'n'-Hat
- X - Kick
- C - Closed-HH

#### Top display

When a button on the drum pad is clicked, or when the corresponding letter is pressed on the keyboard, the sound plays and the sound name is displayed in the top display.

Below shows which sound was played when the "w" key is hit:

 <img src="/public/drumPadsTopDisplay.png">

Below shows which sound was played when the "z" button is clicked:

<img src="/public/zKeyDisplay.png">

### What I learned

- using React hooks: useEffect and useState
- basic React components
- DOM manipulation in React
- practical use of JSX

## Acknowledgments

- Website - [Emily Knott](https://www.emilyknott.com)
- This project is built as part of the freeCodeCamp Front End Libraries certification https://www.freecodecamp.org/learn/front-end-development-libraries/
