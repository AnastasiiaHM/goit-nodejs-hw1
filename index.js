const contacts = require("./contacts");

const invokeAction = async ({ action, name, email, phone, id }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case "getById":
      const contact = await contacts.getContactById(id);
      return console.table(contact);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);
    case "delete":
      const deleteContact = await contacts.removeContact(id);
      return console.log("Contact was deleted");
  }
};

invokeAction({ action: "read" });
invokeAction({ action: "getById", id: "05olLMgyVQdWRwgKfg5J6" });
invokeAction({
  action: "add",
  name: "Mango",
  email: "mango@gmail.com",
  phone: "322-22-22",
});
invokeAction({ action: "delete", id: "qdggE76Jtbfd9eWJHrssH " });
