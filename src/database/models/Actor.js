module.exports = (sequelize, dataTypes) => {
    const Actor = sequelize.define("Actor", {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER,
        },
        created_at:{
            type: dataTypes.DATE
        },
        updated_at:{
            type: dataTypes.DATE
        },
        first_name:{
            type: dataTypes.STRING
        },
        last_name:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.DECIMAL
        },
        favorite_movie_id:{
            type: dataTypes.INTEGER
        }
      },{
          tableName: `actors`,
          timestamps: true,
      });
      return Actor;
    };