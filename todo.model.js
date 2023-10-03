"use strict";


const {Sequelize,DataTypes}= require("sequelize")
// const sequelize=new Sequelize("sqlite:./db.sqlite3")
const sequelize=new Sequelize("sqlite:"+ (process.env.SQLITE || "./db.sqlite3"))

const Todo = sequelize.define("todo", {
    // id:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false,
    //     unique:true,
    //     field: "custom_column_name",
    //     comment:"Description",
    //     primaryKey:true,
    //     autoIncrement:true
    // },

    title:{
        type:DataTypes.STRING(64),
        allowNull:false,
    },
    description: DataTypes.TEXT,
    priority:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue:0,
    },
    isDone:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }

})

// sequelize.sync()
sequelize.authenticate()
    .then(() => console.log('* DB Connected *'))
    .catch((err) => console.log('* DB Not Connected *', err))

module.exports = Todo