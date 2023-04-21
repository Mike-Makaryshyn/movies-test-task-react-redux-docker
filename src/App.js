import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
