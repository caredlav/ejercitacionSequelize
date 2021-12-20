module.exports = (sequelize, dataTypes) => {
    const Genre = sequelize.define("Genre", {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: dataTypes.STRING(100)
        },
        ranking: {
            type: dataTypes.INTEGER
        },
        active: {
            type: dataTypes.INTEGER
        }
    }, {
        tableName: `genres`,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    });
    return Genre;
};