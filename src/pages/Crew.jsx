import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import anousheh from '../assets/crew/image-anousheh-ansari.png';
import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import classes from './Crew.module.css';
const crew = [
  {
    role: 'COMMANDER',
    name: 'DOUGLAS HURLEY',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: douglas,
  },
  {
    role: 'MISSION SPECIALIST',
    name: 'MARK SHUTTLEWORTH',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: mark,
  },
  {
    role: 'PILOT',
    name: 'VICTOR GLOVER',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    image: victor,
  },
  {
    role: 'FLIGHT ENGINEER',
    name: 'ANOUSHEH ANSARI',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    image: anousheh,
  },
];

export const Crew = () => {
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      if (eventData.dir === 'Right' && member < 3) setMember(member + 1);
      if (eventData.dir === 'Left' && member > 0) setMember(member - 1);
    },
  });
  const [member, setMember] = useState(0);
  return (
    <div {...handlers} className={classes.container}>
      <div className={`${classes.title} font-barlow-preset-5`}>
        <span style={{ opacity: '25%' }}>02</span> CREW
      </div>
      <div className={classes.descriptionContainer}>
        <p className={`${classes.role} font-bellefair-preset-4`}>
          {crew[member].role}
        </p>
        <p className="font-bellefair-preset-3">{crew[member].name}</p>
        <p className={`${classes.para} font-barlow-preset-9`}>
          {crew[member].description}
        </p>
        <div>
          <button
            className={`${classes.btn} ${member === 0 && classes.active}`}
            onClick={() => setMember(0)}
          ></button>
          <button
            className={`${classes.btn} ${member === 1 && classes.active}`}
            onClick={() => setMember(1)}
          ></button>
          <button
            className={`${classes.btn} ${member === 2 && classes.active}`}
            onClick={() => setMember(2)}
          ></button>
          <button
            className={`${classes.btn} ${member === 3 && classes.active}`}
            onClick={() => setMember(3)}
          ></button>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img
          key={member}
          src={crew[member].image}
          className={classes.img}
          alt="crew member"
        />
      </div>
    </div>
  );
};
