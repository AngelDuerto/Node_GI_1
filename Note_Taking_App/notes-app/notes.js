const fs = require('fs')
// import chalk from 'chalk';

const getNotes = function() {
    return 'Your notes...'
}
const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNotes =  notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

        // console.log(duplicateNote)
        // console.log(title)
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('New notes added')
    } else {
        console.log('Note title taken!')
    }

}
// remove function
const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })

    if(notes.length > notesToKeep.length){
        console.log('Note removed!')
        saveNotes(notesToKeep)
    } else {
        console.log('No note found!')
    }
}

//list notes

const listNotes = () => {
    const notes = loadNotes()

    console.log('Your notes')

    notes.forEach((note) => {
        console.log(note.title)
    });
}

//read notes
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(note.title)
        console.log(note.body)
    } else {
        console.log('Note not found!')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

const editNote = function (title, body) {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title)

    if (note) {
        note.body = body;
        saveNotes(notes);
        console.log('Note updated successfully!');
    } else {
        console.log('Note not found!');
    };
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
    editNote: editNote
};