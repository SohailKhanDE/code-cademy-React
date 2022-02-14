// Import Esseltials
import React, { useState, useEffect } from "react";

// Import components
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  
  // Component States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  
  // Form Submit handler
  const handleSubmit = (e) => {
    // prevent browser default behaviour on submit
    e.preventDefault();
    
    if (!duplicate) {
      // Not duplicate > Run addContact function
      // Duplicate check is handeld in useEffect Hook
      addContact(name, phone, email);

      // Clear contact form
      setName("");
      setPhone("");
      setEmail("");
    }
  };


  // Run Hook on every name/contacts/dublicate state change (arg 2 of useEffect)
  useEffect(() => {
    const nameIsDuplicate = () => {
      // Check if contact name exists in contact name state
      const found = contacts.find((contact) => contact.name === name);
    
      if (found !== undefined) {
        return true;
        }
      return false;
      };
    
    
    // If Duplicate is found set Duplicate state to true, otherwise false
    if (nameIsDuplicate()) {
      setDuplicate(true);
      } 
    else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

  
  
  // Return JSX
  return (
    <div>
      
      <section>
      <h2>Add Contact {duplicate ? " - Name Already Exists" : ""}</h2>
        <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      </section><hr />
      
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    
    </div>
  );
};
