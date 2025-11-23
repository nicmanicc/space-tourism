import './App.css';
import { NavBar } from './components/nav/NavBar';
import { PageContainer } from './components/pages/PageContainer';
import { Home } from './components/pages/Home';
import { useNavigation } from './context/NavigationContext';
import { useEffect } from 'react';
function App() {
  const { activeTab } = useNavigation();
  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  return (
    <div className="App">
      <NavBar />
      <PageContainer>
        <Home />
      </PageContainer>
    </div>
  );
}

export default App;
