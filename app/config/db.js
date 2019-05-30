require('dotenv').config()

teste = () => {
    console.log('Database connected!' + process.env.DB_HOST)
}

module.exports =  teste

