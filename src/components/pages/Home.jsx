import classes from './Home.module.css';

export const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.description}>
        <p className="font-barlow-preset-5">SO, YOU WANT TO TRAVEL TO</p>
        <p className="font-bellefair-preset-1">SPACE</p>
        <p className="font-barlow-preset-9">
          Let's face it; if you want to go to space, you might as well genuinely
          <br />
          go to outer space and not hover kind of on the edge of it. Well sit
          <br />
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <button className={`font-bellefair-preset-4 ${classes.exploreBtn}`}>
        EXPLORE
      </button>
    </div>
  );
};
