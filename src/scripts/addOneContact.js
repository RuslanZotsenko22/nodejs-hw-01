import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";


export const addOneContact = async () => {

try {
    const existContacts = await readContacts();
    const newContacts = createFakeContact();
    const updatedContacts = [...existContacts, newContacts];
    await writeContacts(updatedContacts);
    
} catch (error) {
    console.erroe('Помилка додавання данних до файлу:', error);
    
}

};

addOneContact();
