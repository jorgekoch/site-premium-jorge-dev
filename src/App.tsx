import { Routes, Route } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { FloatingWhatsApp } from "./components/ui/FloatingWhatsApp";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Servicos } from "./pages/Servicos";
import { Contato } from "./pages/Contato";
import { Galeria } from "./pages/Galeria";

function App() {
  return (
    <>
      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </PageShell>

      <FloatingWhatsApp />
    </>
  );
}

export default App;