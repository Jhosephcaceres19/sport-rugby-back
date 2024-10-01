package lista;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class Postgres {

    private static final String URL = "jdbc:postgresql://aws-0-sa-east-1.pooler.supabase.com:6543/postgres";
    private static final String USER = "postgres.qtwfhtiaqylwtttqanpz";
    private static final String PASSWORD = "Melquiades8d0a9ae_";
    private static Connection cn = null;

    // Establecer la conexión a la base de datos
    public static void openConnection() {
        if (cn == null) {
            try {
                Class.forName("org.postgresql.Driver");
                cn = DriverManager.getConnection(URL, USER, PASSWORD);
                System.out.println("Conexión establecida a MySQL.");
                
                // Crear la tabla si no existe
                Statement stmt = cn.createStatement();
                String createTableSQL = "CREATE TABLE IF NOT EXISTS dep (" +
                                        "deporte VARCHAR(100) NOT NULL, " +
                                        "popularidad INT NOT NULL, " +
                                        "PRIMARY KEY (deporte))";
                stmt.executeUpdate(createTableSQL);
                System.out.println("Tabla 'dep' creada con éxito (o ya existía).");
                
                stmt.close();
            } catch (SQLException e) {
                System.out.println("Error en la base de datos: " + e.getMessage());
            } catch (Exception e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }

    // Obtener conexión
    public static Connection getConnection() {
        if (cn == null) {
            try{openConnection();
            }   catch(Exception e){
                    System.out.println("Error en la conexión" + e.getMessage());
            }
        }
        return cn;
    }

    // Cerrar conexión
    public static void closeConnection() {
        if (cn != null) {
            try {
                cn.close();
                cn = null;
                System.out.println("Conexión cerrada.");
            } catch (SQLException e) {
                System.out.println("Error al cerrar la conexión: " + e.getMessage());
            }
        }
    }

    public static void main(String[] args) {
        
        Connection connection = getConnection();
        if (connection != null) {
            System.out.println("Conexión establecida con la base de datos postgres'" + "'.");
            
        }

        
        closeConnection();
    }
}






