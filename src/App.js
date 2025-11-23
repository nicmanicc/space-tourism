import './App.css';
import { NavBar } from './components/nav/NavBar';
import { PageContainer } from './components/pages/PageContainer';
import { Home } from './components/pages/Home';
function App() {
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
