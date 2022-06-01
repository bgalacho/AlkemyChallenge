import { Character } from '../db.js'

export async function createCharacter (req, res){
    const {image, name, age, weight, history} = req.body;

    const newCharacter = await Character.create({
        image:image, 
        name: name, 
        age: age,
        weight: weight, 
        history: history,
    })

    res.status(200).send(newCharacter)
}

export async function getAllCharacter (req, res){
    
    res.send("all")
}

export async function editCharacter (req, res){
    res.send("edit")
}

export async function deleteCharacter (req, res){
    res.send("delete")
}

export async function getCharacterById (req, res){
    res.send("CaracterById")
}