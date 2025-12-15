import { useState } from 'react';
import { PlanetDescription } from '../components/PlanetDescription';
import europa from '../assets/destination/image-europa.png';
import mars from '../assets/destination/image-mars.png';
import moon from '../assets/destination/image-moon.png';
import titan from '../assets/destination/image-titan.png';
import classes from './Desination.module.css';
import { useSwipeable } from 'react-swipeable';

const planet_info = [
  {
    name: 'MOON',
    description:
      'See our planet as you’ve never seen it before. A perfect \n relaxing trip away to help regain perspective and come \n back refreshed. While you’re there, take in some history\n by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 km',
    travel_time: '3 days',
    image: moon,
  },
  {
    name: 'MARS',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them\n to tackle Olympus Mons, the tallest planetary mountain in\n our solar system. It’s two and a half times the size of\n Everest!',
    distance: '225 MIL. km',
    travel_time: '9 months',
    image: mars,
  },
  {
    name: 'EUROPA',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter,\n Europa is a winter lover’s dream. With an icy surface, it’s\n perfect for a bit of ice skating, curling, hockey, or simple\n relaxation in your snug wintery cabin.!',
    distance: '628 MIL. km',
    travel_time: '3 years',
    image: europa,
  },
  {
    name: 'TITAN',
    description:
      'The only moon known to have a dense atmosphere other\n than Earth, Titan is a home away from home (just a few\n hundred degrees colder!). As a bonus, you get striking\n views of the Rings of Saturn.',
    distance: '1.6 BIL. km',
    travel_time: '7 years',
    image: titan,
  },
];

export const Destination = () => {
  const [currentPlanet, setCurrentPlanet] = useState('MOON');
  const planet = planet_info.find((p) => p.name === currentPlanet);
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      var previousIndex =
        planet_info.findIndex((p) => p.name === currentPlanet) - 1;
      var nextIndex =
        planet_info.findIndex((p) => p.name === currentPlanet) + 1;
      if (eventData.dir === 'Right' && nextIndex < planet_info.length)
        setCurrentPlanet(planet_info[nextIndex].name);
      if (eventData.dir === 'Left' && previousIndex > -1)
        setCurrentPlanet(planet_info[previousIndex].name);
    },
  });

  return (
    <div {...handlers} style={{ color: 'white' }}>
      <div className={classes.destinationContainer}>
        <div className={`${classes.title} font-barlow-preset-5`}>
          <span style={{ opacity: '25%' }}>01</span> PICK YOUR DESTINATION
        </div>
        <img
          key={planet.name}
          src={planet.image}
          className={classes.planetImage}
          alt="Planet"
        />
        <div className={classes.btnDescContainer}>
          <div className={classes.descriptionContainer}>
            {planet_info.map((planet) => {
              return (
                <button
                  key={planet.name}
                  className={`${classes.btn} font-barlow-preset-8 ${
                    currentPlanet === planet.name ? classes.active : ''
                  }`}
                  onClick={() => setCurrentPlanet(planet.name)}
                >
                  {planet.name}
                </button>
              );
            })}
            <PlanetDescription
              name={planet.name}
              desc={planet.description}
              distance={planet.distance}
              time={planet.travel_time}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
