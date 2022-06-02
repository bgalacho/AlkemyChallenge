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
    
    const allCharacters = await Character.findAll({
        attributes: ['name', 'image']
      })     
    
    res.status(200).send(allCharacters);
}

export async function editCharacter (req, res){
    const {image, name, age, weight, history} = req.body;
    const characterId = req.params.id;

        if (name && image && age && weight && history) {
      
            const characterEdit = await Character.findByPk(characterId);

            if (!characterEdit) res.status(404).send();          
            else{
                characterEdit.name = name;
                characterEdit.image = image;
                characterEdit.age = age;
                characterEdit.weight = weight;
                characterEdit.history = history;
      
            await characterEdit.save();
    }
    
     res.status(200).send(characterEdit)
    }

    
}


export async function deleteCharacter (req, res){
    const characterId = req.params.id;

    await Character.destroy({where:{id:characterId}})
    res.status(200).send()
}

export async function getCharacterById (req, res){
    const characterId = req.params.id;

    const getCharacter = await Character.findOne({where:{id:characterId}})
    res.status(200).send(getCharacter)
}