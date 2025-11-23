import './App.css';
import { NavBar } from './components/nav/NavBar';
import { PageContainer } from './components/pages/PageContainer';
import { Home } from './components/pages/Home';
import { Destination } from './components/pages/Destination';
import { useNavigation } from './context/NavigationContext';
import { useState, useEffect, useRef } from 'react';

function App() {
  const { activeTab } = useNavigation();
  const [direction, setDirection] = useState('right');
  const prevTab = useRef('00');

  useEffect(() => {
    const tabOrder = ['00', '01', '02', '03'];
    const prevIndex = tabOrder.indexOf(prevTab.current);
    const currentIndex = tabOrder.indexOf(activeTab);

    setDirection(currentIndex > prevIndex ? 'right' : 'left');
    prevTab.current = activeTab;
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case '00':
        return <Home />;
      case '01':
        return <Destination />;
      // case '02':
      //   return <Crew />;
      // case '03':
      //   return <Technology />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <NavBar />
      <PageContainer
        otherStyles={`page-content slide-${direction}`}
        key={activeTab}
      >
        {renderContent()}
      </PageContainer>
    </div>
  );
}

export default App;
