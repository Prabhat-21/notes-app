const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(()=> note.title ===title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const listNotes = () =>{
    console.log(chalk.green.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach((note) =>  {console.log(note.title)
    })
    


}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note)=> note.title ===title)
    if(!note){
        console.log('Note not found')
    }
    else{
        console.log(note.title)
        console .log(note.body)
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note)=> note.title!==title)


    if(notes.length > notesTokeep.length){
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(notesTokeep)
    }
    else{
        console.log(chalk.red.inverse('No Node Removed'))
    }
   
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote

}