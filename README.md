# Torneo Deportivo Internacional

## Contexto General

La organización **GlobalSports Union** lidera la planeación y ejecución de un **Torneo Deportivo Internacional**, en el que participan equipos y delegaciones de diferentes países compitiendo en diversas disciplinas deportivas (atletismo, fútbol, ciclismo, judo, natación, esgrima, entre otras).

El objetivo es contar con una **base de datos completa y flexible** para gestionar toda la información relevante del evento, incluyendo:

- Países y delegaciones participantes.
- Equipos deportivos y sus disciplinas.
- Datos de los deportistas.
- Información de las competencias y sus resultados.
- Estadísticas y logros históricos.

Este repositorio contiene un conjunto de scripts en JavaScript para MongoDB que te permitirán crear la base de datos, poblarla con datos de ejemplo y realizar diversas consultas útiles.

---

## Archivos Incluidos

- **inserciones.js**  
  Crea la base de datos, las colecciones y realiza la inserción de datos de ejemplo.

- **consultas_sencillas.js**  
  Ejemplos de consultas básicas para obtener información directa.

- **consultas_operadores.js**  
  Consultas utilizando operadores avanzados para obtener estadísticas y realizar análisis complejos.

---

## Instrucciones de Ejecución

### 1. Requisitos Previos

- Tener instalado **MongoDB** y acceso a una instancia (local o remota).
- Tener acceso al **MongoDB Shell** (`mongo` o `mongosh`)

### 2. Crear la Base de Datos y Poblarla

1. **Abre una terminal** y navega hasta el directorio donde se encuentran los archivos.

2. **Ejecuta el script de inserción** para crear la base de datos (llamada `competencia`), sus colecciones y poblarla con datos de ejemplo:

    ```sh
    mongosh < inserciones.js
    ```

    > Esto creará todas las colecciones y agregará datos de muestra automáticamente.

### 3. Ejecutar Consultas

#### Consultas Sencillas

- Para probar las consultas básicas:

    ```sh
    mongosh < consultas_sencillas.js
    ```

#### Consultas con Operadores

- Para probar las consultas avanzadas (con operadores de comparación, lógicos y otros):

    ```sh
    mongosh < consultas_operadores.js
    ```

> **Nota:**  
> También puedes abrir el shell de MongoDB y copiar/pegar individualmente las consultas de los archivos para observar y analizar los resultados uno por uno.

---

## Autor

Davisson Adriel Roman Carreño