import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [code, setCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Paste your code between the backticks below
  const professorCode = `
def promedio_ano_publicacion(libros):
    if not libros:
        return 0
    suma_anos = sum(libro['ano'] for libro in libros)
    return suma_anos / len(libros)

def promedio_precio_libros(libros):
    if not libros:
        return 0
    suma_precios = sum(libro['precio'] for libro in libros)
    return suma_precios / len(libros)

def promedio_paginas_libros(libros):
    libros_con_paginas = [libro for libro in libros if 'paginas' in libro]
    if not libros_con_paginas:
        return 0
    suma_paginas = sum(libro['paginas'] for libro in libros_con_paginas)
    return suma_paginas / len(libros_con_paginas)

def es_ano_valido(ano):
    if ano.isdigit():
        ano_int = int(ano)
        if 2000 < ano_int < 2025:
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

def buscar_libro_precio_mas_alto(libros):
    if not libros:
        return None, None
    libro_mas_caro = libros[0]
    for libro in libros[1:]:
        if libro['precio'] > libro_mas_caro['precio']:
            libro_mas_caro = libro
    return libro_mas_caro['titulo'], libro_mas_caro['autor']

def buscar_libro_ano_mas_reciente(libros):
    if not libros:
        return None, None
    libro_mas_reciente = libros[0]
    for libro in libros[1:]:
        if libro['ano'] > libro_mas_reciente['ano']:
            libro_mas_reciente = libro
    return libro_mas_reciente['titulo'], libro_mas_reciente['autor']

def contar_libros_antiguos_y_caros(libros):
    count = 0
    for libro in libros:
        if libro['ano'] < 2013 and libro['precio'] > 500:
            count += 1
    return count

def buscar_libro_menor_paginas(libros):
    libros_con_paginas = [libro for libro in libros if 'paginas' in libro]
    if not libros_con_paginas:
        return None, None
    libro_menor_paginas = libros_con_paginas[0]
    for libro in libros_con_paginas[1:]:
        if libro['paginas'] < libro_menor_paginas['paginas']:
            libro_menor_paginas = libro
    return libro_menor_paginas['titulo'], libro_menor_paginas['autor']

def promedio_paginas_libros_antiguos(libros, current_year=2023):
    libros_antiguos = [libro for libro in libros if 'paginas' in libro and (current_year - libro['ano']) > 5]
    if not libros_antiguos:
        return 0
    suma_paginas = sum(libro['paginas'] for libro in libros_antiguos)
    return suma_paginas / len(libros_antiguos)


def buscar_libros_mas_de_1000_paginas(libros):
    libros_mas_de_1000_paginas = [libro for libro in libros if 'paginas' in libro and libro['paginas'] > 1000]
    count = len(libros_mas_de_1000_paginas)
    titulos_y_autores = [(libro['titulo'], libro['autor']) for libro in libros_mas_de_1000_paginas]
    return count, titulos_y_autores

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
                print("El año de publicación debe ser un número mayor a 2000 y menor a 2025.")

        precio_valido = False
        while not precio_valido:
            precio = input("Ingrese el precio del libro: ")
            precio_valido, precio_float = es_precio_valido(precio)
            if not precio_valido:
                print("El precio debe ser un número.")

        libro = {
            "titulo": titulo,
            "autor": autor,
            "ano": ano_int,
            "precio": precio_float
        }

        if 2010 <= ano_int <= 2020:
            paginas_valido = False
            while not paginas_valido:
                paginas = input("Ingrese el número de páginas del libro: ")
                if paginas.isdigit():
                    libro["paginas"] = int(paginas)
                    paginas_valido = True
                else:
                    print("El número de páginas debe ser un número.")

        libros.append(libro)

    print("\nLista de libros ingresados:")
    for libro in libros:
        if 'paginas' in libro:
            print(f"Título: {libro['titulo']}, Autor: {libro['autor']}, Año: {libro['ano']}, Precio: {libro['precio']}, Páginas: {libro['paginas']}")
        else:
            print(f"Título: {libro['titulo']}, Autor: {libro['autor']}, Año: {libro['ano']}, Precio: {libro['precio']}")

    promedio_ano = promedio_ano_publicacion(libros)
    print(f"\nEl promedio del año de publicación de los libros ingresados es: {promedio_ano}")
    
    promedio_precio = promedio_precio_libros(libros)
    print(f"\nEl promedio del precio de los libros ingresados es: {promedio_precio}")

    promedio_paginas = promedio_paginas_libros(libros)
    print(f"\nEl promedio del número de páginas de los libros ingresados es: {promedio_paginas}")

    titulo_mas_caro, autor_mas_caro = buscar_libro_precio_mas_alto(libros)
    if titulo_mas_caro and autor_mas_caro:
        print(f"\nEl libro con el precio más alto es '{titulo_mas_caro}' de {autor_mas_caro}")
    else:
        print("\nNo se ingresaron libros para encontrar el precio más alto.")
    
    titulo_mas_reciente, autor_mas_reciente = buscar_libro_ano_mas_reciente(libros)
    if titulo_mas_reciente and autor_mas_reciente:
        print(f"\nEl libro con el año de publicación más reciente es '{titulo_mas_reciente}' de {autor_mas_reciente}")
    else:
        print("\nNo se ingresaron libros para encontrar el publicado más recientemente.")
    
    count_antiguos_y_caros = contar_libros_antiguos_y_caros(libros)
    print(f"\nEl número de libros con más de 10 años y un precio mayor a 500 es: {count_antiguos_y_caros}")

    titulo_menor_paginas, autor_menor_paginas = buscar_libro_menor_paginas(libros)
    if titulo_menor_paginas and autor_menor_paginas:
        print(f"\nEl libro con el menor número de páginas es '{titulo_menor_paginas}' de {autor_menor_paginas}")
    else:
        print("\nNo se ingresaron libros con número de páginas.")
        
    promedio_paginas_antiguos = promedio_paginas_libros_antiguos(libros)
    print(f"\nEl promedio del número de páginas de los libros con más de 5 años es: {promedio_paginas_antiguos}")


    count_libros_mas_de_1000_paginas, titulos_y_autores = buscar_libros_mas_de_1000_paginas(libros)
    if count_libros_mas_de_1000_paginas > 0:
        print(f"\La cantidad de libros con mas de 1000 páginas son: {count_libros_mas_de_1000_paginas}")
        for titulo, autor in titulos_y_autores:
            print(f"Título: {titulo}, Autor: {autor}")
    else:
        print("\nNo se ingresaron libros con más de 1000 páginas.")
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
    width: '100%', // Cambiado de maxWidth a width
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
    textAlign: 'center', // Alinear el título al centro
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
