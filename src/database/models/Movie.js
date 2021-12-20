module.exports = (sequelize, dataTypes) => {
    const Movie = sequelize.define("Movie", {
        id: {
            type: dataTypes.BIGINT(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
            allowNull: false
        },
        awards: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        length: {
            type: dataTypes.BIGINT(10)
        },
        genre_id: {
            type: dataTypes.BIGINT(10)
        }
    }, {
        tablename: "movies",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    });
    return Movie;
};