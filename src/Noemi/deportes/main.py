import psycopg2
from psycopg2 import sql

conexion = psycopg2.connect(
    host="aws-0-sa-east-1.pooler.supabase.com",   
    database="postgres",     
    user="postgres.qtwfhtiaqylwtttqanpz",  
    password="Melquiades8d0a9ae_",
    port="6543"
)


cursor = conexion.cursor()

create_table_query = '''
CREATE TABLE IF NOT EXISTS tarea (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);
'''

cursor.execute(create_table_query)

conexion.commit()


cursor.close()
conexion.close()

print("Tabla 'tarea' creada exitosamente.")


