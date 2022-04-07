const database = require("../models");

class PessoaController{
    
    //pega todas as pessoas
    static async getAllPeople(req,res){

        try {
            const allPeople = await database.Pessoas.findAll();
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    //pega uma pessoa
    static async getOnlyPerson(req,res){
        const {id} = req.params;
        try {
            const person = await database.Pessoas.findOne({
                where:{
                    id:Number(id),
                }
            })

            return res.status(200).json(person);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;