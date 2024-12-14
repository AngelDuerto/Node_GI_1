// const add = require('./utils.js') //run other code on other files (modules)

// const sum = add(4, -2)

// console.log(sum)

// console.log(process.argv)
// console.log(yatgs.argv)

// const validator = require('validator')

const notes = require('./notes.js')

const yargs = require('yargs');

yargs.command( {
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demanOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title, argv.body)
    }
})



///Remove notes

yargs.command( {
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title)
    }
})


// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})


// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


// 
yargs.command({
    command: 'edit',
    describe: 'Edit a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demanOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.editNote(argv.title, argv.body)
    }
})

yargs.parse()