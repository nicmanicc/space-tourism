import classes from './LinkContainer.module.css';
import { useNavigation } from '../../context/NavigationContext';

export const LinkContainer = ({ otherStyles }) => {
  const { activeTab, setActiveTab } = useNavigation();
  return (
    <div className={`${classes.linkContainer}  ${otherStyles || ''}`}>
      <button
        className={`font-barlow-preset-8 ${
          activeTab === '00' ? classes.active : ''
        }`}
        onClick={() => setActiveTab('00')}
      >
        <span style={{ fontWeight: 'bold' }}>00</span> HOME
      </button>
      <button
        className={`font-barlow-preset-8 ${
          activeTab === '01' ? classes.active : ''
        }`}
        onClick={() => setActiveTab('01')}
      >
        <span style={{ fontWeight: 'bold' }}>01</span> DESTINATION
      </button>
      <button
        className={`font-barlow-preset-8 ${
          activeTab === '02' ? classes.active : ''
        }`}
        onClick={() => setActiveTab('02')}
      >
        <span style={{ fontWeight: 'bold' }}>02</span> CREW
      </button>
      <button
        className={`font-barlow-preset-8 ${
          activeTab === '03' ? classes.active : ''
        }`}
        onClick={() => setActiveTab('03')}
      >
        <span style={{ fontWeight: 'bold' }}>03</span> TECHNOLOGY
      </button>
    </div>
  );
};
