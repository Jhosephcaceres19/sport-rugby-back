SELECT concat(
    'public class Persona {', E'\n\n',
    '    public string Nombre { get; set; }', E'\n',
    '    public string Apellido { get; set; }', E'\n',
    '    public int Edad { get; set; }', E'\n',
    '    public string Sexo { get; set; }', E'\n',
    '    public string Ci { get; set; }', E'\n\n',
    '    public Persona(string nombre, string apellido, int edad, string sexo, string ci) {', E'\n',
    '        this.Nombre = nombre;', E'\n',
    '        this.Apellido = apellido;', E'\n',
    '        this.Edad = edad;', E'\n',
    '        this.Sexo = sexo;', E'\n',
    '        this.Ci = ci;', E'\n',
    '    }', E'\n\n',
    '    public void Comer() {', E'\n',
    '        // Método vacío', E'\n',
    '    }', E'\n\n',
    '    public int Dormir() {', E'\n',
    '        // Método vacío', E'\n',
    '        return 0;', E'\n',
    '    }', E'\n\n',
    '}'
) as csharp_code;
