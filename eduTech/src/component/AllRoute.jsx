import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import Tickets from "../pages/Tickets.jsx";
import About from "../pages/About.jsx";
import { PrivatePage } from "./PrivatePage.jsx";
import TicketCreate from "../pages/TicketCreate.jsx";
import TicketEdit from "../pages/TicketEdit.jsx";
import TicketView from "../pages/TicketView.jsx";

export default function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivatePage>
              <Home />
            </PrivatePage>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivatePage>
              <Contact />
            </PrivatePage>
          }
        />
        <Route
          path="/about"
          element={
            <PrivatePage>
              <About />
            </PrivatePage>
          }
        />
        <Route
          path="/tickets"
          element={
            <PrivatePage>
              <Tickets />
            </PrivatePage>
          }
        />
        <Route
          path="/ticket/create"
          element={
            <PrivatePage>
              <TicketCreate />
            </PrivatePage>
          }
        />
        <Route
          path="/ticket/view/:id"
          element={
            <PrivatePage>
              <TicketView/>
            </PrivatePage>
          }
        />
        <Route
          path="/ticket/edit/:id"
          element={
            <PrivatePage>
              <TicketEdit />
            </PrivatePage>
          }
        />
      </Routes>
    </div>
  );
}