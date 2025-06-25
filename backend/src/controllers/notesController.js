import Note from "../models/Note.js";

export async function getAllNotes (_,res) {
    try {
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
    
}

export async function createNote (req,res) {
   try{
    const {title, content} = req.body;
    const newNote = new Note({title:title, content:content})

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
   } catch(error) {
    res.status(500).json({message:"internal server error"});
   }
}

export async function updateNote (req,res) {
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true});
        if (!updatedNote) return res.status(404).json({message:"note not found"});

        res.status(200).json({updatedNote})
    } catch (error) {
    res.status(500).json({message:"internal server error"}); }
}

export async function deleteNote (req,res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) return res.status(404).json({message:"note not found"});
        res.status(200).json({message:"deleted a note"});
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}

export async function getNoteById (req,res) {
    try {
        const noteAsked = await Note.findById(req.params.id)
        if (!noteAsked) return res.status(404).json({message:"Not not found"})
        res.status(200).json(noteAsked)    
    } catch (error) {
        res.status(500).json({message:"internal server error"});
    }
}