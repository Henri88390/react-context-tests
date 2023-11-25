import "./App.css";

import { Provider } from "react-redux";
import { store } from "./common/redux/store";
import { ComponentWithProdiver } from "./components/ComponentWithProvider/ComponentWithProdiver";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ComponentWithProdiver />
      </Provider>
    </div>
  );
}

export default App;
