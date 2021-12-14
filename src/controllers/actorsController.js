const db=require('../database/models/index');

const actorsController={
    list: (req,res)=>{
        db.Actor.findAll()
        .then(resultado=>{
            res.render('actorsList',{actors: resultado})
        })
        .catch(error=>{
            console.log(error);
        });
    },
    detail: (req,res)=>{
        db.Actor.findByPk(req.params.id)
        .then(resultado=>{
            res.render('actorsDetail',{actor: resultado})
        })
        .catch(error=>{
            console.log(error);
        });
    }
}

module.exports=actorsController;