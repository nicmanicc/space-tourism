import spaceport from '../assets/technology/image-spaceport-portrait.jpg';
import capsule from '../assets/technology/image-space-capsule-portrait.jpg';
import vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import classes from './Technology.module.css';
import { useState } from 'react';

const technology_info = [
  {
    name: 'LAUNCH VEHICLE',
    description:
      'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
    image: vehicle,
  },
  {
    name: 'SPACEPORT',
    description:
      'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    image: spaceport,
  },
  {
    name: 'SPACE CAPSULE',
    description:
      'A space capsule is a type of spacecraft that is designed to return to Earth in a controlled manner. Our space capsule is equipped with advanced heat shields and parachutes to ensure a safe landing.',
    image: capsule,
  }
]

export const Technology = () => {
  const [currentTech, setCurrentTech] = useState('LAUNCH VEHICLE');
  const tech = technology_info.find((t) => t.name === currentTech);

  return (
    <div style={{ color: 'white' }}>
      <div className={classes.technologyContainer}>
        <div className={`${classes.title} font-barlow-preset-5`}>
          <span style={{ opacity: '25%' }}>03</span> SPACE LAUNCH 101
        </div>
        <div className={classes.techButtons}>
          {technology_info.map((tech, index) => {
            return (
              <button
                key={tech.name}
                className={`${classes.btn} font-barlow-preset-8 ${currentTech === tech.name ? classes.active : ''
                  }`}
                onClick={() => setCurrentTech(tech.name)}
              >
                <p>{index + 1}</p>
              </button>
            );
          })}
        </div>

        <h2 className={`${classes.technologyName} font-barlow-preset-5`}>
          {tech.name}
        </h2>
        <p className={`${classes.technologyDescription} font-barlow-preset-6`}>
          {tech.description}
        </p>
        <img src={tech.image} className={classes.techImage} alt="Technology" />

      </div>
    </div>
  );
}