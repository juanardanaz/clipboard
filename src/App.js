import Hero from './components/hero/Hero';
import Snippets from './components/snippets/Snippets';
import Clipboard from './components/clipboard/Clipboard';
import Workflow from './components/workflow/Workflow';
import Clients from './components/clients/Clients';
import Cta from './components/cta/Cta';

function App() {
  return (
    <div className="App">
      <Hero />
      <Snippets />
      <Clipboard />
      <Workflow />
      <Clients />
      <Cta />
    </div>
  );
}

export default App;
