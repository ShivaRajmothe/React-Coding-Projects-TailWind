import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import("../../src/pages/Home"));
const Reports = React.lazy(() => import("../../src/pages/Reports"));
const Settings = React.lazy(() => import("../../src/pages/Settings"));

export default function LazyLoading() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/reports">Reports</Link>{" | "}
        <Link to="/settings">Settings</Link>
      </nav>

      <Suspense fallback={<p>Loading page…</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}