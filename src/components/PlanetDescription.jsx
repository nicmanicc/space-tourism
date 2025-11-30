import classes from './PlanetDescription.module.css';
export const PlanetDescription = ({ name, desc, distance, time }) => {
  return (
    <div>
      <p className={`${classes.name} font-bellefair-preset-2`}>{name}</p>
      <p style={{ minHeight: '100px' }} className="font-barlow-preset-9">
        {desc}
      </p>
      <hr className={classes.hr}></hr>
      <div className={classes.distanceContainer}>
        <p className="font-barlow-preset-7">AVG. DISTANCE</p>
        <p className="font-barlow-preset-7">EST. TRAVEL TIME</p>
        <p className="font-bellefair-preset-6">{distance}</p>
        <p className="font-bellefair-preset-6">{time}</p>
      </div>
    </div>
  );
};
