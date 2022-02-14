// Import Essentials
import React from "react";
// Import CSS
import { ContactPicker } from "../contactPicker/ContactPicker";

// Contact Form Component
export const AppointmentForm = ({contacts, title, setTitle, contact, setContact, date, setDate, time, setTime, handleSubmit}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

  // Get Contact Names Handler
  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
    };

  // Return JSX
  return (
    <form onSubmit={handleSubmit}>
      <label><input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Title for Appointment"/></label><br />
      <label><ContactPicker name="contact" value={contact} contacts={getContactNames()} onChange={(e) => setContact(e.target.value)} placeholder="Select contact from Adressbook" /></label><br />
      <label><input type="date" name="date" min={getTodayString()} value={date} onChange={(e) => setDate(e.target.value)} required /></label><br />
      <label><input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} required /></label><br />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
