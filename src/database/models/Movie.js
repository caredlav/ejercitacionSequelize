module.exports = (sequelize, dataTypes) => {
    const Movie = sequelize.define("Movie", {
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
        title:{
            type: dataTypes.STRING(500)
        },
        rating:{
            type: dataTypes.DECIMAL(3,1)
        },
        awards:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        length:{
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.INTEGER
        }
      },{
          tableName: `movies`,
          timestamps: true,
      });
      return Movie;
    };