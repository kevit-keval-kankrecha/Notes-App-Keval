const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//console.log(process.argv);
//yargs.version('1.1.0');

//add note
yargs.command({
    command: 'add',
    describe: 'Adding a npm i module@versionnew notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
});

//remove note
yargs.command({
    command: 'remove',
    describe: 'Remove a notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
});

//list notes
yargs.command({
    command: 'list',
    describe: 'Listing the existing note',
    handler: function () {
        // console.log(chalk.bgGreen('Your Notes'));
        notes.listNotes();
    }

})

//read notes
yargs.command({
    command: 'read',
    describe: 'read the particular note',
    builder: {
        title: {
            describe: 'read specific note',
            type: 'string',
            demandOption: true
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title);
    }
})

//update notes
yargs.command({
    command: 'edit',
    describe: 'Update notes',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler:function(argv){
        const ans=notes.updateNote(argv.title,argv.body);
        console.log(ans==1?"Notes Updated Successfully":"No Title found for Update");;
    }
});

yargs.parse();

//console.log(yargs.argv)