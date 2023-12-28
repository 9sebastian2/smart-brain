import './App.css';
import { useCallback, useState } from "react";
import { loadSlim } from "tsparticles-slim";
import Navigation from './Components/Navigation/Navigation';
import Particles from "react-tsparticles";
// import Clarifai from "clarifai";
import Logo from './Components/Logo/Logo';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';

// const app = new Clarifai.App({
//     apiKey: '61b2cfdc15394082bdd348b67509956a'
//    });

function App() {
    const [input, setInput] = useState('')

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    const particlesOptions = {
        fpsLimit: 120,
        interactivity: {
            events: {
                // onClick: {
                //     enable: true,
                //     mode: "push",
                // },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 110,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 175,
            },
        },
        detectRetina: true,
    }

    const onInputChange = (event) => {
        setInput(event.target.value);
        console.log(input);
    }

    const onButtonSubmit = () => {
        console.log('click');
    }

  return (
    <div className="App">
          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
          <FaceRecognition />
          <Particles
                className='particles'
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesOptions}
          />
    </div>
  );
}

export default App;
