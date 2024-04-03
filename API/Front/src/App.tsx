import Alteracao from "./pages/Alteracao";
import Aoi from "./pages/Aoi";
import Apontamento from "./pages/Apontamento";
import Grade from "./pages/Grade";

function App() {
  return (
    <div>
      <p>AOI</p>
      <Aoi />
      <p>Apontamentos</p>
      <Apontamento />
      <p>Grade</p>
      <Grade />
      <p>Alteração</p>
      <Alteracao />
    </div>
  );
}

export default App;
