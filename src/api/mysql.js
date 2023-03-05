import MySqlConnection from "react-native-my-sql-connection";

export const loginUser = async () => {
  let config = {
    host: "10.137.18.24",
    database: "db_ras_app",
    user: "souleye",
    password: "Orange221",
    port: 3306,
   
  };
  try {
    const connection = await MySqlConnection.createConnection(config);
    console.log(connection);
    
  } catch (err) {
    console.log({err})
  }
};
