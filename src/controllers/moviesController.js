const db=require('../database/models/index');

const movies={
    list: (req,res)=>{
        db.Movie.findAll()
        .then(resultados=>{
            res.render('moviesList',{movies: resultados})
        })
        .catch(error=>{
            console.log(error);
        });
    },
    detail: (req,res)=>{
        db.Movie.findByPk(req.params.id)
        .then(resultado=>{
            res.render('moviesDetail',{movie:resultado});
        })
        .catch(error=>{
            console.log(error);
        });
    },
    new: (req,res)=>{
        db.Movie.findAll({
            order: [
                ['release_date','DESC'],
                   ]
        })
        .then(resultado=>{
            res.render('newestMovies',{movies:resultado})
        })
        .catch(error=>{
            console.log(error);
        });
    },
    recomended: (req,res)=>{
        db.Movie.findAll({
            where:{
                order: [
                    ['release_date','DESC'],
                       ]
            },
            limit: 5
        })
        .then(resultados=>{
            res.render('recommendedMovies',{movies:resultados})
        })
        .catch(error=>{
            console.log(error);
        });
    }
}

module.exports=movies;