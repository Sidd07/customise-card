import logo from './logo.svg';
import './App.css';
import PageLayout from './Containers/page-layout/page-layout';
import Card from './components/card/card';

function App() {
  return (
    <div className="App">
      <PageLayout>
        <Card></Card>
      </PageLayout>
    </div>
  );
}

export default App;
