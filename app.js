const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//customize yargs version

yargs.version('1.1.0')

// create add command

yargs.command(
    {
        command:'add', 
        describe : 'Add a new note',
        builder : {
            title : {
                describe : 'Note title',
                demandOption: true,
                type: 'string'
            },
            body : {
                describe: 'Note Body',
                demandOption: true,
                type:'string'
            },
        },
        handler : function(argv){
            console.log('Title: ' + argv.title)
            console.log('Body: ' + argv.body)
        }
    }
)

yargs.command(
    {
        command:'remove', 
        describe : 'Remove a note',
        handler : function(){
            console.log('Removing the note!')
        }
    }
)

yargs.command(
    {
        command:'list', 
        describe : 'listing the notes',
        handler : function(){
            console.log('listing all the notes!')
        }
    }
)

yargs.command(
    {
        command:'read', 
        describe : 'reading the notes',
        handler : function(){
            console.log('reading all the notes!')
        }
    }
)
//add, remove, read, list

yargs.parse()