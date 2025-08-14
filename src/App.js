import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // فرض بر این است که فایل store.js در ریشه پروژه قرار دارد

import PortfolioPage from "./pages/PortfolioPage";
import SkillPage from "./pages/SkillPage";
import InfoPage from "./pages/InfoPage";
import HomePage from "./pages/HomePage";
import CertificatePage from "./pages/CertificatePage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<InfoPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="skills" element={<SkillPage />} />
          <Route path="certificates" element={<CertificatePage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
