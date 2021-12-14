module.exports = (sequelize, dataTypes) => {
    const Genre = sequelize.define("Genre", {
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
        name:{
            type: dataTypes.STRING(100)
        },
        ranking:{
            type: dataTypes.INTEGER
        },
        active:{
            type: dataTypes.INTEGER
        }
      },{
          tableName: `genres`,
          timestamps: true,
      });
      return Genre;
    };