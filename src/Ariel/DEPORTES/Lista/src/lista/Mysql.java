package lista;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Mysql {

    private static final String URL = "jdbc:mysql://localhost:3306/";
    private static final String USER = "root"; // Cambia esto según tu configuración
    private static final String PASSWORD = ""; // Cambia esto según tu configuración
    private static final String DATABASE_NAME = "sisinfo";

    private static Connection cn = null;

    // Método para establecer la conexión a la base de datos
    public static void openConnection() {
        if (cn == null) { // Verifica si la conexión ya está abierta
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                cn = DriverManager.getConnection(URL, USER, PASSWORD);
                System.out.println("Conexión establecida a MySQL.");

                // Crear base de datos si no existe
                Statement stmt = cn.createStatement();
                String createDatabaseSQL = "CREATE DATABASE IF NOT EXISTS " + DATABASE_NAME;
                stmt.executeUpdate(createDatabaseSQL);
                System.out.println("Base de datos '" + DATABASE_NAME + "' creada con éxito (o ya existía).");

                // Conectar a la base de datos
                cn.setCatalog(DATABASE_NAME);
                System.out.println("Conectado a la base de datos '" + DATABASE_NAME + "'.");

                // Crear la tabla si no existe
                String createTableSQL = "CREATE TABLE IF NOT EXISTS deportes (" +
                                        "deporte VARCHAR(100) NOT NULL, " +
                                        "popularidad INT NOT NULL, " +
                                        "PRIMARY KEY (deporte))";
                stmt.executeUpdate(createTableSQL);
                System.out.println("Tabla 'deportes' creada con éxito (o ya existía).");
                
                stmt.close(); // Cierra el statement después de usarlo
            } catch (SQLException e) {
                System.out.println("Error en la base de datos: " + e.getMessage());
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }

    // Método para obtener la conexión
    public static Connection getConnection() {
        if (cn == null) {
            openConnection(); // Abre la conexión si aún no está abierta
        }
        return cn;
    }

    // Método para cerrar la conexión
    public static void closeConnection() {
        if (cn != null) {
            try {
                cn.close();
                cn = null; // Marca la conexión como cerrada
                System.out.println("Conexión cerrada.");
            } catch (SQLException e) {
                System.out.println("Error al cerrar la conexión: " + e.getMessage());
            }
        }
    }

    public static void main(String[] args) {
        // Obtener conexión y realizar operaciones
        Connection connection = getConnection();
        if (connection != null) {
            System.out.println("Conexión establecida con la base de datos '" + DATABASE_NAME + "'.");
            // Realiza operaciones con la base de datos aquí
        }

        // Al finalizar las operaciones, cierra la conexión si es necesario
        closeConnection();
    }
}






