import Hero from './components/hero/Hero';
import Snippets from './components/snippets/Snippets';
import Clipboard from './components/clipboard/Clipboard';
import Workflow from './components/workflow/Workflow';

function App() {
  return (
    <div className="App">
      <Hero />
      <Snippets />
      <Clipboard />
      <Workflow />
    </div>
  );
}

export default App;
