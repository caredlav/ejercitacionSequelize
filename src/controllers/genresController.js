const db=require('../database/models/index');

const genresController={
    list: (req,res)=>{
        db.Genre.findAll()
        .then(resultados=>{
            res.render('genresList',{genres:resultados})
        })
        .catch(error=>{
            console.log(error);
        });
    },
    detail: (req,res)=>{
        db.Genre.findByPk(req.params.id)
        .then(resultado=>{
            res.render('genresDetail',{genre: resultado})
        })
        .catch(error=>{
            console.log(error);
        });
    }
}

module.exports=genresController;