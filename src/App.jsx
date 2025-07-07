import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Tickets from "./pages/Tickets";
import Events from "./pages/Events";
import CafeShop from "./pages/CafeShop";
import News from "./pages/News";
import FAQ from "./pages/FAQ";
import Contacts from "./pages/Contacts";
import Simple from "./pages/Simple";
import Policy from "./pages/Policy";
import Agreement from "./pages/Agreement";
import NotFound from "./pages/NotFound";
import "./App.css";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 shadow-lg">
      <nav className="flex flex-wrap items-center justify-between px-6 py-3">
        <div className="text-2xl font-extrabold tracking-tight text-white drop-shadow-lg">
          <Link to="/" className="text-white hover:text-amber-200 no-underline">
            Фабрика шоколадных открытий
          </Link>
        </div>
        <ul className="flex flex-wrap gap-4 text-lg font-semibold">
          <li>
            <Link
              className="text-white transition hover:text-amber-200 hover:scale-110"
              to="/about"
            >
              О центре
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-amber-200 hover:scale-110"
              to="/classes"
            >
              Мастер-классы
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-amber-200 hover:scale-110"
              to="/tickets"
            >
              Билеты
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-amber-200 hover:scale-110"
              to="/events"
            >
              Праздники
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-amber-200 hover:scale-110"
              to="/cafeshop"
            >
              Кафе и магазин
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-amber-200 hover:scale-110"
              to="/news"
            >
              Новости
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-amber-200 hover:scale-110"
              to="/faq"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              className="text-white transition hover:text-amber-200 hover:scale-110"
              to="/contacts"
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Layout({ children }) {
  return (
    <div
      className="min-h-screen pt-20 candy-pattern"
      style={{
        background: `
        radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, rgba(254, 243, 199, 0.3) 0%, rgba(255, 237, 213, 0.3) 50%, rgba(254, 226, 226, 0.3) 100%),
        repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(251, 191, 36, 0.05) 10deg, transparent 20deg)
      `,
      }}
    >
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cafeshop" element={<CafeShop />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/simple" element={<Simple />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/agreement" element={<Agreement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
