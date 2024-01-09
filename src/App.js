import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      const keys = [];
      for (let i = 0; i < drumPads.length; i++) {
        keys.push(drumPads[i].char);
      }
      const found = keys.find((ele) => ele === e.key.toUpperCase());
      if (found === undefined) {
        return;
      } else {
        playAudio(e.key.toUpperCase());
      }
      
    })
  })

  const drumPads = [
    {
      char: "Q",
      keyCode: 81,
      sound: "Heater 1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      char: "W",
      keyCode: 87,
      sound: "Heater 2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      char: "E",
      keyCode: 69,
      sound: "Heater 3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      char: "A",
      keyCode: 65,
      sound: "Heater 4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      char: "S",
      keyCode: 83,
      sound: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      char: "D",
      keyCode: 68,
      sound: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      char: "Z",
      keyCode: 90,
      sound: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      char: "X",
      keyCode: 88,
      sound: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      char: "C",
      keyCode: 67,
      sound: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];
  
  function playAudio(selector) {
    const audio = document.getElementById(selector);
    const keys = [];
    for (let i = 0; i < drumPads.length; i++) {
      keys.push(drumPads[i].char);
    }
    const index = keys.indexOf(selector);
    setActiveKey(drumPads[index].sound);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <div className="top-display">{activeKey}</div>
          <div className="drum-pads">
            {drumPads.map(drumPad => 
            <div onClick={() => {playAudio(drumPad.char)}} className="drum-pad" id={drumPad.src}>
              {drumPad.char}
              <audio src={drumPad.src} className="clip" id={drumPad.char}></audio>
              </div>  
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
