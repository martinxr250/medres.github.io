import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [code, setCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Paste your code between the backticks below
  const professorCode = `
# Crear un programa python que permita ingresar el titulo, autor, año de publicacion y precio de libros hasta que se ingresa en titulo la palabra FIN.
# Solo dejar ingresar titulos en mayusculas.
# Y solo dejar ingresar año de publicacion mayor a 2000.

def promedio_ano_publicacion(libros):
    if not libros:
        return 0
    suma_anos = sum(libro['ano'] for libro in libros)
    return suma_anos / len(libros)

def es_ano_valido(ano):
    if ano.isdigit():
        ano_int = int(ano)
        if ano_int > 2000:
            return True, ano_int
        else:
            return False, None
    else:
        return False, None

def es_precio_valido(precio):
    if precio.replace('.', '', 1).isdigit():
        return True, float(precio)
    else:
        return False, None

def main():
    libros = []

    while True:
        titulo = input("Ingrese el título del libro (en mayúsculas, 'FIN' para terminar): ")
        if titulo == "FIN":
            break
        elif titulo != titulo.upper():
            print("El título debe estar en mayúsculas.")
            continue

        autor = input("Ingrese el autor del libro: ")

        ano_valido = False
        while not ano_valido:
            ano = input("Ingrese el año de publicación del libro: ")
            ano_valido, ano_int = es_ano_valido(ano)
            if not ano_valido:
                print("El año de publicación debe ser un número mayor a 2000.")

        precio_valido = False
        while not precio_valido:
            precio = input("Ingrese el precio del libro: ")
            precio_valido, precio_float = es_precio_valido(precio)
            if not precio_valido:
                print("El precio debe ser un número.")

        libros.append({
            "titulo": titulo,
            "autor": autor,
            "ano": ano_int,
            "precio": precio_float
        })

    print("\nLista de libros ingresados:")
    for libro in libros:
        print(f"Título: {libro['titulo']}, Autor: {libro['autor']}, Año: {libro['ano']}, Precio: {libro['precio']}")

    promedio = promedio_ano_publicacion(libros)
    print(f"\nEl promedio del año de publicación de los libros ingresados es: {promedio}")

if __name__ == "__main__":
    main()
  `;

  useEffect(() => {
    setCode(professorCode.trim());
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '48px 16px',
      fontFamily: 'Arial, sans-serif',
    },
    content: {
      maxWidth: '800px',
      margin: '0 auto',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#1f2937',
      marginBottom: '32px',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      marginBottom: '32px',
      overflow: 'hidden',
    },
    cardHeader: {
      backgroundColor: '#e5e7eb',
      padding: '16px',
      borderBottom: '1px solid #d1d5db',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#374151',
    },
    cardContent: {
      padding: '16px',
    },
    codeBlock: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '16px',
      borderRadius: '4px',
      overflowX: 'auto',
      fontSize: '14px',
      fontFamily: 'monospace',
      position: 'relative',
    },
    copyButton: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      padding: '6px 12px',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
    },
    buttonIcon: {
      marginRight: '4px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Código del Profesor</h1>
        
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Código para Copiar (Alumnos)</h2>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.codeBlock}>
              <pre>
                <code>{code || 'El profesor aún no ha pegado ningún código.'}</code>
              </pre>
              {code && (
                <button onClick={handleCopyCode} style={styles.copyButton}>
                  <span style={styles.buttonIcon}>
                    {isCopied ? '✓' : '📋'}
                  </span>
                  {isCopied ? 'Copiado' : 'Copiar'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
