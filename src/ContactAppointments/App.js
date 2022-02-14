// Import Esseltials
import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

// Import App Components
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // States for Appintments and Contacts
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  // Routes
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  // Handler function for adding new appintment
  const addAppointment = (title, contact, date, time) => {
    setAppointments([...appointments, {
        title: title, contact: contact, date: date, time: time
        }]);
    };

  // Handler function for adding new contact
  const addContact = (name, phone, email) => {
    setContacts([...contacts, {
        name: name, phone: phone, email: email
        }]);
    };

  // Return JSX
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">Appointments</NavLink>
      </nav>
      
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
