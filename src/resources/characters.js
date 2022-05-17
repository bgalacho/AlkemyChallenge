import { Character } from '../db.js'

export async function createCharacter (req, res){
    res.send("created")
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