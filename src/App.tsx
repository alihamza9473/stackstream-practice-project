// project import
import { BrowserRouter as Router } from "react-router-dom";
import history from "utils/history";
import Routes from "routes";
import ThemeCustomization from "themes";

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <Router history={history}>
      <Routes />
    </Router>
  </ThemeCustomization>
);

export default App;
