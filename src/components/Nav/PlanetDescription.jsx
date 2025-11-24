export const PlanetDescription = ({ name, desc, distance, time }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{desc}</p>
      <div>
        <p>{distance}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};
