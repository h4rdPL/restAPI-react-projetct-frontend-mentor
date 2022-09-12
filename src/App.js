import { FilterTemplate } from "./templates/FilterTemplate";
import { GridTemplate } from "./templates/GridTemplate";
import { MainTemplate } from "./templates/MainTemplate";
function App() {
  return (
    <>
      <MainTemplate>
        <FilterTemplate />
        <GridTemplate />
      </MainTemplate>
    </>
  );
}

export default App;
