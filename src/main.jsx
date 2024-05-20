import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import { Team } from "./Pages/Team/Team.jsx";
import Contacts from "./Pages/Contacts/Contacts.jsx";
import { Invoices } from "./Pages/Invoices/Invoices.jsx";
import { From } from "./Pages/From/From.jsx";
import { Calendar } from "./Pages/Calendar/Calendar.jsx";
import { FAQ } from "./Pages/FAQ/FAQ.jsx";
import { BarChart } from "./Pages/BarChart/BarChart.jsx";
import { Pie} from "./Pages/Pie/Pie.jsx";
import { Geography } from "./Pages/Geography/Geography.jsx";
import { Line } from "./Pages/Line/Line.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="from" element={<From />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
      {/* ... etc. */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
