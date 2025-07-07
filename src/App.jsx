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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 pt-20">
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
