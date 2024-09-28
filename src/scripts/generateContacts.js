import { createFakeContact  } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

const generateContacts = async (number) => {

    try {
        const existContacts = await readContacts();
        const newContacts = [];
        for (let i = 0; i < number; i++) {
            newContacts.push(createFakeContact());
        };
        const updatedContacts = [...existContacts, ...newContacts];
        await writeContacts(updatedContacts);


    } catch (error) {
        console.log('Помилка додавання даних до файлу:', error);
        
    }
};

generateContacts(5);
