const contacts = require("./contacts");
const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "choose id")
  .option("-n, --name <type>", "choose name")
  .option("-e, --email <type>", "choose email")
  .option("-p, --phone <type>", "choose phone");
program.parse(process.argv);

const options = program.opts();

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
invokeAction(options);
