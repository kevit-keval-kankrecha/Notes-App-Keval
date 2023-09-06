const fs = require('fs');
const chalk = require('chalk');
const { check } = require('yargs');

const listNotes = () => {
    console.log(chalk.bgGreen('Your Notes'));
    const listnotes = loadNote();
    listnotes.forEach((note, index) => {
        console.log(chalk.bgWhite(note.title));
    })
}
const addNote = (title, body) => {
    const notes = loadNote();
    //const duplicatenotes=notes.filter((note)=>note.title==title);
    debugger
    const duplicatenotes = notes.find((note) => note.title === title);
    if (!duplicatenotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes);
        console.log(chalk.bgGreen('Notes added Successfully'));
    }
    else {
        console.log(chalk.bgRed('Notes already taken'));
    }
}
const saveNote = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNote = () => {
    try {
        const databuff = fs.readFileSync('notes.json');
        return JSON.parse(databuff.toString());
    }
    catch {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNote();
    const afterdeletenotes = notes.filter((note) => note.title !== title);
    if (JSON.stringify(notes) != JSON.stringify(afterdeletenotes)) {
        console.log(chalk.bgGreen('Notes Removed.!'));
    }
    else {
        console.log(chalk.bgRed('No Notes found for Remove.!'));
    }
    saveNote(afterdeletenotes);
}
const readNote = (title) => {
    const notes = loadNote();
    
    const checkavailability = notes.find(note => title === note.title);
    if (!checkavailability) {
        console.log(chalk.bgRed(`"${title}" notes not found`));
    }
    else {
        console.log(chalk.bgWhite.black(checkavailability.title));
        console.log(checkavailability.body);
    }
}
const updateNote = (title, body) => {
    const notes = loadNote();
    const note = notes.find((note) => {
        return note.title === title;
    })
    if (note.title!==undefined) {
        note.body = this.body;
        saveNote(notes);
        return 1;
    }
    else{
        return 0;
    }
    
}
module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote,
    updateNote: updateNote
}