import classes from './LinkContainer.module.css';

export const LinkContainer = ({ otherStyles }) => {
  return (
    <div
      className={`${classes.linkContainer} font-barlow-preset-8 ${otherStyles}`}
    >
      <a>
        <span style={{ fontWeight: 'bold' }}>00</span> HOME
      </a>
      <a>
        <span style={{ fontWeight: 'bold' }}>01</span> DESTINATION
      </a>
      <a>
        <span style={{ fontWeight: 'bold' }}>02</span> CREW
      </a>
      <a>
        <span style={{ fontWeight: 'bold' }}>03</span> TECHNOLOGY
      </a>
    </div>
  );
};
