# Modelo de Datos - Torneo Deportivo Internacional (GlobalSports Union)

## 1. Análisis del Contexto

### a. ¿Qué entidades son necesarias?
Debido a la naturaleza internacional y multideportiva del torneo, se identifican las siguientes entidades principales:

- **Países y delegaciones**: Representan a cada país participante.
- **Deportes**: Disciplinas deportivas en las que se compite.
- **Deportistas**: Atletas participantes, tanto en equipo como individuales.
- **Equipos**: Grupos de deportistas que compiten en deportes de equipo.
- **Delegaciones individuales**: Representación de atletas en deportes individuales.
- **Competencias**: Eventos o pruebas en las que participan equipos o atletas individuales.

### b. ¿Cuántas colecciones se requieren y qué representan?
Se proponen **seis colecciones principales** en MongoDB:

1. **Paises_Delegaciones**: Información de los países y sus delegaciones.
2. **Deportes**: Catálogo de deportes y su naturaleza (equipo o individual).
3. **Deportistas**: Datos personales y deportivos de cada atleta.
4. **Equipos**: Equipos nacionales por deporte, incluyendo integrantes y medallas.
5. **Delegaciones_Individuales**: Atletas que compiten individualmente.
6. **Competencias**: Eventos deportivos y sus participantes.

### c. ¿Qué campos debería tener cada colección?
A continuación, se describen las colecciones y los campos propuestos:

---

## 2. Modelo de Datos Propuesto

### Colección: `Paises_Delegaciones`
Representa cada país participante.

| Campo           | Tipo de Dato | Descripción                      |
|-----------------|-------------|----------------------------------|
| _id             | String      | Identificador único del país (ej: "PA-001") |
| nombre          | String      | Nombre oficial del país          |
| continente      | String      | Continente al que pertenece      |

---

### Colección: `Deportes`
Catálogo de deportes del torneo.

| Campo           | Tipo de Dato | Descripción                      |
|-----------------|-------------|----------------------------------|
| _id             | String      | Identificador único del deporte (ej: "DE-001") |
| nombre          | String      | Nombre del deporte               |
| equipo          | Boolean     | Si el deporte se juega en equipo (true) o individual (false) |

---

### Colección: `Deportistas`
Datos de los atletas.

| Campo           | Tipo de Dato | Descripción                      |
|-----------------|-------------|----------------------------------|
| _id             | String      | Identificador único del deportista (ej: "DEP-001") |
| nombre          | String      | Nombre completo                  |
| pais            | String      | ID del país que representa (ref: `Paises_Delegaciones`) |
| deporte         | String      | ID del deporte que practica (ref: `Deportes`) |
| edad            | Number      | Edad del deportista              |
| genero          | String      | Género ("Masculino", "Femenino") |

---

### Colección: `Equipos`
Equipos deportivos de disciplinas grupales.

| Campo           | Tipo de Dato | Descripción                      |
|-----------------|-------------|----------------------------------|
| _id             | String      | ID único del equipo (ej: "EQ-001") |
| nombre          | String      | Nombre del equipo                |
| pais            | String      | ID del país representado         |
| deporte         | String      | ID del deporte                   |
| medallas        | Subdocumento| Medallas ganadas (oro, plata, bronce) |
| deportistas     | Array[String]| Lista de IDs de deportistas que integran el equipo |

**Ejemplo de subdocumento `medallas`:**
```json
"medallas": {
    "oro": 2,
    "plata": 1,
    "bronce": 0
}
```

---

### Colección: `Delegaciones_Individuales`
Participación de atletas en deportes individuales.

| Campo           | Tipo de Dato | Descripción                      |
|-----------------|-------------|----------------------------------|
| _id             | String      | ID único de la delegación individual (ej: "IND-001") |
| nombre          | String      | Nombre del atleta                |
| pais            | String      | ID del país                      |
| deporte         | String      | ID del deporte                   |
| deportista      | String      | ID del deportista (ref: `Deportistas`) |

---

### Colección: `Competencias`
Eventos o pruebas deportivas.

| Campo           | Tipo de Dato   | Descripción                      |
|-----------------|---------------|----------------------------------|
| _id             | String        | ID único de la competencia (ej: "COMP-001") |
| nombre          | String        | Nombre del evento                |
| deporte         | String        | ID del deporte                   |
| tipo            | String        | "Equipo" o "Individual"          |
| participantes   | Array[String] | IDs de equipos o delegaciones individuales que participarán |
| fecha_inicio    | Date          | Fecha de inicio                  |
| fecha_fin       | Date          | Fecha de finalización            |

---

## Tipos de Datos Utilizados

- **String**: Para identificadores, nombres, géneros, países, etc.
- **Number**: Para edades y conteo de medallas.
- **Boolean**: Para indicar si un deporte es de equipo.
- **Array**: Para listas de IDs (deportistas, participantes).
- **Subdocumentos**: Para agrupar información como las medallas.
- **Date**: Para fechas de inicio y fin de competencias.

---

## Justificación de la Estructura

- **Escalabilidad y Flexibilidad:** El diseño está orientado a documentos, permitiendo agregar nuevos campos o entidades fácilmente sin afectar el funcionamiento actual.
- **Desnormalización Controlada:** Se utilizan referencias por ID entre documentos, lo que permite consultas eficientes y actualizaciones consistentes.
- **Soporte para Consultas Complejas:** El uso de arrays y subdocumentos facilita consultas como “equipos con más de X medallas” o “competencias con menos de Y participantes”.
- **Claridad Semántica:** Cada colección representa una entidad bien definida, lo que facilita el mantenimiento y comprensión del modelo por parte de distintos equipos.

- **Facilidad de Consulta:** Las referencias entre colecciones permiten realizar consultas complejas y obtener información relacionada de manera eficiente.

Este modelo de datos permite gestionar de manera eficiente la información necesaria para la organización y análisis de un torneo deportivo internacional, cubriendo tanto deportes de equipo como individuales y facilitando el desarrollo de consultas y reportes útiles para la toma de decisiones.
