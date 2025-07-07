import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 shadow-lg">
      <nav className="flex items-center justify-between px-4 md:px-6 py-3">
        <div className="text-xl md:text-2xl font-extrabold tracking-tight text-white drop-shadow-lg">
          <Link to="/" className="text-white hover:text-amber-200 no-underline">
            Фабрика шоколадных открытий
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-[#6B3F1D] drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Открыть меню"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex flex-wrap gap-4 text-lg font-semibold">
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 shadow-lg md:hidden">
            <ul className="flex flex-col p-4 space-y-3">
              <li>
                <Link
                  className="block text-white transition hover:text-amber-200 py-2"
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О центре
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white transition hover:text-amber-200 py-2"
                  to="/classes"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Мастер-классы
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white transition hover:text-amber-200 py-2"
                  to="/tickets"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Билеты
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white transition hover:text-amber-200 py-2"
                  to="/events"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Праздники
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white transition hover:text-amber-200 py-2"
                  to="/cafeshop"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Кафе и магазин
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white transition hover:text-amber-200 py-2"
                  to="/news"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Новости
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white transition hover:text-amber-200 py-2"
                  to="/faq"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  className="block text-white transition hover:text-amber-200 py-2"
                  to="/contacts"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

function Layout({ children }) {
  return (
    <div
      className="min-h-screen pt-20"
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
