module.exports = (sequelize, dataTypes) =>{

    const alias = "Genre";

    const cols ={
        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoincrement: true,
            allowNull: false,
        },       
        name:{
            type: dataTypes.STRING(100),
            allowNull: false,            
        },
        ranking:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        active:{
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
    }

    const config ={
        tableName: "genres",
        timestamps: false,
    }

    const genre = sequelize.define(alias, cols, config)

    return genre;
}